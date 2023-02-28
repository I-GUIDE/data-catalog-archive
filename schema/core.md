# Core Metadata

Core metadata is a set of common metadata fields that all catalog
holdings share and consists largely of high-level dataset attributes
and properties. This document outlines the **required** and **optional**
high-level properties selected from Schema.Org vocabulary to design the I-GUIDE metadata schema. These properties are encoded as `1` or `1+` for **required** and `0,1` or `0+` for **optional** in the Cardinality column of the table below.

|Property|Class|Expected Type|Cardinality|Description| 
|---|---|---|---|---|
|name|Thing|Text|1|The name or title of the record|
|description|Thing|Text|1|The description or abstract of the record|
|url|Thing|URL|1|The url of the record|
|identifier|Thing|PropertyValue \| Text \| URL|1+|Any kind of identifier for the record|
|creator|CreativeWork|Organization \| Person|1+|Organization or person that created the work|
|dateCreated | CreativeWork | Date \| DateTime | 1 | The date on which the work was created|
|keywords | CreativeWork | DefinedTerm \| Text \| URL |	1+ | Keywords or tags used to describe the dataset, delimited by commas. |
|license | CreativeWork | CreativeWork \| URL | 1 | A license document that applies to the content, typically indicated by a URL |
|provider | CreativeWork | Organization \| Person | 1 | The service provider, service operator, or service performer |
|publisher| CreativeWork | Organization \| Person | 0,1 | The publisher of the record |
|datePublished| CreativeWork | Date \| DateTime | 0,1 | Date of first publication for the record |
|subjectOf| Thing | CreativeWork | 0+ | A CreativeWork about the record - e.g., a related metadata document describing the record |
|version| CreativeWork | Number \| Text | 0,1 | The version of the record |
|inLanguage|CreativeWork|Language \| Text|0,1| The language of the content of the record|
|creativeWorkStatus | CreativeWork | DefinedTerm \| Text | 0,1 | The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.|
|dateModified |	CreativeWork |Date \| DateTime | 0,1| The date on which the CreativeWork was most recently modified or updated. | 
|funding| CreativeWork | Grant | 0+ | A Grant that directly or indirectly provide funding or sponsorship for creation of the dataset.|
|temporalCoverage|CreativeWork|DateTime| 0,1 | The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in ISO 8601 time interval format. |
|spatialCoverage|CreativeWork|Place| 0,1 | The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.|
|hasPart|CreativeWork|CreativeWork|0+|Indicates a record or CreativeWork that is part of this record|
|isPartOf|CreativeWork|CreativeWork OR URL |0+|Indicates a record or CreativeWork that this record, or CreativeWork (in some sense), is part of.|
|associatedMedia|CreativeWork|MediaObject|0+| An item (media object) or a group of items (media objects) that encodes this CreativeWork. This property is a synonym for encoding.|

The following examples demonstrate how each of these required properties may
be implemented in JSON+LD. Note, there are several properties omitted from each
example such as `@context` and `@type`. 

### Name, Description, and URL
**Name**, **Description**, and **URL** are properties inherited from the
Schema.org `Thing` class. These are common properties that all Schema.org types
contain. A simple example is shown below:

``` json
{
  "name": "IGUIDE Sample Dataset",
  "description": "This is a sample datasets used in the I-GUIDE Catalog documentation",
  "url": "https://my-unique-url.com/9d413b9d1"
}
```

### Identifier

**Identifier** is a property of the `Thing` class. It is used to encode the record's identifier(s). For permanantly published records, this will likely be a digital object identifier (DOI). For unpublished records, this may be an identifier assigned by the system in which the content of the record resides. This element can be repeated if a record has multiple identifiers.

An identifier as text can be encoded as:

``` json
{
  "identifier": "6625bdbde41c45c2b906f32be7ea70f0/"
}
```

However, it is preferred for an identifier to be expressed as a URL if possible. An identifier that can be expressed as a URL can be encoded as:

``` json
{
  "identifier": "https://www.hydroshare.org/resource/6625bdbde41c45c2b906f32be7ea70f0/"
}
```

