import * as core from '../../../../core';
import { EditPurchaseRequest } from '../client/requests/EditPurchaseRequest';

export type { EditPurchaseRequest };

/**
 * Cast schema for the EditPurchaseRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const editPurchaseRequest = core.cast.identity<EditPurchaseRequest>();

/**
 * Cast schema for mapping API responses to the EditPurchaseRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const editPurchaseRequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'purchaseId',
      'startDate',
      'endDate',
      'startTime',
      'endTime',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      purchaseId: raw['purchaseId'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['purchaseId', 'startDate', 'endDate'],
);

/**
 * Cast schema for mapping the EditPurchaseRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const editPurchaseRequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      purchaseId: raw['purchaseId'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['purchaseId', 'startDate', 'endDate'],
);
