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
 * Zod schema for the TopUpEsimOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the TopUpEsimOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the TopUpEsimOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
