import { z } from 'zod';

/**
 * Zod schema for the CreatePurchaseOkResponseProfile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPurchaseOkResponseProfile = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
    activationCode: z.string().min(1000).max(8000),
    manualActivationCode: z.string(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseOkResponseProfile} createPurchaseOkResponseProfile
 * @property {string} - ID of the eSIM
 * @property {string} - QR Code of the eSIM as base64
 * @property {string} - Manual Activation Code of the eSIM
 */
export type CreatePurchaseOkResponseProfile = z.infer<typeof createPurchaseOkResponseProfile>;

/**
 * Zod schema for mapping API responses to the CreatePurchaseOkResponseProfile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseOkResponseProfileResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      activationCode: z.string().min(1000).max(8000),
      manualActivationCode: z.string(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      activationCode: data['activationCode'],
      manualActivationCode: data['manualActivationCode'],
    }));
});

/**
 * Zod schema for mapping the CreatePurchaseOkResponseProfile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseOkResponseProfileRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      activationCode: z.string().min(1000).max(8000),
      manualActivationCode: z.string(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      activationCode: data['activationCode'],
      manualActivationCode: data['manualActivationCode'],
    }));
});
