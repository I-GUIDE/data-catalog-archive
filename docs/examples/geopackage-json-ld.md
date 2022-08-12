# Schema.org Example Collection of Geopackage's

Example metadata listing geopackage files using the [Schema.org](https://schema.org) vocabulary in
`json+ld` format. See [#3](https://github.com/I-GUIDE/data-catalog/issues/3) and
[#4](https://github.com/I-GUIDE/data-catalog/issues/4), for discussion that led to the creation of
this example.

```json
{
    "@context": "https://schema.org/",
    "@type": "Dataset",
    "url": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
    "name": "geoconnex reference features",
    "description": "These GeoPackage artifacts are for use in https://reference.geoconnex.us For more information see: https://github.com/internetofwater/geoconnex.us/tree/master/namespaces/ref/",
    "creator": [
        {
            "@type": "Organization",
            "email": "cgsinternetofwater@gmail.com",
            "name": "Internet of Water Initiative, Center for Geospatial Solutions, Lincoln Institute of Land Policy",
        }
    ],
    "provider": {
        "@id": "https://www.hydroshare.org",
        "@type": "Organization",
        "name": "HydroShare",
        "url": "https://www.hydroshare.org"
    },
    "distribution": {
        "@type": "DataDownload",
        "contentSize": "3.5 GB",
        "encodingFormat": "application/zip",
        "contentUrl": "https://www.hydroshare.org/hsapi/resource/3295a17b4cc24d34bd6a5c5aaf753c50/",
        "description": "Zipped BagIt Bag containing the HydroShare Resource",
        "dateModified": "2022-08-03T15:41:57.592393+00:00",
        "identifier": [
            "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50"
        ]
    },
    "hasPart": [
        {
            "@type": "Dataset",
            "isPartOf": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
            "associatedMedia": {
                "@type": "MediaObject",
                "contentSize": "382255104",
                "contentUrl": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50/data/contents/pws.gpkg",
                "encodingFormat": "application/geopackage+sqlite3",
                "sha256": "c04ed02d82a461e98f27b59cb744fa1aa6ebe8e2301d1856c840c046adbc95ef"
            }
        },
        {
            "@type": "Dataset",
            "isPartOf": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
            "associatedMedia": {
                "@type": "MediaObject",
                "contentSize": "37990400",
                "contentUrl": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50/data/contents/ref_dams.gpkg",
                "encodingFormat": "application/geopackage+sqlite3",
                "sha256": "79617b1c05a08826759989619cdcbb1e808d53f8e348ad42c7de5649e94c73fa"
            }
        },
        {
            "@type": "Dataset",
            "isPartOf": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
            "associatedMedia": {
                "@type": "MediaObject",
                "contentSize": "78614528",
                "contentUrl": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50/data/contents/ref_gages.gpkg",
                "encodingFormat": "application/geopackage+sqlite3"
            }
        },
        {
            "@type": "Dataset",
            "isPartOf": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
            "associatedMedia": {
                "@type": "MediaObject",
                "contentSize": "561152",
                "contentUrl": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50/data/contents/sec_hydrg_reg.gpkg",
                "encodingFormat": "application/geopackage+sqlite3",
                "sha256": "a240da0044068afe5d37f6627c545862b3c6c6437c10dac8bbee7711c2cbe3b9"
            }
        },
        {
            "@type": "Dataset",
            "isPartOf": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
            "associatedMedia": {
                "@type": "MediaObject",
                "contentSize": "4878336",
                "contentUrl": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50/data/contents/states.gpkg",
                "encodingFormat": "application/geopackage+sqlite3",
                "sha256": "b0baf587073d199913cd9af1825a155b9f5c0b1c24b8b9cec950ac007b85a38f"
            }
        },
        {
            "@type": "Dataset",
            "isPartOf": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
            "associatedMedia": {
                "@type": "MediaObject",
                "contentSize": "16945152",
                "contentUrl": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50/data/contents/ua10.gpkg",
                "encodingFormat": "application/geopackage+sqlite3",
                "sha256": "c9a34ca7c73b258de0c62a3110864476dd985a3e205d18001a9da614f5a7bb86"
            }
        },
        {
            "@type": "Dataset",
            "isPartOf": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50",
            "associatedMedia": {
                "@type": "MediaObject",
                "contentSize": "464404480",
                "contentUrl": "https://www.hydroshare.org/resource/3295a17b4cc24d34bd6a5c5aaf753c50/data/contents/w_merit_cats.gpkg",
                "encodingFormat": "application/geopackage+sqlite3",
                "sha256": "db39e6555675be68e8b04725bb18b4aa41ee3316458b925e49b357b61dbe551c"
            }
        }
    ]
}
```
