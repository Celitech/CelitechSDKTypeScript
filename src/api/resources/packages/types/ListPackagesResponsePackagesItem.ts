import * as core from '../../../../core';

export interface ListPackagesResponsePackagesItem {
  /** ID of the package */
  id: string;
  /** ISO3 representation of the package's destination. */
  destination: string;
  /** ISO2 representation of the package's destination. */
  destinationISO2: string;
  /** Size of the package in Bytes. A value of `-1` indicates an unlimited package. */
  dataLimitInBytes: number;
  /** Size of the package in GB. A value of `-1` indicates an unlimited (date-based) package. */
  dataLimitInGB: number;
  /** Min number of days for the package */
  minDays: number;
  /** Max number of days for the package */
  maxDays: number;
  /** Price of the package in cents */
  priceInCents: number;
}

/**
 * Cast schema for the ListPackagesResponsePackagesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listPackagesResponsePackagesItem =
  core.cast.identity<ListPackagesResponsePackagesItem>();

/**
 * Cast schema for mapping API responses to the ListPackagesResponsePackagesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listPackagesResponsePackagesItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'id',
      'destination',
      'destinationISO2',
      'dataLimitInBytes',
      'dataLimitInGB',
      'minDays',
      'maxDays',
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
      destination: raw['destination'],
      destinationISO2: raw['destinationISO2'],
      dataLimitInBytes: raw['dataLimitInBytes'],
      dataLimitInGB: raw['dataLimitInGB'],
      minDays: raw['minDays'],
      maxDays: raw['maxDays'],
      priceInCents: raw['priceInCents'],
    };
  },
  [
    'id',
    'destination',
    'destinationISO2',
    'dataLimitInBytes',
    'dataLimitInGB',
    'minDays',
    'maxDays',
    'priceInCents',
  ],
);

/**
 * Cast schema for mapping the ListPackagesResponsePackagesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listPackagesResponsePackagesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      id: raw['id'],
      destination: raw['destination'],
      destinationISO2: raw['destinationISO2'],
      dataLimitInBytes: raw['dataLimitInBytes'],
      dataLimitInGB: raw['dataLimitInGB'],
      minDays: raw['minDays'],
      maxDays: raw['maxDays'],
      priceInCents: raw['priceInCents'],
    };
  },
  [
    'id',
    'destination',
    'destinationISO2',
    'dataLimitInBytes',
    'dataLimitInGB',
    'minDays',
    'maxDays',
    'priceInCents',
  ],
);
