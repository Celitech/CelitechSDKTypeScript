# EsimService

A list of all methods in the `EsimService` service. Click on the method name to view detailed information about that method.

| Methods             | Description |
| :------------------ | :---------- |
| [getESim](#getesim) | Get eSIM    |

## getESim

Get eSIM

- HTTP Method: `GET`
- Endpoint: `/esim`

**Parameters**

| Name   | Type   | Required | Description    |
| :----- | :----- | :------- | :------------- |
| accept | string | ✅       |                |
| iccid  | string | ❌       | ID of the eSIM |

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

  const data = await celitech.esim.getESim({
    accept: 'application/json',
  });

  console.log(data);
})();
```
