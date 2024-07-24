```typescript
import { Celitech, CreatePurchaseRequest } from 'celitech-sdk';

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
    startTime: 7.96,
    endTime: 6.46,
  };

  const { data } = await celitech.purchases.createPurchase(input);

  console.log(data);
})();
```