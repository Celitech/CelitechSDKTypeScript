import { z } from 'zod';
import {
  getEsimHistoryOkResponseEsim,
  getEsimHistoryOkResponseEsimRequest,
  getEsimHistoryOkResponseEsimResponse,
} from './get-esim-history-ok-response-esim';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEsimHistoryOkResponse: any = z.lazy(() => {
  return z.object({
    esim: getEsimHistoryOkResponseEsim.optional(),
  });
});

/**
 *
 * @typedef  {GetEsimHistoryOkResponse} getEsimHistoryOkResponse
 * @property {GetEsimHistoryOkResponseEsim}
 */
export type GetEsimHistoryOkResponse = z.infer<typeof getEsimHistoryOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimHistoryOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      esim: getEsimHistoryOkResponseEsimResponse.optional(),
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimHistoryOkResponseRequest: any = z.lazy(() => {
  return z.object({ esim: getEsimHistoryOkResponseEsimRequest.nullish() }).transform((data) => ({
    esim: data['esim'],
  }));
});
