```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({});

  const { data } = await celitech.eSim.getEsimMac('1111222233334444555000');

  console.log(data);
})();
```
