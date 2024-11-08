# OAuthService

A list of all methods in the `OAuthService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description                       |
| :-------------------------------- | :-------------------------------- |
| [getAccessToken](#getaccesstoken) | This endpoint was added by liblab |

## getAccessToken

This endpoint was added by liblab

- HTTP Method: `POST`
- Endpoint: `/oauth2/token`

**Parameters**

| Name | Type                                                        | Required | Description       |
| :--- | :---------------------------------------------------------- | :------- | :---------------- |
| body | [GetAccessTokenRequest](../models/GetAccessTokenRequest.md) | ✅       | The request body. |

**Return Type**

`GetAccessTokenOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech, GetAccessTokenRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const grantType = GrantType.CLIENT_CREDENTIALS;

  const getAccessTokenRequest: GetAccessTokenRequest = {
    grantType: grantType,
    clientId: 'client_id',
    clientSecret: 'client_secret',
  };

  const { data } = await celitech.oAuth.getAccessToken(getAccessTokenRequest);

  console.log(data);
})();
```