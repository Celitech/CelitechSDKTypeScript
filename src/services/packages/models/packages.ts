import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const packages = z.lazy(() => {
  return z.object({
    id: z.string(),
    destination: z.string(),
    destinationIso2: z.string(),
    dataLimitInBytes: z.number(),
    minDays: z.number(),
    maxDays: z.number(),
    priceInCents: z.number(),
  });
});

/**
 *
 * @typedef  {Packages} packages
 * @property {string} - ID of the package
 * @property {string} - ISO3 representation of the package's destination.
 * @property {string} - ISO2 representation of the package's destination.
 * @property {number} - Size of the package in Bytes
 * @property {number} - Min number of days for the package
 * @property {number} - Max number of days for the package
 * @property {number} - Price of the package in cents
 */
export type Packages = z.infer<typeof packages>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const packagesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      destination: z.string(),
      destinationISO2: z.string(),
      dataLimitInBytes: z.number(),
      minDays: z.number(),
      maxDays: z.number(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      destination: data['destination'],
      destinationIso2: data['destinationISO2'],
      dataLimitInBytes: data['dataLimitInBytes'],
      minDays: data['minDays'],
      maxDays: data['maxDays'],
      priceInCents: data['priceInCents'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const packagesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      destination: z.string(),
      destinationIso2: z.string(),
      dataLimitInBytes: z.number(),
      minDays: z.number(),
      maxDays: z.number(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      destination: data['destination'],
      destinationISO2: data['destinationIso2'],
      dataLimitInBytes: data['dataLimitInBytes'],
      minDays: data['minDays'],
      maxDays: data['maxDays'],
      priceInCents: data['priceInCents'],
    }));
});
