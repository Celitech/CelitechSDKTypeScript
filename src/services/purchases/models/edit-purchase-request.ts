import { z } from 'zod';

/**
 * Zod schema for the EditPurchaseRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const editPurchaseRequest = z.lazy(() => {
  return z.object({
    purchaseId: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    startTime: z.number().optional(),
    endTime: z.number().optional(),
  });
});

/**
 *
 * @typedef  {EditPurchaseRequest} editPurchaseRequest
 * @property {string} - ID of the purchase
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
 * @property {number} - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months.
 * @property {number} - Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time.
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
      purchaseId: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
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
      purchaseId: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
    })
    .transform((data) => ({
      purchaseId: data['purchaseId'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
