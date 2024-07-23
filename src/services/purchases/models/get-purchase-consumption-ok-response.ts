import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getPurchaseConsumptionOkResponse: any = z.lazy(() => {
  return z.object({
    dataUsageRemainingInBytes: z.number().optional(),
    status: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GetPurchaseConsumptionOkResponse} getPurchaseConsumptionOkResponse
 * @property {number} - Remaining balance of the package in bytes
 * @property {string} - Status of the connectivity, possible values are 'ACTIVE' or 'NOT_ACTIVE'
 */
export type GetPurchaseConsumptionOkResponse = z.infer<typeof getPurchaseConsumptionOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getPurchaseConsumptionOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      dataUsageRemainingInBytes: z.number().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      dataUsageRemainingInBytes: data['dataUsageRemainingInBytes'],
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getPurchaseConsumptionOkResponseRequest: any = z.lazy(() => {
  return z
    .object({ dataUsageRemainingInBytes: z.number().nullish(), status: z.string().nullish() })
    .transform((data) => ({
      dataUsageRemainingInBytes: data['dataUsageRemainingInBytes'],
      status: data['status'],
    }));
});