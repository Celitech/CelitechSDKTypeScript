import { z } from 'zod';
import {
  CreatePurchaseOkResponsePurchase,
  createPurchaseOkResponsePurchase,
  createPurchaseOkResponsePurchaseRequest,
  createPurchaseOkResponsePurchaseResponse,
} from './create-purchase-ok-response-purchase';
import {
  CreatePurchaseOkResponseProfile,
  createPurchaseOkResponseProfile,
  createPurchaseOkResponseProfileRequest,
  createPurchaseOkResponseProfileResponse,
} from './create-purchase-ok-response-profile';

/**
 * Zod schema for the CreatePurchaseOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPurchaseOkResponse = z.lazy(() => {
  return z.object({
    purchase: createPurchaseOkResponsePurchase,
    profile: createPurchaseOkResponseProfile,
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
 * Zod schema for mapping API responses to the CreatePurchaseOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseOkResponseResponse = z.lazy(() => {
  return z
    .object({
      purchase: createPurchaseOkResponsePurchaseResponse,
      profile: createPurchaseOkResponseProfileResponse,
    })
    .transform((data) => ({
      purchase: data['purchase'],
      profile: data['profile'],
    }));
});

/**
 * Zod schema for mapping the CreatePurchaseOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseOkResponseRequest = z.lazy(() => {
  return z
    .object({
      purchase: createPurchaseOkResponsePurchaseRequest,
      profile: createPurchaseOkResponseProfileRequest,
    })
    .transform((data) => ({
      purchase: data['purchase'],
      profile: data['profile'],
    }));
});
