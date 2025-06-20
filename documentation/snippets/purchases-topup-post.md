```typescript
import { Celitech, TopUpEsimRequest } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const topUpEsimRequest: TopUpEsimRequest = {
    iccid: '1111222233334444555000',
    dataLimitInGb: 1,
    startDate: '2023-11-01',
    endDate: '2023-11-20',
  };

  const { data } = await celitech.purchases.topUpEsim(topUpEsimRequest);

  console.log(data);
})();
```
