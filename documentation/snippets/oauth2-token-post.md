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
