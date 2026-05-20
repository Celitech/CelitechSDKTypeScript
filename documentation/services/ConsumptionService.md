# ConsumptionService

A list of all methods in the `ConsumptionService` service. Click on the method name to view detailed information about that method.

| Methods                                           | Description                                                                                                                                                                      |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getPurchaseConsumption](#getpurchaseconsumption) | This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages. |

## getPurchaseConsumption

This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.

- HTTP Method: `GET`
- Endpoint: `/purchases/{purchaseId}/consumption`

**Parameters**

| Name       | Type   | Required | Description |
| :--------- | :----- | :------- | :---------- |
| purchaseId | string | ✅       |             |
| accept     | string | ✅       |             |

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

  const data = await celitech.consumption.getPurchaseConsumption('purchaseId', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
