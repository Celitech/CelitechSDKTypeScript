import { z } from 'zod';
import {
  GetEsimMacOkResponseEsim,
  getEsimMacOkResponseEsim,
  getEsimMacOkResponseEsimRequest,
  getEsimMacOkResponseEsimResponse,
} from './get-esim-mac-ok-response-esim';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEsimMacOkResponse = z.lazy(() => {
  return z.object({
    esim: getEsimMacOkResponseEsim.optional(),
  });
});

/**
 *
 * @typedef  {GetEsimMacOkResponse} getEsimMacOkResponse
 * @property {GetEsimMacOkResponseEsim}
 */
export type GetEsimMacOkResponse = z.infer<typeof getEsimMacOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimMacOkResponseResponse = z.lazy(() => {
  return z
    .object({
      esim: getEsimMacOkResponseEsimResponse.optional(),
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimMacOkResponseRequest = z.lazy(() => {
  return z
    .object({
      esim: getEsimMacOkResponseEsimRequest.optional(),
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});
