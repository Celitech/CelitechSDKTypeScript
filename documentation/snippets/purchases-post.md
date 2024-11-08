```typescript
import { Celitech, CreatePurchaseRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({});

  const createPurchaseRequest: CreatePurchaseRequest = {
    destination: 'FRA',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    networkBrand: 'CELITECH',
    startTime: 2.34,
    endTime: 1.15,
  };

  const { data } = await celitech.purchases.createPurchase(createPurchaseRequest);

  console.log(data);
})();
```
