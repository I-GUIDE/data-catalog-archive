# Core Metadata

Core metadata is a set of common metadata fields that all catalog
holdings share and consists largely of high-level dataset attributes
and properties. This document outlines the **required** and **recommended**
high-level properties that are required.

## Required Metadata

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

The following examples demonstrate how each of these required properties may
be implemented in JSON+LD. Note, there are several properties omitted from each
example such as `@context` and `@type`. 

### Name, Description, and URL
**Name**, **Description**, and **URL** are properties inherited from the
Schema.org `Thing` class. These are common properties that all Schema.org types
contain. A simple example is shown below:

``` json
{
  ...
  "name": "IGUIDE Sample Dataset",
  "description": "This is a sample datasets used in the I-GUIDE Catalog documentation",
  "url": "https://my-unique-url.com/9d413b9d1"
}
```

### Creator

**Creator** is a property of the `CreativeWork` class. The purpose of this
property is to describe the author or authors of a catalog record. The
recommended way to express authorship of a CreativeWork is shown below. Note,
this approach was adopted from ESIP Science on Schema Org.

A single author can be expressed as:

``` json
  ...
  "creator": {
    "@type": "Person",
    "name": "John Doe",
    "email": "john.doe@email.com",
  }
```

A more complete example of an author will include additional fields from the
`Person` class such as an identifier.

``` json
  ...
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
```

For multiple authors, the `@list` keyword is used such that the order of
creators is preserved.

``` json
  ...
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

```

### Date Created

**DateCreated** is a property of `CreativeWork` that can be expressed using
either the `Date` or `DateTime` classes. The **dateCreated** represents the
date at which the dataset was initially generated. The `Date` class expects a
value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601). Whereas
the `DateTime` class requires a combination of date and time of day. An
example if each is provided below.

``` json
{
  ...
  "dateCreated": "2023-01-01",
}

```

``` json
{
  ...
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
  ...
  "keywords": ["keyword 1", "keyword 2", "keyword 3"],
}
```

``` json
{
  ...
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
  ...
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
  ...
  "license": "https://creativecommons.org/licenses/by/4.0/",
}
```

``` json
{
  ...
  "license": {
    "@type": "CreativeWork",
    "name": "My custom license",
    "url": "https://my-custom-license.com/license.txt"
    }
}
```

### Provider

**Provider** is a property of the `CreativeWork` class that can be expressed as
either an `Organization` or a `Person`. This represents the service operator,
service performer, or goods producer. In many cases this is the operator of the
repository in which the data resides.

``` json
{
  ...
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

``` json
{
  ...
  "provider": {
    "@id": "https://hydroshare.org",
  }
}

``` json
{
  ...
  "provider": {
    "@type": "Person",
    "name": "John Doe",
    "email": "jdoe@email.com",
  }
}
```

Note: for a more complete example of `Person`, see the [Creator](#creator)
section of this document.

---

## Recommended Metadata

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




## Complete Example

The following is a complete example implementation of required and recommended
core properties for a Schema.org using the **Dataset** subtype.

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
}
