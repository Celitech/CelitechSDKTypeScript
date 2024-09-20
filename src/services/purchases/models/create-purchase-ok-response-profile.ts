import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const createPurchaseOkResponseProfile = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22).optional(),
    manualActivationCode: z.string().min(23).max(23).optional(),
    activationCode: z.string().min(1000).max(8000).optional(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseOkResponseProfile} createPurchaseOkResponseProfile
 * @property {string} - ID of the eSIM
 * @property {string} - Manual Activation Code of the eSIM
 * @property {string} - QR Code of the eSIM as base64
 */
export type CreatePurchaseOkResponseProfile = z.infer<typeof createPurchaseOkResponseProfile>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseOkResponseProfileResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22).optional(),
      manualActivationCode: z.string().min(23).max(23).optional(),
      activationCode: z.string().min(1000).max(8000).optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      manualActivationCode: data['manualActivationCode'],
      activationCode: data['activationCode'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createPurchaseOkResponseProfileRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().nullish(),
      manualActivationCode: z.string().nullish(),
      activationCode: z.string().nullish(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      manualActivationCode: data['manualActivationCode'],
      activationCode: data['activationCode'],
    }));
});
