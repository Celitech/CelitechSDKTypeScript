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
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
