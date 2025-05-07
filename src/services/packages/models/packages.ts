import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const packages = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    destination: z.string().optional(),
    dataLimitInBytes: z.number().optional(),
    minDays: z.number().optional(),
    maxDays: z.number().optional(),
    priceInCents: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {Packages} packages   
 * @property {string} - ID of the package
 * @property {string} - ISO representation of the package's destination
 * @property {number} - Size of the package in bytes. For ``limited packages``, this field will return the data limit in bytes. For ``unlimited packages``, it will return ``-1`` as an identifier.

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
      id: z.string().optional(),
      destination: z.string().optional(),
      dataLimitInBytes: z.number().optional(),
      minDays: z.number().optional(),
      maxDays: z.number().optional(),
      priceInCents: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      destination: data['destination'],
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
      id: z.string().optional(),
      destination: z.string().optional(),
      dataLimitInBytes: z.number().optional(),
      minDays: z.number().optional(),
      maxDays: z.number().optional(),
      priceInCents: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      destination: data['destination'],
      dataLimitInBytes: data['dataLimitInBytes'],
      minDays: data['minDays'],
      maxDays: data['maxDays'],
      priceInCents: data['priceInCents'],
    }));
});
