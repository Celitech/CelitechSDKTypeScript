import * as core from '../../../../core';

export interface EditPurchaseResponse {
  /** ID of the purchase */
  purchaseId: string;
  /** Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  newStartDate: string | null;
  /** End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  newEndDate: string | null;
  /** Epoch value representing the new start time of the package's validity */
  newStartTime?: number | null;
  /** Epoch value representing the new end time of the package's validity */
  newEndTime?: number | null;
}

/**
 * Cast schema for the EditPurchaseResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const editPurchaseResponse = core.cast.identity<EditPurchaseResponse>();

/**
 * Cast schema for mapping API responses to the EditPurchaseResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const editPurchaseResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'purchaseId',
      'newStartDate',
      'newEndDate',
      'newStartTime',
      'newEndTime',
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
      newStartDate: raw['newStartDate'],
      newEndDate: raw['newEndDate'],
      newStartTime: raw['newStartTime'],
      newEndTime: raw['newEndTime'],
    };
  },
  ['purchaseId', 'newStartDate', 'newEndDate'],
);

/**
 * Cast schema for mapping the EditPurchaseResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const editPurchaseResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      purchaseId: raw['purchaseId'],
      newStartDate: raw['newStartDate'],
      newEndDate: raw['newEndDate'],
      newStartTime: raw['newStartTime'],
      newEndTime: raw['newEndTime'],
    };
  },
  ['purchaseId', 'newStartDate', 'newEndDate'],
);
