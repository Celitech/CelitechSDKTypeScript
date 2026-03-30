import { z } from 'zod';

/**
 * Zod schema for the CreatePurchaseOkResponsePurchase model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPurchaseOkResponsePurchase = z.lazy(() => {
  return z.object({
    id: z.string(),
    packageId: z.string(),
    startDate: z.string().nullable(),
    endDate: z.string().nullable(),
    createdDate: z.string(),
    startTime: z.number().optional().nullable(),
    endTime: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseOkResponsePurchase} createPurchaseOkResponsePurchase
 * @property {string} - ID of the purchase
 * @property {string} - ID of the package
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {string} - Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - Epoch value representing the start time of the package's validity
 * @property {number} - Epoch value representing the end time of the package's validity
 */
export type CreatePurchaseOkResponsePurchase = z.infer<typeof createPurchaseOkResponsePurchase>;

/**
 * Zod schema for mapping API responses to the CreatePurchaseOkResponsePurchase application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseOkResponsePurchaseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      packageId: z.string(),
      startDate: z.string().nullable(),
      endDate: z.string().nullable(),
      createdDate: z.string(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      packageId: data['packageId'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      createdDate: data['createdDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});

/**
 * Zod schema for mapping the CreatePurchaseOkResponsePurchase application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseOkResponsePurchaseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      packageId: z.string(),
      startDate: z.string().nullable(),
      endDate: z.string().nullable(),
      createdDate: z.string(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      packageId: data['packageId'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      createdDate: data['createdDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
