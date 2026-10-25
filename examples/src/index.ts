import { Celitech } from 'celitech-sdk';

(async () => {
  const client = new Celitech({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  });

  const data = await client.destinations.listDestinations();

  console.log(data);
})();
