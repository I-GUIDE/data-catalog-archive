## GeoTiff

A GeoTIFF is a specialized file format designed for storing georeferenced raster datasets, including flood maps, topographic maps, aerial photographs, and satellite imagery. GeoTIFF files contain essential metadata, including information like the coordinate reference system, geospatial extent, and map projection parameters. The following **required** and **optional** properties are suggested based on Schema.Org vocabulary to describe GeoTIFF metadata in the data catalog. These properties will augment the `associatedMedia` class, derivded from the [core metadata](https://github.com/I-GUIDE/data-catalog/blob/main/schema/core.md). The `additionalProperty` property is used to define cell information including `rows`, `columns`, `cellsize`, and `cell data type`. `variableMeasured` is used to identify the band information via properties such as `propertyID`, `unitText`, `value`, `valueReference`, `MaximumValue`, `minValue`, `measurementMethod` if applicable. These properties are encoded as `1` or `1+` to denote **required**, and `0,1` or `0+` to indicate **optional**, as illustrated in the Cardinality column in the table below.

|Property|Class|Expected Type|Cardinality|Description|
|---|---|---|---|---|
|[additionalProperty](#additional-property)|Thing|PropertyValue|1+|A property-value pair representing an additional characteristic of the entity.|
|[variableMeasured](#variable-measured)|Thing|Number \| Text|1+|A variable that is measured or estimated.|
|[sourceOrganization](#source-organization)|Thing|Organization \| Person|0+|The organization or person who creates the data.|


### *Associated Media from the core metadata*
The `associatedMedia` property, as described in the core metadata, can encompass a collection of media objects that represent the work. In the case of a geotiff file type, the configuration of the `associatedMedia` property is outlined below.

``` json
{
    "associatedMedia": [
        {
            "@type": "DataDownload",
            "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/DEM-for-logan-watershed.vrt?zipped=true&aggregation=true",
            "encodingFormat": "image/tiff",
            "contentSize": "52.1 MB"
        }
    ]
}
```

### Additional Property
[Schema:additionalProperty](https://schema.org/additionalProperty) represents a property-value pairing designed to accomodate supplementary information for an entity in cases where no direct match exists within Schema.Org. We intend to use the `propertyID` and `value` attributes within the `additionalProperty` class to denote the **Cell Information** including the number of rows and columns, the spatial resolution of a grid cell, and the data type associated with the grid cells. 

A simple example of a geotiff file with one band is shown below:

``` json
{
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "PropertyID": "Rows",
            "value": 4981
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Columns",
            "value": 2956
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Cell Size X Value",
            "value": 10.0
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Cell Size Y Value",
            "value": 10.0
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Cell Data Type",
            "value": "Float32"
        }
    ]
}
```

### Variable Measured

[Schema:variableMeasured](https://schema.org/variableMeasured) is a property of the `Thing` class. This property can be employed via the `PropertyValue` class to describe the metadata corresponding to the attributes within a shapefile. Within the framework of the `PropertyValue` class, we use the `propertyID` and `value` attributes to explicitly denote the band information. Supplementary properties like `unitCode` and `description` can be optionally incorporated to provide a more comprehensive depiction of the variable. 

``` json
{
    "variableMeasured": [
        {
            "@type": "PropertyValue",
            "propertyID": "Variable Name",
            "value": "Elevation",
            "unitCode": "m",
            "minValue": "1358.2",
            "maxValue": "3040.8",
            "description": "Digital Elevation Model",                   
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
        "name": "The US Geological Survey (USGS)",
        "url": "https://www.usgs.gov/3d-elevation-program"
    }
}
```

### Supplemental Properties from the Core Metadata
Please note that any property from our [core metadata](github.com/I-GUIDE/data-catalog/blob/main/schema/core.md) can potentially be added into the `associatedMedia` class, as they are all properties of a creative work. However, our current focus is exclusively on the spatial and temporal coverage attributes from the core metadata. These particular attributes are being considered as supplementary properties that can be inluded to the `associatedMedia` class for a GoeTIFF file. This inclusion should occur when these attributes pertain specifically to the geotiff file within a resource and deviate from the `spatialCoverage` and `temporalCoverage` defined in the core metadata for the entire resource. 

In the context of the geotiff's `spatialCoverage`, we are using the `additionalProperty` attribute to define both geographical and projected coordinate systems. This dual representation is helpful to enhance accuracy, interoperability, versatility, and contextual flexibility.

The following example pertains to a file named 'DEM-for-logan-watershed.tif,' which can be accessed via this [link](https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/)

``` json
{
    "spatialCoverage": {
        "@type": "Place",
        "name": "DEM-for-logan-watershed",
        "geo": {
            "@type": "GeoShape",
            "box": "41.66222383075488 -111.81767526210976 42.11280014734521 -111.5693396958791"
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
                        "value": "WGS_1984_UTM_Zone_12N" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Datum",
                        "value": "WGS_1984" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Unit",
                        "value": "Meter" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Coordinate String",
                        "value": "PROJCS['WGS_1984_UTM_Zone_12N',GEOGCS['WGS 84',DATUM['WGS_1984',SPHEROID['WGS 84',6378137,298.257223563,AUTHORITY['EPSG',"7030"]],AUTHORITY['EPSG','6326']],PRIMEM['Greenwich',0],UNIT['degree',0.0174532925199433],AUTHORITY['EPSG','4326']],PROJECTION['Transverse_Mercator'],PARAMETER['latitude_of_origin',0],PARAMETER['central_meridian',-111],PARAMETER['scale_factor',0.9996],PARAMETER['false_easting',500000],PARAMETER['false_northing',0],UNIT['metre',1,AUTHORITY['EPSG','9001']],AUTHORITY['EPSG','32612']]" 
                    }
                ]
            }
        ]
    }
}
```

### A Complete Example for a Shapefile

Here is a complete example of a geotiff metadata that incorporates all information explained above:


``` json
{
    "associatedMedia": {
        "@type": "DataDownload",
        "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/DEM-for-logan-watershed.vrt?zipped=true&aggregation=true",
        "encodingFormat": "image/tiff",
        "contentSize": "54.1 MB",
        "name": "DEM for the logan watershed"
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "PropertyID": "Rows",
            "value": 4981
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Columns",
            "value": 2956
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Cell Size X Value",
            "value": 10.0
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Cell Size Y Value",
            "value": 10.0
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Cell Data Type",
            "value": "Float32"
        }
    ],
    "variableMeasured": [
        {
            "@type": "PropertyValue",
            "propertyID": "Variable Name",
            "value": "Elevation",
            "unitCode": "m",
            "minValue": "1358.2",
            "maxValue": "3040.8",
            "description": "Digital Elevation Model",                   
        }
    ],
    "spatialCoverage":"spatialCoverage": {
        "@type": "Place",
        "name": "DEM-for-logan-watershed",
        "geo": {
            "@type": "GeoShape",
            "box": "41.66222383075488 -111.81767526210976 42.11280014734521 -111.5693396958791"
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
                        "value": "WGS_1984_UTM_Zone_12N" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Datum",
                        "value": "WGS_1984" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Unit",
                        "value": "Meter" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Coordinate String",
                        "value": "PROJCS['WGS_1984_UTM_Zone_12N',GEOGCS['WGS 84',DATUM['WGS_1984',SPHEROID['WGS 84',6378137,298.257223563,AUTHORITY['EPSG',"7030"]],AUTHORITY['EPSG','6326']],PRIMEM['Greenwich',0],UNIT['degree',0.0174532925199433],AUTHORITY['EPSG','4326']],PROJECTION['Transverse_Mercator'],PARAMETER['latitude_of_origin',0],PARAMETER['central_meridian',-111],PARAMETER['scale_factor',0.9996],PARAMETER['false_easting',500000],PARAMETER['false_northing',0],UNIT['metre',1,AUTHORITY['EPSG','9001']],AUTHORITY['EPSG','32612']]" 
                    }
                ]
            }
        ]
    },
    "sourceOrganization": {
        "@type": "Organization",
        "name": "The US Geological Survey (USGS)",
        "url": "https://www.usgs.gov/3d-elevation-program"
    }
}
```

