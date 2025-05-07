import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const topUpEsimRequest = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
    dataLimitInGb: z.number(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    duration: z.number().optional(),
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
- ``Limited Packages (0.5, 1, 2, 3, 5, 8, 20GB):`` supports `duration` or `startDate` / `endDate`.
- ``Unlimited Packages (available for Region-3):`` supports `duration` only. Use ``-1`` for unlimited.

 * @property {string} - Start date of the package validity in the format yyyy-MM-dd. This date can be set to the current day or any day within the next 12 months. 

Exactly one of the following must be provided:
- Both `startDate` and `endDate` together
- Or `duration` alone

These options are mutually exclusive — do not include `duration` with `startDate` or `endDate`.

 * @property {string} - End date of the package validity in the format yyyy-MM-dd. End date can be maximum 90 days after Start date. 

Exactly one of the following must be provided:
- Both `startDate` and `endDate` together
- Or `duration` alone

These options are mutually exclusive — do not include `duration` with `startDate` or `endDate`.

 * @property {number} - It designates the number of days the eSIM is valid for within 90-day validity from issuance date.
 - ``For limited packages`` (0.5, 1, 2, 3, 5, 8, 20GB): The available options are 1, 2, 7, 14, 30 days (following the pricing of 0-30 days) and 90 days (following the pricing of 0-90 days)
 - ``For unlimited package`` (available for Region-3): The available options are for 1, 2, 7, 14, 30 days (following a custom pricing).

 Exactly one of the following must be provided:
 - Both `startDate` and `endDate` together
 - Or `duration` alone

 These options are mutually exclusive — do not include `duration` with `startDate` or `endDate`.

 * @property {string} - Email address where the purchase confirmation email will be sent (excluding QR Code & activation steps)
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
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      duration: z.number().optional(),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      emailBrand: z.string().optional(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      dataLimitInGb: data['dataLimitInGB'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
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
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      duration: z.number().optional(),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      emailBrand: z.string().optional(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      dataLimitInGB: data['dataLimitInGb'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      email: data['email'],
      referenceId: data['referenceId'],
      emailBrand: data['emailBrand'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
