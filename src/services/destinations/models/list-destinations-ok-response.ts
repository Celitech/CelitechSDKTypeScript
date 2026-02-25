import { z } from 'zod';
import { Destinations, destinations, destinationsRequest, destinationsResponse } from './destinations';

/**
 * Zod schema for the ListDestinationsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listDestinationsOkResponse = z.lazy(() => {
  return z.object({
    destinations: z.array(destinations),
  });
});

/**
 *
 * @typedef  {ListDestinationsOkResponse} listDestinationsOkResponse
 * @property {Destinations[]}
 */
export type ListDestinationsOkResponse = z.infer<typeof listDestinationsOkResponse>;

/**
 * Zod schema for mapping API responses to the ListDestinationsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listDestinationsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      destinations: z.array(destinationsResponse),
    })
    .transform((data) => ({
      destinations: data['destinations'],
    }));
});

/**
 * Zod schema for mapping the ListDestinationsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listDestinationsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      destinations: z.array(destinationsRequest),
    })
    .transform((data) => ({
      destinations: data['destinations'],
    }));
});
