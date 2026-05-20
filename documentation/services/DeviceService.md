# DeviceService

A list of all methods in the `DeviceService` service. Click on the method name to view detailed information about that method.

| Methods                         | Description     |
| :------------------------------ | :-------------- |
| [getESimDevice](#getesimdevice) | Get eSIM Device |

## getESimDevice

Get eSIM Device

- HTTP Method: `GET`
- Endpoint: `/esim/{iccid}/device`

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

  const data = await celitech.device.getESimDevice('iccid', {
    accept: 'application/json',
  });

  console.log(data);
})();
```
