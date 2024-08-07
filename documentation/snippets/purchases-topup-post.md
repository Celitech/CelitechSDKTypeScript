```typescript
import { Celitech } from 'celitech-sdk';
import { TopUpEsimRequest } from 'celitech-sdk/services/src/services/purchases/models';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const input: TopUpEsimRequest = {
    iccid: '1111222233334444555',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    startTime: 8.12,
    endTime: 4.35,
  };

  const { data } = await celitech.purchases.topUpEsim(input);

  console.log(data);
})();
```
