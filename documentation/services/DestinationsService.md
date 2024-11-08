# DestinationsService

A list of all methods in the `DestinationsService` service. Click on the method name to view detailed information about that method.

| Methods                               | Description       |
| :------------------------------------ | :---------------- |
| [listDestinations](#listdestinations) | List Destinations |

## listDestinations

List Destinations

- HTTP Method: `GET`
- Endpoint: `/destinations`

**Return Type**

`ListDestinationsOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({});

  const { data } = await celitech.destinations.listDestinations();

  console.log(data);
})();
```
