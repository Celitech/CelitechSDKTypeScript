import { z } from 'zod';

/**
 * Zod schema for the Packages model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const packages = z.lazy(() => {
  return z.object({
    id: z.string(),
    destination: z.string(),
    destinationIso2: z.string(),
    dataLimitInBytes: z.number(),
    dataLimitInGb: z.number(),
    minDays: z.number(),
    maxDays: z.number(),
    priceInCents: z.number(),
  });
});

/**
 * @typedef {Packages} packages
 * @property {string} id - ID of the package
 * @property {string} destination - ISO3 representation of the package's destination.
 * @property {string} destinationIso2 - ISO2 representation of the package's destination.
 * @property {number} dataLimitInBytes - Size of the package in Bytes. A value of `-1` indicates an unlimited package.
 * @property {number} dataLimitInGb - Size of the package in GB. A value of `-1` indicates an unlimited (date-based) package.
 * @property {number} minDays - Min number of days for the package
 * @property {number} maxDays - Max number of days for the package
 * @property {number} priceInCents - Price of the package in cents
 */
export type Packages = z.infer<typeof packages>;

/**
 * Zod schema for mapping API responses to the Packages application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const packagesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      destination: z.string(),
      destinationISO2: z.string(),
      dataLimitInBytes: z.number(),
      dataLimitInGB: z.number(),
      minDays: z.number(),
      maxDays: z.number(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      destination: data['destination'],
      destinationIso2: data['destinationISO2'],
      dataLimitInBytes: data['dataLimitInBytes'],
      dataLimitInGb: data['dataLimitInGB'],
      minDays: data['minDays'],
      maxDays: data['maxDays'],
      priceInCents: data['priceInCents'],
    }));
});

/**
 * Zod schema for mapping the Packages application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const packagesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      destination: z.string(),
      destinationIso2: z.string(),
      dataLimitInBytes: z.number(),
      dataLimitInGb: z.number(),
      minDays: z.number(),
      maxDays: z.number(),
      priceInCents: z.number(),
    })
    .transform((data) => ({
      id: data['id'],
      destination: data['destination'],
      destinationISO2: data['destinationIso2'],
      dataLimitInBytes: data['dataLimitInBytes'],
      dataLimitInGB: data['dataLimitInGb'],
      minDays: data['minDays'],
      maxDays: data['maxDays'],
      priceInCents: data['priceInCents'],
    }));
});
