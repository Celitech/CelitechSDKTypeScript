import { z } from 'zod';
import { Package_, packageRequest, packageResponse, package_ } from './package_';
import { PurchasesEsim, purchasesEsim, purchasesEsimRequest, purchasesEsimResponse } from './purchases-esim';

/**
 * The shape of the model inside the application code - what the users use
 */
export const purchases = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    startDate: z.string().optional().nullable(),
    endDate: z.string().optional().nullable(),
    duration: z.number().optional().nullable(),
    createdDate: z.string().optional(),
    startTime: z.number().optional().nullable(),
    endTime: z.number().optional().nullable(),
    createdAt: z.number().optional(),
    package: package_.optional(),
    esim: purchasesEsim.optional(),
    source: z.string().optional(),
    referenceId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {Purchases} purchases
 * @property {string} - ID of the purchase
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - It designates the number of days the eSIM is valid for within 90-day validity from issuance date.
 * @property {string} - Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - Epoch value representing the start time of the package's validity
 * @property {number} - Epoch value representing the end time of the package's validity
 * @property {number} - Epoch value representing the date of creation of the purchase
 * @property {Package_}
 * @property {PurchasesEsim}
 * @property {string} - The source indicates where the eSIM was purchased, which can be from the API, dashboard, landing-page, promo-page or iframe. For purchases made before September 8, 2023, the value will be displayed as 'Not available'.
 * @property {string} - The referenceId that was provided by the partner during the purchase or topup flow. This identifier can be used for analytics and debugging purposes.
 */
export type Purchases = z.infer<typeof purchases>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const purchasesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      duration: z.number().optional().nullable(),
      createdDate: z.string().optional(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
      createdAt: z.number().optional(),
      package: packageResponse.optional(),
      esim: purchasesEsimResponse.optional(),
      source: z.string().optional(),
      referenceId: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      createdDate: data['createdDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
      createdAt: data['createdAt'],
      package: data['package'],
      esim: data['esim'],
      source: data['source'],
      referenceId: data['referenceId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const purchasesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      startDate: z.string().optional().nullable(),
      endDate: z.string().optional().nullable(),
      duration: z.number().optional().nullable(),
      createdDate: z.string().optional(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
      createdAt: z.number().optional(),
      package: packageRequest.optional(),
      esim: purchasesEsimRequest.optional(),
      source: z.string().optional(),
      referenceId: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      startDate: data['startDate'],
      endDate: data['endDate'],
      duration: data['duration'],
      createdDate: data['createdDate'],
      startTime: data['startTime'],
      endTime: data['endTime'],
      createdAt: data['createdAt'],
      package: data['package'],
      esim: data['esim'],
      source: data['source'],
      referenceId: data['referenceId'],
    }));
});
