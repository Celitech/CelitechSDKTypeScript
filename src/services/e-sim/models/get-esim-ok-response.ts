import { z } from 'zod';
import {
  GetEsimOkResponseEsim,
  getEsimOkResponseEsim,
  getEsimOkResponseEsimRequest,
  getEsimOkResponseEsimResponse,
} from './get-esim-ok-response-esim';

/**
 * Zod schema for the GetEsimOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getEsimOkResponse = z.lazy(() => {
  return z.object({
    esim: getEsimOkResponseEsim,
  });
});

/**
 *
 * @typedef  {GetEsimOkResponse} getEsimOkResponse
 * @property {GetEsimOkResponseEsim}
 */
export type GetEsimOkResponse = z.infer<typeof getEsimOkResponse>;

/**
 * Zod schema for mapping API responses to the GetEsimOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEsimOkResponseResponse = z.lazy(() => {
  return z
    .object({
      esim: getEsimOkResponseEsimResponse,
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});

/**
 * Zod schema for mapping the GetEsimOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getEsimOkResponseRequest = z.lazy(() => {
  return z
    .object({
      esim: getEsimOkResponseEsimRequest,
    })
    .transform((data) => ({
      esim: data['esim'],
    }));
});
