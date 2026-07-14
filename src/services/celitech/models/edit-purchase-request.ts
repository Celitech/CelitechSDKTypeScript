import { z } from 'zod';

/**
 * Zod schema for the EditPurchaseRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editPurchaseRequest = z.lazy(() => {
  return z.object({
    purchaseId: z.string().optional().nullable(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    startTime: z.number().optional().nullable(),
    endTime: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {EditPurchaseRequest} editPurchaseRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 */
export type EditPurchaseRequest = z.infer<typeof editPurchaseRequest>;

/**
 * Zod schema for mapping API responses to the EditPurchaseRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editPurchaseRequestResponse = z.lazy(() => {
  return z
    .object({
      purchaseId: z.string().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      purchaseId: data['purchaseId'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});

/**
 * Zod schema for mapping the EditPurchaseRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editPurchaseRequestRequest = z.lazy(() => {
  return z
    .object({
      purchaseId: z.string().optional().nullable(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      purchaseId: data['purchaseId'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
