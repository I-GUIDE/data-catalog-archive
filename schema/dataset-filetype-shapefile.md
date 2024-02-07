## Shapefile 

This document outlines the **required** and **optional** properties for describing a shapefile file type. A shapefile is common and simple vector format to store both the positional coordinates and attributes of geographic features (points, lines, and polygons). This information is stored as a set of related files, including .shp, .shx, .dbf, and .prj, all of which should be stored within the same project workspace. Shapefile attributes can encompass a diverse array of data, ranging from descriptive information (e.g., names, lables, etc.) to numerical measurements, categorical data, temporal data,and supplementary data pertaining to the dataset (e.g., data source, data quality, etc.). 

Below is a suggested subset of Schema.Org properties that will augment the `associatedMedia` class, derived from the [core metadata](github.com/I-GUIDE/data-catalog/blob/main/schema/core.md), to describe a shapefile. The file-type specific properties are encoded as `1` or `1+` to denote **required**, and `0,1` or `0+` to indicate **optional**, as illustrated in the Cardinality column in the table below. 

|Property|Class|Expected Type|Cardinality|Description|
|---|---|---|---|---|
|[additionalProperty](#additional-property)|Thing|PropertyValue|1+|A property-value pair representing an additional characteristic of the entity.|
|[variableMeasured](#variable-measured)|Thing|Number \| Text|1+|A variable that is measured or estimated.|
|[sourceOrganization](#source-organization)|Thing|Organization \| Person|0+|The organization or person who creates the data.|

### *Associated Media from the core metadata*
The `associatedMedia` property, as described in the core metadata, can encompass a collection of media objects that represent the work. In the case of a shapefile file type, which includes four main file extentions (.shp, .shx, .dbf, and .prj), the configuration of the `associatedMedia` property is outlined below.

``` json
{
    "associatedMedia": [
        {
            "@type": "DataDownload",
            "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.dbf",
            "sha256": "afe3b0fc1ae41e4649b932b855b92c44298149cbf4c8996f4274ca495991b785",
            "encodingFormat": "x-gis/x-shapefile",
            "contentSize": "7.98 KB"
        },
        {
            "@type": "DataDownload",
            "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.prj",
            "sha256": "ae41e4649b932b855b92c44298149afe3b0fc1cbf4c8996f4274ca495991b785",
            "encodingFormat": "x-gis/x-shapefile",
            "contentSize": "167 bytes"
        }, 
        {
            "@type": "DataDownload",
            "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.shp",
            "sha256": "2b855b92c44298149afe3b0fc1cbf4c8996f427ae41e4649b934ca495991b785",
            "encodingFormat": "x-gis/x-shapefile",
            "contentSize": "143 KB"
        }, 
        {
            "@type": "DataDownload",
            "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.shx",
            "sha256": "b92c44298149afe3b0fc1cbf4c8996f427ae41e4649b934ca495991b7852b855",
            "encodingFormat": "x-gis/x-shapefile",
            "contentSize": "156 bytes"
        }
        ]
}
```

### Additional Property
[Schema:additionalProperty](https://schema.org/additionalProperty) represents a property-value pairing designed to accomodate supplementary information for an entity in cases where no direct match exists within Schema.Org. We intend to use the `additionalProperty` property to denote both the count of features and fields within a shapefile. "Features" within a shapefile denote individual geographic objects, such as point, line, or polygon, and encompass both spatial geometry and associated attribute data. In the context of shapefile, the term "fields" refer to the columns present in the attribute table. The attribute table is a tabular structure where each row corresponds to a feature in the shapefile, and each column (or field) represents a different attribute or type of information associated with those features. To embody the feature and field counts, we use the `propertyID` and `value` attributes within the `additionalProperty` class. 

In the following example, there is a specific shapefile that contains 7 features (polygons) and 10 fields (attributes).  

``` json
{
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "PropertyID": "Feature Count",
            "value": 7
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Field Count",
            "value": 10
        }
    ]
}
```

### Variable Measured
[Schema:variableMeasured](https://schema.org/variableMeasured) is a property of the `Thing` class. This property can be employed via the `PropertyValue` class to describe the metadata corresponding to the attributes within a shapefile. Within the framework of the `PropertyValue` class, we use the `propertyID` and `value` attributes to explicitly denote the name and the type of each field. Supplementary properties like `unitCode` and `description` can be optionally incorporated to provide a more comprehensive depiction of the variable. As shown in the example below, some of the fields do not have the optional properties.  

``` json
{
    "variableMeasured": [
        {
            "@type": "PropertyValue",
            "propertyID": "objectid",
            "value": "float64"                   
        },
        {
            "@type": "PropertyValue",
            "propertyID": "areaacres",
            "value": "float64",
            "unitCode": "acres",
            "description":"The polygon's area"                      
        },
        {
            "@type": "PropertyValue",
            "propertyID": "areasqkm",
            "value": "float64",
            "unitCode": "square kilometers",
            "description":"The polygon's area"                      
        },
        {
            "@type": "PropertyValue",
            "propertyID": "states",
            "value": "object"                    
        },
        {
            "@type": "PropertyValue",
            "propertyID": "huc12",
            "value": "object",
            "description": "Unique hydrologic unit code"                    
        },
        {
            "@type": "PropertyValue",
            "propertyID": "name",
            "value": "object",
            "description":"GNIS name for the geographic area in which the hydrologic unit is located"                    
        },
        {
            "@type": "PropertyValue",
            "propertyID": "tohuc",
            "value": "object",
            "description": "Code for the 12-digit hydrologic unit that is downstream from and naturally receives the majority of the flow from this unit"                    
        },
        {
            "@type": "PropertyValue",
            "propertyID": "shape_Leng",
            "value": "float64"                    
        },
        {
            "@type": "PropertyValue",
            "propertyID": "shape_Area",
            "value": "float64"                    
        },
        {
            "@type": "PropertyValue",
            "propertyID": "geometry",
            "value": "geometry"   
        }
    ]
}
```

### Source Organization
[Schema:sourceOrganization](https://schema.org/sourceOrganization) refers to the entity responsible for creating the shapefile. This entity may differ from the creator of the resource, as defined in the [core metadata](github.com/I-GUIDE/data-catalog/blob/main/schema/core.md). For example, a researcher could assemble a resource that incorporates data produced from various data sources. In this scenario, the creator of the resource in the researcher; however, the organization or individual that originally formulated the dataset might diverge from the researcher's identity.

``` json
{
    "sourceOrganization": {
        "@type": "Organization",
        "name": "National Hydrography Dataset",
        "url": "https://www.usgs.gov/national-hydrography/national-hydrography-dataset"
    }
}
```

### Supplemental Properties from the Core Metadata
Please note that any property from our [core metadata](github.com/I-GUIDE/data-catalog/blob/main/schema/core.md) can potentially be added into the `associatedMedia` class, as they are all properties of a creative work. However, our current focus is exclusively on the spatial and temporal coverage attributes from the core metadata. These particular attributes are being considered as supplementary properties that can be inluded to the `associatedMedia` class for a shapefile. This inclusion should occur when these attributes pertain specifically to the shapefile within a resource and deviate from the `spatialCoverage` and `temporalCoverage` defined in the core metadata for the entire resource. 

In the context of the shapefile's `spatialCoverage`, we are using the `additionalProperty` attribute to define both geographical and projected coordinate systems. This dual representation is helpful to enhance accuracy, interoperability, versatility, and contextual flexibility. 

``` json
{
    "spatialCoverage": {
        "@type": "Place",
        "name": "Logan Watershed",
        "geo": {
            "@type": "GeoShape",
            "box": "41.70049003694901 -111.78438452093438 42.102360645589236 -111.51208495002092"
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "propertyID": "Geographic Coordinate System",
                "value": {
                    "@type": "PropertyValue",
                    "propertyID": "Coordinate System",
                    "value": "WGS 84 EPSG:4326" 
                }
            },
            {
                "@type": "PropertyValue",
                "propertyID": "Projected Coordinate System",
                "value": [
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Coordinate Reference System",
                        "value": "North_America_Albers_Equal_Area_Conic" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Datum",
                        "value": "North_American_Datum_1983" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Unit",
                        "value": "Meter" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Coordinate String",
                        "value": "PROJCS['North_America_Albers_Equal_Area_Conic', GEOGCS['GCS_North_American_1983', DATUM['North_American_Datum_1983', SPHEROID['GRS_1980',6378137.0,298.257222101]], PRIMEM['Greenwich',0.0], UNIT['Degree',0.0174532925199433]], PROJECTION['Albers_Conic_Equal_Area'], PARAMETER['False_Easting',0.0], PARAMETER['False_Northing',0.0], PARAMETER['longitude_of_center',-96.0], PARAMETER['Standard_Parallel_1',20.0], PARAMETER['Standard_Parallel_2',60.0], PARAMETER['latitude_of_center',40.0], UNIT['Meter',1.0], AUTHORITY['Esri','102008']]" 
                    }
                ]
            }
        ]
    }
}
```

### A Complete Example for a Shapefile

Here is a complete example of a shapefile that incorporates all information explained above:

``` json
{
 "associatedMedia": [
    {
        "@type": "DataDownload",
        "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.dbf",
        "sha256": "c44298149afe3b0fc1cbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "sha256": "ca495991b785b92cafe3b0fc1ae41e4649b932b85544298149cbf4c8996f4274",
        "encodingFormat": "x-gis/x-shapefile",
        "contentSize": "7.98 KB"
    },
    {
        "@type": "DataDownload",
        "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.prj",
        "sha256": "932b8b92cafe3b0fc1ae41e4649b5544298149cbf4c8996f4274ca495991b785",
        "encodingFormat": "x-gis/x-shapefile",
        "contentSize": "167 bytes"
    }, 
    {
        "@type": "DataDownload",
        "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.shp",
        "sha256": "4298149cbf4c8996f4274b92cafe3b0fc1ae41e4649b932b8554ca495991b785",
        "encodingFormat": "x-gis/x-shapefile",
        "contentSize": "143 KB"
    }, 
    {
        "@type": "DataDownload",
        "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/logan-watershed.shx",
        "sha256": "b92cafe3b0fc1ae41e4649b932b85544298149cbf4c8996f4274ca495991b785",
        "encodingFormat": "x-gis/x-shapefile",
        "contentSize": "156 bytes"
    }
    ],
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "PropertyID": "Feature Count",
            "value": 7
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Field Count",
            "value": 10,
            "variableMeasured": [
                {
                    "@type": "PropertyValue",
                    "propertyID": "objectid",
                    "value": "float64"                    
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "areaacres",
                    "value": "float64",
                    "unitCode": "acres",
                    "description":"The polygon's area"                     
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "areasqkm",
                    "value": "float64",
                    "unitCode": "square kilometers",
                    "description":"The polygon's area"                    
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "states",
                    "value": "object"                    
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "huc12",
                    "value": "object",
                    "description": "Unique hydrologic unit code"                     
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "name",
                    "value": "object",
                    "description":"GNIS name for the geographic area in which the hydrologic unit is located"                    
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "tohuc",
                    "value": "object",
                    "description": "Code for the 12-digit hydrologic unit that is downstream from and naturally receives the majority of the flow from this unit"                    
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "shape_Leng",
                    "value": "float64"                    
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "shape_Area",
                    "value": "float64"                    
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "geometry",
                    "value": "geometry"   
                }
            ]
        }
    ],
    "spatialCoverage": {
        "@type": "Place",
        "name": "Logan Watershed",
        "geo": {
            "@type": "GeoShape",
            "box": "41.70049003694901 -111.78438452093438 42.102360645589236 -111.51208495002092"
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "propertyID": "Geographic Coordinate System",
                "value": {
                    "@type": "PropertyValue",
                    "propertyID": "Coordinate System",
                    "value": "WGS 84 EPSG:4326" 
                }
            },
            {
                "@type": "PropertyValue",
                "propertyID": "Projected Coordinate System",
                "valueReference": [
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Coordinate Reference System",
                        "value": "North_America_Albers_Equal_Area_Conic" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Datum",
                        "value": "North_American_Datum_1983" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Unit",
                        "value": "Meter" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Coordinate String",
                        "value": "PROJCS['North_America_Albers_Equal_Area_Conic', GEOGCS['GCS_North_American_1983', DATUM['North_American_Datum_1983', SPHEROID['GRS_1980',6378137.0,298.257222101]], PRIMEM['Greenwich',0.0], UNIT['Degree',0.0174532925199433]], PROJECTION['Albers_Conic_Equal_Area'], PARAMETER['False_Easting',0.0], PARAMETER['False_Northing',0.0], PARAMETER['longitude_of_center',-96.0], PARAMETER['Standard_Parallel_1',20.0], PARAMETER['Standard_Parallel_2',60.0], PARAMETER['latitude_of_center',40.0], UNIT['Meter',1.0], AUTHORITY['Esri','102008']]" 
                    }
                ]
            }
        ]
    },
    "temporalCoverage": {
        "@type": "DateTime",
        "startDate": "",
        "endDate": ""
    },
    "sourceOrganization": {
        "@type": "Organization",
        "name": "National Hydrography Dataset",
        "url": "https://www.usgs.gov/national-hydrography/national-hydrography-dataset"
    }
}
```