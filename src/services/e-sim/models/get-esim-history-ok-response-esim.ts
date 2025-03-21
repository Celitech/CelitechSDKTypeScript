import { z } from 'zod';
import { history, historyRequest, historyResponse } from './history';

/**
 * The shape of the model inside the application code - what the users use
 */
export const getEsimHistoryOkResponseEsim = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22).optional(),
    history: z.array(history).optional(),
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
      iccid: z.string().min(18).max(22).optional(),
      history: z.array(historyResponse).optional(),
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
  return z.object({ iccid: z.string().optional(), history: z.array(historyRequest).optional() }).transform((data) => ({
    iccid: data['iccid'],
    history: data['history'],
  }));
});
