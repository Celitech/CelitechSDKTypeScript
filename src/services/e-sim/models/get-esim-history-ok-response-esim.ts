import { z } from 'zod';
import { History, history, historyRequest, historyResponse } from './history';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEsimHistoryOkResponseEsim = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
    history: z.array(history),
  });
});

/**
 *
 * @typedef  {GetEsimHistoryOkResponseEsim} getEsimHistoryOkResponseEsim
 * @property {string} - ID of the eSIM
 * @property {History[]}
 */
export type GetEsimHistoryOkResponseEsim = z.infer<typeof getEsimHistoryOkResponseEsim>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimHistoryOkResponseEsimResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      history: z.array(historyResponse),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      history: data['history'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getEsimHistoryOkResponseEsimRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
      history: z.array(historyRequest),
    })
    .transform((data) => ({
      iccid: data['iccid'],
      history: data['history'],
    }));
});
