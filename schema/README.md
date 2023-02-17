# I-GUIDE Catalog Schema Design

The I-GUIDE catalog uses Schema.org vocabulary to store metadata about diverse resource (record)
types, including the examples listed below. These examples are expressed as
`json+ld` format as a standardized and readable way to capture metadata, leveraging
Schema.org classes (also often called Types), Schema.org DataTypes, and Schema.org properties whenever possible.


## Terminology

- record - a unique entry in the catalog. This can be a scientific dataset,
  software code, a landing page to a trusted repository, etc. The I-GUIDE
  data catalog consists of records. 

- schema - a conceptual representation of the structured metadata necessary to describe
  catalog records. Schemas are composed of a set of Types, each associated with a set of Properties and DataTypes that altogether represent the metadata of a record. 

- Schema.org ${\color{salmon}Type}$ (also called class) - a specific vocabulary that applies to a specific piece of data.

- Schema.org ${\color{peru}Property}$ - the subject matter of the content.

- Schema.org ${\color{darkgray}DataType}$ - the basic data types such as Integers, Strings, etc.


## Catalog Record Structure

Every I-GUIDE catalog record consists of one or more schema definitions. Each
schema definition contains a set of properties for describing the catalog record. All
catalog records must be described using the **Core schema**. The Core schema is a 
set of properties that all catalog records share. These properties are
inherited from two Schema.org Types (classes): *Thing* and *CreativeWork*. There are
many properties that belong to these types, and all of them may be used. Since
many of these properties may not be relevant to the I-GUIDE catalog records, we've
identified the required properties and provided recommendations for recommended
properties to include, if possible, in the [Core Schema](core.md) document. 

The core schema may then be extended by adding more schema definitions from the CreativeWork
subclasses. Each subclass is either a Type with associated Properties or a Property. For example, the Dataset Type contains additional types and properties that
are useful when describing scientific datasets. We provide an overview of
required and recommended properties for several CreativeWork subclasses that are relevant to
the I-GUIDE catalog. Moreover, we provide examples of several common records
that use these schemas.

The following are references to common Schema.org Types and their associated required and recommended Schema.org Properties for common schemas used in the I-GUIDE catalog:

- [Core](core.md)
  - [Dataset](dataset.md)
  - [SoftwareSourceCode](sourcecode.md)
  - [SoftwareApplication](softwareapp.md)
  - [WebPage]
    
The following are examples of several common records within the I-GUIDE catalog:
- Geospatial   
  - [Shapefile](shapefile.md)  
  - [Geopackage](geopackage.md)  
  - [GeoTiff](geotiff.md)  
- Software
  - [Jupyter Notebook](jupyter.md)

