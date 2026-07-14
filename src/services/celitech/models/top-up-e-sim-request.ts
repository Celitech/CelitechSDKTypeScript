import { z } from 'zod';

/**
 * Zod schema for the TopUpESimRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const topUpESimRequest = z.lazy(() => {
  return z.object({
    iccid: z.string().optional().nullable(),
    dataLimitInGb: z.number().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    duration: z.number().optional().nullable(),
    email: z.string().optional().nullable(),
    referenceId: z.string().optional().nullable(),
    emailBrand: z.string().optional().nullable(),
    startTime: z.number().optional().nullable(),
    endTime: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TopUpESimRequest} topUpESimRequest
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type TopUpESimRequest = z.infer<typeof topUpESimRequest>;

/**
 * Zod schema for mapping API responses to the TopUpESimRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const topUpESimRequestResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().optional().nullable(),
      dataLimitInGB: z.number().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      duration: z.number().optional().nullable(),
      email: z.string().optional().nullable(),
      referenceId: z.string().optional().nullable(),
      emailBrand: z.string().optional().nullable(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      dataLimitInGb: data['dataLimitInGB'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      email: data['email'],
      referenceId: data['referenceId'],
      emailBrand: data['emailBrand'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});

/**
 * Zod schema for mapping the TopUpESimRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const topUpESimRequestRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().optional().nullable(),
      dataLimitInGb: z.number().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      duration: z.number().optional().nullable(),
      email: z.string().optional().nullable(),
      referenceId: z.string().optional().nullable(),
      emailBrand: z.string().optional().nullable(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      dataLimitInGB: data['dataLimitInGb'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      email: data['email'],
      referenceId: data['referenceId'],
      emailBrand: data['emailBrand'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
