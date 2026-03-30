import { z } from 'zod';

/**
 * Zod schema for the GetEsimOkResponseEsim model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEsimOkResponseEsim = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
    smdpAddress: z.string(),
    activationCode: z.string().min(1000).max(8000),
    manualActivationCode: z.string(),
    status: z.string(),
    connectivityStatus: z.string(),
    isTopUpAllowed: z.boolean(),
  });
});

/**
 *
 * @typedef  {GetEsimOkResponseEsim} getEsimOkResponseEsim
 * @property {string} - ID of the eSIM
 * @property {string} - SM-DP+ Address
 * @property {string} - QR Code of the eSIM as base64
 * @property {string} - The manual activation code
 * @property {string} - Status of the eSIM, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR'
 * @property {string} - Status of the eSIM connectivity, possible values are 'ACTIVE' or 'NOT_ACTIVE'
 * @property {boolean} - Indicates whether the eSIM is currently eligible for a top-up. This flag should be checked before attempting a top-up request.
 */
export type GetEsimOkResponseEsim = z.infer<typeof getEsimOkResponseEsim>;

/**
 * Zod schema for mapping API responses to the GetEsimOkResponseEsim application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEsimOkResponseEsimResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      smdpAddress: z.string(),
      activationCode: z.string().min(1000).max(8000),
      manualActivationCode: z.string(),
      status: z.string(),
      connectivityStatus: z.string(),
      isTopUpAllowed: z.boolean(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      smdpAddress: data['smdpAddress'],
      activationCode: data['activationCode'],
      manualActivationCode: data['manualActivationCode'],
      status: data['status'],
      connectivityStatus: data['connectivityStatus'],
      isTopUpAllowed: data['isTopUpAllowed'],
    }));
});

/**
 * Zod schema for mapping the GetEsimOkResponseEsim application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEsimOkResponseEsimRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      smdpAddress: z.string(),
      activationCode: z.string().min(1000).max(8000),
      manualActivationCode: z.string(),
      status: z.string(),
      connectivityStatus: z.string(),
      isTopUpAllowed: z.boolean(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      smdpAddress: data['smdpAddress'],
      activationCode: data['activationCode'],
      manualActivationCode: data['manualActivationCode'],
      status: data['status'],
      connectivityStatus: data['connectivityStatus'],
      isTopUpAllowed: data['isTopUpAllowed'],
    }));
});
