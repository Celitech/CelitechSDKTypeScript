import { Celitech } from 'celitech-sdk';

const sdk = new Celitech();

(async () => {
  try {
    const result = await sdk.destinations.listDestinations();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();
