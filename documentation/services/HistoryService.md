# HistoryService

A list of all methods in the `HistoryService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description      |
| :-------------------------------- | :--------------- |
| [getESimHistory](#getesimhistory) | Get eSIM History |

## getESimHistory

Get eSIM History

- HTTP Method: `GET`
- Endpoint: `/esim/{iccid}/history`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| iccid  | string | ✅       |             |
| accept | string | ✅       |             |

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

  const data = await celitech.history.getESimHistory('iccid', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
