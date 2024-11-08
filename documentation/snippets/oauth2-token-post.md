```typescript
import { Celitech, GetAccessTokenRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({});

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
