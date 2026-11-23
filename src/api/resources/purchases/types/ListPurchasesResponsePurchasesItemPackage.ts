import * as core from '../../../../core';

export interface ListPurchasesResponsePurchasesItemPackage {
  /** ID of the package */
  id: string;
  /** Size of the package in Bytes. A value of `-1` indicates an unlimited package. */
  dataLimitInBytes: number;
  /** Size of the package in GB. A value of `-1` indicates an unlimited (date-based) package. */
  dataLimitInGB: number;
  /** ISO3 representation of the package's destination. */
  destination: string;
  /** ISO2 representation of the package's destination. */
  destinationISO2: string;
  /** Name of the package's destination */
  destinationName: string;
  /** Price of the package in cents */
  priceInCents: number;
}

/**
 * Cast schema for the ListPurchasesResponsePurchasesItemPackage model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listPurchasesResponsePurchasesItemPackage =
  core.cast.identity<ListPurchasesResponsePurchasesItemPackage>();

/**
 * Cast schema for mapping API responses to the ListPurchasesResponsePurchasesItemPackage application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listPurchasesResponsePurchasesItemPackageResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'id',
      'dataLimitInBytes',
      'dataLimitInGB',
      'destination',
      'destinationISO2',
      'destinationName',
      'priceInCents',
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
      dataLimitInBytes: raw['dataLimitInBytes'],
      dataLimitInGB: raw['dataLimitInGB'],
      destination: raw['destination'],
      destinationISO2: raw['destinationISO2'],
      destinationName: raw['destinationName'],
      priceInCents: raw['priceInCents'],
    };
  },
  [
    'id',
    'dataLimitInBytes',
    'dataLimitInGB',
    'destination',
    'destinationISO2',
    'destinationName',
    'priceInCents',
  ],
);

/**
 * Cast schema for mapping the ListPurchasesResponsePurchasesItemPackage application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listPurchasesResponsePurchasesItemPackageRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      id: raw['id'],
      dataLimitInBytes: raw['dataLimitInBytes'],
      dataLimitInGB: raw['dataLimitInGB'],
      destination: raw['destination'],
      destinationISO2: raw['destinationISO2'],
      destinationName: raw['destinationName'],
      priceInCents: raw['priceInCents'],
    };
  },
  [
    'id',
    'dataLimitInBytes',
    'dataLimitInGB',
    'destination',
    'destinationISO2',
    'destinationName',
    'priceInCents',
  ],
);
