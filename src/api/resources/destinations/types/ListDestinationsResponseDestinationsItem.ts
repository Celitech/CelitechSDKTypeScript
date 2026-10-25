import * as core from '../../../../core';

export interface ListDestinationsResponseDestinationsItem {
  /** Name of the destination */
  name: string;
  /** ISO3 representation of the destination */
  destination: string;
  /** ISO2 representation of the destination */
  destinationISO2: string;
  /** This array indicates the geographical area covered by a specific destination. If the destination represents a single country, the array will include that country. However, if the destination represents a broader regional scope, the array will be populated with the names of the countries belonging to that region. */
  supportedCountries: string[];
}

/**
 * Cast schema for the ListDestinationsResponseDestinationsItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listDestinationsResponseDestinationsItem =
  core.cast.identity<ListDestinationsResponseDestinationsItem>();

/**
 * Cast schema for mapping API responses to the ListDestinationsResponseDestinationsItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listDestinationsResponseDestinationsItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'name',
      'destination',
      'destinationISO2',
      'supportedCountries',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      name: raw['name'],
      destination: raw['destination'],
      destinationISO2: raw['destinationISO2'],
      supportedCountries: raw['supportedCountries'],
    };
  },
  ['name', 'destination', 'destinationISO2', 'supportedCountries'],
);

/**
 * Cast schema for mapping the ListDestinationsResponseDestinationsItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listDestinationsResponseDestinationsItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      name: raw['name'],
      destination: raw['destination'],
      destinationISO2: raw['destinationISO2'],
      supportedCountries: raw['supportedCountries'],
    };
  },
  ['name', 'destination', 'destinationISO2', 'supportedCountries'],
);
