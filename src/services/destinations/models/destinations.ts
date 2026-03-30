import { z } from 'zod';

/**
 * Zod schema for the Destinations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const destinations = z.lazy(() => {
  return z.object({
    name: z.string(),
    destination: z.string(),
    destinationIso2: z.string(),
    supportedCountries: z.array(z.string()),
  });
});

/**
 *
 * @typedef  {Destinations} destinations
 * @property {string} - Name of the destination
 * @property {string} - ISO3 representation of the destination
 * @property {string} - ISO2 representation of the destination
 * @property {string[]} - This array indicates the geographical area covered by a specific destination. If the destination represents a single country, the array will include that country. However, if the destination represents a broader regional scope, the array will be populated with the names of the countries belonging to that region.
 */
export type Destinations = z.infer<typeof destinations>;

/**
 * Zod schema for mapping API responses to the Destinations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const destinationsResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      destination: z.string(),
      destinationISO2: z.string(),
      supportedCountries: z.array(z.string()),
    })
    .transform((data) => ({
      name: data['name'],
      destination: data['destination'],
      destinationIso2: data['destinationISO2'],
      supportedCountries: data['supportedCountries'],
    }));
});

/**
 * Zod schema for mapping the Destinations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const destinationsRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      destination: z.string(),
      destinationIso2: z.string(),
      supportedCountries: z.array(z.string()),
    })
    .transform((data) => ({
      name: data['name'],
      destination: data['destination'],
      destinationISO2: data['destinationIso2'],
      supportedCountries: data['supportedCountries'],
    }));
});
