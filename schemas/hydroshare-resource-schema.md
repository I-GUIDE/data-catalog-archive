# Schema for a HydroShare Resource

The following is a graphical representation for expressing a HydroShare
resource using SchemaOrg terminology. In the example below, a
HydroShare resource is represented as a SchemaOrg CreativeWork that
contains content files represented as SchemaOrg CreativeWork(s).

```mermaid
   erDiagram
    HydroShare_Resource ||--|{ Content : hasPart
    HydroShare_Resource ||--|{ Associated_Person : ""
    HydroShare_Resource {
        type CreativeWork "1"
	url URL "1"
	name Text "1"
	description Text "1" 
	associated_person Person_or_Organization "1+"
	hasPart CreativeWork "1+"
    }
    Content {
        type CreativeWork "1"
	isPartOf CreativeWork "1+"
	associatedMedia MediaObject "1+"
    }
    Content ||--|{ File : associatedMedia
    Content ||--|| HydroShare_Resource : isPartOf
    File {
        contentSize Text "1"
	contentUrl Url "1"
	encodingFormat Text "1"
    }

    Associated_Person {
    }
    Associated_Person ||--|| Person : isA
    Associated_Person ||--|| Organization : isA
    Person { 
        type Person "1"
	name Text "1"
	email text "1"
    }
    Organization {
        type Organization "1"
	name Text "1"
    }


```

### Notes
- **associated_person** can be one or more of the following elements:
`creator`, `author`, `owner`, `maintainer`, `producer`, `editor`.

# Database Representation of a HydroShare Resource

**TODO**

The following is a graphical representation of the HydroShare resource (above)
within a NoSQL database.



