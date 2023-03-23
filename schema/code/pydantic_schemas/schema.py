import json
from datetime import date, datetime
from enum import Enum
from typing import List, Optional, Union
from pydantic import BaseModel, HttpUrl, EmailStr, Field


class Distribution(BaseModel):
    type: str = Field(alias="@type", const=True, default="DataDownload")
    name: str
    contentUrl: str
    encodingFormat: str
    contentSize: str
    comment: Optional[str]

class PropertyValue(BaseModel):
    id: HttpUrl = Field(alias="@id")
    type: str = Field(alias="@type", const=True, default="PropertyValue")
    name: Optional[str]
    propertyID: Optional[HttpUrl]
    value: str
    url: HttpUrl

class Person(BaseModel):
    type: str = Field(alias="@type", const=True, default="Person")
    name: str
    email: Optional[EmailStr]
    identifier: Optional[PropertyValue]

class Organization(BaseModel):
    type: str = Field(alias="@type", const=True, default="Organization")
    name: str
    url: Optional[HttpUrl]
    identifier: Optional[PropertyValue]
    address: Optional[str] # Should address be a string or another constrained type?
    #parentOrganization = Field(type="Organization")

class DefinedTerm(BaseModel):
    type: str = Field(alias="@type", const=True, default="DefinedTerm")
    name: str
    description: str

class LanugageEnum(str, Enum):
    eng = 'eng'
    esp = 'esp'

class Grant(BaseModel):
    type: str = Field(alias="@type", const=True, default="MonetaryGrant")
    name: str
    url: HttpUrl
    funder: Union[Person, Organization]

class TimeInterval(str):

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def __modify_schema__(cls, field_schema):
        # __modify_schema__ should mutate the dict it receives in place,
        # the returned value will be ignored
        pass

    @classmethod
    def validate(cls, v):
        # TODO
        if not isinstance(v, str):
            raise TypeError('string required')
        return v

    def __repr__(self):
        return f'PostCode({super().__repr__()})'

class GeoCoordinates(BaseModel):
    type: str = Field(alias="@type", const=True, default="GeoCoordinates")
    latitude: float # TODO add constraints
    longitude: float

class GeoShape(BaseModel):
    type: str = Field(alias="@type", const=True, default="GeoShape")

class Line(GeoShape):
    line: str # TODO add constraints

class Polygon(GeoShape):
    polygon: str # TODO add constrainsts

class Place(BaseModel):
    type: str = Field(alias="@type", const=True, default="Place")
    name: Optional[str]
    address: Optional[str]
    geo: Optional[Union[Line, Polygon]]

class MediaObject(BaseModel):
    type: str = Field(alias="@type", const=True, default="MediaObject")
    contentUrl: HttpUrl
    encodingFormat: str # TODO enum for encoding formats
    contentSize: str # validator?
    name: str

class CoreMetadata(BaseModel):
    name: str = Field(description="The name or title of the record.")
    description: str = Field(description="The description or abstract of the record.")
    url: HttpUrl = Field(description="The url of the record.")
    identifier: List[Union[str, HttpUrl, PropertyValue]] = Field(description="Any kind of identifier for the record.")
    creator: List[Union[Person, Organization]] = Field(description="Person or organization that created the work.")
    dateCreated: Union[date, datetime] = Field(description="The date on which the work was created.")
    keywords: List[Union[DefinedTerm, str, HttpUrl]] = Field(min_items=1, description="Keywords or tags used to describe the dataset, delimited by commas.")
    license: HttpUrl = Field(description="A license document that applies to the content, typically indicated by a URL.") # TODO union creativework
    provider: Union[Organization, Person] = Field(description="The service provider, service operator, or service performer.")
    publisher: Optional[Union[Organization, Person]] = Field(description="The publisher of the record.")
    datePublished: Union[date, datetime] = Field(description="Date of first publication for the record.")
    subjectOf: Optional[List[str]] = Field(description="A CreativeWork about the record - e.g., a related metadata document describing the record.") # TODO creativework
    version: Optional[Union[float, str]] = Field(description="The version of the record.") # TODO find something better than float for number
    inLanguage: Optional[Union[LanugageEnum, str]] = Field(description="The language of the content of the record.")
    creativeWorkStatus: Optional[Union[DefinedTerm, str]] = Field(description="The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.")
    dateModified: Optional[Union[date, datetime]] = Field(description="The date on which the CreativeWork was most recently modified or updated.")
    funding: Optional[List[Grant]] = Field(description="A Grant that directly or indirectly provide funding or sponsorship for creation of the dataset.")
    temporalCoverage: Optional[TimeInterval] = Field(description="The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in ISO 8601 time interval format.")
    spatialCoverage: Optional[Place] = Field(description="The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.")
    hasPart: Optional[List[str]] = Field(description="Indicates an record or CreativeWork that is part of this record.") # TODO creativework
    isPartOf: Optional[List[HttpUrl]] = Field(description="Indicates an record or CreativeWork that this record, or CreativeWork (in some sense), is part of.") # TODO creativework
    associatedMedia: Optional[List[MediaObject]] = Field(description="A media object that encodes this CreativeWork. This property is a synonym for encoding.")
    distribution: Optional[List[HttpUrl]] = Field(description="A url for distribution of thed data")
