from hsmodels.schemas.resource import ResourceMetadata
from hsmodels.schemas.aggregations import GeographicFeatureMetadata, GeographicRasterMetadata, TimeSeriesMetadata, ReferencedTimeSeriesMetadata, MultidimensionalMetadata
from typing import Union
from hsmodels.schemas.enums import RelationType

from pydantic_schemas.schema import CoreMetadata, Organization, Grant, Person, Place, Polygon, Line


def exists(obj, prop_name):
    return hasattr(obj, prop_name) and getattr(obj, prop_name)

def convert(md: Union[ResourceMetadata, GeographicFeatureMetadata, GeographicRasterMetadata, TimeSeriesMetadata, ReferencedTimeSeriesMetadata, MultidimensionalMetadata]) -> CoreMetadata:
    new_md = CoreMetadata.construct()
    if exists(md, "title"):
        new_md.name = md.title
    if exists(md, "abstract"):
        new_md.description = md.abstract
    if exists(md, "url"):
        new_md.url = md.url
        new_md.identifier = [md.url]
        new_md.distribution = [md.url]
    if exists(md, "creators"):
        new_creators = []
        for creator in md.creators:
            if exists(creator, "organization"):
                new_creator = Organization.construct()
                new_creator.name = creator.name
            else:
                new_creator = Person.construct()
                new_creator.name = creator.name
            new_creators.append(new_creator)
        new_md.creator = new_creators
    if exists(md, "created"):
        new_md.dateCreated = md.created
    if exists(md, "subjects"):
        new_md.keywords = md.subjects
    if exists(md, "rights"):
        new_md.license = md.rights.url
    # TODO provider?
    if exists(md, "publisher"):
        new_publisher = Organization.construct()
        new_publisher.name = md.publisher.name
        new_publisher.url = md.publisher.url
        new_md.publisher = new_publisher
    if exists(md, "published"):
        new_md.datePublished = md.published
    # TODO subjectOf
    # TODO version?
    if exists(md, "language"):
        new_md.inLanguage = md.language
    # TODO creativeWorkStatus
    if exists(md, "modified"):
        new_md.dateModified = md.modified
    if exists(md, "awards"):
        grants = []
        for award in md.awards:
            grant = Grant.construct()
            grant.name = award.title
            grant.url = award.funding_agency_url
            funder = Organization.construct()
            funder.name = award.funding_agency_name
            funder.url = award.funding_agency_url
            grant.funder = funder
            grants.append(grant)
        new_md.funding = grants
    if exists(md, "period_coverage"):
        new_md.temporalCoverage = f"{md.period_coverage.start}/{md.period_coverage.end}"
    if exists(md, "spatial_coverage"):
        place = Place.construct()
        place.name = md.spatial_coverage.name
        if md.spatial_coverage.type == "box":
            polygon = Polygon.construct()
            #TODO
            polygon.polygon = f"{md.spatial_coverage.northlimit} {md.spatial_coverage.eastlimit} {md.spatial_coverage.westlimit} {md.spatial_coverage.southlimit}"
            place.geo = polygon
        else:
            line = Line.construct()
            # TODO
            line.line = f"{md.spatial_coverage.north} {md.spatial_coverage.east}"
            place.geo = line
        new_md.spatialCoverage = place
    if exists(md, "relations"):
        part_of = []
        has_part = []
        for relation in md.relations:
            if relation.type == RelationType.isPartOf:
                part_of.append(relation.value)
            elif relation.type == RelationType.hasPart:
                has_part.append(relation.value)
        new_md.isPartOf = part_of
        new_md.hasPart = has_part
    return new_md.dict(exclude_none=True, by_alias=True)
