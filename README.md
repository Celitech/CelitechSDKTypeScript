# Celitech TypeScript SDK 1.2.2

Welcome to the Celitech SDK documentation. This guide will help you get started with integrating and using the Celitech SDK in your project.

## Versions

- API version: `1.1.0`
- SDK version: `1.2.2`

## About the API

Welcome to the CELITECH API documentation! Useful links: [Homepage](https://www.celitech.com) | [Support email](mailto:support@celitech.com) | [Blog](https://www.celitech.com/blog/)

## Table of Contents

- [Setup & Configuration](#setup--configuration)
  - [Supported Language Versions](#supported-language-versions)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Setting a Custom Timeout](#setting-a-custom-timeout)
- [Sample Usage](#sample-usage)
- [Services](#services)
- [Models](#models)
- [License](#license)

# Setup & Configuration

## Supported Language Versions

This SDK is compatible with the following versions: `TypeScript >= 4.8.4`

## Installation

To get started with the SDK, we recommend installing using `npm`:

```bash
npm install celitech-sdk
```

## Environment Variables

These are the environment variables for the SDK:

| Name          | Description             |
| :------------ | :---------------------- |
| CLIENT_ID     | Client ID parameter     |
| CLIENT_SECRET | Client Secret parameter |

Environment variables are a way to configure your application outside the code. You can set these environment variables on the command line or use your project's existing tooling for managing environment variables.

If you are using a `.env` file, a template with the variable names is provided in the `.env.example` file located in the same directory as this README.

## Setting a Custom Timeout

You can set a custom timeout for the SDK's HTTP requests as follows:

```ts
const celitech = new Celitech({ timeout: 10000 });
```

# Sample Usage

Below is a comprehensive example demonstrating how to authenticate and call a simple endpoint:

```ts
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.destinations.listDestinations();

  console.log(data);
})();
```

## Services

The SDK provides various services to interact with the API.

<details> 
<summary>Below is a list of all available services with links to their detailed documentation:</summary>

| Name                                                                 |
| :------------------------------------------------------------------- |
| [DestinationsService](documentation/services/DestinationsService.md) |
| [PackagesService](documentation/services/PackagesService.md)         |
| [PurchasesService](documentation/services/PurchasesService.md)       |
| [ESimService](documentation/services/ESimService.md)                 |

</details>

## Models

The SDK includes several models that represent the data structures used in API requests and responses. These models help in organizing and managing the data efficiently.

<details> 
<summary>Below is a list of all available models with links to their detailed documentation:</summary>

| Name                                                                                         | Description |
| :------------------------------------------------------------------------------------------- | :---------- |
| [ListDestinationsOkResponse](documentation/models/ListDestinationsOkResponse.md)             |             |
| [ListPackagesOkResponse](documentation/models/ListPackagesOkResponse.md)                     |             |
| [ListPurchasesOkResponse](documentation/models/ListPurchasesOkResponse.md)                   |             |
| [CreatePurchaseRequest](documentation/models/CreatePurchaseRequest.md)                       |             |
| [CreatePurchaseOkResponse](documentation/models/CreatePurchaseOkResponse.md)                 |             |
| [TopUpEsimRequest](documentation/models/TopUpEsimRequest.md)                                 |             |
| [TopUpEsimOkResponse](documentation/models/TopUpEsimOkResponse.md)                           |             |
| [EditPurchaseRequest](documentation/models/EditPurchaseRequest.md)                           |             |
| [EditPurchaseOkResponse](documentation/models/EditPurchaseOkResponse.md)                     |             |
| [GetPurchaseConsumptionOkResponse](documentation/models/GetPurchaseConsumptionOkResponse.md) |             |
| [GetEsimOkResponse](documentation/models/GetEsimOkResponse.md)                               |             |
| [GetEsimDeviceOkResponse](documentation/models/GetEsimDeviceOkResponse.md)                   |             |
| [GetEsimHistoryOkResponse](documentation/models/GetEsimHistoryOkResponse.md)                 |             |
| [GetEsimMacOkResponse](documentation/models/GetEsimMacOkResponse.md)                         |             |

</details>

## License

This SDK is licensed under the MIT License.

See the [LICENSE](LICENSE) file for more details.
