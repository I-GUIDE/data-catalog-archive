import uuid
import mimetypes
import os

from conversion import convert
from pydantic_schemas.schema import MediaObject

import uvicorn as uvicorn
from fastapi import FastAPI
from hsclient import HydroShare
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseSettings

class Settings(BaseSettings):
    hs_user: str
    hs_pass: str

    class Config:
        env_file = ".env"

app = FastAPI()

origins = [
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


settings = Settings()

hs = HydroShare(username=settings.hs_user, password=settings.hs_pass)
user_id = hs.my_user_info()["email"]
my_resources = [res for res in hs.search(owner=user_id)]

db = {}


def parse_aggregations_and_files(agg, agg_dict, files_dict, id):
    md = convert(agg.metadata)

    files = {}
    for file in agg.files():
        file_id = str(uuid.uuid4()) # str(mimetypes.guess_type(file.path))
        files[file_id] = MediaObject(contentUrl=f"{agg.metadata.url}/{file.path}" , contentSize=file.checksum, encodingFormat=os.path.splitext(file.path)[1], name=os.path.basename(file.path))
    md["associatedMedia"] = list(files.keys())
    files_dict.update(files)

    aggs = []
    for agg in agg.aggregations():
        uid = str(uuid.uuid4())
        aggs.append(uid)
        agg_dict, files = parse_aggregations_and_files(agg, agg_dict, files_dict, uid)

    md["hasPart"] = list(aggs)
    agg_dict[id] = md
    return agg_dict, files_dict


def parse_and_resolve_aggregations(resource_id: str):
    res = hs.resource(resource_id=resource_id)
    aggregations, files = parse_aggregations_and_files(res, {}, {}, resource_id)

    # resolve files first
    for agg in aggregations.values():
        resolved_files = []
        for file_id in agg["associatedMedia"]:
            #files[file_id]["id"] = file_id
            resolved_files.append(files[file_id])
        agg["associatedMedia"] = resolved_files

    # add aggregation_id

    for key, agg in aggregations.items():
        resolved_aggregations = []
        for agg_id in agg["hasPart"]:
            aggregations[agg_id]["id"] = agg_id
            resolved_aggregations.append(aggregations[agg_id])
        agg["hasPart"] = resolved_aggregations

    for agg_id, agg in aggregations.items():
        db[agg_id] = agg


@app.get("/")
def read_root():
    return my_resources


@app.get("/resource/{resource_id}")
def resource_json(resource_id: str):
    if resource_id not in db:
        parse_and_resolve_aggregations(resource_id)
    return db[resource_id]


@app.get("/aggregation/{aggregation_id}")
def aggregation_json(aggregation_id: str):
    if aggregation_id not in db:
        return resource_json(resource_id=aggregation_id)
    return db[aggregation_id]


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
