```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({});

  const { data } = await celitech.eSim.getEsimHistory('1111222233334444555000');

  console.log(data);
})();
```
