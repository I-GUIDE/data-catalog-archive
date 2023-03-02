# HyperCube Google News Example

The following is an example for how the I-GUIDE `core` schema can be used to encapsulate the metadata for news articles collected by searching words "aging dams" in google news. 188 news articles in total.

``` json

{
    "@context": "https://schema.org",
    
    "@id": "https://www.hydroshare.org/resource/08745ae940ab4433b6f73de6b79088f7#schemaorg",
    
    "@type": "CreativeWork",
    "name": "Google New Articles - Aging Dams",
    "description": "News articles collected by searching words 'aging dams' in Google News and news websites. 188 news articles in total.",
    "url": "https://www.hydroshare.org/resource/08745ae940ab4433b6f73de6b79088f7",
    "identifier": "internal_identifier_08745ae940ab4433b6f73de6b79088f7",
        "creator": {
      "@list": [
            {
                  "@type": "Person",
                  "affiliation": {
                        "@type": "Organization",
                        "name": "University of Illinois at Urbana-Champaign"
                  },
                  "email": "fbaig@illinois.edu",
                  "name": "Furqan Baig",
                  "url": "https://www.hydroshare.org/user/16982/"
            }
      ]
    },
    "dateCreated": "2023-02-24T16:20:29.615861+00:00",
    "keywords": ["news", "iguide", "hypercube", "aging-dams"],
	"license": "http://creativecommons.org/licenses/by/4.0/",
    "provider": {
        "@type": "Organization",  
        "name": "HydroShare",
        "url": "https://www.hydroshare.org",
        "parentOrganization": {
        	"@type": "Organization",  
        	"name": "CUAHSI",
        	"url": "https://www.cuahsi.org",
        	"address": "1167 Massachusetts Ave Suites 418 & 419, Arlington, MA 02476"
        }
    },
    "inLanguage": "en-US",
    "creativeWorkStatus": "public",
    "dateModified": "2023-02-24T16:30:00.498196+00:00",
    "associatedMedia": {
    	"@type": "DataDownload",
    	"contentUrl": "https://www.hydroshare.org/resource/08745ae940ab4433b6f73de6b79088f7/data/contents/agingdams_news.txt",
    	"encodingFormat": "text/plain",
    	"contentSize": "1.5 MB",
    	"name": "agingdams_news"
    }
    
}
```