
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
properties for a single source code file.

```json
{
  ...
  "programmingLanguage": {
    "@type": "ComputerLanguage",
    "name": "Python",
    "url": "https://www.python.org/",
    "description": "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed."
  },
  "runtimePlatform": "Python 3.9",
  "targetProduct": {
    "@type": "SoftwareApplication",
    "name": "Jupyter Notebook",
    "applicationSuite": "JupyterLab",
    "operatingSystem": "MacOS, Linux",
  }
}
```




#### Recommended Properties
|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|
| maintainer | CreativeWork | Person \| Organization | 1+ |A maintainer is a Person or Organization that manages contributions to, and/or publication of, some (typically complex) artifact |
| license | CreativeWork | CreativeWork \| URL | 1 | A license document that applies to this content, typically indicated by URL |
| version | CreativeWork | Number \| Text | 1 | The version of the CreativeWork embodied by a specified resource |
| codeRepository | SoftwareSourceCode| URL | 1 | Link to the repository where the un-compiled, human readable code and related code is located |
| codeSampleType | SoftwareApplication | Text | 1 | 	What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template |

```
{
  ...

}
```
