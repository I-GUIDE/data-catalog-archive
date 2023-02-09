# I-GUIDE Catalog Schema Definition

The I-GUIDE catalog must be capable of storing metadata about diverse resource
types, including the examples listed below. These examples are expressed as
`json+ld` as a standardized and readable way to capture metadata, leveraging
Schema.org classes and properties whenever possible.

## Terminology

- record - a unique entry in the catalog. This can be a scientific dataset,
  software code, a landing page to a trusted repository, etc. The iGUIDE
  catalog consists of records.

- schema - a conceptual representation of the metadata necessary to describe
  catalog records.


## Catalog Record Structure

Every iGUIDE catalog record consists of one or more schema definitions. Each
schema definition contains properties for describing the catalog record. All
catalog records must be described using the Core schema. The Core schema is a 
set of properties that all catalog records share. These properties are
inherited from the Schema.org *Thing* and *CreativeWork* classes only. There are
many properties that belong to these classes and all of them may be used. Since
many of these properties may not be relevant to the catalog record, we've
identified the required properties and provide recommendations for recommended
properties to include if possible in the [Core Schema](core.md) document. 

The core properties may then be extended by using one of the CreativeWork
subclasses. For example, the DataSet class contains additional properties that
are useful when describing scientific datasets. We provide an overview of
required and recommended properties for several subclasses that are relevant to
the iGUIDE catalog. Moreover, we provide examples for several common data types
that use these schemas.

The following are references to required and recommended Schema.org properties
for common schemas:

- [Core](core.md)
  - [Dataset](dataset.md)
  - [SoftwareSourceCode](sourcecode.md)
  - [SoftwareApplication](softwareapp.md)
    
Examples
- Geospatial   
  - [Shapefile](shapefile.md)  
  - [Geopackage](geopackage.md)  
  - [GeoTiff](geotiff.md)  
- Software
  - [Jupyter Notebook](jupyter.md)

