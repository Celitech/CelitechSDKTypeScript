```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const { data } = await celitech.purchases.getPurchaseConsumption('4973fa15-6979-4daa-9cf3-672620df819c');

  console.log(data);
})();
```
