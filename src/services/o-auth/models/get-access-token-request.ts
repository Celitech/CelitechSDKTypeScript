import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAccessTokenRequestRequest = z.lazy(() => {
  return z
    .object({ grantType: z.string().optional(), clientId: z.string().optional(), clientSecret: z.string().optional() })
    .transform((data) => ({
      grant_type: data['grantType'],
      client_id: data['clientId'],
      client_secret: data['clientSecret'],
    }));
});