[Science On Schema.Org (SOSO)](https://github.com/ESIPFed/science-on-schema.org/blob/master/guides/Dataset.md#identifier) recommends that if the identifier is a persistent identifier such as a DOI, the best way to represent the identifer is to use [schema:ProperatyValue](https://schema.org/PropertyValue). The identifier for a published record with a DOI can be encoded as:

``` json
{
  "identifier": {
    "@id": "https://doi.org/10.4211/hs.6625bdbde41c45c2b906f32be7ea70f0",
    "@type": "PropertyValue",
    "name": "DOI: 10.4211/hs.6625bdbde41c45c2b906f32be7ea70f0",
    "propertyID": "https://registry.identifiers.org/registry/doi",
    "value": "doi:10.4211/hs.6625bdbde41c45c2b906f32be7ea70f0",
    "url": "https://doi.org/10.4211/hs.6625bdbde41c45c2b906f32be7ea70f0"
  }
}
```


### Creator

**Creator** is a property of the `CreativeWork` class. The purpose of this
property is to describe the author or authors of a catalog record. The
recommended way to express authorship of a CreativeWork is shown below. Note,
this approach was adopted from ESIP Science on Schema Org.

A single author can be expressed as:

``` json
{
  "creator": {
    "@type": "Person",
    "name": "John Doe",
    "email": "john.doe@email.com",
  }
}
```

A more complete example of an author will include additional fields from the
`Person` class such as an identifier.

``` json
{
  "creator": {
    "@type": "Person",
    "name": "John Doe",
    "email": "john.doe@email.com",
    "identifier": {
      "@type": "PropertyValue",
      "@id": "https://orcid.org/0000-0000-0000-0001",
      "propertyID": "https://registry.identifiers.org/registry/orcid",
      "url": "https://orcid.org/0000-0000-0000-0001",
      "value": "0000-0000-0000-0001"
    }
  }
}
```

For multiple authors, the `@list` keyword is used such that the order of
creators is preserved.

``` json
 {
  "creator": {
    "@list":[
      {
        "@type": "Person",
        "name": "John Doe",
        "email": "john.doe@email.com",
        "identifier": {
          "@id": "https://orcid.org/0000-0000-0000-0001",
          "@type": "PropertyValue",
          "propertyID": "https://registry.identifiers.org/registry/orcid",
          "url": "https://orcid.org/0000-0000-0000-0001",
          "value": "0000-0000-0000-0001"
        }
      },
      {
        "@type": "Person",
        "name": "Jane Doe",
        "email": "jane.doe@email.com",
        "identifier": {
          "@id": "https://orcid.org/0000-0000-0000-0002",
          "@type": "PropertyValue",
          "propertyID": "https://registry.identifiers.org/registry/orcid",
          "url": "https://orcid.org/0000-0000-0000-0002",
          "value": "0000-0000-0000-0002"
        }
      }
    ]
  }
 }
```

### Date Created, Date Modifie, and Date Published

**dateCreated** are properties of `CreativeWork` that can be expressed using
either the `Date` or `DateTime` data types. The **dateCreated** represents the
date at which the dataset was initially generated. The **dateModified** represents the
date at which the dataset was most recently modified. The **datePublished** represents the
date at which the dataset was permanently published. The `Date` class expects a
value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). Whereas
the `DateTime` class requires a combination of date and time of day. An
example if each is provided below.

``` json
{
  "dateCreated": "2023-01-01",
}
```

``` json
{
  "dateCreated": "2023-01-01T00:00:00+00:00",
}
```

### Keywords

**Keywords** is a property of `CreativeWork` that can be expressed using either
the `DefinedTerm`, `Text`, or `URL` Schema.org classes. Keywords are tags used
to describe the catalog record and are primarily used for resource discovery.
**Keywords** are typically provided as a list of items, but can also done by
repeating the **Keyword** property. Several examples are listed below.

``` json
{
  "keywords": ["keyword 1", "keyword 2", "keyword 3"],
}
```

