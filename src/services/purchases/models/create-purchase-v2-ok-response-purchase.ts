import { z } from 'zod';

/**
 * Zod schema for the CreatePurchaseV2OkResponsePurchase model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the CreatePurchaseV2OkResponsePurchase application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the CreatePurchaseV2OkResponsePurchase application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
