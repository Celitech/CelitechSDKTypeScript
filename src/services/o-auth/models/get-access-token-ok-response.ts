import { z } from 'zod';

/**
 * Zod schema for the GetAccessTokenOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAccessTokenOkResponse = z.lazy(() => {
  return z.object({
    accessToken: z.string().optional(),
    tokenType: z.string().optional(),
    expiresIn: z.number().optional(),
  });
});

/**
 *
 * @typedef  {GetAccessTokenOkResponse} getAccessTokenOkResponse
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type GetAccessTokenOkResponse = z.infer<typeof getAccessTokenOkResponse>;

/**
 * Zod schema for mapping API responses to the GetAccessTokenOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAccessTokenOkResponseResponse = z.lazy(() => {
  return z
    .object({
      access_token: z.string().optional(),
      token_type: z.string().optional(),
      expires_in: z.number().optional(),
    })
    .transform((data) => ({
      accessToken: data['access_token'],
      tokenType: data['token_type'],
      expiresIn: data['expires_in'],
    }));
});

/**
 * Zod schema for mapping the GetAccessTokenOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAccessTokenOkResponseRequest = z.lazy(() => {
  return z
    .object({
      accessToken: z.string().optional(),
      tokenType: z.string().optional(),
      expiresIn: z.number().optional(),
    })
    .transform((data) => ({
      access_token: data['accessToken'],
      token_type: data['tokenType'],
      expires_in: data['expiresIn'],
    }));
});
