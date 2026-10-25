import * as core from '../../../../core';
import {
  ListDestinationsResponseDestinationsItem,
  listDestinationsResponseDestinationsItem,
  listDestinationsResponseDestinationsItemRequest,
  listDestinationsResponseDestinationsItemResponse,
} from './ListDestinationsResponseDestinationsItem';
import { ListDestinationsResponseDestinations } from '../../../types/ListDestinationsResponseDestinations';

export interface ListDestinationsResponse {
  destinations: ListDestinationsResponseDestinationsItem[];
}

export namespace ListDestinationsResponse {
  export type Destinations = ListDestinationsResponseDestinations;
  export namespace Destinations {
    export type Item = ListDestinationsResponseDestinationsItem;
  }
}

/**
 * Cast schema for the ListDestinationsResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listDestinationsResponse = core.cast.identity<ListDestinationsResponse>();

/**
 * Cast schema for mapping API responses to the ListDestinationsResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listDestinationsResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['destinations']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      destinations: Array.isArray(raw['destinations'])
        ? (raw['destinations'] as any[]).map((v: any) =>
            v == null ? v : listDestinationsResponseDestinationsItemResponse.parse(v),
          )
        : (raw['destinations'] as any),
    };
  },
  ['destinations'],
);

/**
 * Cast schema for mapping the ListDestinationsResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listDestinationsResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      destinations: Array.isArray(raw['destinations'])
        ? (raw['destinations'] as any[]).map((v: any) =>
            v == null ? v : listDestinationsResponseDestinationsItemRequest.parse(v),
          )
        : (raw['destinations'] as any),
    };
  },
  ['destinations'],
);
