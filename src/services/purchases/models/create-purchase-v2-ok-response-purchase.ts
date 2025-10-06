import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPurchaseV2OkResponsePurchase = z.lazy(() => {
  return z.object({
    id: z.string(),
    packageId: z.string(),
    createdDate: z.string(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseV2OkResponsePurchase} createPurchaseV2OkResponsePurchase
 * @property {string} - ID of the purchase
 * @property {string} - ID of the package
 * @property {string} - Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ'
 */
export type CreatePurchaseV2OkResponsePurchase = z.infer<typeof createPurchaseV2OkResponsePurchase>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseV2OkResponsePurchaseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      packageId: z.string(),
      createdDate: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      packageId: data['packageId'],
      createdDate: data['createdDate'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseV2OkResponsePurchaseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      packageId: z.string(),
      createdDate: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      packageId: data['packageId'],
      createdDate: data['createdDate'],
    }));
});
