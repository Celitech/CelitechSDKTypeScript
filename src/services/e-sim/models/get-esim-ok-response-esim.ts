import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEsimOkResponseEsim = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22).optional(),
    smdpAddress: z.string().optional(),
    manualActivationCode: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GetEsimOkResponseEsim} getEsimOkResponseEsim
 * @property {string} - ID of the eSIM
 * @property {string} - SM-DP+ Address
 * @property {string} - The manual activation code
 * @property {string} - Status of the eSIM, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR'
 */
export type GetEsimOkResponseEsim = z.infer<typeof getEsimOkResponseEsim>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimOkResponseEsimResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22).optional(),
      smdpAddress: z.string().optional(),
      manualActivationCode: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      smdpAddress: data['smdpAddress'],
      manualActivationCode: data['manualActivationCode'],
      status: data['status'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimOkResponseEsimRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().optional(),
      smdpAddress: z.string().optional(),
      manualActivationCode: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      smdpAddress: data['smdpAddress'],
      manualActivationCode: data['manualActivationCode'],
      status: data['status'],
    }));
});
