import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const destinations: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    destination: z.string().optional(),
    supportedCountries: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {Destinations} destinations
 * @property {string} - Name of the destination
 * @property {string} - ISO representation of the destination
 * @property {string[]} - This array indicates the geographical area covered by a specific destination. If the destination represents a single country, the array will include that country. However, if the destination represents a broader regional scope, the array will be populated with the names of the countries belonging to that region.
 */
export type Destinations = z.infer<typeof destinations>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const destinationsResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      destination: z.string().optional(),
      supportedCountries: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      name: data['name'],
      destination: data['destination'],
      supportedCountries: data['supportedCountries'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const destinationsRequest: any = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      destination: z.string().nullish(),
      supportedCountries: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      destination: data['destination'],
      supportedCountries: data['supportedCountries'],
    }));
});
