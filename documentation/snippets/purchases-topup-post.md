```typescript
import { Celitech, TopUpEsimRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientSecret: 'CLIENT_SECRET',
    clientId: 'CLIENT_ID',
  });

  const topUpEsimRequest: TopUpEsimRequest = {
    iccid: '1111222233334444555000',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    email: 'example@domain.com',
    referenceId: 'abc111222333444',
  };

  const { data } = await celitech.purchases.topUpEsim(topUpEsimRequest);

  console.log(data);
})();
```
