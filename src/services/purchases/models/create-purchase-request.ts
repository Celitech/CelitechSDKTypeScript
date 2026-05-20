import { z } from 'zod';

/**
 * Zod schema for the CreatePurchaseRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPurchaseRequest = z.lazy(() => {
  return z.object({
    destination: z.string().optional().nullable(),
    dataLimitInGb: z.number().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    referenceId: z.string().optional().nullable(),
    networkBrand: z.string().optional().nullable(),
    emailBrand: z.string().optional().nullable(),
    language: z.string().optional().nullable(),
    startTime: z.number().optional().nullable(),
    endTime: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseRequest} createPurchaseRequest
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type CreatePurchaseRequest = z.infer<typeof createPurchaseRequest>;

/**
 * Zod schema for mapping API responses to the CreatePurchaseRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseRequestResponse = z.lazy(() => {
  return z
    .object({
      destination: z.string().optional().nullable(),
      dataLimitInGB: z.number().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      referenceId: z.string().optional().nullable(),
      networkBrand: z.string().optional().nullable(),
      emailBrand: z.string().optional().nullable(),
      language: z.string().optional().nullable(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGb: data['dataLimitInGB'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      emailBrand: data['emailBrand'],
      language: data['language'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});

/**
 * Zod schema for mapping the CreatePurchaseRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseRequestRequest = z.lazy(() => {
  return z
    .object({
      destination: z.string().optional().nullable(),
      dataLimitInGb: z.number().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      referenceId: z.string().optional().nullable(),
      networkBrand: z.string().optional().nullable(),
      emailBrand: z.string().optional().nullable(),
      language: z.string().optional().nullable(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGB: data['dataLimitInGb'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      emailBrand: data['emailBrand'],
      language: data['language'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
