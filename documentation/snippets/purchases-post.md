```typescript
import { Celitech } from 'celitech-sdk';
import { CreatePurchaseRequest } from 'celitech-sdk/services/src/services/purchases/models';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const input: CreatePurchaseRequest = {
    destination: 'FRA',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    networkBrand: 'CELITECH',
    startTime: 2.37,
    endTime: 8.12,
  };

  const { data } = await celitech.purchases.createPurchase(input);

  console.log(data);
})();
```
