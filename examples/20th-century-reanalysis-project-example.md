 # NOAA/CIRES/DOE 20th Century Reanalysis (V3)

This is an example of a recommended I-GUIDE metadata record for a gridded climate dataset available on the NOAA's Physical Sciences Laboratory (PSL) website.

``` json
{
    "@content":"https://schema.org/",
    "@type":"Dataset",
    "name":"NOAA/CIRES/DOE 20th Century Reanalysis (V3)",
    "description":"NOAA-CIRES-DOE 20th Century Reanalysis V3 contains objectively-analyzed 4-dimensional weather maps and their uncertainty from the early 19th century to the 21st century. This dataset is part of the twentieth century reanalysis project that provides a global, 200-year history of sub-daily weather by a state-of-art data assimilation system and surface pressure observations. Scientists have been using 20th Century Reanalysis datasets as a foundation for a wide range of studies, from understanding large-scale climate trends to diagnosing the impacts of individual historical extreme weather events. The dataset allows researchers to explore how climate change is influencing temperature, precipitation, and atmospheric circulation, and compare today’s storms, heat waves, droughts and floods to historic events. It also can be used to validate climate models.",
    "url":"https://psl.noaa.gov/data/gridded/data.20thC_ReanV3.html",
    "creator": 
    [
        {
            "@type":"Organization",
            "name":"Physical Sciences Laboratory (PSL)",
            "description":"The NOAA Physical Sciences Laboratory (PSL) conducts research to improve observations, understanding, modeling and predictions of weather, water and climate extremes, and their related impacts. PSL archives a wide range of data ranging from gridded climate datasets extending hundreds of years to real-time wind profiler data at a single location. The data or products derived from this data, organized by type, are available to scientists and the general public.",
            "url":"https://psl.noaa.gov/",
            "parentOrganization": 
            {
                "@type": "Organization",
                "name": "National Oceanic and Atmospheric Administration (NOAA)",
                "description": "NOAA is a scientific and regulatory agency within the United States Department of Commerce that forecasts weather, monitors oceanic and atmospheric conditions, charts the seas, conducts deep sea exploration, and manages fishing and protection of marine mammals and endangered species in the U.S. exclusive economic zone.",
                "url": "https://www.noaa.gov/"
            }
        },
        {
          "@type":"Organization",
          "name":"Cooperative Institute for Research in Environmental Sciences at the University of Colorado Boulder (CIRES)",
          "description":"CIRES is a partnership of the National Oceanic and Atmospheric Administration (NOAA) and the University of Colorado Boulder, and its areas of expertise include weather and climate including impacts to wildfire and water, changes at Earth’s poles, air quality and atmospheric chemistry, water resources, solid Earth sciences and more.",
          "url":"https://cires.colorado.edu/",
          "parentOrganization": 
          [
            {
                "@type": "Organization",
                "name": "National Oceanic and Atmospheric Administration (NOAA)",
                "description": "NOAA is a scientific and regulatory agency within the United States Department of Commerce that forecasts weather, monitors oceanic and atmospheric conditions, charts the seas, conducts deep sea exploration, and manages fishing and protection of marine mammals and endangered species in the U.S. exclusive economic zone.",
                "url": "https://www.noaa.gov/"
            },
            {   
                "@type": "Organization",
                "name": "University of Colorado Boulder",
                "url": "https://www.colorado.edu"
            }
          ]
        }, 
        {
          "@type":"Organization",
          "name":"U.S. Department of Energy (DOE)",
          "description":"The Department of Energy manages the United States' nuclear infrastructure and administers the country's energy policy. The Department of Energy also funds scientific research in the field.",
          "url":"https://www.energy.gov/"
        }
    ],
    "dateCreated":"2020",
    "keywords":[
        "reanalysis", 
        "NOAA", 
        "global climate", 
        "20CRv3"
        ], 
    "license":"",
    "provider":
    {
        "@type":"Organization",
        "name": "Physical Sciences Laboratory (PSL)",
        "description": "The NOAA Physical Sciences Laboratory (PSL) conducts research to improve observations, understanding, modeling and predictions of weather, water and climate extremes, and their related impacts.",
        "url": "https://psl.noaa.gov/"
    },
    "temporalCoverage":
    {
        "@type":"DateTime",
        "startDate":"1836",
        "endDate":"2015"
    },
    "temporal":["P3H", "P1D", "P1M"],
    "spatialCoverage":
    {
        "@type":"Geoshape",
        "box":"-0.5000000000000000,-90.5000000000000000 359.5000000000000000,90.5000000000000000",
        "description":"Globe"
    },
    "encodingFormat": ["NetCDF"],
    "funding":
    [
        {
            "@type":"Grant",
            "funder":
            {
                "@type":"Organization",
                "name":"Department of Energy"
            },
            "identifier":"DE-AC02-05CH11231"
        }
    ]
}
```