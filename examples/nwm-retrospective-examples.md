# Recommended National Water Model Retrospective Dataset

This is several examples of a recommended I-GUIDE metadata record for the National Water Model Retrospective Dataset.

## NWM input forcing and model output data version 2.1 in NetCDF format

``` json
{
    "@context": "https://schema.org/",
    "@type": "Dataset",
    "name": "NOAA National Water Model CONUS Retrospective Dataset, Version 2.1 in NetCDF Format",
    "description": "The complete archive of NWM input forcing and model output data version 2.1 in NetCDF format.",
    "url": "https://noaa-nwm-retrospective-2-1-pds.s3.amazonaws.com/index.html",
    "identifier":"Version 2.1",
    "creator": {
    "@type": "Organization",
    "name": "Office of Water Prediction (OWP)",
    "description": "The Office of Water Prediction (OWP) is a geographically distributed organization which includes elements in Maryland, Minnesota and Alabama. The OWP is designed to support a consistent and unified hydrologic program while maximizing efficient use of resources helping to ensure the NWS excels as a science-based service organization. The Office of Water Prediction launches a historic transformation and modernization of hydrology and water prediction services within NOAA’s National Weather Service.",
    "url": "https://water.noaa.gov/",
    "parentOrganization": {
        "@type": "Organization",
        "name": "National Oceanic and Atmospheric Administration (NOAA)",
        "description": "NOAA is a scientific and regulatory agency within the United States Department of Commerce that forecasts weather, monitors oceanic and atmospheric conditions, charts the seas, conducts deep sea exploration, and manages fishing and protection of marine mammals and endangered species in the U.S. exclusive economic zone.",
        "url": "https://www.noaa.gov/"
    }
  },
  "dateCreated":"2021",
  "keywords":["NOAA", "National Water Model", "CONUS", "Retrospective", "Version 2.1", "NetCDF"],
  "license":"Open Data. There are no restrictions on the use of this data.",
  "provider": {
    "@type": "Organization",
    "name": "Amazon Web Services, Inc. (AWS)",
    "description":"Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
    "url": "https://aws.amazon.com/"
  },
  "creativeWorkStatus":"Published",
  "temporalCoverage":"1979-02-01T01:00:00Z/2020-12-31T23:00:00Z",
  "spatialCoverage":{
    "@type":"Place",
    "name":"The Contiguous United States (CONUS)",
    "geo":{
        "@type":"GeoShape",
        "box": "-133.5175717314508006,20.0709752267444230 -60.4811251300069870,57.7775469472718655"
    }
  },
  "encodingFormat": ["NetCDF"],
  "citation":"NOAA National Water Model CONUS Retrospective Dataset was accessed on DATE from https://registry.opendata.aws/nwm-archive"
}
``` 

## NWM model output data version 2.1 in Zarr format

``` json
{
    "@context": "https://schema.org/",
    "@type": "Dataset",
    "name": "NOAA National Water Model CONUS Retrospective Dataset, Version 1.2 in Zarr Format",
    "description": "The complete archive of NWM model output data version 2.1 in Zarr format. The NWM precipitation input forcing in Zarr format.",
    "url": "https://noaa-nwm-retro-v2-zarr-pds.s3.amazonaws.com/index.html",
    "identifier":"Version 2.1",
    "creator": {
    "@type": "Organization",
    "name": "Office of Water Prediction (OWP)",
    "description": "The Office of Water Prediction (OWP) is a geographically distributed organization which includes elements in Maryland, Minnesota and Alabama. The OWP is designed to support a consistent and unified hydrologic program while maximizing efficient use of resources helping to ensure the NWS excels as a science-based service organization. The Office of Water Prediction launches a historic transformation and modernization of hydrology and water prediction services within NOAA’s National Weather Service.",
    "url": "https://water.noaa.gov/",
    "parentOrganization": {
        "@type": "Organization",
        "name": "National Oceanic and Atmospheric Administration (NOAA)",
        "description": "NOAA is a scientific and regulatory agency within the United States Department of Commerce that forecasts weather, monitors oceanic and atmospheric conditions, charts the seas, conducts deep sea exploration, and manages fishing and protection of marine mammals and endangered species in the U.S. exclusive economic zone.",
        "url": "https://www.noaa.gov/"
    }
  },
  "dateCreated":"2021",
  "keywords":["NOAA", "National Water Model", "CONUS", "Retrospective", "Version 2.1", "Zarr"],
  "license":"Open Data. There are no restrictions on the use of this data.",
  "provider": {
    "@type": "Organization",
    "name": "Amazon Web Services, Inc. (AWS)",
    "description":"Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
    "url": "https://aws.amazon.com/"
  },
  "creativeWorkStatus":"Published",
  "temporalCoverage":"1979-02-01T01:00:00Z/2020-12-31T23:00:00Z",
  "spatialCoverage":{
    "@type":"Place",
    "name":"The Contiguous United States (CONUS)",
    "geo":{
        "@type":"GeoShape",
        "box": "-133.5175717314508006,20.0709752267444230 -60.4811251300069870,57.7775469472718655"
    }
  },
  "encodingFormat": ["Zarr"],
  "citation":"NOAA National Water Model CONUS Retrospective Dataset was accessed on DATE from https://registry.opendata.aws/nwm-archive"
}
``` 

