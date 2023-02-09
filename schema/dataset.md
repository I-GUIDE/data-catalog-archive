# Dataset Schema

The Dataset schema consists of properties structured to describe a specific
topic of interest. This makes it ideal for much of the scientific datasets
relevant to the iGUIDE project.

This document outlines the *required* and *recommended* properties for a
generic Dataset record. Note, that the specific implementation of this schema
will depend on the type of data that is being represented, e.g. Shapefile,
Geotiff, Geopackage, etc. Examples for these common data types are provided at
the end of the document.

While all Schema.org properties of the *Thing*, *CreativeWork*, and *Dataset* class
are, this document outlines the specific properties that are required and 
recommended for the iGUIDE catalog. A complete list of valid properties can be
found on the Schema.org *[Dataset definition](https://schema.org/Dataset)* page.


#### Required Properties
|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|
|distribution | Dataset | DataDownload |  1 | A downloadable form of this dataset, at a specific location, in a specific format. This property can be repeated if different variations are available. There is no expectation that different downloadable distributions must contain exactly equivalent information (see also DCAT on this point). Different distributions might include or exclude different subsets of the entire dataset, for example. |

<pre lang="json">
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "IGUIDE Shapefile Testing Resource",
  "description": "This is a sample dataset used in the I-GUIDE Catalog documentation",
  "url": "https://my-unique-url.com/9d413b9d1",
  "dateCreated": "2023-01-01T00:00:00+00:00",
  "author": {
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
  },
  "keywords": ["iGUIDE", "Sample"],
  "license": "http://spdx.org/licenses/CC0-1.0",
  "provider": {
    "@id": "https://www.my-unique-url.com"
  },
  
  "creativeWorkStatus": "published",
  "dateModified": "2023-01-16T17:35:21+00:00",
  "funding": [
  {
    "@type": "MonetaryGrant",
    "name": "My research project",
     "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=000001",
     "funder": {
        "@type": "Organization",
        "name": "National Science Foundation"
      }
    }
  ],
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "polygon": "39.3280 120.1633 40.445 123.7878 41 121 39.77 122.42 39.3280 120.1633"
    }
  },
  "temporalCoverage": "2018-01-22T14:51:12+00:00",
  "distribution": {
    "@type": "DataDownload",
    "contentUrl": "https://www.my-unique-url.com/get_zip/9d413b9d1/",
    "encodingFormat": "application/zip",
    "contentSize": "102.1 MB"
  }
}
</pre>

#### Recommended Properties

|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|
|variableMeasured| Dataset | PropertiesValue | 0+ | The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. |
|associatedMedia | CreativeWork	| MediaObject | 0+ | A description of individual files associated with the dataset|

The following is an example implementation of the recommended metadata properties.

<pre lang="json">
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "IGUIDE Shapefile Testing Resource",
  "description": "This is a sample dataset used in the I-GUIDE Catalog documentation",
  "url": "https://my-unique-url.com/9d413b9d1",
  "dateCreated": "2023-01-01T00:00:00+00:00",
  "author": {
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
  },
  "keywords": ["iGUIDE", "Sample"],
  "license": "http://spdx.org/licenses/CC0-1.0",
  "provider": {
    "@id": "https://www.my-unique-url.com"
  },
  
  "creativeWorkStatus": "published",
  "dateModified": "2023-01-16T17:35:21+00:00",
  "funding": [
  {
    "@type": "MonetaryGrant",
    "name": "My research project",
     "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=000001",
     "funder": {
        "@type": "Organization",
        "name": "National Science Foundation"
      }
    }
  ],
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "polygon": "39.3280 120.1633 40.445 123.7878 41 121 39.77 122.42 39.3280 120.1633"
    }
  },
  "temporalCoverage": "2018-01-22T14:51:12+00:00",
  "distribution": {
    "@type": "DataDownload",
    "contentUrl": "https://www.my-unique-url.com/get_zip/9d413b9d1/",
    "encodingFormat": "text/csv",
    "contentSize": "100 MB"
  },
  <strong>
  "associatedMedia": [
   {
     "@type": "MediaObject",
     "contentUrl": "https://www.my-unique-url.com/9d413b9d1/file1.csv",
     "encodingFormat": "text/csv",
     "contentSize": "50 MB",
     "name": "Data File 1"
   },
   {
     "@type": "MediaObject",
     "contentUrl": "https://www.my-unique-url.com/9d413b9d1/file2.csv",
     "encodingFormat": "text/csv",
     "contentSize": "25 MB",
     "name": "Data File 2"
   },
   {
     "@type": "MediaObject",
     "contentUrl": "https://www.my-unique-url.com/9d413b9d1/file3.csv",
     "encodingFormat": "text/csv",
     "contentSize": "25 MB",
     "name": "Data File 3"
   }
   ],
  "variableMeasured": [
    {
      "@type": "PropertyValue",
      "propertyID": "HUC_6",
      "value": "String"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "Shape_Leng",
      "value": "Real"
    },
    {
      "@type": "PropertyValue",
      "propertyID": "Shape_Area",
      "value": "Real"
    }
  ]
  </strong>
}
</pre>

