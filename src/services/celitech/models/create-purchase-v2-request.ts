import { z } from 'zod';

/**
 * Zod schema for the CreatePurchaseV2Request model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPurchaseV2Request = z.lazy(() => {
  return z.object({
    destination: z.string().optional().nullable(),
    dataLimitInGb: z.number().optional().nullable(),
    quantity: z.number().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    duration: z.number().optional().nullable(),
    email: z.string().optional().nullable(),
    referenceId: z.string().optional().nullable(),
    networkBrand: z.string().optional().nullable(),
    emailBrand: z.string().optional().nullable(),
    language: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseV2Request} createPurchaseV2Request
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type CreatePurchaseV2Request = z.infer<typeof createPurchaseV2Request>;

/**
 * Zod schema for mapping API responses to the CreatePurchaseV2Request application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseV2RequestResponse = z.lazy(() => {
  return z
    .object({
      destination: z.string().optional().nullable(),
      dataLimitInGB: z.number().optional().nullable(),
      quantity: z.number().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      duration: z.number().optional().nullable(),
      email: z.string().optional().nullable(),
      referenceId: z.string().optional().nullable(),
      networkBrand: z.string().optional().nullable(),
      emailBrand: z.string().optional().nullable(),
      language: z.string().optional().nullable(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGb: data['dataLimitInGB'],
      quantity: data['quantity'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      emailBrand: data['emailBrand'],
      language: data['language'],
    }));
});

/**
 * Zod schema for mapping the CreatePurchaseV2Request application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseV2RequestRequest = z.lazy(() => {
  return z
    .object({
      destination: z.string().optional().nullable(),
      dataLimitInGb: z.number().optional().nullable(),
      quantity: z.number().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      duration: z.number().optional().nullable(),
      email: z.string().optional().nullable(),
      referenceId: z.string().optional().nullable(),
      networkBrand: z.string().optional().nullable(),
      emailBrand: z.string().optional().nullable(),
      language: z.string().optional().nullable(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGB: data['dataLimitInGb'],
      quantity: data['quantity'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      emailBrand: data['emailBrand'],
      language: data['language'],
    }));
});
