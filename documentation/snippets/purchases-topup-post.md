```typescript
import { Celitech, TopUpEsimRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const topUpEsimRequest: TopUpEsimRequest = {
    iccid: '1111222233334444555',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
    startTime: 5.74,
    endTime: 9.23,
  };

  const { data } = await celitech.purchases.topUpEsim(input);

  console.log(data);
})();
```
