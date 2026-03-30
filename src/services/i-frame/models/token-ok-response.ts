import { z } from 'zod';

/**
 * Zod schema for the TokenOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const tokenOkResponse = z.lazy(() => {
  return z.object({
    token: z.string(),
  });
});

/**
 *
 * @typedef  {TokenOkResponse} tokenOkResponse
 * @property {string} - The generated token
 */
export type TokenOkResponse = z.infer<typeof tokenOkResponse>;

/**
 * Zod schema for mapping API responses to the TokenOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokenOkResponseResponse = z.lazy(() => {
  return z
    .object({
      token: z.string(),
    })
    .transform((data) => ({
      token: data['token'],
    }));
});

/**
 * Zod schema for mapping the TokenOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const tokenOkResponseRequest = z.lazy(() => {
  return z
    .object({
      token: z.string(),
    })
    .transform((data) => ({
      token: data['token'],
    }));
});
