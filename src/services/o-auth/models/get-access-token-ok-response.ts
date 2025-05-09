import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
