import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const tokenOkResponse = z.lazy(() => {
  return z.object({
    token: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TokenOkResponse} tokenOkResponse
 * @property {string} - The generated token
 */
export type TokenOkResponse = z.infer<typeof tokenOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const tokenOkResponseResponse = z.lazy(() => {
  return z
    .object({
      token: z.string().optional(),
    })
    .transform((data) => ({
      token: data['token'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const tokenOkResponseRequest = z.lazy(() => {
  return z.object({ token: z.string().nullish() }).transform((data) => ({
    token: data['token'],
  }));
});
