import { z } from 'zod';
import { destinations, destinationsRequest, destinationsResponse } from './destinations';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listDestinationsOkResponse: any = z.lazy(() => {
  return z.object({
    destinations: z.array(destinations).optional(),
  });
});

/**
 *
 * @typedef  {ListDestinationsOkResponse} listDestinationsOkResponse
 * @property {Destinations[]}
 */
export type ListDestinationsOkResponse = z.infer<typeof listDestinationsOkResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listDestinationsOkResponseResponse: any = z.lazy(() => {
  return z
    .object({
      destinations: z.array(destinationsResponse).optional(),
    })
    .transform((data) => ({
      destinations: data['destinations'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listDestinationsOkResponseRequest: any = z.lazy(() => {
  return z.object({ destinations: z.array(destinationsRequest).nullish() }).transform((data) => ({
    destinations: data['destinations'],
  }));
});