import * as core from '../../../../core';

export interface ListPurchasesResponsePurchasesItemEsim {
  /** ID of the eSIM */
  iccid: string;
}

/**
 * Cast schema for the ListPurchasesResponsePurchasesItemEsim model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listPurchasesResponsePurchasesItemEsim =
  core.cast.identity<ListPurchasesResponsePurchasesItemEsim>();

/**
 * Cast schema for mapping API responses to the ListPurchasesResponsePurchasesItemEsim application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listPurchasesResponsePurchasesItemEsimResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['iccid']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, iccid: raw['iccid'] };
  },
  ['iccid'],
);

/**
 * Cast schema for mapping the ListPurchasesResponsePurchasesItemEsim application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listPurchasesResponsePurchasesItemEsimRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { iccid: raw['iccid'] };
  },
  ['iccid'],
);
