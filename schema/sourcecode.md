
# Software Source Code

To classify a record as a computer programming source code, `"@type: "SoftwareSourceCode"` should be used in the json schema. This will classify the record such as compile ready solutions, code snippet samples, scripts, etc. as a specific Schema.Org type called `SoftwareSourceCode` for which the metadata should be described using the [core metadata](https://github.com/I-GUIDE/data-catalog/blob/main/schema/core.md), as well as the software-source-code-specific properties for the [Schema:SoftwareSourceCode](https://schema.org/SoftwareSourceCode) class. The following table outlines the required and optional properties selected from Schema.Org vocabulary to design the I-GUIDE software source code metadata schema. These properties are encoded as `1` or `1+` for **required** and `0,1` or `0+` for **optional** in the Cardinality column of the table below.

|Property|Class|Expected Type|Cardinality|Description|
|---|---|---|---|---|
| [programmingLanguage](https://schema.org/programmingLanguage) | SoftwareSourceCode | ComputerLanguage \| Text | 1+ | The computer programming language |
| [runtimePlatform](https://schema.org/runtimePlatform) | SoftwareSourceCode | Text | 1+ | Runtime platform or script interpreter dependencies |
| [targetProduct](https://schema.org/targetProduct) | SoftwareSourceCode | [SoftwareApplication](https://github.com/I-GUIDE/data-catalog/blob/main/schema/softwareapp.md) | 1+ | Target Operating System or Product to which the code applies |
| [codeRepository](https://schema.org/codeRepository) | SoftwareSourceCode| URL | 1 | Link to the repository where the un-compiled, human readable code and related code is located |
| [codeSampleType](https://schema.org/codeSampleType) | SoftwareApplication | Text | 0,1 | What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template |
| [text](https://schema.org/text) | CreativeWork | Text | 0+ |The textual content of the source code. |

### Programming Language

[Schema:programmingLanguage](https://schema.org/programmingLanguage) is a property of the `Thing` class. It is used to encode the computer programming language of a record that is classified as a source code. 

A simple example is shown below.

``` json
{
  "programmingLanguage": "Python"
}
```

However, it is preferred for a programming language to be expressed as a [ComputerLanguage](https://schema.org/ComputerLanguage) class if possible. The following example illustrates how an identifier can be encoded as a `ComputerLanguage`.

``` json
{
  "programmingLanguage": {
    "@type": "ComputerLanguage",
    "name": "Python",
    "url": "https://www.python.org/",
    "description": "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
  }
}
```

### Runtime Platform

[Schema:runtimePlatform](https://schema.org/runtimePlatform) is a type of software platform that is used to indicate the platform or environment on which a given source code can be executed. Examples include Java v1, Python 3.9, .NET Framework 3.0. Here's an example of how  `RuntimePlatform` property is used to describe a software source code that can run using Ptyhon 3.9.

``` json
{
  "runtimePlatform": "Python 3.9"
}
```

### Target Product

| [Schema:targetProduct](https://schema.org/targetProduct) is used in the context of software source code to describe a product that the can use the source code. We use the `SoftwareApplication` class and some of its properties to specify `targetProduct`. 

Here is an example that describe a Python library intended to be used with a specific machine learning framework such as TensorFlow.

``` json
{
  "@type": "SoftwareSourceCode",
  "name": "My Python Library",
  "programmingLanguage": "Python",
  "targetProduct": {
    "@type": "SoftwareApplication",
    "name": "TensorFlow",
    "operatingSystem": ["Windows", "MacOS", "Linux"]
  }
}
```

An example of an IPython Jupyter Notebook as a `targetProduct` for a record in the data catalog classifed as a software source code can be shown as below.

``` json
{
  "targetProduct": {
      "@type": "SoftwareApplication",
      "name": "Jupyter Notebook",
      "applicationSuite": "JupyterLab",
      "operatingSystem": ["Windows", "MacOS", "Linux"]
    }
}
```

### Code Repository



### Code Sample Type

### COde Textual Content






















The following is an example implementation of the required metadata
properties for a software source code object.

```json
{
  "@type": "Dataset",
  "@context": "https://schema.org/",
  "name": "Comparing Daily Residential Water Use at Richards Hall",
  "description": "This resource contains a dataset and code to analyze average day to day water use at a residential hall at Utah State University (USU). Included in this resource is a .csv file that contains high resolution time series of water flow from a residential building on the USU campus. The data was recorded every one second for approximately three weeks in 2017. The Jupyter Notebook in this resource demonstrates how to subset the Richards Hall dataset to analyze daily water use from March 18-24, 2017. It resamples the data to daily total volume and finds the daily average, then plots the average daily volume in gallons for each day of the week.",
  "url": "https://www.hydroshare.org/resource/2f2838b4964747c4acb2ce28d5f300b3/",
  "dateCreated": "2022-04-14T18:27:00+00:00",
 "author": {
    "@type": "Person",
    "name": "Emily Jainarain",
    "email": "emily.jainarain@usu.edu"
  },
  "hasPart": {
    "@type": "SoftwareSourceCode",
    "name": "DailyResidentialWaterUse.ipynb",
    "url":
    "https://www.hydroshare.org/resource/2f2838b4964747c4acb2ce28d5f300b3/data/contents/DailyResidentialWaterUse.ipynb",
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
      "operatingSystem": "MacOS, Linux"
    },
    "associatedMedia": [{
        "@type": "MediaObject",
        "contentUrl":
        "https://www.hydroshare.org/resource/2f2838b4964747c4acb2ce28d5f300b3/data/contents/DailyResidentialWaterUse.ipynb",
        "encodingFormat": "application/x-ipynb+json",
        "contentSize": "33.9 KB"
      }
    ]
  }

}
```





|Property|Class|Type|Cardinality|Description|
|---|---|---|---|---|


## TODO
```
{
  ...

}
```
