import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const purchasesEsim: any = z.lazy(() => {
  return z.object({
    iccid: z.string().min(18).max(22).optional(),
  });
});

/**
 *
 * @typedef  {PurchasesEsim} purchasesEsim
 * @property {string} - ID of the eSIM
 */
export type PurchasesEsim = z.infer<typeof purchasesEsim>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const purchasesEsimResponse: any = z.lazy(() => {
  return z
    .object({
      iccid: z.string().min(18).max(22).optional(),
    })
    .transform((data) => ({
      iccid: data['iccid'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const purchasesEsimRequest: any = z.lazy(() => {
  return z.object({ iccid: z.string().nullish() }).transform((data) => ({
    iccid: data['iccid'],
  }));
});
