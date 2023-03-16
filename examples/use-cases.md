# Catalog Use Cases

The purpose of this document is to define use cases that the catalog and, more specifically, the catalog schema should be capable of satisfying.


## 1. Collection of Datasets
A collection is when one dataset is composed of multiple other, child, datasets.
Examples of this include the operational NWM data available on AWS and Hydroshare collection resources.

**Scenario 1**: A scientist creates a HydroShare collection resource. Once metadata has been added to this resource, 
additional HydroShare resources are added to the collection. Each of the resources added to the collection contain 
their own metadata and contain data files. Metadata for the primary, collection, resource is expressed using Schema.org 
as well as the relationships with the "child" resources that exist in the collection. These relationships can be followed 
using references to discover additional metadata expressed on each of their landing pages.

**Scenario 2**: A scientist creates a web page that references various datasets that are stored in the cloud. These 
datasets appear as links on the web page and point to the source of the data files. Metadata for the primary, web page, resource 
is expressed using Schema.org as well as the relationships to each of the "child" datasets. These relationships can be followed 
via web url to access the data.
