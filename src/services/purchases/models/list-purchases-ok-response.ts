import { z } from 'zod';
import { Purchases, purchases, purchasesRequest, purchasesResponse } from './purchases';

/**
 * Zod schema for the ListPurchasesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listPurchasesOkResponse = z.lazy(() => {
  return z.object({
    purchases: z.array(purchases),
    afterCursor: z.string().nullable(),
  });
});

/**
 *
 * @typedef  {ListPurchasesOkResponse} listPurchasesOkResponse
 * @property {Purchases[]}
 * @property {string} - The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination.
 */
export type ListPurchasesOkResponse = z.infer<typeof listPurchasesOkResponse>;

/**
 * Zod schema for mapping API responses to the ListPurchasesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPurchasesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      purchases: z.array(purchasesResponse),
      afterCursor: z.string().nullable(),
    })
    .transform((data) => ({
      purchases: data['purchases'],
      afterCursor: data['afterCursor'],
    }));
});

/**
 * Zod schema for mapping the ListPurchasesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPurchasesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      purchases: z.array(purchasesRequest),
      afterCursor: z.string().nullable(),
    })
    .transform((data) => ({
      purchases: data['purchases'],
      afterCursor: data['afterCursor'],
    }));
});
