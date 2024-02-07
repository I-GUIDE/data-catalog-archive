# Multidimensional (NetCDF)

A NetCDF file is a well-suited file format for representing multidimensional scientific data arrays, commonly used in various atmospheric, oceanic, and geospatial domains where large volumes of multidimensional data need storage and manipulation. NetCDF datasets contains key metadata describing the structure and content of the data, such as climate model outputs or satellite observations. This metadata may encompass information about dimensions, variables, attributes, coordinates, missing values, units, and more. The following **required** and **optional** properties from Schema.Org vocabulary are considered for describing NetCDF metadata in the data catalog. These properties will augment the `associatedMedia` class, derivded from the [core metadata](https://github.com/I-GUIDE/data-catalog/blob/main/schema/core.md). The `additionalProperty` property is used to describe dimensions, coordinates, and global attributes. The `variableMeasured` property is used to identify variable information, encompassing properties such as variable name, unit, shape, and data type. These properties are encoded as `1` or `1+` to denote **required**, and `0,1` or `0+` to indicate **optional**, as illustrated in the Cardinality column in the table below.


|Property|Class|Expected Type|Cardinality|Description|
|---|---|---|---|---|
|[additionalProperty](#additional-property)|Thing|PropertyValue|1+|A property-value pair representing an additional characteristic of the entity.|
|[variableMeasured](#variable-measured)|Thing|Number \| Text|1+|A variable that is measured or estimated.|
|[sourceOrganization](#source-organization)|Thing|Organization \| Person|0+|The organization or person who creates the data.|


### *Associated Media from the core metadata*
The `associatedMedia` property, as described in the core metadata, can encompass a collection of media objects that represent the work. In the case of a NetCDF file type, the configuration of the `associatedMedia` property is outlined below.

``` json
{
    "associatedMedia": [
        {
            "@type": "DataDownload",
            "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/201001010000.v1.1.nc?zipped=true&aggregation=true",
            "sha256": "4ca495991b785afe3b0fc1ae41e4649b932b855b92c44298149cbf4c8996f427",
            "encodingFormat": "application/netcdf",
            "contentSize": "6.55 MB",
            "name": "201001010000.v1.1.nc",
            "description": "CONUS-wide meteorological forcing data for 2010-01-01"
        }
    ]
}
```

### Additional Property
[Schema:additionalProperty](https://schema.org/additionalProperty)  represents a property-value pairing designed to accommodate supplementary information for an entity in cases where no direct match exists within Schema.Org. We intend to use various attributes of the `additionalProperty` like `propertyID` and `value` in a nested way to denote the **dimensions**, as well as **coordinates** and **global attributes** if applicable. Note that the `unitText` is used to represent the spatial resolution of the coordinates. This is different from `unitCode` which is generally used to denote the variable units. It's important to note that `PropertyID` is used for fixed terms/titles, whereas `name` is utilized to denote the specific information associated with a file. The value of `name` may vary among NetCDF files and is not necessarily consistent across all of them.

An example for a three-dimensional NetCDF file is shown below:

``` json
{
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "PropertyID": "Dimensions",
            "value": [
                {
                    "@type": "PropertyValue",
                    "name": "time",
                    "value": 1
                },
                {
                    "@type": "PropertyValue",
                    "name": "y",
                    "value": 820
                },
                {
                    "@type": "PropertyValue",
                    "name": "x",
                    "value": 855
                }
            ]
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Coordinates",
            "value": [
                {
                    "@type": "PropertyValue",
                    "name": "time",
                    "alternateName": "valid output time"
                },
                {
                    "@type": "PropertyValue",
                    "name": "projection_x_coordinate",
                    "alternateName": "x coordinate of projection",
                    "unitCode": "m",
                    "unitText": "1000"
                },
                {
                    "@type": "PropertyValue",
                    "name": "projection_y_coordinate",
                    "alternateName": "y coordinate of projection",
                    "unitCode": "m",
                    "unitText": "1000"
                }
            ]
        },
        {
            "@type": "PropertyValue",
            "PropertyID": "Global Attributes",
            "value": [
                {
                    "@type": "PropertyValue",
                    "name": "model_output_valid_time ",
                    "value": "2010-01-01_00:00:00"
                },
                {
                    "@type": "PropertyValue",
                    "name": "model_initialization_time ",
                    "value": "2010-01-01_00:00:00"
                },
                {
                    "@type": "PropertyValue",
                    "name": "NWM_version_number ",
                    "value": "v2.1"
                },
                {
                    "@type": "PropertyValue",
                    "name": "model_configuration ",
                    "value": "AORC"
                },
                {
                    "@type": "PropertyValue",
                    "name": "model_output_type ",
                    "value": "forcing"
                },
                {
                    "@type": "PropertyValue",
                    "name": "model_total_valid_times ",
                    "value": 744
                },
                {
                    "@type": "PropertyValue",
                    "name": "history ",
                    "value": "Thu Mar 30 13:07:03 2023: ncks -d x,373,1227 -d y,1586,2405 201001010000.LDASIN_DOMAIN1 201001010000.v1.1.nc"
                },
                {
                    "@type": "PropertyValue",
                    "name": "NCO ",
                    "value": "netCDF Operators version 4.9.3 (Homepage = http://nco.sf.net, Code = http://github.com/nco/nco"
                }
            ]
        }
    ]
}
```

### Variable Measured
[Schema:variableMeasured](https://schema.org/variableMeasured) is a property of the `Thing` class. This property can be employed via the `PropertyValue` class to describe the metadata corresponding to the variables of a NetCDF data file. Within the framework of the `PropertyValue` class, we use the `value` attribute to represent the variable name, `name` to represent the standard name of the variable, `alternateName` to represent the long name of the variable, `unitCode` to represent the units,  `measurementTechnique` to describe cell methods, which denotes how the data values are calculated or processed, `additionalType` to represent the data type, and `description` to represent shape if applicable. 

A simple example of a NetCDF file containing two variables is shown below. Note that the `cell_methods` for the RAINRATE variable is "mean", meaning that the precipitation data has been averaged over the time dimension. In contrast, the `cell_methods` attribute is set to "point" for variable LQFRAC (fraction of precipitation that is liquid vs. frozen), indicating that each value corresponds to a specific point in time. 

``` json
{
    "variableMeasured": [
        {
            "@type": "PropertyValue",
            "value": "RAINRATE",
            "name": "precipitation_flux",
            "alternateName": "Surface Precipitation Rate",
            "unitCode": "mm s^-1",
            "measurementTechnique": "time: mean",
            "additionalType": "float",
            "description": "time,y,x"
        },
        {
            "@type": "PropertyValue",
            "value": "LQFRAC",
            "name": "liquid_water_fraction",
            "alternateName": "Fraction of precipitation that is liquid vs. frozen",
            "unitCode": "%",
            "measurementTechnique": "time: point",
            "additionalType": "int",
            "description": "time,y,x"
        }
    ]
}
```

### Source Organization
[Schema:sourceOrganization](https://schema.org/sourceOrganization) refers to the entity responsible for creating the NetCDF file. This entity may differ from the creator of the resource, as defined in the [core metadata](github.com/I-GUIDE/data-catalog/blob/main/schema/core.md). For example, a researcher could assemble a resource that incorporates data produced from various data sources. In this scenario, the creator of the resource is the researcher; however, the organization or individual that originally formulated the dataset might diverge from the researcher's identity.

``` json
{
    "sourceOrganization": {
        "@type": "Organization",
        "name": "National Weather Service",
        "url": "https://hydrology.nws.noaa.gov/aorc-historic/Documents/AORC-Version1.1-SourcesMethodsandVerifications.pdf"
    }
}
```

### Supplemental Properties from the Core Metadata
Please note that any property from our [core metadata](github.com/I-GUIDE/data-catalog/blob/main/schema/core.md) can potentially be added into the `associatedMedia` class, as they are all properties of a creative work. However, our current focus is exclusively on the spatial and temporal coverage attributes from the core metadata. These particular attributes are being considered as supplementary properties that can be included to the `associatedMedia` class for a NetCDF data file. This inclusion should occur when these attributes pertain specifically to the NetCDF within a resource and deviate from the `spatialCoverage` and `temporalCoverage` defined in the core metadata for the entire resource. 

In the context of the NetCDF's `spatialCoverage`, we are using the `additionalProperty` attribute to define both geographical and projected coordinate systems. This dual representation is helpful to enhance accuracy, interoperability, versatility, and contextual flexibility. 

``` json
{
    "spatialCoverage": {
        "@type": "Place",
        "name": "CONUS",
        "geo": {
            "@type": "GeoShape",
            "box": "41.75208766431495 -121.42466382306904 36.15506282204527 -109.30420996901891"
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
                        "value": "Lambert_Conformal_Conic" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Datum",
                        "value": "D_Sphere" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Unit",
                        "value": "Meter" 
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "Coordinate String",
                        "value": "PROJCS['Lambert_Conformal_Conic',GEOGCS['GCS_Sphere',DATUM['D_Sphere',SPHEROID['Sphere',6370000.0,0.0]],PRIMEM['Greenwich',0.0],UNIT['Degree',0.0174532925199433]],PROJECTION['Lambert_Conformal_Conic_2SP'],PARAMETER['false_easting',0.0],PARAMETER['false_northing',0.0],PARAMETER['central_meridian',-97.0],PARAMETER['standard_parallel_1',30.0],PARAMETER['standard_parallel_2',60.0],PARAMETER['latitude_of_origin',40.0],UNIT['Meter',1.0]];-35691800 -29075200 10000;-100000 10000;-100000 10000;0.001;0.001;0.001;IsHighPrecision" 
                    }
                ]
            }
        ]
    }
}
```

In the context of the NetCDF's `temporalCoverage`, we use the `DateTime` class.

``` json
{
  "temporalCoverage": {
    "@type": "DateTime",
    "startDate": "01/01/2010",
    "endDate": "01/01/2010"
  }
}
```

### A Complete Example for a NetCDF file

Here is a complete example of a NetCDF metadata that incorporates all information explained above:

``` json
{
    "associatedMedia": {
        "@type": "DataDownload",
        "contentUrl": "https://www.hydroshare.org/resource/fed970c19b9c41928f2591adf5b64dd1/data/contents/DEM-for-logan-watershed.vrt?zipped=true&aggregation=true",
        "sha256": "32b855b92c442981494ca495991b785afe3b0fc1ae41e4649b9cbf4c8996f427",
        "encodingFormat": "image/tiff",
        "contentSize": "54.1 MB",
        "name": "DEM for the logan watershed",
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "PropertyID": "Dimensions",
                "value": [
                    {
                        "@type": "PropertyValue",
                        "PropertyID": "time",
                        "value": 1
                    },
                    {
                        "@type": "PropertyValue",
                        "PropertyID": "y",
                        "value": 820
                    },
                    {
                        "@type": "PropertyValue",
                        "PropertyID": "x",
                        "value": 855
                    }
                ]
            },
            {
                "@type": "PropertyValue",
                "PropertyID": "Coordinates",
                "value": [
                    {
                        "@type": "PropertyValue",
                        "name": "time",
                        "alternateName": "valid output time"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "projection_x_coordinate",
                        "alternateName": "x coordinate of projection",
                        "unitCode": "m",
                        "unitText": "1000"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "projection_y_coordinate",
                        "alternateName": "y coordinate of projection",
                        "unitCode": "m",
                        "unitText": "1000"
                    }
                ]
            },
            {
                "@type": "PropertyValue",
                "PropertyID": "Global Attributes",
                "value": [
                    {
                        "@type": "PropertyValue",
                        "name": "model_output_valid_time ",
                        "value": "2010-01-01_00:00:00"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "model_initialization_time ",
                        "value": "2010-01-01_00:00:00"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "NWM_version_number ",
                        "value": "v2.1"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "model_configuration ",
                        "value": "AORC"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "model_output_type ",
                        "value": "forcing"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "model_total_valid_times ",
                        "value": 744
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "history ",
                        "value": "Thu Mar 30 13:07:03 2023: ncks -d x,373,1227 -d y,1586,2405 201001010000.LDASIN_DOMAIN1 201001010000.v1.1.nc"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "NCO ",
                        "value": "netCDF Operators version 4.9.3 (Homepage = http://nco.sf.net, Code = http://github.com/nco/nco"
                    }
                ]
            }
        ],
        "variableMeasured": [
            {
                "@type": "PropertyValue",
                "value": "LQFRAC",
                "name": "liquid_water_fraction",
                "alternateName": "Fraction of precipitation that is liquid vs. frozen",
                "unitCode": "%",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "LWDOWN",
                "name": "surface_downward_longwave_flux",
                "alternateName": "Surface downward long-wave radiation flux",
                "unitCode": "W m-2",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "PSFC",
                "name": "air_pressure",
                "alternateName": "Surface Pressure",
                "unitCode": "Pa",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "Q2D",
                "name": "surface_specific_humidity",
                "alternateName": "2-m Specific Humidity",
                "unitCode": "kg kg-1",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "RAINRATE",
                "name": "precipitation_flux",
                "alternateName": "Surface Precipitation Rate",
                "unitCode": "mm s^-1",
                "measurementTechnique": "time: mean",
                "additionalType": "float",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "SWDOWN",
                "name": "surface_downward_shortwave_flux",
                "alternateName": "Surface downward short-wave radiation flux",
                "unitCode": "W m-2",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "T2D",
                "name": "air_temperature",
                "alternateName": "2-m Air Temperature",
                "unitCode": "K",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "U2D",
                "name": "x_wind",
                "alternateName": "10-m U-component of wind",
                "unitCode": "m s-1",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            },
            {
                "@type": "PropertyValue",
                "value": "V2D",
                "name": "y_wind",
                "alternateName": "10-m V-component of wind",
                "unitCode": "m s-1",
                "measurementTechnique": "time: point",
                "additionalType": "int",
                "description": "time,y,x"
            }         
        ],
        "spatialCoverage": {
            "@type": "Place",
            "name": "CONUS",
            "geo": {
                "@type": "GeoShape",
                "box": "41.75208766431495 -121.42466382306904 36.15506282204527 -109.30420996901891"
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
                            "value": "Lambert_Conformal_Conic"
                        },
                        {
                            "@type": "PropertyValue",
                            "propertyID": "Datum",
                            "value": "D_Sphere" 
                        },
                        {
                            "@type": "PropertyValue",
                            "propertyID": "Unit",
                            "value": "Meter"  
                        },
                        {
                            "@type": "PropertyValue",
                            "propertyID": "Coordinate String",
                            "value": "PROJCS['Lambert_Conformal_Conic',GEOGCS['GCS_Sphere',DATUM['D_Sphere',SPHEROID['Sphere',6370000.0,0.0]],PRIMEM['Greenwich',0.0],UNIT['Degree',0.0174532925199433]],PROJECTION['Lambert_Conformal_Conic_2SP'],PARAMETER['false_easting',0.0],PARAMETER['false_northing',0.0],PARAMETER['central_meridian',-97.0],PARAMETER['standard_parallel_1',30.0],PARAMETER['standard_parallel_2',60.0],PARAMETER['latitude_of_origin',40.0],UNIT['Meter',1.0]];-35691800 -29075200 10000;-100000 10000;-100000 10000;0.001;0.001;0.001;IsHighPrecision"  
                        }
                    ]
                }
            ]
        },
        "temporalCoverage": {
            "@type": "DateTime",
            "startDate": "01/01/2010",
            "endDate": "01/01/2010"
        },
        "sourceOrganization": {
            "@type": "Organization",
            "name": "National Weather Service",
            "url": "https://hydrology.nws.noaa.gov/aorc-historic/Documents/AORC-Version1.1-SourcesMethodsandVerifications.pdf"
        }
    }
}
```
