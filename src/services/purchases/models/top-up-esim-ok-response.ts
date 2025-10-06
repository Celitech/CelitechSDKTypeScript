import { z } from 'zod';
import {
  TopUpEsimOkResponsePurchase,
  topUpEsimOkResponsePurchase,
  topUpEsimOkResponsePurchaseRequest,
  topUpEsimOkResponsePurchaseResponse,
} from './top-up-esim-ok-response-purchase';
import {
  TopUpEsimOkResponseProfile,
  topUpEsimOkResponseProfile,
  topUpEsimOkResponseProfileRequest,
  topUpEsimOkResponseProfileResponse,
} from './top-up-esim-ok-response-profile';

/**
 * The shape of the model inside the application code - what the users use
 */
export const topUpEsimOkResponse = z.lazy(() => {
  return z.object({
    purchase: topUpEsimOkResponsePurchase,
    profile: topUpEsimOkResponseProfile,
  });
});

/**
 *
 * @typedef  {TopUpEsimOkResponse} topUpEsimOkResponse
 * @property {TopUpEsimOkResponsePurchase}
 * @property {TopUpEsimOkResponseProfile}
 */
export type TopUpEsimOkResponse = z.infer<typeof topUpEsimOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const topUpEsimOkResponseResponse = z.lazy(() => {
  return z
    .object({
      purchase: topUpEsimOkResponsePurchaseResponse,
      profile: topUpEsimOkResponseProfileResponse,
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
export const topUpEsimOkResponseRequest = z.lazy(() => {
  return z
    .object({
      purchase: topUpEsimOkResponsePurchaseRequest,
      profile: topUpEsimOkResponseProfileRequest,
    })
    .transform((data) => ({
      purchase: data['purchase'],
      profile: data['profile'],
    }));
});
