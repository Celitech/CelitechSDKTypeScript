# PurchasesService

A list of all methods in the `PurchasesService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                                                                                   |
| :-------------------------------- | :-------------------------------------------------------------------------------------------- |
| [createPurchase](#createpurchase) | This endpoint is used to purchase a new eSIM by providing the package details.                |
| [listPurchases](#listpurchases)   | This endpoint can be used to list all the successful purchases made between a given interval. |

## createPurchase

This endpoint is used to purchase a new eSIM by providing the package details.

- HTTP Method: `POST`
- Endpoint: `/purchases`

**Parameters**

| Name   | Type                                                        | Required | Description       |
| :----- | :---------------------------------------------------------- | :------- | :---------------- |
| body   | [CreatePurchaseRequest](../models/CreatePurchaseRequest.md) | ✅       | The request body. |
| accept | string                                                      | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Celitech, CreatePurchaseRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const createPurchaseRequest: CreatePurchaseRequest = {};

  const data = await celitech.purchases.createPurchase(createPurchaseRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```

## listPurchases

This endpoint can be used to list all the successful purchases made between a given interval.

- HTTP Method: `GET`
- Endpoint: `/purchases`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                                                                                         |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accept      | string | ✅       |                                                                                                                                                                                                                     |
| purchaseId  | string | ❌       | ID of the purchase                                                                                                                                                                                                  |
| iccid       | string | ❌       | ID of the eSIM                                                                                                                                                                                                      |
| afterDate   | string | ❌       | Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                       |
| beforeDate  | string | ❌       | End date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                         |
| email       | string | ❌       | Email associated to the purchase.                                                                                                                                                                                   |
| referenceId | string | ❌       | The referenceId that was provided by the partner during the purchase or topup flow.                                                                                                                                 |
| afterCursor | string | ❌       | To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data. |
| limit       | string | ❌       | Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20                                                |
| after       | string | ❌       | Epoch value representing the start of the time interval for filtering purchases                                                                                                                                     |
| before      | string | ❌       | Epoch value representing the end of the time interval for filtering purchases                                                                                                                                       |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await celitech.purchases.listPurchases({
    accept: 'application/json',
  });

  console.log(data);
})();
```
