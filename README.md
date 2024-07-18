# Celitech Typescript SDK 1.1.60

The Typescript SDK for Celitech.

- API version: 1.1.60
- SDK version: 1.1.60

## Table of Contents

- [About the API](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoint Services](#api-endpoint-services)
- [API Models](#api-models)
- [Sample Usage](#sample-usage)
- [Celitech Services](#celitech-services)
- [License](#license)

## About the API

Welcome to the CELITECH API documentation! Useful links: [Homepage](https://www.celitech.com) | [Support email](mailto:support@celitech.com) | [Blog](https://www.celitech.com/blog/)

## Installation

```sh
npm install celitech-sdk
```

## Environment Variables

You will need the following environment variables in order to access all the features of this SDK:

| Name          | Description             |
| :------------ | :---------------------- |
| CLIENT_ID     | Client ID parameter     |
| CLIENT_SECRET | Client Secret parameter |

You can set these environment variables on the command line or you can use
whatever tooling your project has in place to manage environment variables. If
you are using a `.env` file, we have provided a template with the variable names
in the `.env.example` file in the same directory as this readme.

## Sample Usage

Here is a simple program demonstrating usage of this SDK. It can also be found in the `examples/src/index.ts` file in this directory.

When running the sample make sure to use `npm install` to install all the dependencies.

```Typescript
import { Celitech } from 'celitech-sdk';


const sdk = new Celitech();

(async () => {
  try {
    const result = await sdk.destinations
      .listDestinations();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();


```

# Celitech Services

A list of all services and services methods.

- Services

  - [Destinations](#destinations)

  - [Packages](#packages)

  - [Purchases](#purchases)

  - [ESim](#esim)

- [All Methods](#all-methods)

## Destinations

| Method                                | Description       |
| :------------------------------------ | :---------------- |
| [listDestinations](#listdestinations) | List Destinations |

## Packages

| Method                        | Description   |
| :---------------------------- | :------------ |
| [listPackages](#listpackages) | List Packages |

## Purchases

| Method                                            | Description              |
| :------------------------------------------------ | :----------------------- |
| [createPurchase](#createpurchase)                 | Create Purchase          |
| [listPurchases](#listpurchases)                   | List Purchases           |
| [topUpEsim](#topupesim)                           | Top-up eSIM              |
| [editPurchase](#editpurchase)                     | Edit Purchase            |
| [getPurchaseConsumption](#getpurchaseconsumption) | Get Purchase Consumption |

## ESim

| Method                            | Description      |
| :-------------------------------- | :--------------- |
| [getEsim](#getesim)               | Get eSIM Status  |
| [getEsimDevice](#getesimdevice)   | Get eSIM Device  |
| [getEsimHistory](#getesimhistory) | Get eSIM History |
| [getEsimMac](#getesimmac)         | Get eSIM MAC     |

## All Methods

### **listDestinations**

List Destinations

- HTTP Method: GET
- Endpoint: /destinations

**Return Type**

ListDestinationsResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.destinations.listDestinations();
  console.log(result);
})();

```

### **listPackages**

List Packages

- HTTP Method: GET
- Endpoint: /packages

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name        | Type   | Description                                                                                                                                                                                                         |
| :---------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| destination | string | ISO representation of the package's destination.                                                                                                                                                                    |
| startDate   | string | Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.                                                                      |
| endDate     | string | End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.                                                                                                    |
| afterCursor | string | To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data. |
| limit       | number | Maximum number of packages to be returned in the response. The value must be greater than 0 and less than or equal to 160. If not provided, the default value is 20                                                 |
| startTime   | number | Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months                                                              |
| endTime     | number | Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time                                                                                                   |
| duration    | number | Duration in seconds for the package's validity. If this parameter is present, it will override the startTime and endTime parameters. The maximum duration for a package's validity period is 90 days                |

**Return Type**

ListPackagesResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.packages.listPackages();
  console.log(result);
})();

```

### **createPurchase**

Create Purchase

- HTTP Method: POST
- Endpoint: /purchases

**Required Parameters**

| input | object | Request body. |

**Return Type**

CreatePurchaseResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const input = {
    dataLimitInGB: 1,
    destination: 'FRA',
    endDate: '2023-11-20',
    startDate: '2023-11-01',
  };
  const result = await sdk.purchases.createPurchase(input);
  console.log(result);
})();

```

### **listPurchases**

List Purchases

- HTTP Method: GET
- Endpoint: /purchases

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name        | Type   | Description                                                                                                                                                                                                         |
| :---------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| iccid       | string | ID of the eSIM                                                                                                                                                                                                      |
| afterDate   | string | Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                       |
| beforeDate  | string | End date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                         |
| referenceId | string | The referenceId that was provided by the partner during the purchase or topup flow.                                                                                                                                 |
| afterCursor | string | To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data. |
| limit       | number | Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20                                                |
| after       | number | Epoch value representing the start of the time interval for filtering purchases                                                                                                                                     |
| before      | number | Epoch value representing the end of the time interval for filtering purchases                                                                                                                                       |

**Return Type**

ListPurchasesResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.purchases.listPurchases();
  console.log(result);
})();

```

### **topUpEsim**

Top-up eSIM

- HTTP Method: POST
- Endpoint: /purchases/topup

**Required Parameters**

| input | object | Request body. |

**Return Type**

TopUpEsimResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const input = {
    dataLimitInGB: 1,
    endDate: '2023-11-20',
    iccid: '1111222233334444555',
    startDate: '2023-11-01',
  };
  const result = await sdk.purchases.topUpEsim(input);
  console.log(result);
})();

```

### **editPurchase**

Edit Purchase

- HTTP Method: POST
- Endpoint: /purchases/edit

**Required Parameters**

| input | object | Request body. |

**Return Type**

EditPurchaseResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const input = {
    endDate: '2023-11-20',
    purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
    startDate: '2023-11-01',
  };
  const result = await sdk.purchases.editPurchase(input);
  console.log(result);
})();

```

### **getPurchaseConsumption**

Get Purchase Consumption

- HTTP Method: GET
- Endpoint: /purchases/{purchaseId}/consumption

**Required Parameters**

| Name       | Type   | Description        |
| :--------- | :----- | :----------------- |
| purchaseId | string | ID of the purchase |

**Return Type**

GetPurchaseConsumptionResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.purchases.getPurchaseConsumption('4973fa15-6979-4daa-9cf3-672620df819c');
  console.log(result);
})();

```

### **getEsim**

Get eSIM Status

- HTTP Method: GET
- Endpoint: /esim

**Required Parameters**

| Name  | Type   | Description    |
| :---- | :----- | :------------- |
| iccid | string | ID of the eSIM |

**Return Type**

GetEsimResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsim('1111222233334444555');
  console.log(result);
})();

```

### **getEsimDevice**

Get eSIM Device

- HTTP Method: GET
- Endpoint: /esim/{iccid}/device

**Required Parameters**

| Name  | Type   | Description    |
| :---- | :----- | :------------- |
| iccid | string | ID of the eSIM |

**Return Type**

GetEsimDeviceResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsimDevice('1111222233334444555');
  console.log(result);
})();

```

### **getEsimHistory**

Get eSIM History

- HTTP Method: GET
- Endpoint: /esim/{iccid}/history

**Required Parameters**

| Name  | Type   | Description    |
| :---- | :----- | :------------- |
| iccid | string | ID of the eSIM |

**Return Type**

GetEsimHistoryResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsimHistory('1111222233334444555');
  console.log(result);
})();

```

### **getEsimMac**

Get eSIM MAC

- HTTP Method: GET
- Endpoint: /esim/{iccid}/mac

**Required Parameters**

| Name  | Type   | Description    |
| :---- | :----- | :------------- |
| iccid | string | ID of the eSIM |

**Return Type**

GetEsimMacResponse

**Example Usage Code Snippet**

```Typescript
import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsimMac('1111222233334444555');
  console.log(result);
})();

```

## License

License: MIT. See license in LICENSE.
