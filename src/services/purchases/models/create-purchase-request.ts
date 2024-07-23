import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPurchaseRequest: any = z.lazy(() => {
  return z.object({
    destination: z.string(),
    dataLimitInGb: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    email: z.string().optional(),
    referenceId: z.string().optional(),
    networkBrand: z.string().optional(),
    startTime: z.number().optional(),
    endTime: z.number().optional(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseRequest} createPurchaseRequest
 * @property {string} - ISO representation of the package's destination
 * @property {number} - Size of the package in GB. The available options are 1, 2, 3, 5, 8, 20GB
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.
 * @property {string} - Email address where the purchase confirmation email will be sent (including QR Code & activation steps)
 * @property {string} - An identifier provided by the partner to link this purchase to their booking or transaction for analytics and debugging purposes.
 * @property {string} - Customize the network brand of the issued eSIM. This parameter is accessible to platforms with Diamond tier and requires an alphanumeric string of up to 15 characters
 * @property {number} - Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months.
 * @property {number} - Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time.
 */
export type CreatePurchaseRequest = z.infer<typeof createPurchaseRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseRequestResponse: any = z.lazy(() => {
  return z
    .object({
      destination: z.string(),
      dataLimitInGB: z.number(),
      startDate: z.string(),
      endDate: z.string(),
      email: z.string().optional(),
      referenceId: z.string().optional(),
      networkBrand: z.string().optional(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGb: data['dataLimitInGB'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseRequestRequest: any = z.lazy(() => {
  return z
    .object({
      destination: z.string().nullish(),
      dataLimitInGb: z.number().nullish(),
      startDate: z.string().nullish(),
      endDate: z.string().nullish(),
      email: z.string().nullish(),
      referenceId: z.string().nullish(),
      networkBrand: z.string().nullish(),
      startTime: z.number().nullish(),
      endTime: z.number().nullish(),
    })
    .transform((data) => ({
      destination: data['destination'],
      dataLimitInGB: data['dataLimitInGb'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      email: data['email'],
      referenceId: data['referenceId'],
      networkBrand: data['networkBrand'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});