``` json
{
  "keywords": {
    "@type": "DefinedTerm",
    "name": "Leaf wetness",
    "description": "The effect of moisture settling on the surface of a leaf as a result of either condensation or rainfall.",
    "inDefinedTermSet": "http://his.cuahsi.org/mastercvreg/edit_cv11.aspx?tbl=VariableNameCV",
  }
}
```

``` json
{
  "keywords": [
    {
      "@type": "DefinedTerm",
      "name": "Leaf wetness",
      "description": "The effect of moisture settling on the surface of a leaf as a result of either condensation or rainfall.",
      "inDefinedTermSet": "http://his.cuahsi.org/mastercvreg/edit_cv11.aspx?tbl=VariableNameCV",
    },
    {
      "@type": "DefinedTerm",
      "name": "Core",
      "description": "Core sample resulting in a section of a substance",
      "inDefinedTermSet": "http://his.cuahsi.org/mastercvreg/edit_cv11.aspx?tbl=SampleTypeCV",
    }
  ]
}
```

### License 

**License** is a property of the `CreativeWork` class and can be expressed as
another `CreativeWork` or as a `URL`. A license is a document that applies to
the content of the catalog record, for example a software license. 

``` json
{
  "license": "https://creativecommons.org/licenses/by/4.0/",
}
```

``` json
{
  "license": {
    "@type": "CreativeWork",
    "name": "My custom license",
    "url": "https://my-custom-license.com/license.txt"
    }
}
```

### Provider and Publisher

**Provider** and **Publisher** are properties of the `CreativeWork` class that can be expressed as
either an `Organization` or a `Person`. **Provider** represents the service operator,
service performer, or goods producer. In many cases this is the operator of the
repository in which the data resides, but that may not always be the case. In the case that a record is 
permanently published, **Publisher** indicates the organization or person that published the record.

**Provider** and **Publisher** are semantically similar and can be encoded similarly. The following 
examples are for **Provider** but can also be used for **Publisher**.

Simple encoding for the URL of a provider:

``` json
{
  "provider": {
    "@id": "https://hydroshare.org",
  }
}
```

Example encoding where a person is the provider:

``` json
{
  "provider": {
    "@type": "Person",
    "name": "John Doe",
    "email": "jdoe@email.com",
  }
}
```

