```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({});

  const { data } = await celitech.purchases.listPurchases({});

  console.log(data);
})();
```
