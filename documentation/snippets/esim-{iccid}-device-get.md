```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const { data } = await celitech.eSim.getEsimDevice('1111222233334444555000');

  console.log(data);
})();
```
