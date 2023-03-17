# A recommended example of a dataset 


``` json
{
    "@context" : "https://schema.org/",

    "@type" : "Dataset",

    "@id": "https://www.sciencebase.gov/catalog/item/626b086bd34e76103cd183c5",

    "name": "Fiber-optic distributed temperature sensing data collected in mine-impacted streams near Silverton, Colorado in September 2019 and 2021 (ver. 2.0, May 2022)",

    "description": "This dataset contains fiber-optic distributed temperature sensing (FO-DTS) data collected along the streambed interface of two streams named Cement Creek and California Gulch Creek, as well as the Animas River, located near Silverton Colorado. The FO-DTS method utilizes the temperature-dependent backscatter of light pulses emitted along armored fiber-optic cables to evaluate temperature at discrete linear sampling locations. For these deployments a Salixa XT-DTS control unit (Salixa Ltd, Hertfordshire, UK) was used, and measurements were made over several day increments at 0.508 m linear resolution along the streambed interface. Specific locations for collected data are located within the data files, and additional details are contained in the ‘readme’ files within each zip data directory.",

    "url": "https://www.sciencebase.gov/catalog/item/626b086bd34e76103cd183c5",

    "identifier":"626b086bd34e76103cd183c5",

    "creator": {
        "@list": [
            {
                "@type": "Person",
                "name": "Neil C. Terry",
                "email": "nterry@usgs.gov",
                "identifier": {
                    "@type": "PropertyValue",
                    "@id": "https://orcid.org/0000-0002-3965-340X",
                    "propertyID": "https://registry.identifiers.org/registry/orcid",
                    "url": "https://orcid.org/0000-0002-3965-340X",
                    "value": "0000-0002-3965-340X"
                }
            }, 
            {
                "@type": "Person",
                "name": "Martin Briggs",
                "email": "mbriggs@usgs.gov",
                "identifier": {
                    "@type": "PropertyValue",
                    "@id": "https://orcid.org/0000-0003-3206-4132",
                    "propertyID": "https://registry.identifiers.org/registry/orcid",
                    "url": "https://orcid.org/0000-0003-3206-4132",
                    "value": "0000-0003-3206-4132"
                }
            },
            {
                "@type": "Person",
                "name": "Elizabeth Rutila"
            },
            {
                "@type": "Person",
                "name": "Dale Werkema"
            },
            {
                "@type": "Person",
                "name": "Stephen Dyment"
            },
            {
                "@type": "Person",
                "name": "David M. Rey",
                "email": "drey@usgs.gov",
                "identifier": {
                    "@type": "PropertyValue",
                    "@id": "https://orcid.org/0000-0003-2629-365X",
                    "propertyID": "https://registry.identifiers.org/registry/orcid",
                    "url": "https://orcid.org/0000-0003-2629-365X",
                    "value": "0000-0003-2629-365X"
                }
            },
            {
                "@type": "Person",
                "name": "Brett R. Trottier"
            }
        ]
    },

    "dateCreated": "2019-09-05",

    "keywords" : ["Geophysical data", "Frequency domain electromagnetic induction (FDEM)", 
                  "Colorado", "Silverton", "Cement Creek", "California Gulch", "Animas River",
                  "Thermal", "Hydrology", "Ground penetrating radar", "Groundwater and surface-water interaction"],

    "license" : "https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits",

    "provider": {
        "@type": "Organization",
        "name": "New York Water Science Center",
        "url": "https://www.usgs.gov/centers/ny-water",
            "parentOrganization":{
                "@type": "Organization",
                "name": "U.S. Geological Survey",
                "url": "https://www.usgs.gov/"  
            }
    },

    "publisher": {
        "@type": "Organization",
        "name": "U.S. Geological Survey",
        "url": "https://www.usgs.gov/"
    },

    "datePublished": "2020-05-12",

    "inLanguage": "en-US",

    "version": "version 2.0",

    "creativeWorkStatus": "published",

    "temporalCoverage": "2019/2021",

    "spatialCoverage": {
        "@type": "Place",
        "geo": {
        "@type": "GeoShape",
        "box": "37.811161 -107.659192 37.93421 -107.569008"
        }
    },

    "variableMeasured": {
        "@type": "PropertyValue",
        "name": "Water Temperature",
        "description": "Temperature data were collected to infer where groundwater may be entering Cement Creek and California Gulch though bank and submerged seepage locations. Groundwater temperature is typically unique from ambient surface water temperature at certain times of day/year, and therefore seepage locations might be recognized via temperature anomalies and/or areas of buffered temperature change.",
        "unitText": "degC"
    },

    "isPartOf": {
        "@id": "https://doi.org/10.5066/P97HDPAY",
        "@type": "CreativeWork"
    },

    "associatedMedia": [
        {
            "@type": "DataDownload",
            "name":"Silverton_FOTDS_metadata.xml",
            "contentUrl": "https://www.sciencebase.gov/",
            "encodingFormat": "application/fgdc+xml",
            "contentSize": "11.81 KB"
        },
        {
            "@type": "DataDownload",
            "name": "DTS.jpg",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__a3%2Fa6%2Fb2%2Fa3a6b216e9cb76322e72a8a3afe32a425486353b",
            "encodingFormat": "image/jpeg",
            "contentSize": "622.54 KB"
        }, 
        {
            "@type": "DataDownload",
            "name": "readme_FODTS.txt",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__09%2Fdc%2F2f%2F09dc2f199a6396e07545d5dc7c2fea66d2102168",
            "encodingFormat": "	text/plain",
            "contentSize": "590 B"
        },
        {
            "@type": "DataDownload",
            "name": "Animas_River_Processed.zip",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__f5%2F5e%2F15%2Ff55e151bba047f7c1daf8fe5e4e7c9e7ce4b667a",
            "encodingFormat": "application/zip",
            "contentSize": "7.56 MB"
        },
        {
            "@type": "DataDownload",
            "name": "California_Gulch_Processed.zip",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__27%2F93%2F0e%2F27930e9282b99833070a4b0f375c483fa8ef4d30",
            "encodingFormat": "application/zip",
            "contentSize": "3.92 MB"
        },
        {
            "@type":"DataDownload",
            "name": "Cement_Creek_Processed.zip",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__fc%2Fda%2F78%2Ffcda782fea0c84b3ee762ac7a8401b9e2332bc44",
            "encodingFormat": "application/zip",
            "contentSize": "4.28 MB"
        },
        {
            "@type":"DataDownload",
            "name": "Animas_River_Raw.zip",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__c0%2F8d%2F06%2Fc08d061874c674e460ce77cfa181a11ab43f3552",
            "encodingFormat": "application/zip",
            "contentSize": "336.65 MB"
        },
        {
            "@type":"DataDownload",
            "name": "California_Gulch_Raw.zip",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__03%2F9a%2F82%2F039a8290ed30d7780773f02077edd7db051b05dc",
            "encodingFormat": "application/zip",
            "contentSize": "52.59 MB"
        },
        {
            "@type":"DataDownload",
            "name": "Cement_Creek_Raw.zip",
            "contentUrl": "https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5?f=__disk__58%2Fb0%2F9d%2F58b09db64db06eb3480128e2eeba3a8a61485dc5",
            "encodingFormat": "application/zip",
            "contentSize": "33.69 MB"
        }
    ],
    
    "distribution": {
        "@type":"DataDownload",
        "name":"Fiber_opticdist.zip",
        "contentUrl":"https://www.sciencebase.gov/catalog/file/get/626b086bd34e76103cd183c5",
        "encodingFormat": "application/zip",
        "contentSize": "439 MB",
        "comment":"Downloading all the data within this dataset"
    }

}






    



