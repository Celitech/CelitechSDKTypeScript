```typescript
import { Celitech, GetAccessTokenRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({});

  const getAccessTokenRequest: GetAccessTokenRequest = {};

  const { data } = await celitech.oAuth.getAccessToken(getAccessTokenRequest);

  console.log(data);
})();
```
