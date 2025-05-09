import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
