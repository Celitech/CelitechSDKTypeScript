# Token_Service

A list of all methods in the `Token_Service` service. Click on the method name to view detailed information about that method.

| Methods                         | Description                                   |
| :------------------------------ | :-------------------------------------------- |
| [generateToken](#generatetoken) | Generate a new token to be used in the iFrame |

## generateToken

Generate a new token to be used in the iFrame

- HTTP Method: `POST`
- Endpoint: `/iframe/token`

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

  const data = await celitech.token_.generateToken({
    accept: 'application/json',
  });

  console.log(data);
})();
```