## NWM model output data version 2.0 in Zarr format

``` json
{
    "@context": "https://schema.org/",
    "@type": "Dataset",
    "name": "NOAA National Water Model CONUS Retrospective Dataset, Version 2.0 in Zarr Format",
    "description": "The streamflow from the NWM version 2.0 in Zarr format.",
    "url": "https://noaa-nwm-retro-v2-zarr-pds.s3.amazonaws.com/index.html",
    "identifier":"Version 2.0",
    "creator": {
    "@type": "Organization",
    "name": "Office of Water Prediction (OWP)",
    "description": "The Office of Water Prediction (OWP) is a geographically distributed organization which includes elements in Maryland, Minnesota and Alabama. The OWP is designed to support a consistent and unified hydrologic program while maximizing efficient use of resources helping to ensure the NWS excels as a science-based service organization. The Office of Water Prediction launches a historic transformation and modernization of hydrology and water prediction services within NOAA’s National Weather Service.",
    "url": "https://water.noaa.gov/",
    "parentOrganization": {
        "@type": "Organization",
        "name": "National Oceanic and Atmospheric Administration (NOAA)",
        "description": "NOAA is a scientific and regulatory agency within the United States Department of Commerce that forecasts weather, monitors oceanic and atmospheric conditions, charts the seas, conducts deep sea exploration, and manages fishing and protection of marine mammals and endangered species in the U.S. exclusive economic zone.",
        "url": "https://www.noaa.gov/"
    }
  },
  "dateCreated":"2021",
  "keywords":["NOAA", "National Water Model", "CONUS", "Retrospective", "Version 2.0", "Zarr"],
  "license":"Open Data. There are no restrictions on the use of this data.",
  "provider": {
    "@type": "Organization",
    "name": "Amazon Web Services, Inc. (AWS)",
    "description":"Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
    "url": "https://aws.amazon.com/"
  },
  "creativeWorkStatus":"Published",
  "temporalCoverage":"1979-02-01T01:00:00Z/2020-12-31T23:00:00Z",
  "spatialCoverage":{
    "@type":"Place",
    "name":"The Contiguous United States (CONUS)",
    "geo":{
        "@type":"GeoShape",
        "box": "-133.5175717314508006,20.0709752267444230 -60.4811251300069870,57.7775469472718655"
    }
  },
  "encodingFormat": ["Zarr"],
  "citation":"NOAA National Water Model CONUS Retrospective Dataset was accessed on DATE from https://registry.opendata.aws/nwm-archive"
}
``` 

## NWM model output data version 1.2 in NetCDF format

``` json
{
    "@context": "https://schema.org/",
    "@type": "Dataset",
    "name": "NOAA National Water Model CONUS Retrospective Dataset, Version 1.2 in NetCDF Format",
    "description": "The streamflow from the NWM version 1.2 in NetCDF format.",
    "url": "https://nwm-archive.s3.amazonaws.com/index.html",
    "identifier":"Version 1.2",
    "creator": {
    "@type": "Organization",
    "name": "Office of Water Prediction (OWP)",
    "description": "The Office of Water Prediction (OWP) is a geographically distributed organization which includes elements in Maryland, Minnesota and Alabama. The OWP is designed to support a consistent and unified hydrologic program while maximizing efficient use of resources helping to ensure the NWS excels as a science-based service organization. The Office of Water Prediction launches a historic transformation and modernization of hydrology and water prediction services within NOAA’s National Weather Service.",
    "url": "https://water.noaa.gov/",
    "parentOrganization": {
        "@type": "Organization",
        "name": "National Oceanic and Atmospheric Administration (NOAA)",
        "description": "NOAA is a scientific and regulatory agency within the United States Department of Commerce that forecasts weather, monitors oceanic and atmospheric conditions, charts the seas, conducts deep sea exploration, and manages fishing and protection of marine mammals and endangered species in the U.S. exclusive economic zone.",
        "url": "https://www.noaa.gov/"
    }
  },
  "dateCreated":"2018",
  "keywords":["NOAA", "National Water Model", "CONUS", "Retrospective", "Version 1.2", "NetCDF"],
  "license":"Open Data. There are no restrictions on the use of this data.",
  "provider": {
    "@type": "Organization",
    "name": "Amazon Web Services, Inc. (AWS)",
    "description":"Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
    "url": "https://aws.amazon.com/"
  },
  "creativeWorkStatus":"Published",
  "temporalCoverage":"1993-01-01T00:00:00Z/2017-12-31T23:00:00Z",
  "spatialCoverage":{
    "@type":"Place",
    "name":"The Contiguous United States (CONUS)",
    "geo":{
        "@type":"GeoShape",
        "box": "-133.5175717314508006,20.0709752267444230 -60.4811251300069870,57.7775469472718655"        
    }
  },
  "encodingFormat": ["NetCDF"],
  "citation":"NOAA National Water Model CONUS Retrospective Dataset was accessed on DATE from https://registry.opendata.aws/nwm-archive"
}
``` 

