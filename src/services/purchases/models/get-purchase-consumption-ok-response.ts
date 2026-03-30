import { z } from 'zod';

/**
 * Zod schema for the GetPurchaseConsumptionOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getPurchaseConsumptionOkResponse = z.lazy(() => {
  return z.object({
    dataUsageRemainingInBytes: z.number(),
    dataUsageRemainingInGb: z.number(),
    status: z.string(),
  });
});

/**
 *
 * @typedef  {GetPurchaseConsumptionOkResponse} getPurchaseConsumptionOkResponse
 * @property {number} - Remaining balance of the package in bytes
 * @property {number} - Remaining balance of the package in GB
 * @property {string} - Status of the connectivity, possible values are 'ACTIVE' or 'NOT_ACTIVE'
 */
export type GetPurchaseConsumptionOkResponse = z.infer<typeof getPurchaseConsumptionOkResponse>;

/**
 * Zod schema for mapping API responses to the GetPurchaseConsumptionOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getPurchaseConsumptionOkResponseResponse = z.lazy(() => {
  return z
    .object({
      dataUsageRemainingInBytes: z.number(),
      dataUsageRemainingInGB: z.number(),
      status: z.string(),
    })
    .transform((data) => ({
      dataUsageRemainingInBytes: data['dataUsageRemainingInBytes'],
      dataUsageRemainingInGb: data['dataUsageRemainingInGB'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the GetPurchaseConsumptionOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getPurchaseConsumptionOkResponseRequest = z.lazy(() => {
  return z
    .object({
      dataUsageRemainingInBytes: z.number(),
      dataUsageRemainingInGb: z.number(),
      status: z.string(),
    })
    .transform((data) => ({
      dataUsageRemainingInBytes: data['dataUsageRemainingInBytes'],
      dataUsageRemainingInGB: data['dataUsageRemainingInGb'],
      status: data['status'],
    }));
});
