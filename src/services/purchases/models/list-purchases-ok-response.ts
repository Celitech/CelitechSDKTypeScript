import { z } from 'zod';
import { Purchases, purchases, purchasesRequest, purchasesResponse } from './purchases';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
