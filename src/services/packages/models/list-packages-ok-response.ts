import { z } from 'zod';
import { Packages, packages, packagesRequest, packagesResponse } from './packages';

/**
 * The shape of the model inside the application code - what the users use
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
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
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
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
