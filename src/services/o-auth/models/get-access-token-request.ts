import { z } from 'zod';

/**
 * Zod schema for the GetAccessTokenRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAccessTokenRequest = z.lazy(() => {
  return z.object({
    grantType: z.string().optional(),
    clientId: z.string().optional(),
    clientSecret: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GetAccessTokenRequest} getAccessTokenRequest
 * @property {GrantType}
 * @property {string}
 * @property {string}
 */
export type GetAccessTokenRequest = z.infer<typeof getAccessTokenRequest>;

/**
 * Zod schema for mapping API responses to the GetAccessTokenRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAccessTokenRequestResponse = z.lazy(() => {
  return z
    .object({
      grant_type: z.string().optional(),
      client_id: z.string().optional(),
      client_secret: z.string().optional(),
    })
    .transform((data) => ({
      grantType: data['grant_type'],
      clientId: data['client_id'],
      clientSecret: data['client_secret'],
    }));
});

/**
 * Zod schema for mapping the GetAccessTokenRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAccessTokenRequestRequest = z.lazy(() => {
  return z
    .object({
      grantType: z.string().optional(),
      clientId: z.string().optional(),
      clientSecret: z.string().optional(),
    })
    .transform((data) => ({
      grant_type: data['grantType'],
      client_id: data['clientId'],
      client_secret: data['clientSecret'],
    }));
});
