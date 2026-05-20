# TopupService

A list of all methods in the `TopupService` service. Click on the method name to view detailed information about that method.

| Methods                 | Description                                                                                                                                                                                                                                           |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [topUpESim](#topupesim) | This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag. |

## topUpESim

This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.

- HTTP Method: `POST`
- Endpoint: `/purchases/topup`

**Parameters**

| Name   | Type                                              | Required | Description       |
| :----- | :------------------------------------------------ | :------- | :---------------- |
| body   | [TopUpESimRequest](../models/TopUpESimRequest.md) | ✅       | The request body. |
| accept | string                                            | ✅       |                   |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { Celitech, TopUpESimRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const topUpESimRequest: TopUpESimRequest = {};

  const data = await celitech.topup.topUpESim(topUpESimRequest, {
    accept: 'application/json',
  });

  console.log(data);
})();
```
