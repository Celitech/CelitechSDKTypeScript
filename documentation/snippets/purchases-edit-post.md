```typescript
import { Celitech } from 'celitech-sdk';
import { EditPurchaseRequest } from 'celitech-sdk/services/src/services/purchases/models';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const input: EditPurchaseRequest = {
    purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    startTime: 8.76,
    endTime: 4.68,
  };

  const { data } = await celitech.purchases.editPurchase(input);

  console.log(data);
})();
```
