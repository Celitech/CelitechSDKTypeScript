import { z } from 'zod';
import { History, history, historyRequest, historyResponse } from './history';

/**
 * Zod schema for the GetEsimHistoryOkResponseEsim model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
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
 * Zod schema for mapping API responses to the GetEsimHistoryOkResponseEsim application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
 * Zod schema for mapping the GetEsimHistoryOkResponseEsim application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
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
