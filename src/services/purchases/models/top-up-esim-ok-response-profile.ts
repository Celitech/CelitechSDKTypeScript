import { z } from 'zod';

/**
 * Zod schema for the TopUpEsimOkResponseProfile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const topUpEsimOkResponseProfile = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
  });
});

/**
 *
 * @typedef  {TopUpEsimOkResponseProfile} topUpEsimOkResponseProfile
 * @property {string} - ID of the eSIM
 */
export type TopUpEsimOkResponseProfile = z.infer<typeof topUpEsimOkResponseProfile>;

/**
 * Zod schema for mapping API responses to the TopUpEsimOkResponseProfile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const topUpEsimOkResponseProfileResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
    })
    .transform((data) => ({
      iccid: data['iccid'],
    }));
});

/**
 * Zod schema for mapping the TopUpEsimOkResponseProfile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const topUpEsimOkResponseProfileRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
    })
    .transform((data) => ({
      iccid: data['iccid'],
    }));
});
