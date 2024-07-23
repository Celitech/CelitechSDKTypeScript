# PurchasesService

A list of all methods in the `PurchasesService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                                                                                                                                                                                                                                                                                                            |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [listPurchases](#listpurchases)                   | This endpoint can be used to list all the successful purchases made between a given interval.                                                                                                                                                                                                                          |
| [createPurchase](#createpurchase)                 | This endpoint is used to purchase a new eSIM by providing the package details.                                                                                                                                                                                                                                         |
| [topUpESIM](#topupesim)                           | This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.                                                                                                         |
| [editPurchase](#editpurchase)                     | This endpoint allows you to modify the dates of an existing package with a future activation start time. Editing can only be performed for packages that have not been activated, and it cannot change the package size. The modification must not change the package duration category to ensure pricing consistency. |
| [getPurchaseConsumption](#getpurchaseconsumption) | This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.                                                                                                                                       |

## listPurchases

This endpoint can be used to list all the successful purchases made between a given interval.

- HTTP Method: `GET`
- Endpoint: `/purchases`

**Parameters**

| Name        | Type   | Required | Description                                                                                                                                                                                                         |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| iccid       | string | ❌       | ID of the eSIM                                                                                                                                                                                                      |
| afterDate   | string | ❌       | Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                       |
| beforeDate  | string | ❌       | End date of the interval for filtering purchases in the format 'yyyy-MM-dd'                                                                                                                                         |
| referenceId | string | ❌       | The referenceId that was provided by the partner during the purchase or topup flow.                                                                                                                                 |
| afterCursor | string | ❌       | To get the next batch of results, use this parameter. It tells the API where to start fetching data after the last item you received. It helps you avoid repeats and efficiently browse through large sets of data. |
| limit       | number | ❌       | Maximum number of purchases to be returned in the response. The value must be greater than 0 and less than or equal to 100. If not provided, the default value is 20                                                |
| after       | number | ❌       | Epoch value representing the start of the time interval for filtering purchases                                                                                                                                     |
| before      | number | ❌       | Epoch value representing the end of the time interval for filtering purchases                                                                                                                                       |

**Return Type**

`ListPurchasesOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.purchases.listPurchases({});

  console.log(data);
})();
```

## createPurchase

This endpoint is used to purchase a new eSIM by providing the package details.

- HTTP Method: `POST`
- Endpoint: `/purchases`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [CreatePurchaseRequest](../models/CreatePurchaseRequest.md) | ✅       | The request body. |

**Return Type**

`CreatePurchaseOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech, CreatePurchaseRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const input: CreatePurchaseRequest = {
    destination: 'FRA',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    networkBrand: 'CELITECH',
    startTime: 2.37,
    endTime: 8.12,
  };

  const { data } = await celitech.purchases.createPurchase(input);

  console.log(data);
})();
```

## topUpESIM

This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.

- HTTP Method: `POST`
- Endpoint: `/purchases/topup`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [TopUpEsimRequest](../models/TopUpEsimRequest.md) | ✅       | The request body. |

**Return Type**

`TopUpEsimOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech, TopUpEsimRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const input: TopUpEsimRequest = {
    iccid: '1111222233334444555',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    startTime: 8.12,
    endTime: 4.35,
  };

  const { data } = await celitech.purchases.topUpEsim(input);

  console.log(data);
})();
```

## editPurchase

This endpoint allows you to modify the dates of an existing package with a future activation start time. Editing can only be performed for packages that have not been activated, and it cannot change the package size. The modification must not change the package duration category to ensure pricing consistency.

- HTTP Method: `POST`
- Endpoint: `/purchases/edit`

**Parameters**

| Name | Type                                                    | Required | Description       |
| :--- | :------------------------------------------------------ | :------- | :---------------- |
| body | [EditPurchaseRequest](../models/EditPurchaseRequest.md) | ✅       | The request body. |

**Return Type**

`EditPurchaseOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech, EditPurchaseRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const input: EditPurchaseRequest = {
    purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    startTime: 8.76,
    endTime: 4.68,
  };

  const { data } = await celitech.purchases.editPurchase(input);

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
| purchaseId | string | ✅       | ID of the purchase |

**Return Type**

`GetPurchaseConsumptionOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.purchases.getPurchaseConsumption('4973fa15-6979-4daa-9cf3-672620df819c');

  console.log(data);
})();
```