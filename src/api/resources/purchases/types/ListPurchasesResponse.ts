import * as core from '../../../../core';
import {
  ListPurchasesResponsePurchasesItem,
  listPurchasesResponsePurchasesItem,
  listPurchasesResponsePurchasesItemRequest,
  listPurchasesResponsePurchasesItemResponse,
} from './ListPurchasesResponsePurchasesItem';
import { ListPurchasesResponsePurchases } from '../../../types/ListPurchasesResponsePurchases';
import { ListPurchasesResponsePurchasesItemPackage } from './ListPurchasesResponsePurchasesItemPackage';
import { ListPurchasesResponsePurchasesItemEsim } from './ListPurchasesResponsePurchasesItemEsim';

export interface ListPurchasesResponse {
  purchases: ListPurchasesResponsePurchasesItem[];
  /** The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination. */
  afterCursor: string | null;
}

export namespace ListPurchasesResponse {
  export type Purchases = ListPurchasesResponsePurchases;
  export namespace Purchases {
    export type Item = ListPurchasesResponsePurchasesItem;
    export namespace Item {
      export interface Package {
        id: ListPurchasesResponsePurchasesItemPackage['id'];
        dataLimitInBytes: ListPurchasesResponsePurchasesItemPackage['dataLimitInBytes'];
        dataLimitInGB: ListPurchasesResponsePurchasesItemPackage['dataLimitInGB'];
        destination: ListPurchasesResponsePurchasesItemPackage['destination'];
        destinationISO2: ListPurchasesResponsePurchasesItemPackage['destinationISO2'];
        destinationName: ListPurchasesResponsePurchasesItemPackage['destinationName'];
        priceInCents: ListPurchasesResponsePurchasesItemPackage['priceInCents'];
      }
      export interface Esim {
        iccid: ListPurchasesResponsePurchasesItemEsim['iccid'];
      }
    }
  }
}

/**
 * Cast schema for the ListPurchasesResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listPurchasesResponse = core.cast.identity<ListPurchasesResponse>();

/**
 * Cast schema for mapping API responses to the ListPurchasesResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listPurchasesResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['purchases', 'afterCursor']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      purchases: Array.isArray(raw['purchases'])
        ? (raw['purchases'] as any[]).map((v: any) =>
            v == null ? v : listPurchasesResponsePurchasesItemResponse.parse(v),
          )
        : (raw['purchases'] as any),
      afterCursor: raw['afterCursor'],
    };
  },
  ['purchases', 'afterCursor'],
);

/**
 * Cast schema for mapping the ListPurchasesResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listPurchasesResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      purchases: Array.isArray(raw['purchases'])
        ? (raw['purchases'] as any[]).map((v: any) =>
            v == null ? v : listPurchasesResponsePurchasesItemRequest.parse(v),
          )
        : (raw['purchases'] as any),
      afterCursor: raw['afterCursor'],
    };
  },
  ['purchases', 'afterCursor'],
);
