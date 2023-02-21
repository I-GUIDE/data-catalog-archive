
``` json
{
  "@content": "https://schema.org/",
  "@type": "Dataset",
  "name": "Census Blocks",
  "description": "This dataset contains information on the geographic boundaries and characteristics of census blocks in the United States. The TIGER/Line Shapefiles are extracts of selected geographic and cartographic information from the Census Bureau's Master Address File (MAF)/Topologically Integrated Geographic Encoding and Referencing (TIGER) system. The shapefiles include information for the fifty states, the District of Columbia, Puerto Rico, and the Island Areas (American Samoa, the Commonwealth of the Northern Mariana Islands, Guam, and the United States Virgin Islands). The shapefiles include polygon boundaries of geographic areas and features, linear features including roads and hydrography, and point features. These shapefiles do not contain any sensitive data or confidential data protected by Title 13 of the U.S.C. The first release of the TIGER/Line Files was in 1989. The Census Bureau released versions of the TIGER/Line Files periodically throughout the 1990s and 2000s in ASCII format. Beginning with the 2007 version, the format of the TIGER/Line Files changed from the ASCII file format to shapefile.",
  "url": "https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html",
  "creator": {
    "@type":"Organization",
    "name":"United States Census Bureau",
    "url":"https://www.census.gov/"
  },
  "dateCreated":"1989",
  "keywords":["census", "TIGER database", "geometry", "census blocks"], 
  "license":"",
  "provider":"US Census Bureau",
  "temporalCoverage":{
    "@type":"DateTime",
    "startDate":"1992",
    "endDate":"Present"
  },
  "spatialCoverage":{
    "@type":"Geoshape",
    "box":"-176.6966920000000130,-14.3737759999999994 145.8305049999999881,71.3413240000000002",
    "description":"In general, U.S. Census block shapefiles cover the entire United States and its territories, including the District of Columbia, Puerto Rico, and the Island Areas."
  },
  "encodingFormat": ["Geojson", "Parquet"]
}
```    