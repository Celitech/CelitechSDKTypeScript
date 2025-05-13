import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPurchaseV2Request = z.lazy(() => {
  return z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    duration: z.number().optional(),
    destination: z.string(),
    dataLimitInGb: z.number(),
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
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
 * @property {number} - It designates the number of days the eSIM is valid for within the 90-day validity period from the issuance date.  

For ``limited packages``, the supported durations are: ``1, 2, 7, 14, 30, 90 days``.  

For ``unlimited packages``, all durations are supported ``except 90 days``.

 * @property {string} - ISO representation of the package's destination.
 * @property {number} - Size of the package in GB.

For ``limited packages``, the available options are: ``0.5, 1, 2, 3, 5, 8, 20GB`` (supports `duration` or `startDate` / `endDate`).

For ``unlimited packages`` (available to Region-3), please use ``-1`` as an identifier (supports `duration` only).

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
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      duration: z.number().optional(),
      destination: z.string(),
      dataLimitInGB: z.number(),
      quantity: z.number().gte(1).lte(5),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      networkBrand: z.string().optional(),
      emailBrand: z.string().optional(),
    })
    .transform((data) => ({
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      destination: data['destination'],
      dataLimitInGb: data['dataLimitInGB'],
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
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      duration: z.number().optional(),
      destination: z.string(),
      dataLimitInGb: z.number(),
      quantity: z.number().gte(1).lte(5),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      networkBrand: z.string().optional(),
      emailBrand: z.string().optional(),
    })
    .transform((data) => ({
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      destination: data['destination'],
      dataLimitInGB: data['dataLimitInGb'],
      quantity: data['quantity'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      emailBrand: data['emailBrand'],
    }));
});
