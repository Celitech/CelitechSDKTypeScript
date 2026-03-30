import { z } from 'zod';

/**
 * Zod schema for the History model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const history = z.lazy(() => {
  return z.object({
    status: z.string(),
    statusDate: z.string(),
    date: z.number().optional(),
  });
});

/**
 *
 * @typedef  {History} history
 * @property {string} - The status of the eSIM at a given time, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR'
 * @property {string} - The date when the eSIM status changed in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - Epoch value representing the date when the eSIM status changed
 */
export type History = z.infer<typeof history>;

/**
 * Zod schema for mapping API responses to the History application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const historyResponse = z.lazy(() => {
  return z
    .object({
      status: z.string(),
      statusDate: z.string(),
      date: z.number().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      statusDate: data['statusDate'],
      date: data['date'],
    }));
});

/**
 * Zod schema for mapping the History application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const historyRequest = z.lazy(() => {
  return z
    .object({
      status: z.string(),
      statusDate: z.string(),
      date: z.number().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      statusDate: data['statusDate'],
      date: data['date'],
    }));
});
