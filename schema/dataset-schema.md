# Dataset Metadata

To classify a record as a dataset, `"@type": "Dataset"` should be used in the json schema. This will classify the record as a specific Schema.Org type called `Dataset` for which the metadata should be described using the [core metadata](https://github.com/I-GUIDE/data-catalog/blob/main/schema/core.md), as well as the dataset-specific properties for the [Schema:Dataset](https://schema.org/Dataset) class. The following table outlines the required and optional properties selected from Schema.Org vocabulary to design the I-GUIDE dataset metadata schema. These properties are encoded as `1` or `1+` 
for **required** and `0,1` or `0+` for **optional** in the Cardinality column of the table below. 

|Property|Class|Expected Type|Cardinality|Description|
|---|---|---|---|---|
|[distribution](#distribution)| Dataset| DataDownload | 1+ | A specific downloadable representation of a dataset. |
|[variableMeasured](#variable-measured)| Dataset | Text \| PropertyValue | 0+ | The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue. |
|[includedInDataCatalog](#included-in-datacatalog)| Dataset | DataCatalog | 1+ | A data catalog which contains this dataset. |

The following examples demonstrate how each of these properties may
be implemented in JSON+LD. 

### Distribution

The [`Schema:distribution`](https://schema.org/distribution) is a property of the [Schema:Dataset](https://schema.org/Dataset) class and must be expressed using the [`Schema:DataDownload`](https://schema.org/DataDownload) subtype. `Distribution` represents the general availability of a dataset and describes how the content related to the catalog record may be obtained.

The following example uses the `DataDownload` class along with a number of its optional properties including `contentUrl`, `contentSize`, and `encodingFormat` to describe the downloadable content of the dataset.

A distribution can be expressed as:

``` json
{
    "distribution": {
        "@type":"DataDownload",
        "name":"Fiber_opticdist.zip",
        "contentUrl":"https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5",
        "encodingFormat": "application/zip",
        "contentSize": "439 MB",
        "comment":"Downloading all the data within this dataset"
    }
}
```

A dataset might be accessed in various ways and downloaded in multiple serializations. Thus, this property can be repeated if different variations are available. There is no expectation that different downloadable distributions must contain exactly equivalent information (see also [Data Catalog Vocabulary (DCAT)](https://www.w3.org/TR/vocab-dcat-3/#Class:Distribution) on this point). For example, different distributions might include or exclude different subsets of the entire dataset.

In the context of a real-world example (NOAA's Storm Events Data), three distinct methods exist to access data. The first data access approach is through the Search function, where a user can specify criteria such as the area of interest, start and end dates, county, and event type and subsequently access the relevant data. The second method allows downloading the bulk dataset in CSV format. Lastly, the third technique entails using a function t0 generate monthly data publication in the form of a PDF file.   

``` json
{
    "distribution": [
        {
            "@type": "DataDownload",
            "name": "Search",
            "contentUrl": "https://www.ncdc.noaa.gov/stormevents/",
            "contentSize": "application/xhtml+xml"

        },
        {
            "@type": "DataDownload",
            "name": "Bulk Data Download (CSV)",
            "contentUrl": "https://www.ncei.noaa.gov/pub/data/swdi/stormevents/csvfiles/",
            "encodingFormat": ["text/csv", "application/zip"]
        },
        {
            "@type": "DataDownload",
            "name": "Storm Data Publication",
            "contentUrl": "https://www.ncdc.noaa.gov/IPS/sd/sd.html",
            "encodingFormat": ["application/xhtml+xml", "application/pdf"]
        }
    ]
}
```
In order to accurately represent the complete set of metadata for a dataset resource, it may be necessary to utilize both `associatedMedia` class, which is part of the core metadata, as well as `distribution` class, which is a dataset-specific metadata. It should be noted that a nuanced distiction exists between the `distribution>DataDownlaod` and the `associatedMedia>DataDownload`. While `associatedMedia` is used to specify various media objects (such as source codes, images, as well as datasets, etc.) that encode the contents of a creative work, it does not necessarily indicate how to download these objects. In contrast, `distribution` is merely used for dataset metadata and tells how to obtain the contents depending on how the data provider(s) decides. 

The following illustrates an example where both `associatedMedia` and `distribution` are used to represent part of the metadata for a dataset resource on the HydroShare data repository containing two CSV files that can be downloaded as a zip file. In this example, the `distribution` class shows that the content of this dataset can be downloaded individually or as one single zip file using the BagIt file format. 

``` json
{
    "associatedMedia": [
        {
            "@type": "DataDownload",
            "name":"Quashnet_SiteLoc.csv",
            "contentUrl": "https://www.hydroshare.org/resource/cd003e98225a4408b8012eefad14db2a/data/contents/Quashnet_SiteLoc.csv",
            "encodingFormat": "text/csv"
        },
        {
            "@type": "DataDownload",
            "name":"Quashnet_StreamTemperature.csv",
            "contentUrl": "https://www.hydroshare.org/resource/cd003e98225a4408b8012eefad14db2a/data/contents/Quashnet_StreamTemperature.csv",
            "encodingFormat": "text/csv"
        }
    ],
    
    "distribution": {
        "@type": "DataDownload",
        "contentUrl": "https://www.hydroshare.org/resource/cd003e98225a4408b8012eefad14db2a/",
        "encodingFormat": ["text/csv", "application/zip"]
    }
}
```

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
            "identifier": "<internally-created-identifier>",
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
            "identifier": "<>",
            "creator": {
                "@type": "Organization",
                "name": "NSF Institute for Geospatial Understanding through an Integrative Discovery Environment (I-GUIDE)",
                "url": "https://iguide.illinois.edu/"
            }
        }
    ] 
}
```
