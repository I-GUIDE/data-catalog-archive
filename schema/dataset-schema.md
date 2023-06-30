# Dataset Metadata

To classify a record as a dataset, `"@type": "Dataset"` should be used in the json schema. This will classify the record as a specific Schema.Org type called `Dataset` for which the metadata should be described using the [core metadata](https://github.com/I-GUIDE/data-catalog/blob/main/schema/core.md), as well as the dataset-specific properties for the [Schema:Dataset](https://schema.org/Dataset) class. The following table outlines the required and optional properties selected from Schema.Org vocabulary to design the I-GUIDE dataset metadata schema. These properties are encoded as `1` or `1+` 
for **required** and `0,1` or `0+` for **optional** in the Cardinality column of the table below. 

|Property|Class|Expected Type|Cardinality|Description|
|---|---|---|---|---|
|[variableMeasured](#variable-measured)| Dataset | Text \| PropertyValue | 0+ | The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. |
|[includedInDataCatalog](#included-in-datacatalog)| Dataset | DataCatalog | 1+ | A data catalog which contains this dataset. |

The following examples demonstrate how each of these properties may
be implemented in JSON+LD. 

### Variable Measured

[`Schema:variableMeasured`](https://schema.org/variableMeasured) is a property of the `Dataset` class and can be expressed as either `Text` or a [`Schema:PropertyValue`](https://schema.org/PropertyValue), the latter being preferred. The `variableMeasured` represents the scientific variables that are measured or present within the dataset. Note, the `PropertyValue` type contains a number of useful properties that may be implements including units, min/max values, etc. For a complete list of properties see the [`Schema:PropertyValue`](https://schema.org/PropertyValue) definition.

A simple example as text can be encoded as:

``` json
{
    "variableMeasured": "Water Temperature"
}
```
However, it is preferred for a measured variable to be expressed as a `PropertyValue`.

``` json
{     
    "variableMeasured": {
        "@type": "PropertyValue",
        "name": "Streambed interface temperature values",
        "unitText": "degC"
    }
}
```

### Included in DataCatalog

DataCatalog comprises a set of datasets. [`Schema:includedInDataCatalog`](https://schema.org/includedInDataCatalog) can be used to show the data catalog containing a dataset. Essentially, every registered record to the I-GUIDE data catalog must have a minimum of one `DataCatalog` object, namely the I-GUIDE data catalog itself. In some cases, certain records may feature more than one `DataCatalog` object represented in the `includedIndDataCatalog` property if they are part of other data catalogs. This property can be used as a filter to specify which data catalog(s) include a particular dataset. 

In the example below, we used the `includedInDataCatalog` property to show that the dataset is included in the U.S. Geological Survey Science Data Catalog (SDC) as well as in the I-GUIDE data catalog. 


``` json
{
    "includedInDataCatalog": [
        {
            "@type" :"DataCatalog",
            "name": "The USGS Science Data Catalog (SDC)",
            "description" : "The Science Data Catalog (SDC) is the official public and searchable index that aggregates descriptions of all public research data that have been published by the USGS.",
            "url":"https://data.usgs.gov/datacatalog/",
            "creator": {
                "@type": "Organization",
                "name": "U.S. Geological Survey",
                "url": "https://www.usgs.gov/"
            }
        },
        {
            "@type" :"DataCatalog",
            "name": "The I-GUIDE Data Catalog",
            "description": "A centralized metadata catalog capable of indexing data from the diverse, distributed data required by the I-GUIDE project focus areas.",
            "url": "https://iguide.cuahsi.io/discover",
            "creator": {
                "@type": "Organization",
                "name": "NSF Institute for Geospatial Understanding through an Integrative Discovery Environment (I-GUIDE)",
                "url": "https://iguide.illinois.edu/"
            }
        }
    ] 
}
```
