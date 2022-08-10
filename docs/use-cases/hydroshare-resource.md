# Data Stored in a HydroShare Resource

## Description

A user owns data stored in a HydroShare resource. This resource is publicly
available and they wish to register it in the I-GUIDE catalog. The metadata for
the HydroShare resource and the individual data contents must be encoded using
SchemaOrg standards before this can happen. HydroShare contains a SchemaOrg
definition for the entire resource that can be found within the HTML source
code of the landing page. Relationships must be established between these
metadata and the more specific metadata for each of the data-sets/files within
the resource.

## Data Description

A HydroShare object consists of resource-level metadata that is used to
describe the intersection of all content encapsulated within it. Additional
scientific metadata within a file called `resourcemetadata.xml` that can
transformed into a SchemaOrg equivalent representation. Additional files
(`resourcemap.xml`, `manifest-md5.txt`, `tagmanifest-mdf`) can be used to
supplement these metadata.

## Success Scenario

1. A user downloads a zipped bagit of a HydroShare resources with one or more
   files or aggregate of files.
2. The metadata contained within the HydroShare bagit is translated
   into SchemaOrg terminology and encoded in `json+ld`.
3. The encoded `json+ld` is ingested into the I-GUIDE database.
