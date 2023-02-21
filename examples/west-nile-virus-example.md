# West Nile Virus Surveillance Dataset

``` json
{
    "@content":"https://schema.org/",
    "@type":"Dataset",
    "name":"West Nile Virus (WNV) Surveillance",
    "description":"This dataset contains cumulative West Nile virus infection in humans, birds, mosquitoes, and horses by county, municipality, and date collected in Illinois, USA. West Nile virus (WNV) is the leading cause of mosquito-borne disease in the continental United States.  It is most commonly spread to people by the bite of an infected mosquito. Cases of WNV occur during mosquito season, which starts in the summer and continues through fall. In Illinois, the West Nile virus was first identified in September 2001. The Illinois Department of Public Health (IDPH) maintains a sophisticated disease surveillance system to monitor animals and insects that can potentially carry the virus: dead crows, robins, blue jays, mosquitoes, and horses. Mosquitoes can either carry the virus or get it by feeding on infected birds. The surveillance system also includes infectious disease physicians, hospital laboratory directors and infection control practitioners, local health departments and staff from IDPH's laboratory, environmental health and infectious diseases divisions who test for and report suspect or confirmed cases of various diseases that can be caused by mosquito-borne viruses.",
    "url":"https://dph.illinois.gov/topics-services/diseases-and-conditions/west-nile-virus/surveillance.html",
    "creator": {
        "@type":"Organization",
        "name":"Illinois Department of Public Health (IDPH)",
        "url":"https://dph.illinois.gov/"
    },
    "dateCreated":"2001",
    "keywords":["West Nile Virus", "Surveillance Data", "Public Health", "Infection"],
    "license":"",
    "temporalCoverage":{
    "@type":"DateTime",
    "startDate":"2001",
    "endDate":"2021"
  },
  "spatialCoverage":{
    "@type":"Geoshape",
    "box":"-91.5130856979999407,36.9703048850000755 -87.4952044319999800,42.5084887840000647",
    "description":"Illinois State"
  },
  "variableMeasured": [
    {
      "@type": "PropertyValue",
      "name": "Human Cases",
      "description": "Case counts reflect cases completed by local health departments at the time of reporting.  Case counts may temporarily decrease if new information needs to be added, but will be included again when information is complete and the case is closed.  Case counts may differ from CDC due to the timing of the reports."
    },
    {
      "@type": "PropertyValue",
      "name": "Mosquito Positive Cases"
    },
    {
      "@type": "PropertyValue",
      "name": "Crow Positive Cases"
    },
        {
      "@type": "PropertyValue",
      "name": "Horse Positive Cases"
    },
    {
      "@type": "PropertyValue",
      "name": "Blue Jay"
    },
    {
      "@type": "PropertyValue",
      "name": "Other Bird Cases"
    }
  ],    
  "encodingFormat": ["CSV"]
}
```