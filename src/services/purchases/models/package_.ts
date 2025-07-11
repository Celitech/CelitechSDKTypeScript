import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const package_ = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    dataLimitInBytes: z.number().optional(),
    destination: z.string().optional(),
    destinationName: z.string().optional(),
    priceInCents: z.number().optional(),
  });
});

/**
 *
 * @typedef  {Package_} package_
 * @property {string} - ID of the package
 * @property {number} - Size of the package in Bytes
 * @property {string} - ISO representation of the package's destination.
 * @property {string} - Name of the package's destination
 * @property {number} - Price of the package in cents
 */
export type Package_ = z.infer<typeof package_>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const packageResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      dataLimitInBytes: z.number().optional(),
      destination: z.string().optional(),
      destinationName: z.string().optional(),
      priceInCents: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      dataLimitInBytes: data['dataLimitInBytes'],
      destination: data['destination'],
      destinationName: data['destinationName'],
      priceInCents: data['priceInCents'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const packageRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      dataLimitInBytes: z.number().optional(),
      destination: z.string().optional(),
      destinationName: z.string().optional(),
      priceInCents: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      dataLimitInBytes: data['dataLimitInBytes'],
      destination: data['destination'],
      destinationName: data['destinationName'],
      priceInCents: data['priceInCents'],
    }));
});
