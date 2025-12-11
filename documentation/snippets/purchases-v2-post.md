```typescript
import { Celitech, CreatePurchaseV2Request, CreatePurchaseV2RequestDuration } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const createPurchaseV2Request: CreatePurchaseV2Request = {
    destination: 'FRA',
    dataLimitInGb: 1,
    quantity: 1,
  };

  const { data } = await celitech.purchases.createPurchaseV2(createPurchaseV2Request);

  console.log(data);
})();
```
