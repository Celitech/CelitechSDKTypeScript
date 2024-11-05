```typescript
import { Celitech, EditPurchaseRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const editPurchaseRequest: EditPurchaseRequest = {
    purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    startTime: 9.44,
    endTime: 3.81,
  };

  const { data } = await celitech.purchases.editPurchase(editPurchaseRequest);

  console.log(data);
})();
```
