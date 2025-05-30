import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const topUpEsimRequest = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
    dataLimitInGb: z.number(),
    email: z.string().optional(),
    referenceId: z.string().optional(),
    emailBrand: z.string().optional(),
    startTime: z.number().optional(),
    endTime: z.number().optional(),
  });
});

/**
 * 
 * @typedef  {TopUpEsimRequest} topUpEsimRequest   
 * @property {string} - ID of the eSIM
 * @property {number} - Size of the package in GB.

For ``limited packages``, the available options are: ``0.5, 1, 2, 3, 5, 8, 20GB`` (supports `duration` or `startDate` / `endDate`).

For ``unlimited packages`` (available to Region-3), please use ``-1`` as an identifier (supports `duration` only).

 * @property {string} - Email address where the purchase confirmation email will be sent (excluding QR Code & activation steps).
 * @property {string} - An identifier provided by the partner to link this purchase to their booking or transaction for analytics and debugging purposes.
 * @property {string} - Customize the email subject brand. The `emailBrand` parameter cannot exceed 25 characters in length and must contain only letters, numbers, and spaces. This feature is available to platforms with Diamond tier only.
 * @property {number} - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months.
 * @property {number} - Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time.
 */
export type TopUpEsimRequest = z.infer<typeof topUpEsimRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const topUpEsimRequestResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      dataLimitInGB: z.number(),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      emailBrand: z.string().optional(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      dataLimitInGb: data['dataLimitInGB'],
      email: data['email'],
      referenceId: data['referenceId'],
      emailBrand: data['emailBrand'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const topUpEsimRequestRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      dataLimitInGb: z.number(),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      emailBrand: z.string().optional(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      dataLimitInGB: data['dataLimitInGb'],
      email: data['email'],
      referenceId: data['referenceId'],
      emailBrand: data['emailBrand'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
