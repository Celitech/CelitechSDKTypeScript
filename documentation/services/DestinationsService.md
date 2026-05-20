# DestinationsService

A list of all methods in the `DestinationsService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description       |
| :------------------------------------ | :---------------- |
| [listDestinations](#listdestinations) | List Destinations |

## listDestinations

List Destinations

- HTTP Method: `GET`
- Endpoint: `/destinations`

**Parameters**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
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

  const data = await celitech.destinations.listDestinations({
    accept: 'application/json',
  });

  console.log(data);
})();
```
