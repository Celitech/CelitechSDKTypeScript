import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const topUpEsimOkResponsePurchase = z.lazy(() => {
  return z.object({
    id: z.string(),
    packageId: z.string(),
    startDate: z.string().nullable(),
    endDate: z.string().nullable(),
    createdDate: z.string(),
    startTime: z.number().optional().nullable(),
    endTime: z.number().optional().nullable(),
  });
});

/**
 *
 * @typedef  {TopUpEsimOkResponsePurchase} topUpEsimOkResponsePurchase
 * @property {string} - ID of the purchase
 * @property {string} - ID of the package
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {string} - Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - Epoch value representing the start time of the package's validity
 * @property {number} - Epoch value representing the end time of the package's validity
 */
export type TopUpEsimOkResponsePurchase = z.infer<typeof topUpEsimOkResponsePurchase>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const topUpEsimOkResponsePurchaseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      packageId: z.string(),
      startDate: z.string().nullable(),
      endDate: z.string().nullable(),
      createdDate: z.string(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      packageId: data['packageId'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      createdDate: data['createdDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const topUpEsimOkResponsePurchaseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      packageId: z.string(),
      startDate: z.string().nullable(),
      endDate: z.string().nullable(),
      createdDate: z.string(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      packageId: data['packageId'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      createdDate: data['createdDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
    }));
});
