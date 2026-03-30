import { z } from 'zod';

/**
 * Zod schema for the Package_ model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const package_ = z.lazy(() => {
  return z.object({
    id: z.string(),
    dataLimitInBytes: z.number(),
    dataLimitInGb: z.number(),
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
 * @property {number} - Size of the package in GB
 * @property {string} - ISO3 representation of the package's destination.
 * @property {string} - ISO2 representation of the package's destination.
 * @property {string} - Name of the package's destination
 * @property {number} - Price of the package in cents
 */
export type Package_ = z.infer<typeof package_>;

/**
 * Zod schema for mapping API responses to the Package_ application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const packageResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      dataLimitInBytes: z.number(),
      dataLimitInGB: z.number(),
      destination: z.string(),
      destinationISO2: z.string(),
      destinationName: z.string(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      dataLimitInBytes: data['dataLimitInBytes'],
      dataLimitInGb: data['dataLimitInGB'],
      destination: data['destination'],
      destinationIso2: data['destinationISO2'],
      destinationName: data['destinationName'],
      priceInCents: data['priceInCents'],
    }));
});

/**
 * Zod schema for mapping the Package_ application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const packageRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      dataLimitInBytes: z.number(),
      dataLimitInGb: z.number(),
      destination: z.string(),
      destinationIso2: z.string(),
      destinationName: z.string(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      dataLimitInBytes: data['dataLimitInBytes'],
      dataLimitInGB: data['dataLimitInGb'],
      destination: data['destination'],
      destinationISO2: data['destinationIso2'],
      destinationName: data['destinationName'],
      priceInCents: data['priceInCents'],
    }));
});
