import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const package_ = z.lazy(() => {
  return z.object({
    id: z.string(),
    dataLimitInBytes: z.number(),
    destination: z.string(),
    destinationIso2: z.string(),
    destinationName: z.string(),
    priceInCents: z.number(),
  });
});

/**
 *
 * @typedef  {Package_} package_
 * @property {string} - ID of the package
 * @property {number} - Size of the package in Bytes
 * @property {string} - ISO3 representation of the package's destination.
 * @property {string} - ISO2 representation of the package's destination.
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
      id: z.string(),
      dataLimitInBytes: z.number(),
      destination: z.string(),
      destinationISO2: z.string(),
      destinationName: z.string(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      dataLimitInBytes: data['dataLimitInBytes'],
      destination: data['destination'],
      destinationIso2: data['destinationISO2'],
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
      id: z.string(),
      dataLimitInBytes: z.number(),
      destination: z.string(),
      destinationIso2: z.string(),
      destinationName: z.string(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      dataLimitInBytes: data['dataLimitInBytes'],
      destination: data['destination'],
      destinationISO2: data['destinationIso2'],
      destinationName: data['destinationName'],
      priceInCents: data['priceInCents'],
    }));
});
