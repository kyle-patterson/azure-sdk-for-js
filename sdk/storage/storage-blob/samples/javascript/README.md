---
page_type: sample
languages:
  - javascript
products:
  - azure
  - azure-storage
urlFragment: storage-blobs-javascript
---

# Azure Storage Blobs client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for Azure Storage Blobs in some common scenarios.

| **File Name**                                          | **Description**                                                                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| [basic.js][basic]                                      | authenticate with the service using an account name & key, upload a blob, list blobs and containers, and download a blob |
| [azureAdAuth.js][azureadauth]                          |                                                                                                                          | connect to and authenticate with the service using an AzureAD account |
| [withConnString.js][withconnstring]                    | connect to and authenticate with the service using a connection string                                                   |
| [sharedKeyCred.js][sharedkeycred]                      | authenticate with the service using an account name and a shared key                                                     |
| [anonymousCred.js][anonymouscred]                      | authenticate with the service anonymously using a SAS URL                                                                |
| [proxyAuth.js][proxyauth]                              | connect to the service using a proxy and authenticate with an account name & key                                         |
| [iterators-containers.js][iterators-containers]        | connect to the service and iterate through the containers in the account                                                 |
| [iterators-blobs.js][iterators-blobs]                  | connect to the service and iterate through the blobs individually (using async `for await` syntax) by page               |
| [iterators-blobs-hierarchy][iterators-blobs-hierarchy] | connect to the service and iterate through the blobs individually (using async `for await` syntax) by hierarchy          |
| [readingSnapshot.js][readingsnapshot]                  | connect to the service and create and download a blob snapshot                                                           |
| [customizedClientHeaders.js][customheaders]            | use custom HTTP headers when connecting to the service                                                                   |
| [customPipeline.js][custompipeline]                    | use custom HTTP pipeline options when connecting to the service                                                          |
| [advanced.js][advanced]                                | use custom logging and pipeline options, then asynchronously upload and download a blob in blocks                        |

## Prerequisites

The sample are compatible with Node.js >= 8.0.0, except for the samples that use the async `for await` syntax, which require Node.js >= 10.0.0.

You need [an Azure subscription][freesub] and [an Azure Storage account][azstorage] to run these sample programs. Samples retrieve credentials to access the storage account from environment variables. See each individual sample for details on which environment variables it requires to function.

Adapting the samples to run in the browser requires some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Run the sample with the correct environment variables set, for example (cross-platform):

```bash
npx cross-env ACCOUNT_NAME="<account name>" ACCOUNT_KEY="<account key>" node basic.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[azureadauth]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/azureAdAuth.js
[basic]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/basic.js
[proxyauth]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/proxyAuth.js
[withconnstring]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/withConnString.js
[iterators-containers]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/iterators-containers.js
[iterators-blobs]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/iterators-blobs.js
[iterators-blobs-hierarchy]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/iterators-blobs-hierarchy.js
[sharedkeycred]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/sharedKeyCred.js
[anonymouscred]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/anonymousCred.js
[custompipeline]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/customPipeline.js
[customheaders]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/customizedClientHeaders.js
[advanced]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/advanced.js
[readingsnapshot]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob/samples/javascript/readingSnapshot.js
[apiref]: https://docs.microsoft.com/javascript/api/@azure/storage-file-share
[azstorage]: https://docs.microsoft.com/azure/storage/common/storage-account-overview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-file-share/README.md
