import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const topUpEsimOkResponsePurchase: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    packageId: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    createdDate: z.string().optional(),
    startTime: z.number().optional(),
    endTime: z.number().optional(),
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
export const topUpEsimOkResponsePurchaseResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      packageId: z.string().optional(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      createdDate: z.string().optional(),
      startTime: z.number().optional(),
      endTime: z.number().optional(),
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
export const topUpEsimOkResponsePurchaseRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      packageId: z.string().nullish(),
      startDate: z.string().nullish(),
      endDate: z.string().nullish(),
      createdDate: z.string().nullish(),
      startTime: z.number().nullish(),
      endTime: z.number().nullish(),
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
