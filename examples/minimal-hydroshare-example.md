# Minimal HydroShare Resource

This is an example a minimal I-GUIDE metadata record for a HydroShare resource.


``` json
{
  "@context": "https://schema.org/",
  "@type": "Dataset",
  "name": "Red Canyon Creek Water Levels, 2017 - 2019",
  "description": "Water levels measured with a pressure transducer (PT) downstream of the BDAs in Red Canyon Creek. PT accuracy is +/- 1 cm. See Figure 1 in Davis et al. (2021) for PT installation location.",
  "url": "https://www.hydroshare.org/resource/0d456f6dc1484489a5927d244d51bcd5/",
  "dateCreated": "2021-06-04T19:18:00+00:00",
  "keywords": ["stream restoration","drones","beaver dam analogue","SfM","BDAs","UAVs","channel morphology","Structure from Motion"],
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "creator": {
    "@type": "Person",
    "name": "Julianne Davis",
    "email": "jmsdavis@email.unc.edu"
  },
  "provider": {
    "@type": "Organization",
    "name": "HydroShare",
    "url": "https://hydroshare.org",
    "parentOrganization": {
      "@type": "Organization",
      "name": CUAHSI,
      "url": "www.cuahsi.org",
      "address": "1167 Massachusetts Ave Suites 418 & 419, Arlington, MA 02476"
    }
  }
}
```
