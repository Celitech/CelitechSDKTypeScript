import { z } from 'zod';

/**
 * Zod schema for the PurchasesEsim model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const purchasesEsim = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22),
  });
});

/**
 *
 * @typedef  {PurchasesEsim} purchasesEsim
 * @property {string} - ID of the eSIM
 */
export type PurchasesEsim = z.infer<typeof purchasesEsim>;

/**
 * Zod schema for mapping API responses to the PurchasesEsim application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const purchasesEsimResponse = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
    })
    .transform((data) => ({
      iccid: data['iccid'],
    }));
});

/**
 * Zod schema for mapping the PurchasesEsim application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const purchasesEsimRequest = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22),
    })
    .transform((data) => ({
      iccid: data['iccid'],
    }));
});
