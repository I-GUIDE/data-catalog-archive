# Core Metadata

Core metadata is a set of common metadata fields that all catalog
holdings share and consists largely of high-level dataset attributes
and properties. This document outlines the **required** and **recommended**
high-level properties that are required.

**Required Metadata**

|Property|Class|Expected Type|Cardinality|Description| 
|---|---|---|---|---|
|url|Thing|URL|1|the url of the item|
|name|Thing|Text|1|the name or title of the item| 
|description|Thing|Text|1|the description or abstract of the item|
|creator|Creative Work|Person OR Organization|1+| person or organization that created the work|
|dateCreated | CreativeWork | Date \| DateTime | 1 | The date on which the work was created|
|keywords | CreativeWork | DefinedTerm \| Text \| URL |	1+ | Keywords or tags used to describe the dataset, delimited by commas. |
|license | CreativeWork | CreativeWork \| URL | 1 | A license document that applies to the content, typically indicated by a URL |
|provider | Creative Work | Organization \| Person | 1 | The service provider, service operator, or service performer |

The following is an example implementation of the required metadata properties
for a Schema.org Dataset item:

``` json
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "IGUIDE Sample Dataset",
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
  }
}

```



**Recommended Metadata**

|Property|Class|Type|Cardinality|Description| 
|---|---|---|---|---|
|creativeWorkStatus | CreativeWork | DefinedTerm \| Text | 0,1 | The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.|
|dateModified |	CreativeWork |Date \| DateTime | 0,1| The date on which the CreativeWork was most recently modified or updated. | 
|funding| CreativeWork | Grant | 0+ | A Grant that directly or indirectly provide funding or sponsorship for creation of the dataset.|
|temporalCoverage|CreativeWork|DateTime \| Text \| URL | 1 | The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in ISO 8601 time interval format. |
|spatialCoverage|CreativeWork|Place| 1 | The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.|
|hasPart|CreativeWork|CreativeWork|0+|Indicates an item or CreativeWork that is part of this item|
|isPartOf|CreativeWork|CreativeWork OR URL |0+|Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.|
|associatedMedia|CreativeWork|MediaObject|0+| A media object that encodes this CreativeWork. This property is a synonym for encoding.|

Note: `hasPart` and `isPartOf` are generally used for records that are grouped
together or records that belong to other groupings. For example, `hasPart` may
be used to indicate a record that consists of one or more additional
CreativeWork (this is similar to a HydroShare collection). In contrast,
`isPartOf` is used to indicate catalog records that reference a designated
CreativeWork. As such, these are not demonstrated in the example below.

The following is an example implementation of recommended metadata
properties for a Schema.org Dataset item:

<pre>
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "IGUIDE Sample Dataset",
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
    
  <strong>
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
  "contributor": {
    "@list":[
      {
        "@type": "Person",
        "name": "Spruce Springclean",
        "email": "s.springclean@email.com",
        "identifier": {
          "@id": "https://orcid.org/0000-0000-0000-0003",
          "@type": "PropertyValue",
          "propertyID": "https://registry.identifiers.org/registry/orcid",
          "url": "https://orcid.org/0000-0000-0000-0003",
          "value": "0000-0000-0000-0003"
        }
      },
      {
        "@type": "Person",
        "name": "Will Barrow",
        "email": "w.barrow@email.com",
        "identifier": {
          "@id": "https://orcid.org/0000-0000-0000-0004",
          "@type": "PropertyValue",
          "propertyID": "https://registry.identifiers.org/registry/orcid",
          "url": "https://orcid.org/0000-0000-0000-0004",
          "value": "0000-0000-0000-0004"
        }
      }
    ]
  }
  </strong>
}
</pre>
