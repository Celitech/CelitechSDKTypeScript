# PurchasesService

A list of all methods in the `PurchasesService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createPurchaseV2](#createpurchasev2)             | This endpoint is used to purchase a new eSIM by providing the package details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [listPurchases](#listpurchases)                   | This endpoint can be used to list all the successful purchases made between a given interval.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [createPurchase](#createpurchase)                 | This endpoint is used to purchase a new eSIM by providing the package details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [topUpEsim](#topupesim)                           | This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.                                                                                                                                                                                                                                                                                                                                                                                                    |
| [editPurchase](#editpurchase)                     | This endpoint allows you to modify the validity dates of an existing purchase. **Behavior:** - If the purchase has **not yet been activated**, both the start and end dates can be updated. - If the purchase is **already active**, only the **end date** can be updated, while the **start date must remain unchanged** (and should be passed as originally set). - Updates must comply with the same pricing structure; the modification cannot alter the package size or change its duration category. The end date can be extended or shortened as long as it adheres to the same pricing category and does not exceed the allowed duration limits. |
| [getPurchaseConsumption](#getpurchaseconsumption) | This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## createPurchaseV2

This endpoint is used to purchase a new eSIM by providing the package details.

- HTTP Method: `POST`
- Endpoint: `/purchases/v2`

**Parameters**

| Name    | Type                                                                        | Required | Description       |
| :------ | :-------------------------------------------------------------------------- | :------- | :---------------- |
| request | [CelitechApi.CreatePurchaseV2Request](../models/CreatePurchaseV2Request.md) | ✅        | The request body. |

**Return Type**

[`CelitechApi.CreatePurchaseV2ResponseItem[]`](../models/CreatePurchaseV2ResponseItem.md)

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const client = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await client.purchases.createPurchaseV2({
    destination: 'FRA',
    dataLimitInGB: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    duration: 30,
    quantity: 1,
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    networkBrand: 'CELITECH',
    emailBrand: 'CELITECH',
    language: 'en',
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
| purchaseId  | string | ❌        | ID of the purchase                                                                                                                                                                                                  |
| iccid       | string | ❌        | ID of the eSIM                                                                                                                                                                                                      |
| afterDate   | string | ❌        | Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                       |
| beforeDate  | string | ❌        | End date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                         |
| email       | string | ❌        | Email associated to the purchase.                                                                                                                                                                                   |
| referenceId | string | ❌        | The referenceId that was provided by the partner during the purchase or topup flow.                                                                                                                                 |
| afterCursor | string | ❌        | To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data. |
| limit       | number | ❌        | Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20                                                |
| after       | number | ❌        | Epoch value representing the start of the time interval for filtering purchases                                                                                                                                     |
| before      | number | ❌        | Epoch value representing the end of the time interval for filtering purchases                                                                                                                                       |

**Return Type**

[`CelitechApi.ListPurchasesResponse`](../models/ListPurchasesResponse.md)

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const client = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await client.purchases.listPurchases();

  console.log(data);
})();
```

## createPurchase

This endpoint is used to purchase a new eSIM by providing the package details.

- HTTP Method: `POST`
- Endpoint: `/purchases`

**Parameters**

| Name    | Type                                                                    | Required | Description       |
| :------ | :---------------------------------------------------------------------- | :------- | :---------------- |
| request | [CelitechApi.CreatePurchaseRequest](../models/CreatePurchaseRequest.md) | ✅        | The request body. |

**Return Type**

[`CelitechApi.CreatePurchaseResponse`](../models/CreatePurchaseResponse.md)

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const client = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await client.purchases.createPurchase({
    destination: 'FRA',
    dataLimitInGB: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    networkBrand: 'CELITECH',
    emailBrand: 'CELITECH',
    language: 'en',
  });

  console.log(data);
})();
```

## topUpEsim

This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.

- HTTP Method: `POST`
- Endpoint: `/purchases/topup`

**Parameters**

| Name    | Type                                                          | Required | Description       |
| :------ | :------------------------------------------------------------ | :------- | :---------------- |
| request | [CelitechApi.TopUpEsimRequest](../models/TopUpEsimRequest.md) | ✅        | The request body. |

**Return Type**

[`CelitechApi.TopUpEsimResponse`](../models/TopUpEsimResponse.md)

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const client = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await client.purchases.topUpEsim({
    iccid: '1111222233334444555000',
    dataLimitInGB: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    duration: 30,
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    emailBrand: 'CELITECH',
  });

  console.log(data);
})();
```

## editPurchase

This endpoint allows you to modify the validity dates of an existing purchase.  

**Behavior:**
- If the purchase has **not yet been activated**, both the start and end dates can be updated.  
- If the purchase is **already active**, only the **end date** can be updated, while the **start date must remain unchanged** (and should be passed as originally set).  
- Updates must comply with the same pricing structure; the modification cannot alter the package size or change its duration category.  

The end date can be extended or shortened as long as it adheres to the same pricing category and does not exceed the allowed duration limits.

- HTTP Method: `POST`
- Endpoint: `/purchases/edit`

**Parameters**

| Name    | Type                                                                | Required | Description       |
| :------ | :------------------------------------------------------------------ | :------- | :---------------- |
| request | [CelitechApi.EditPurchaseRequest](../models/EditPurchaseRequest.md) | ✅        | The request body. |

**Return Type**

[`CelitechApi.EditPurchaseResponse`](../models/EditPurchaseResponse.md)

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const client = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await client.purchases.editPurchase({
    purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
    startDate: '2023-11-01',
    endDate: '2023-11-20',
  });

  console.log(data);
})();
```

## getPurchaseConsumption

This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.

- HTTP Method: `GET`
- Endpoint: `/purchases/{purchaseId}/consumption`

**Parameters**

| Name       | Type   | Required | Description        |
| :--------- | :----- | :------- | :----------------- |
| purchaseId | string | ✅        | ID of the purchase |

**Return Type**

[`CelitechApi.GetPurchaseConsumptionResponse`](../models/GetPurchaseConsumptionResponse.md)

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const client = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await client.purchases.getPurchaseConsumption({
    purchaseId: '4973fa15-6979-4daa-9cf3-672620df819c',
  });

  console.log(data);
})();
```
