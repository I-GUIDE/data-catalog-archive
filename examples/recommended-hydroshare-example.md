# Recommended HydroShare Resource

This is an example a recommended I-GUIDE metadata record for a HydroShare resource.


``` json
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "Red Canyon Creek Water Levels, 2017 - 2019",
  "description": "Water levels measured with a pressure transducer (PT) downstream of the BDAs in Red Canyon Creek. PT accuracy is +/- 1 cm. See Figure 1 in Davis et al. (2021) for PT installation location.",
  "url": "https://www.hydroshare.org/resource/0d456f6dc1484489a5927d244d51bcd5/",
  "dateCreated": "2021-06-04T19:18:00+00:00",
  "dateModified": "2022-12-29T21:09:57+00:00",
  "keywords": ["stream restoration","drones","beaver dam analogue","SfM","BDAs","UAVs","channel morphology","Structure from Motion"],
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "creativeWorkStatus": "published",
  "creator": {
    "@type": "Person",
    "name": "Julianne Davis",
    "email": "jmsdavis@email.unc.edu",
    "identifier": {
      "@type": "PropertyValue",
      "@id": "https://orcid.org/0000-0003-0979-8090",
      "propertyID": "https://registry.identifiers.org/registry/orcid",
      "url": "https://orcid.org/0000-0003-0979-8090",
      "value": "0000-0003-0979-8090"
    },
  },
  "provider": {
    "@type": "Organization",
    "name": "HydroShare",
    "url": "https://hydroshare.org",
    "parentOrganization": {
      "@type": "Organization",
      "name": "CUAHSI",
      "url": "www.cuahsi.org",
      "address": "1167 Massachusetts Ave Suites 418 & 419, Arlington, MA 02476"
    }
  },
  "funding": [
  {
    "@type": "MonetaryGrant",
    "name": "NRT: Education Model Program on Water-Energy Research (EMPOWER) at Syracuse University",
     "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1449617",
     "funder": {
        "@type": "Organization",
        "name": "National Science Foundation"
      }
    },
  {
    "@type": "MonetaryGrant",
    "name": "Graduate Research Fellowship",
     "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1650116",
     "funder": {
        "@type": "Organization",
        "name": "National Science Foundation"
      }
    }
  ],
  "temporalCoverage": "2017-08-18/2019-07-22",
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "box": "42.6803 -108.6675 42.6837 -108.6633"
    }
  },
   "associatedMedia":
   {
     "@type": "MediaObject",
     "contentUrl": "https://www.hydroshare.org/resource/0d456f6dc1484489a5927d244d51bcd5/data/contents/WaterLevels.csv",
     "encodingFormat": "text/csv",
     "contentSize": "766.2 KB",
     "name": "WaterLevels.csv"
   },
   "distribution": 
   {
     "@type": "DataDownload",
     "contentUrl": "https://www.hydroshare.org/django_irods/rest_download/bags/0d456f6dc1484489a5927d244d51bcd5.zip?url_download=False&zipped=False&aggregation=False",
     "encodingFormat": "application/zip",
     "contentSize": "164 KB"
  },
  "variableMeasured": 
    {
      "@type": "PropertyValue",
      "name": "Water Level",
      "description": "Water level with regard to an arbitrary gage datum"
    },
  "isPartOf" {
    "@type": "Dataset",
    "name": "UAV Orthomosaics and Elevation Data: Red Canyon Creek, Wyoming, USA",
    "description": "A series of beaver dam analogues (BDAs) were installed in Red Canyon Creek near Lander, WY, in 2018. Channel form was measured immediately after BDA installation and after one year of restoration efforts (July 2019), using data collected with a total station and with UAV surveys. The files in this collection include visible light orthomosaics and digital elevation models created from UAV data, water levels measured with pressure transducers, and topographic data collected with the totalstation. The orthomosaics can be found in the linked Zenodo repository (under Related Resources). These data are used in Davis et al. (2021) Evaluating the geomorphic channel response to beaver dam analog installation using unoccupied aerial vehicles.",
    "url": "https://www.hydroshare.org/resource/7c4ae80863174acfb571ccf8bdac8968/",
  }
}
```
