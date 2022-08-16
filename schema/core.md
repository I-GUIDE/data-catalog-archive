# Core Metadata

Core metadata consists of common, high-level, information that all catalog
holdings contain. This is a common set of fields that all catalog holdings
share.

**Required Metadata**

|Property|SchemaOrg Class|Expected Type|Cardinality|Description| 
|---|---|---|---|---|
|url|Thing|URL|1|the url of the item|
|name|Thing|Text|1|the name of the item| 
|description|Thing|Text|1|the description of the item|
|Associated Person|Thing AND Creative Work|Person OR Organization|1+| person or organization associated with the dataset, e.g. `creator`, `author`, `owner`, `maintainer`, `editor`.|

``` json
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "IGUIDE Shapefile Testing Resource",
  "description": "This resource contains medium-resolution (1:100k) National Hydrography Dataset (NHDPlus) [1] map data for a region of 39 Hydrologic Unit Code (HUC) 6-digit (HUC6) basins around the Hurricane Harvey impact zone across Texas, Louisiana, Mississippi and Arkansas. This includes 5978 subwatersheds, 190,192 catchments, and 192,267 flowlines. USGS active stream gages (924) were downloaded from the USGS National Water Information System (NWIS) [2] and augmented with each gage's HUC2, HUC4, HUC6, HUC8, HUC10 & HUC12 basin identifiers, and COMID of the NHD stream reach for the containing catchment. This allows the user to easily aggregate gages by various watershed boundaries. NOAA Advanced Hydrologic Prediction System (AHPS) [3] has 362 river forecast points in the Harvey study area. Many of these are co-located with USGS NWIS gages to leverage authoritative observation data. A shapefile of Texas dams (7290) was directly received from the Texas Commission for Environmental Quality (TCEQ) [4]. They suggest if you have any questions about data, to make an Open Records Request [5].",
  "url": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/",
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
  }
}
```



**Recommended Metadata**

|Property|SchemaOrg Class|Expected Type|Cardinality|Description| 
|---|---|---|---|---|
|hasPart|CreativeWork|CreativeWork|0+|Indicates an item or CreativeWork that is part of this item|
|isPartOf|CreativeWork|CreativeWork OR URL |0+|Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.|
|associatedMedia|CreativeWork|MediaObject|0+| A media object that encodes this CreativeWork. This property is a synonym for encoding.|


<pre>
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "IGUIDE Shapefile Testing Resource",
  "description": "This resource contains medium-resolution (1:100k) National Hydrography Dataset (NHDPlus) [1] map data for a region of 39 Hydrologic Unit Code (HUC) 6-digit (HUC6) basins around the Hurricane Harvey impact zone across Texas, Louisiana, Mississippi and Arkansas. This includes 5978 subwatersheds, 190,192 catchments, and 192,267 flowlines. USGS active stream gages (924) were downloaded from the USGS National Water Information System (NWIS) [2] and augmented with each gage's HUC2, HUC4, HUC6, HUC8, HUC10 & HUC12 basin identifiers, and COMID of the NHD stream reach for the containing catchment. This allows the user to easily aggregate gages by various watershed boundaries. NOAA Advanced Hydrologic Prediction System (AHPS) [3] has 362 river forecast points in the Harvey study area. Many of these are co-located with USGS NWIS gages to leverage authoritative observation data. A shapefile of Texas dams (7290) was directly received from the Texas Commission for Environmental Quality (TCEQ) [4]. They suggest if you have any questions about data, to make an Open Records Request [5].",
  "url": "https://www.hydroshare.org/resource/9d413b9d57824a79b8239a5f7c4fdf51/",
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
  <strong>"hasPart": [
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
  ]</strong>
}
</pre>
