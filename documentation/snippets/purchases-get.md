```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientSecret: 'CLIENT_SECRET',
    clientId: 'CLIENT_ID',
  });

  const { data } = await celitech.purchases.listPurchases({});

  console.log(data);
})();
```
