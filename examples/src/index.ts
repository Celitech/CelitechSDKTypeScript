import { Celitech } from 'celitech';

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
