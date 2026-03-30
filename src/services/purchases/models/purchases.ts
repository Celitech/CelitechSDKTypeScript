import { z } from 'zod';
import { Package_, packageRequest, packageResponse, package_ } from './package_';
import { PurchasesEsim, purchasesEsim, purchasesEsimRequest, purchasesEsimResponse } from './purchases-esim';

/**
 * Zod schema for the Purchases model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const purchases = z.lazy(() => {
  return z.object({
    id: z.string(),
    startDate: z.string().nullable(),
    endDate: z.string().nullable(),
    duration: z.number().optional().nullable(),
    createdDate: z.string(),
    startTime: z.number().optional().nullable(),
    endTime: z.number().optional().nullable(),
    createdAt: z.number().optional(),
    package: package_,
    esim: purchasesEsim,
    source: z.string(),
    purchaseType: z.string(),
    referenceId: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {Purchases} purchases
 * @property {string} - ID of the purchase
 * @property {string} - Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {string} - End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - Duration of the package in days. Possible values are 1, 2, 7, 14, 30, or 90.
 * @property {string} - Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ'
 * @property {number} - Epoch value representing the start time of the package's validity
 * @property {number} - Epoch value representing the end time of the package's validity
 * @property {number} - Epoch value representing the date of creation of the purchase
 * @property {Package_}
 * @property {PurchasesEsim}
 * @property {string} - The `source` indicates whether the purchase was made from the API, dashboard, landing-page, promo-page or iframe. For purchases made before September 8, 2023, the value will be displayed as 'Not available'.
 * @property {string} - The `purchaseType` indicates whether this is the initial purchase that creates the eSIM (First Purchase) or a subsequent top-up on an existing eSIM (Top-up Purchase).
 * @property {string} - The `referenceId` that was provided by the partner during the purchase or top-up flow. This identifier can be used for analytics and debugging purposes.
 */
export type Purchases = z.infer<typeof purchases>;

/**
 * Zod schema for mapping API responses to the Purchases application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const purchasesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      startDate: z.string().nullable(),
      endDate: z.string().nullable(),
      duration: z.number().optional().nullable(),
      createdDate: z.string(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
      createdAt: z.number().optional(),
      package: packageResponse,
      esim: purchasesEsimResponse,
      source: z.string(),
      purchaseType: z.string(),
      referenceId: z.string().optional().nullable(),
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
      purchaseType: data['purchaseType'],
      referenceId: data['referenceId'],
    }));
});

/**
 * Zod schema for mapping the Purchases application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const purchasesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      startDate: z.string().nullable(),
      endDate: z.string().nullable(),
      duration: z.number().optional().nullable(),
      createdDate: z.string(),
      startTime: z.number().optional().nullable(),
      endTime: z.number().optional().nullable(),
      createdAt: z.number().optional(),
      package: packageRequest,
      esim: purchasesEsimRequest,
      source: z.string(),
      purchaseType: z.string(),
      referenceId: z.string().optional().nullable(),
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
      purchaseType: data['purchaseType'],
      referenceId: data['referenceId'],
    }));
});
