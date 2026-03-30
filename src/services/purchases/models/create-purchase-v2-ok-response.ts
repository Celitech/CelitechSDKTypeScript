import { z } from 'zod';
import {
  CreatePurchaseV2OkResponsePurchase,
  createPurchaseV2OkResponsePurchase,
  createPurchaseV2OkResponsePurchaseRequest,
  createPurchaseV2OkResponsePurchaseResponse,
} from './create-purchase-v2-ok-response-purchase';
import {
  CreatePurchaseV2OkResponseProfile,
  createPurchaseV2OkResponseProfile,
  createPurchaseV2OkResponseProfileRequest,
  createPurchaseV2OkResponseProfileResponse,
} from './create-purchase-v2-ok-response-profile';

/**
 * Zod schema for the CreatePurchaseV2OkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPurchaseV2OkResponse = z.lazy(() => {
  return z.object({
    purchase: createPurchaseV2OkResponsePurchase,
    profile: createPurchaseV2OkResponseProfile,
  });
});

/**
 *
 * @typedef  {CreatePurchaseV2OkResponse} createPurchaseV2OkResponse
 * @property {CreatePurchaseV2OkResponsePurchase}
 * @property {CreatePurchaseV2OkResponseProfile}
 */
export type CreatePurchaseV2OkResponse = z.infer<typeof createPurchaseV2OkResponse>;

/**
 * Zod schema for mapping API responses to the CreatePurchaseV2OkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseV2OkResponseResponse = z.lazy(() => {
  return z
    .object({
      purchase: createPurchaseV2OkResponsePurchaseResponse,
      profile: createPurchaseV2OkResponseProfileResponse,
    })
    .transform((data) => ({
      purchase: data['purchase'],
      profile: data['profile'],
    }));
});

/**
 * Zod schema for mapping the CreatePurchaseV2OkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseV2OkResponseRequest = z.lazy(() => {
  return z
    .object({
      purchase: createPurchaseV2OkResponsePurchaseRequest,
      profile: createPurchaseV2OkResponseProfileRequest,
    })
    .transform((data) => ({
      purchase: data['purchase'],
      profile: data['profile'],
    }));
});
