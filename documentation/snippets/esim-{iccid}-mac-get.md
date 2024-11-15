```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientSecret: 'CLIENT_SECRET',
    clientId: 'CLIENT_ID',
  });

  const { data } = await celitech.eSim.getEsimMac('1111222233334444555000');

  console.log(data);
})();
```
