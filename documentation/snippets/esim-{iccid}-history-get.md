```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.eSim.getEsimHistory('1111222233334444555');

  console.log(data);
})();
```
