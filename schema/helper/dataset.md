# Dataset Schema

The **Dataset** class consists of properties designed to provide more specificity
to `CreativeWorks`. This **Dataset** class is ideal for much of the scientific datasets
relevant to the I-GUIDE project.

This document outlines the *required* and *recommended* properties for a
generic Dataset record. Note, that the specific implementation of this schema
will depend on the type of data that is being represented, e.g. Shapefile,
Geotiff, Geopackage, etc. Examples for these common data types are provided at
the end of the document.

While all Schema.org properties of the *Thing*, *CreativeWork*, and *Dataset* class
are acceptable to include, this document outlines the specific properties that are required and 
recommended for I-GUIDE catalog records. A complete list of valid properties can be
found on the Schema.org *[Dataset definition](https://schema.org/Dataset)* page.


## Required Metadata
|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|
|distribution | Dataset | DataDownload |  1 | A downloadable form of this dataset, at a specific location, in a specific format. This property can be repeated if different variations are available. There is no expectation that different downloadable distributions must contain exactly equivalent information (see also DCAT on this point). Different distributions might include or exclude different subsets of the entire dataset, for example. |

### Distribution

**Distribution** is a property of the `Dataset` class must be expressed using
the `DataDownload` subtype. Distribution describes how the content related to
the catalog record may be obtained. The `DataDownload` type contains a number
of [optional properties](https://schema.org/DataDownload) that can be used to describe the downloadable content of
the dataset. 


``` json
{
  ...
  "distribution": {
    "@type": "DataDownload",
    "contentUrl": "https://www.my-unique-url.com/get_zip/9d413b9d1/",
    "encodingFormat": "application/zip",
    "contentSize": "102.1 MB"
  }
}
```

#### Recommended Metadata

|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|
|variableMeasured| Dataset | PropertiesValue | 0+ | The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. |

## Variable Measured

**VariableMeasured** is a property of the `Dataset` class and can be expressed
as either `Text` or a `PropertyValue`, the latter being preferred. The
`variableMeasured` represents the scientific variables that are measured or
present within the dataset. Note, the `PropertyValue` type contains a number of
useful properties that may be implements including units, min/max values, etc.
For a complete list of properties see the [PropertyValue
definition](http://his.cuahsi.org/mastercvreg/edit_cv11.aspx?tbl=VariableNameCV&id=1157579162)


A single variable may be expressed as:

``` json
{
  ...
  "variableMeasured": 
    {
      "@type": "PropertyValue",
      "name": "Streamflow",
      "description": "The volume of water flowing past a fixed point.  Equivalent to discharge",
      "propertyID":
      "http://his.cuahsi.org/mastercvreg/edit_cv11.aspx?tbl=VariableNameCV&id=1157579162",
    },
}
```

Multiple variables may be expressed as:

``` json
{
  ...
  "variableMeasured": [
    {
      "@type": "PropertyValue",
      "name": "Streamflow",
      "description": "The volume of water flowing past a fixed point.  Equivalent to discharge",
      "propertyID":
      "http://his.cuahsi.org/mastercvreg/edit_cv11.aspx?tbl=VariableNameCV&id=1157579162",
    },
    {
      "@type": "PropertyValue",
      "name": "Water level",
      "description": "Water level relative to datum. The datum may be local or global such as NGVD 1929 and should be specified in the method description for associated data values.
",
      "propertyID":
      "http://his.cuahsi.org/mastercvreg/edit_cv11.aspx?tbl=VariableNameCV&id=1157579162",
    }
  ]
}
```
