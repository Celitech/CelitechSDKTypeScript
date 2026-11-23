import * as core from '../../../../core';

export interface CreatePurchaseV2ResponseItemPurchase {
  /** ID of the purchase */
  id: string;
  /** ID of the package */
  packageId: string;
  /** Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  createdDate: string;
}

/**
 * Cast schema for the CreatePurchaseV2ResponseItemPurchase model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const createPurchaseV2ResponseItemPurchase =
  core.cast.identity<CreatePurchaseV2ResponseItemPurchase>();

/**
 * Cast schema for mapping API responses to the CreatePurchaseV2ResponseItemPurchase application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const createPurchaseV2ResponseItemPurchaseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['id', 'packageId', 'createdDate']);
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
      createdDate: raw['createdDate'],
    };
  },
  ['id', 'packageId', 'createdDate'],
);

/**
 * Cast schema for mapping the CreatePurchaseV2ResponseItemPurchase application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const createPurchaseV2ResponseItemPurchaseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { id: raw['id'], packageId: raw['packageId'], createdDate: raw['createdDate'] };
  },
  ['id', 'packageId', 'createdDate'],
);
