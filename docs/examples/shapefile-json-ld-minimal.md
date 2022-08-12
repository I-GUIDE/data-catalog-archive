# Minimal Shapefile Example

The document contains a **minimal** example implementation of SchemaOrg for a basic
Shapefile stored within a HydroShare resource, as discussed
in this [ticket](https://github.com/I-GUIDE/data-catalog/issues/4).

The `json+ld` below is derived from the content located in this
[HydroShare resource](https://hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51).

``` json
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "IGUIDE Shapefile Testing Resource",
  "description": "This resource contains medium-resolution (1:100k) National Hydrography Dataset (NHDPlus) [1] map data for a region of 39 Hydrologic Unit Code (HUC) 6-digit (HUC6) basins around the Hurricane Harvey impact zone across Texas, Louisiana, Mississippi and Arkansas. This includes 5978 subwatersheds, 190,192 catchments, and 192,267 flowlines. USGS active stream gages (924) were downloaded from the USGS National Water Information System (NWIS) [2] and augmented with each gage's HUC2, HUC4, HUC6, HUC8, HUC10 & HUC12 basin identifiers, and COMID of the NHD stream reach for the containing catchment. This allows the user to easily aggregate gages by various watershed boundaries. NOAA Advanced Hydrologic Prediction System (AHPS) [3] has 362 river forecast points in the Harvey study area. Many of these are co-located with USGS NWIS gages to leverage authoritative observation data. A shapefile of Texas dams (7290) was directly received from the Texas Commission for Environmental Quality (TCEQ) [4]. They suggest if you have any questions about data, to make an Open Records Request [5].",
  "url":
  "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/",
  "creator": {
    "@list":[
      {
        "@type": "Organization",
        "name": "U.S. Geological Survey (USGS)"
      },
      {
        "@type": "Organization",
        "name": "NOAA National Weather Service"
      },
      {
        "@type": "Organization",
        "name": "Texas Commission for Environmental Quality (TCEQ)"
      },
      {
        "@type": "Person",
        "name": "David Arctur",
        "email": "david.arctur@utexas.edu",
        "identifier": {
          "@id": "https://orcid.org/0000-0002-4708-6302",
          "@type": "PropertyValue",
          "propertyID": "https://registry.identifiers.org/registry/orcid",
          "url": "https://orcid.org/0000-0002-4708-6302",
          "value": "0000-0002-4708-6302"
        }
      }
    ]
  },
  "distribution": {
    "@type": "DataDownload",
    "contentUrl": "https://www.hydroshare.org/hsapi/resource/9d413b9d57824a79b8239a5f7c4fdf51/",
    "encodingFormat": "application/zip",
    "contentSize": "7.7 MB"
  },
  "hasPart": [
    {
      "@type": "Dataset",
      "url": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.shp?zipped=true&aggregation=true",
      "isPartOf": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51",
      "associatedMedia": [
        {
          "@type": "MediaObject",
          "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.shp.xml",
          "encodingFormat": "application/fgdc+xml",
          "contentSize": "88.0 KB"
        },
        {
          "@type": "MediaObject",
          "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.shx",
          "encodingFormat": "x-gis/x-shapefile",
          "contentSize": "412.0 B"
       },
       {
         "@type": "MediaObject",
         "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.shp",
         "encodingFormat": "x-gis/x-shapefile",
         "contentSize": "7.6 MB"
      },
      {
         "@type": "MediaObject",
         "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.sbx",
         "encodingFormat": "x-gis/x-shapefile",
         "contentSize": "164 B"
      },
      {
         "@type": "MediaObject",
         "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.sbn",
         "encodingFormat": "x-gis/x-shapefile",
         "contentSize": "532 B"
      },
      {
         "@type": "MediaObject",
         "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.prj",
         "encodingFormat": "application/text",
         "contentSize": "167.0 B"
      },
      {
         "@type": "MediaObject",
         "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.dbf",
         "encodingFormat": "application/octet-stream",
         "contentSize": "1.8 KB"
      },
      {
         "@type": "MediaObject",
         "contentUrl": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/data/contents/HUC6_Harvey_TxLaMsAr.cpg",
         "encodingFormat": "x-gis/x-shapefile",
         "contentSize": "5.0 B"
      }
    ]
   }
  ]
}
```
