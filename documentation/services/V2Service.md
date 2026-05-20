# V2Service

A list of all methods in the `V2Service` service. Click on the method name to view detailed information about that method.

| Methods                               | Description                                                                    |
| :------------------------------------ | :----------------------------------------------------------------------------- |
| [createPurchaseV2](#createpurchasev2) | This endpoint is used to purchase a new eSIM by providing the package details. |

## createPurchaseV2

This endpoint is used to purchase a new eSIM by providing the package details.

- HTTP Method: `POST`
- Endpoint: `/purchases/v2`

**Parameters**

| Name   | Type                                                            | Required | Description       |
| :----- | :-------------------------------------------------------------- | :------- | :---------------- |
| body   | [CreatePurchaseV2Request](../models/CreatePurchaseV2Request.md) | ✅       | The request body. |
| accept | string                                                          | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Celitech, CreatePurchaseV2Request } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const createPurchaseV2Request: CreatePurchaseV2Request = {};

  const data = await celitech.v2.createPurchaseV2(createPurchaseV2Request, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
