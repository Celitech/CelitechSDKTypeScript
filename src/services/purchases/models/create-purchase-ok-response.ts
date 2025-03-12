import { z } from 'zod';
import {
  createPurchaseOkResponsePurchase,
  createPurchaseOkResponsePurchaseRequest,
  createPurchaseOkResponsePurchaseResponse,
} from './create-purchase-ok-response-purchase';
import {
  createPurchaseOkResponseProfile,
  createPurchaseOkResponseProfileRequest,
  createPurchaseOkResponseProfileResponse,
} from './create-purchase-ok-response-profile';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPurchaseOkResponse = z.lazy(() => {
  return z.object({
    purchase: createPurchaseOkResponsePurchase.optional(),
    profile: createPurchaseOkResponseProfile.optional(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseOkResponse} createPurchaseOkResponse
 * @property {CreatePurchaseOkResponsePurchase}
 * @property {CreatePurchaseOkResponseProfile}
 */
export type CreatePurchaseOkResponse = z.infer<typeof createPurchaseOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseOkResponseResponse = z.lazy(() => {
  return z
    .object({
      purchase: createPurchaseOkResponsePurchaseResponse.optional(),
      profile: createPurchaseOkResponseProfileResponse.optional(),
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
export const createPurchaseOkResponseRequest = z.lazy(() => {
  return z
    .object({
      purchase: createPurchaseOkResponsePurchaseRequest.optional(),
      profile: createPurchaseOkResponseProfileRequest.optional(),
    })
    .transform((data) => ({
      purchase: data['purchase'],
      profile: data['profile'],
    }));
});
