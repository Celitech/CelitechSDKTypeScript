import { z } from 'zod';

/**
 * Zod schema for the EditPurchaseOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editPurchaseOkResponse = z.lazy(() => {
  return z.object({
    purchaseId: z.string(),
    newStartDate: z.string().nullable(),
    newEndDate: z.string().nullable(),
    newStartTime: z.number().optional().nullable(),
    newEndTime: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {EditPurchaseOkResponse} editPurchaseOkResponse
 * @property {string} - ID of the purchase
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - Epoch value representing the new start time of the package's validity
 * @property {number} - Epoch value representing the new end time of the package's validity
 */
export type EditPurchaseOkResponse = z.infer<typeof editPurchaseOkResponse>;

/**
 * Zod schema for mapping API responses to the EditPurchaseOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editPurchaseOkResponseResponse = z.lazy(() => {
  return z
    .object({
      purchaseId: z.string(),
      newStartDate: z.string().nullable(),
      newEndDate: z.string().nullable(),
      newStartTime: z.number().optional().nullable(),
      newEndTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      purchaseId: data['purchaseId'],
      newStartDate: data['newStartDate'],
      newEndDate: data['newEndDate'],
      newStartTime: data['newStartTime'],
      newEndTime: data['newEndTime'],
    }));
});

/**
 * Zod schema for mapping the EditPurchaseOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const editPurchaseOkResponseRequest = z.lazy(() => {
  return z
    .object({
      purchaseId: z.string(),
      newStartDate: z.string().nullable(),
      newEndDate: z.string().nullable(),
      newStartTime: z.number().optional().nullable(),
      newEndTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      purchaseId: data['purchaseId'],
      newStartDate: data['newStartDate'],
      newEndDate: data['newEndDate'],
      newStartTime: data['newStartTime'],
      newEndTime: data['newEndTime'],
    }));
});
