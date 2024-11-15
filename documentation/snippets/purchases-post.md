```typescript
import { Celitech, CreatePurchaseRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientSecret: 'CLIENT_SECRET',
    clientId: 'CLIENT_ID',
  });

  const createPurchaseRequest: CreatePurchaseRequest = {
    destination: 'FRA',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    networkBrand: 'CELITECH',
  };

  const { data } = await celitech.purchases.createPurchase(createPurchaseRequest);

  console.log(data);
})();
```
