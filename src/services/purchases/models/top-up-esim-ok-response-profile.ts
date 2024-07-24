import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const topUpEsimOkResponseProfile = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22).optional(),
  });
});

/**
 *
 * @typedef  {TopUpEsimOkResponseProfile} topUpEsimOkResponseProfile
 * @property {string} - ID of the eSIM
 */
export type TopUpEsimOkResponseProfile = z.infer<typeof topUpEsimOkResponseProfile>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const topUpEsimOkResponseProfileResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22).optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const topUpEsimOkResponseProfileRequest = z.lazy(() => {
  return z.object({ iccid: z.string().nullish() }).transform((data) => ({
    iccid: data['iccid'],
  }));
});
