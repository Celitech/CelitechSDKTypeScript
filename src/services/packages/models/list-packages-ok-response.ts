import { z } from 'zod';
import { Packages, packages, packagesRequest, packagesResponse } from './packages';

/**
 * Zod schema for the ListPackagesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const listPackagesOkResponse = z.lazy(() => {
  return z.object({
    packages: z.array(packages),
    afterCursor: z.string().nullable(),
  });
});

/**
 *
 * @typedef  {ListPackagesOkResponse} listPackagesOkResponse
 * @property {Packages[]}
 * @property {string} - The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination
 */
export type ListPackagesOkResponse = z.infer<typeof listPackagesOkResponse>;

/**
 * Zod schema for mapping API responses to the ListPackagesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPackagesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      packages: z.array(packagesResponse),
      afterCursor: z.string().nullable(),
    })
    .transform((data) => ({
      packages: data['packages'],
      afterCursor: data['afterCursor'],
    }));
});

/**
 * Zod schema for mapping the ListPackagesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const listPackagesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      packages: z.array(packagesRequest),
      afterCursor: z.string().nullable(),
    })
    .transform((data) => ({
      packages: data['packages'],
      afterCursor: data['afterCursor'],
    }));
});
