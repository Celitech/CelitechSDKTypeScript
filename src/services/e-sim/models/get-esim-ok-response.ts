import { z } from 'zod';
import {
  getEsimOkResponseEsim,
  getEsimOkResponseEsimRequest,
  getEsimOkResponseEsimResponse,
} from './get-esim-ok-response-esim';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEsimOkResponse = z.lazy(() => {
  return z.object({
    esim: getEsimOkResponseEsim.optional(),
  });
});

/**
 *
 * @typedef  {GetEsimOkResponse} getEsimOkResponse
 * @property {GetEsimOkResponseEsim}
 */
export type GetEsimOkResponse = z.infer<typeof getEsimOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimOkResponseResponse = z.lazy(() => {
  return z
    .object({
      esim: getEsimOkResponseEsimResponse.optional(),
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimOkResponseRequest = z.lazy(() => {
  return z.object({ esim: getEsimOkResponseEsimRequest.nullish() }).transform((data) => ({
    esim: data['esim'],
  }));
});
