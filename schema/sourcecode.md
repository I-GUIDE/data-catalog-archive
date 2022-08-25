
# Software Source Code

This document outlines the *required* and *recommended* properties for
describing source code.

While all SchemaOrg properties are valid, below is a suggested subset to
represent a single source code object using the 
*[SoftwareSourceCode](https://schema.org/SoftwareSourceCode)* class.

**Note**: A valid source code entry must include the required metadata outlined
in the [Core Metadata](core.md) document, which are not
described on this page.

#### Required Properties
|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|
| programmingLanguage | SoftwareSourceCode | ComputerLanguage \| Text | 1+ | The computer programming language |
| runtimePlatform | SoftwareSourceCode | Text | 1+ | Runtime platform or script interpreter dependencies |
| targetProduct | SoftwareSourceCode | SoftwareApplication | 1+ | Target Operating System or Product to which the code applies |

The following is an example implementation of the required metadata
properties.





#### Recommended Properties
|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|
| maintainer | CreativeWork | Person \| Organization | 1+ |A maintainer is a Person or Organization that manages contributions to, and/or publication of, some (typically complex) artifact |
| license | CreativeWork | CreativeWork \| URL | 1 | A license document that applies to this content, typically indicated by URL |
| version | CreativeWork | Number \| Text | 1 | The version of the CreativeWork embodied by a specified resource |
| codeRepository | SoftwareSourceCode| URL | 1 | Link to the repository where the un-compiled, human readable code and related code is located |
| codeSampleType | SoftwareApplication | Text | 1 | 	What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template |
