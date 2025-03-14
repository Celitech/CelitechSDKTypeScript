import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPurchaseV2OkResponseProfile = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22).optional(),
    activationCode: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseV2OkResponseProfile} createPurchaseV2OkResponseProfile
 * @property {string} - ID of the eSIM
 * @property {string}
 */
export type CreatePurchaseV2OkResponseProfile = z.infer<typeof createPurchaseV2OkResponseProfile>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseV2OkResponseProfileResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22).optional(),
      activationCode: z.string().optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      activationCode: data['activationCode'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseV2OkResponseProfileRequest = z.lazy(() => {
  return z.object({ iccid: z.string().optional(), activationCode: z.string().optional() }).transform((data) => ({
    iccid: data['iccid'],
    activationCode: data['activationCode'],
  }));
});
