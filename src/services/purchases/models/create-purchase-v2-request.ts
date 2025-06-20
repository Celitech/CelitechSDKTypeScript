import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPurchaseV2Request = z.lazy(() => {
  return z.object({
    destination: z.string(),
    dataLimitInGb: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    quantity: z.number().gte(1).lte(5),
    email: z.string().optional(),
    referenceId: z.string().optional(),
    networkBrand: z.string().optional(),
    emailBrand: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseV2Request} createPurchaseV2Request
 * @property {string} - ISO representation of the package's destination.
 * @property {number} - Size of the package in GB. The available options are 0.5, 1, 2, 3, 5, 8, 20GB
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
 * @property {number} - Number of eSIMs to purchase.
 * @property {string} - Email address where the purchase confirmation email will be sent (including QR Code & activation steps)
 * @property {string} - An identifier provided by the partner to link this purchase to their booking or transaction for analytics and debugging purposes.
 * @property {string} - Customize the network brand of the issued eSIM. The `networkBrand` parameter cannot exceed 15 characters in length and must contain only letters and numbers. This feature is available to platforms with Diamond tier only.
 * @property {string} - Customize the email subject brand. The `emailBrand` parameter cannot exceed 25 characters in length and must contain only letters, numbers, and spaces. This feature is available to platforms with Diamond tier only.
 */
export type CreatePurchaseV2Request = z.infer<typeof createPurchaseV2Request>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseV2RequestResponse = z.lazy(() => {
  return z
    .object({
      destination: z.string(),
      dataLimitInGB: z.number(),
      startDate: z.string(),
      endDate: z.string(),
      quantity: z.number().gte(1).lte(5),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      networkBrand: z.string().optional(),
      emailBrand: z.string().optional(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGb: data['dataLimitInGB'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      quantity: data['quantity'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      emailBrand: data['emailBrand'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseV2RequestRequest = z.lazy(() => {
  return z
    .object({
      destination: z.string(),
      dataLimitInGb: z.number(),
      startDate: z.string(),
      endDate: z.string(),
      quantity: z.number().gte(1).lte(5),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      networkBrand: z.string().optional(),
      emailBrand: z.string().optional(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGB: data['dataLimitInGb'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      quantity: data['quantity'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      emailBrand: data['emailBrand'],
    }));
});
