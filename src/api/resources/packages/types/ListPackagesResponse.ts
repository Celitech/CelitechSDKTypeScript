import * as core from '../../../../core';
import {
  ListPackagesResponsePackagesItem,
  listPackagesResponsePackagesItem,
  listPackagesResponsePackagesItemRequest,
  listPackagesResponsePackagesItemResponse,
} from './ListPackagesResponsePackagesItem';
import { ListPackagesResponsePackages } from '../../../types/ListPackagesResponsePackages';

export interface ListPackagesResponse {
  packages: ListPackagesResponsePackagesItem[];
  /** The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination */
  afterCursor: string | null;
}

export namespace ListPackagesResponse {
  export type Packages = ListPackagesResponsePackages;
  export namespace Packages {
    export type Item = ListPackagesResponsePackagesItem;
  }
}

/**
 * Cast schema for the ListPackagesResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listPackagesResponse = core.cast.identity<ListPackagesResponse>();

/**
 * Cast schema for mapping API responses to the ListPackagesResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listPackagesResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['packages', 'afterCursor']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      packages: Array.isArray(raw['packages'])
        ? (raw['packages'] as any[]).map((v: any) =>
            v == null ? v : listPackagesResponsePackagesItemResponse.parse(v),
          )
        : (raw['packages'] as any),
      afterCursor: raw['afterCursor'],
    };
  },
  ['packages', 'afterCursor'],
);

/**
 * Cast schema for mapping the ListPackagesResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listPackagesResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      packages: Array.isArray(raw['packages'])
        ? (raw['packages'] as any[]).map((v: any) =>
            v == null ? v : listPackagesResponsePackagesItemRequest.parse(v),
          )
        : (raw['packages'] as any),
      afterCursor: raw['afterCursor'],
    };
  },
  ['packages', 'afterCursor'],
);
