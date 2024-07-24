import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const editPurchaseOkResponse = z.lazy(() => {
  return z.object({
    purchaseId: z.string().optional(),
    newStartDate: z.string().optional(),
    newEndDate: z.string().optional(),
    newStartTime: z.number().optional(),
    newEndTime: z.number().optional(),
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const editPurchaseOkResponseResponse = z.lazy(() => {
  return z
    .object({
      purchaseId: z.string().optional(),
      newStartDate: z.string().optional(),
      newEndDate: z.string().optional(),
      newStartTime: z.number().optional(),
      newEndTime: z.number().optional(),
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const editPurchaseOkResponseRequest = z.lazy(() => {
  return z
    .object({
      purchaseId: z.string().nullish(),
      newStartDate: z.string().nullish(),
      newEndDate: z.string().nullish(),
      newStartTime: z.number().nullish(),
      newEndTime: z.number().nullish(),
    })
    .transform((data) => ({
      purchaseId: data['purchaseId'],
      newStartDate: data['newStartDate'],
      newEndDate: data['newEndDate'],
      newStartTime: data['newStartTime'],
      newEndTime: data['newEndTime'],
    }));
});
