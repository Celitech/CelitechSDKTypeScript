import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const history = z.lazy(() => {
  return z.object({
    status: z.string().optional(),
    statusDate: z.string().optional(),
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
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const historyResponse = z.lazy(() => {
  return z
    .object({
      status: z.string().optional(),
      statusDate: z.string().optional(),
      date: z.number().optional(),
    })
    .transform((data) => ({
      status: data['status'],
      statusDate: data['statusDate'],
      date: data['date'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const historyRequest = z.lazy(() => {
  return z
    .object({ status: z.string().nullish(), statusDate: z.string().nullish(), date: z.number().nullish() })
    .transform((data) => ({
      status: data['status'],
      statusDate: data['statusDate'],
      date: data['date'],
    }));
});