Note: for a more complete example of `Person`, see the [Creator](#creator)
section of this document.

Encoding for a formal repository with a parent organization:

``` json
{
  "provider": {
    "@type": "Organization",
    "name": "HydroShare",
    "url": "https://hydroshare.org",
    "parentOrganization": {
      "@type": "Organization",
      "name": CUAHSI,
      "url": "www.cuahsi.org",
      "address": "1167 Massachusetts Ave Suites 418 & 419, Arlington, MA 02476"
    }
  }
}
```

### Subject Of

**subjectOf** is a property of `CreativeWork` and can be used to encode a linkage
to a separate `CreativeWork` that describes or is about the record. An example would 
be a formal metadata document encoded using some metadata standard that fully describes
the record. More specifically, this could be a metadata document accompanying a
geospatial dataset, or a formal metadata document accompanying a HydroShare resource. 
The document describing the record can be available anywhere on the Internet.
The encodingFormat property should indicate the format of the related `CreativeWork`. 
This linkage can be encoded as:

``` json
{
  "subjectOf": {
    "@type": "CreativeWork",
    "name": "Dublin Core Metadata Document Describing the Dataset",
    "url": "https://www.hydroshare.org/hsapi/resource/c1be74eeea614d65a29a185a66a7552f/scimeta/",
    "encodingFormat": "application/rdf+xml"
  }
}
```

### Version

The **version** is a propoerty of `CreativeWork` that can be used to encode a formal 
version number or name for a record. **version** can be encoded as either a number or
a string; however, since many people use semantic versioning, a string is preferred as
it will work regardless. 

Example encoding as string:

``` json
{
  "version": "v1.0.2"
}
```


### Language

The **inLanguage** property can be used to encode the language in which the content of 
the record is expressed. Language codes from the [IETF BCP 47 standard]() should be 
used for this encoding. For most records, it is anticipated that this will be "en-US".

``` json
{
  "inLanguage": "en-US"
}
```


### Creative Work Status

**CreativeWorkStatus** is a property of `CreativeWork` used to capture the
stage of a work's lifecycle; incomplete, draft, published, obsolete, etc. This
can be expressed as text or using the `DefinedTerm` class.

``` json
{
  "creativeWorkStatus": "published",
}
```

A more expressive status can be provided using the `DefinedTerm` subtype.
``` json
{
  "creativeWorkStatus": {
    "@type": "DefinedTerm",
    "name": "public",
    "description": "a publicly accessible dataset on HydroShare.org"
  }
}
```

### Funding

**Funding** is a property of the `CreativeWork` class used to describe the
grant(s) that directly or indirectly funded or sponsored the work. **Funding**
is expressed using the `Grant` subtype.

``` json
{
  "funding": {
    "@type": "MonetaryGrant",
    "name": "My research project",
     "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=000001",
     "funder": {
        "@type": "Organization",
        "name": "National Science Foundation"
      }
  }
}
```

Multiple funding sources can be expressed as a list:

``` json
{
  "funding": [
  {
    "@type": "MonetaryGrant",
    "name": "My first research project",
     "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=000001",
     "funder": {
        "@type": "Organization",
        "name": "National Science Foundation"
      }
  },
  {
    "@type": "MonetaryGrant",
    "name": "My second research project",
     "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=000002",
     "funder": {
        "@type": "Organization",
        "name": "National Science Foundation"
      }
  }
  ]
}
```

### Temporal Coverage

**TemporalCoverage** is a property of the `CreativeWork` class that is used to
define a period of time in which the catalog record applies to. This should be
expressed using the `DateTime` subtype.

``` json
{
  "temporalCoverage": "2007-03-01T13:00:00Z/2008-05-11T15:30:00Z",
}
```

Open-ended date ranges can be written with ".." in place of the end date. The following example indicates a range beginning in March 2007 and with no specified final date. Note that this is tentative and might be updated in future when ISO 8601 is officially updated.
``` json
{
  "temporalCoverage": "2007-03/..",
}
```


### Spatial Coverage

**SpatialCoverage** is a property of the `CreativeWork` class that is used to
indicate the location for which the content is valid. This can also be used to
indicate the focus area of the content. This should be expressed using the
`Place` subtype. There are numerous ways to describe the location of content,
below are several common ones.

A generic location may look like this:

``` json 
{
  "spatialCoverage": {
    "@type": "Place",
    "name": "CUAHSI Office",
    "address": "1167 Massachusetts Ave Suites 418 & 419, Arlington, MA 02476",
  }
}
```

A geographic point may look like this (from [SOSO](https://github.com/ESIPFed/science-on-schema.org/blob/master/guides/Dataset.md#spatial-coverage)):

``` json 
{
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.3280
      "longitude": 120.1633
    }
  }
}
```

A geographic vector may look like this (from [SOSO](https://github.com/ESIPFed/science-on-schema.org/blob/master/guides/Dataset.md#spatial-coverage)):

``` json 
{
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "line": "39.3280 120.1633 40.445 123.7878"
    }
  }
}
```

A geographic polygon may look like this (from [SOSO](https://github.com/ESIPFed/science-on-schema.org/blob/master/guides/Dataset.md#spatial-coverage)):

``` json 
{
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "polygon": "39.3280 120.1633 40.445 123.7878 41 121 39.77 122.42 39.3280 120.1633"
    }
  }
}
```

A geographic bounding box may look like this (from [SOSO](https://github.com/ESIPFed/science-on-schema.org/blob/master/guides/Dataset.md#spatial-coverage)):

``` json
{
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "box": "39.3280 120.1633 40.445 123.7878"
    }
  }
}
```

Multiple locations can be specific using a list: (from [SOSO](https://github.com/ESIPFed/science-on-schema.org/blob/master/guides/Dataset.md#spatial-coverage)):

``` json
{
  "spatialCoverage": {
    "@type": "Place",
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": -17.65,
        "longitude": 50
      },
      {
        "@type": "GeoCoordinates",
        "latitude": -19,
        "longitude": 51
      }
    ]
  }
}
```

### Associated Media

**AssocatedMedia** is a property of `CreativeWork` for describing media objects 
that encode the work. Specific types of media objects that we selected for the I-GUIDE 
data catalog are `DataDownload`, `ImageObject`, and `VideoObject`. Note that a media object 
could have several properties from `CreativeWork`, but most importantly, it requires 
`contentUrl`, `encodingFormat`. `contentUrl` is actual bytes of the media object and it is 
represented as a URL. `encodingFormat` expresses the format of a media object using a MIME 
format (see [IANA site](https://www.iana.org/assignments/media-types/media-types.xhtml) and 
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)). 

A single text file that represents the data that is being cataloged can be expressed as:

``` json
{
 "associatedMedia": {
    "@type": "DataDownload",
    "contentUrl": "https://www.my-unique-url.com/9d413b9d1/file1.csv",
    "encodingFormat": "text/csv",
    "contentSize": "50 MB",
    "name": "Data File"
  }
}
```

Multiple files can be expressed as:

``` json
{
  "associatedMedia": [
   {
     "@type": "DataDownload",
     "contentUrl": "https://www.my-unique-url.com/9d413b9d1/file1.csv",
     "encodingFormat": "text/csv",
     "contentSize": "50 MB",
     "name": "Data File"
   },
   {
     "@type": "ImageObject",
     "contentUrl": "https://www.my-unique-url.com/9d413b9d1/file3.tif",
     "encodingFormat": "image/tiff",
     "contentSize": "500 MB",
     "name": "Image File"
   },
   {
     "@type": "VideoObject",
     "contentUrl": "https://www.my-unique-url.com/9d413b9d1/file2.mp4",
     "encodingFormat": "video/mp4",
     "name": "Video File"
   }
  ]
}
```

### Data Collections

Collections of records can be expressed using the **hasPart** (and inverse
**isPartOf**) properties of `CreativeWork`.

**Has Part** is used to describe a record or work that is part of the current
record. For example, a body of work may consist of multiple related datasets that
are used for a particular study.

Note: `hasPart` and `isPartOf` are generally used for records that are grouped
together or records that belong to other groupings. For example, `hasPart` may
be used to indicate a record that consists of one or more additional
CreativeWork (this is similar to a HydroShare collection). In contrast,
`isPartOf` is used to indicate catalog records that reference a designated
CreativeWork. As such, these are not demonstrated in the example below.


``` json
{
  "hasPart": {
    "@type": "Dataset",
    "name": "IGUIDE Shapefile Testing Resource",
    "description": "Test HydroShare resource for I-GUIDE",
    "url": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.shp?zipped=true&aggregation=true"
  }
}
```

Multiple relations can be defined using a list.

``` json
{
  "hasPart": [
    {
      "@type": "CreativeWork",
      "name": "IGUIDE Shapefile Testing Resource",
      "description": "Test HydroShare resource for I-GUIDE - Shapefile",
      "url": "https://my-unique-url.com/shapefile",
    },
    {
      "@type": "CreativeWork",
      "name": "IGUIDE GeoTiff Testing Resource",
      "description": "Test HydroShare resource for I-GUIDE - GeoTiff",
      "url": "https://my-unique-url.com/geotiff",
    }
  ]
}
```


**isPartOf** is the inverse property of **hasPart** and may be used to indicate
that a work is part of another collection of works.

``` json
{
  "name": "IGUIDE Sample Dataset",
  "description": "This is a sample datasets used in the I-GUIDE Catalog documentation",
  "url": "https://my-unique-url.com/9d413b9d1",
  "isPartOf": {
    "@type": "CreativeWork",
    "name": "Collection of Sample Datasets",
    "description": "A collection of sample datasets used by the I-GUIDE team",
    "url": "https://my-unique-url.com/data-collection"
  }
}
```
