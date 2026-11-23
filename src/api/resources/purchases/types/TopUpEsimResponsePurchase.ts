import * as core from '../../../../core';

export interface TopUpEsimResponsePurchase {
  /** ID of the purchase */
  id: string;
  /** ID of the package */
  packageId: string;
  /** Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  startDate: string | null;
  /** End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  endDate: string | null;
  /** Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  createdDate: string;
  /** Epoch value representing the start time of the package's validity */
  startTime?: number | null;
  /** Epoch value representing the end time of the package's validity */
  endTime?: number | null;
}

/**
 * Cast schema for the TopUpEsimResponsePurchase model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const topUpEsimResponsePurchase = core.cast.identity<TopUpEsimResponsePurchase>();

/**
 * Cast schema for mapping API responses to the TopUpEsimResponsePurchase application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const topUpEsimResponsePurchaseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'id',
      'packageId',
      'startDate',
      'endDate',
      'createdDate',
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
      id: raw['id'],
      packageId: raw['packageId'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      createdDate: raw['createdDate'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['id', 'packageId', 'startDate', 'endDate', 'createdDate'],
);

/**
 * Cast schema for mapping the TopUpEsimResponsePurchase application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const topUpEsimResponsePurchaseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      id: raw['id'],
      packageId: raw['packageId'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      createdDate: raw['createdDate'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['id', 'packageId', 'startDate', 'endDate', 'createdDate'],
);
