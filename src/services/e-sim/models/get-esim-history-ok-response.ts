import { z } from 'zod';
import {
  GetEsimHistoryOkResponseEsim,
  getEsimHistoryOkResponseEsim,
  getEsimHistoryOkResponseEsimRequest,
  getEsimHistoryOkResponseEsimResponse,
} from './get-esim-history-ok-response-esim';

/**
 * Zod schema for the GetEsimHistoryOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEsimHistoryOkResponse = z.lazy(() => {
  return z.object({
    esim: getEsimHistoryOkResponseEsim,
  });
});

/**
 *
 * @typedef  {GetEsimHistoryOkResponse} getEsimHistoryOkResponse
 * @property {GetEsimHistoryOkResponseEsim}
 */
export type GetEsimHistoryOkResponse = z.infer<typeof getEsimHistoryOkResponse>;

/**
 * Zod schema for mapping API responses to the GetEsimHistoryOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEsimHistoryOkResponseResponse = z.lazy(() => {
  return z
    .object({
      esim: getEsimHistoryOkResponseEsimResponse,
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});

/**
 * Zod schema for mapping the GetEsimHistoryOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEsimHistoryOkResponseRequest = z.lazy(() => {
  return z
    .object({
      esim: getEsimHistoryOkResponseEsimRequest,
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});
