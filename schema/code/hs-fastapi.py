import uuid
import mimetypes
import os

from conversion import convert
from pydantic_schemas.schema import MediaObject
from humanize import naturalsize
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

def get_file_metadata(file_url, files_metadata):
    for file in files_metadata:
        if file['url'] == file_url:
            return file
    return None

def parse_aggregations_and_files(agg, agg_dict, files_dict, id, files_metadata, resource_url, isPartOf=None):
    files = {}
    resource_size = 0
    for file in agg.files():
        file_id = f"{resource_url}/data/contents/{file.path}"
        file_metadata = get_file_metadata(file_id, files_metadata)
        if file_metadata:
            files[file_id] = MediaObject(contentUrl=file_id, 
                                         contentSize=naturalsize(file_metadata['size']), 
                                         encodingFormat=file_metadata['content_type'] if file_metadata['content_type'] != "None" else os.path.splitext(file.path)[1], 
                                         name=os.path.basename(file.path))
            resource_size += file_metadata['size']
        else:
            files[file_id] = MediaObject(contentUrl=file_id, 
                                         contentSize="Could not find", 
                                         encodingFormat=os.path.splitext(file.path)[1], 
                                         name=os.path.basename(file.path))
    md = convert(agg.metadata, distribution_size=naturalsize(resource_size))
    if isPartOf:
        md['isPartOf'] = isPartOf
        del md['distribution']
    md["associatedMedia"] = list(files.keys())
    files_dict.update(files)

    aggs = []
    for agg in agg.aggregations():
        uid = str(uuid.uuid4())
        aggs.append(uid)
        agg_dict, files = parse_aggregations_and_files(agg, agg_dict, files_dict, uid, files_metadata, resource_url, md['url'])

    md["hasPart"] = list(aggs)
    agg_dict[id] = md
    return agg_dict, files_dict


def parse_and_resolve_aggregations(resource_id: str):
    res = hs.resource(resource_id=resource_id)
    response = hs._hs_session.get(f"{res._hsapi_path}/files/?count=1000", status_code=200)
    file_result = response.json()
    files_metadata = file_result["results"]

    aggregations, files = parse_aggregations_and_files(res, {}, {}, resource_id, files_metadata, res.metadata.url)

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
            #aggregations[agg_id]["id"] = agg_id
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
