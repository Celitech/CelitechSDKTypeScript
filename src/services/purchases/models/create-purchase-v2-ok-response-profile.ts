import { z } from 'zod';

/**
 * Zod schema for the CreatePurchaseV2OkResponseProfile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createPurchaseV2OkResponseProfile = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
    activationCode: z.string().min(1000).max(8000),
    manualActivationCode: z.string(),
    iosActivationLink: z.string(),
    androidActivationLink: z.string(),
  });
});

/**
 *
 * @typedef  {CreatePurchaseV2OkResponseProfile} createPurchaseV2OkResponseProfile
 * @property {string} - ID of the eSIM
 * @property {string} - QR Code of the eSIM as base64
 * @property {string} - Manual Activation Code of the eSIM
 * @property {string} - iOS Activation Link of the eSIM
 * @property {string} - Android Activation Link of the eSIM
 */
export type CreatePurchaseV2OkResponseProfile = z.infer<typeof createPurchaseV2OkResponseProfile>;

/**
 * Zod schema for mapping API responses to the CreatePurchaseV2OkResponseProfile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseV2OkResponseProfileResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      activationCode: z.string().min(1000).max(8000),
      manualActivationCode: z.string(),
      iosActivationLink: z.string(),
      androidActivationLink: z.string(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      activationCode: data['activationCode'],
      manualActivationCode: data['manualActivationCode'],
      iosActivationLink: data['iosActivationLink'],
      androidActivationLink: data['androidActivationLink'],
    }));
});

/**
 * Zod schema for mapping the CreatePurchaseV2OkResponseProfile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createPurchaseV2OkResponseProfileRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      activationCode: z.string().min(1000).max(8000),
      manualActivationCode: z.string(),
      iosActivationLink: z.string(),
      androidActivationLink: z.string(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      activationCode: data['activationCode'],
      manualActivationCode: data['manualActivationCode'],
      iosActivationLink: data['iosActivationLink'],
      androidActivationLink: data['androidActivationLink'],
    }));
});
