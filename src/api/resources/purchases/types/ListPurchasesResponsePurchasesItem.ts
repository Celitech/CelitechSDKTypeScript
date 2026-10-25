import * as core from '../../../../core';
import {
  ListPurchasesResponsePurchasesItemPackage,
  listPurchasesResponsePurchasesItemPackage,
  listPurchasesResponsePurchasesItemPackageRequest,
  listPurchasesResponsePurchasesItemPackageResponse,
} from './ListPurchasesResponsePurchasesItemPackage';
import {
  ListPurchasesResponsePurchasesItemEsim,
  listPurchasesResponsePurchasesItemEsim,
  listPurchasesResponsePurchasesItemEsimRequest,
  listPurchasesResponsePurchasesItemEsimResponse,
} from './ListPurchasesResponsePurchasesItemEsim';

export interface ListPurchasesResponsePurchasesItem {
  /** ID of the purchase */
  id: string;
  /** Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  startDate: string | null;
  /** End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  endDate: string | null;
  /** Duration of the package in days. Possible values are 1, 2, 7, 14, 30, or 90. `null` for unlimited (date-based) packages. */
  duration?: number | null;
  /** Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  createdDate: string;
  /** Epoch value representing the start time of the package's validity */
  startTime?: number | null;
  /** Epoch value representing the end time of the package's validity */
  endTime?: number | null;
  /** Epoch value representing the date of creation of the purchase */
  createdAt?: number;
  package: ListPurchasesResponsePurchasesItemPackage;
  esim: ListPurchasesResponsePurchasesItemEsim;
  /** The `source` indicates whether the purchase was made from the API, dashboard, landing-page, promo-page or iframe. For purchases made before September 8, 2023, the value will be displayed as 'Not available'. */
  source: string;
  /** The `purchaseType` indicates whether this is the initial purchase that creates the eSIM (First Purchase) or a subsequent top-up on an existing eSIM (Top-up Purchase). */
  purchaseType: string;
  /** The `referenceId` that was provided by the partner during the purchase or top-up flow. This identifier can be used for analytics and debugging purposes. */
  referenceId?: string | null;
}

export namespace ListPurchasesResponsePurchasesItem {
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

/**
 * Cast schema for the ListPurchasesResponsePurchasesItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const listPurchasesResponsePurchasesItem =
  core.cast.identity<ListPurchasesResponsePurchasesItem>();

/**
 * Cast schema for mapping API responses to the ListPurchasesResponsePurchasesItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const listPurchasesResponsePurchasesItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'id',
      'startDate',
      'endDate',
      'duration',
      'createdDate',
      'startTime',
      'endTime',
      'createdAt',
      'package',
      'esim',
      'source',
      'purchaseType',
      'referenceId',
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
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      duration: raw['duration'],
      createdDate: raw['createdDate'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
      createdAt: raw['createdAt'],
      package:
        raw['package'] == null
          ? raw['package']
          : listPurchasesResponsePurchasesItemPackageResponse.parse(raw['package']),
      esim:
        raw['esim'] == null
          ? raw['esim']
          : listPurchasesResponsePurchasesItemEsimResponse.parse(raw['esim']),
      source: raw['source'],
      purchaseType: raw['purchaseType'],
      referenceId: raw['referenceId'],
    };
  },
  ['id', 'startDate', 'endDate', 'createdDate', 'package', 'esim', 'source', 'purchaseType'],
);

/**
 * Cast schema for mapping the ListPurchasesResponsePurchasesItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const listPurchasesResponsePurchasesItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      id: raw['id'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      duration: raw['duration'],
      createdDate: raw['createdDate'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
      createdAt: raw['createdAt'],
      package:
        raw['package'] == null
          ? raw['package']
          : listPurchasesResponsePurchasesItemPackageRequest.parse(raw['package']),
      esim:
        raw['esim'] == null
          ? raw['esim']
          : listPurchasesResponsePurchasesItemEsimRequest.parse(raw['esim']),
      source: raw['source'],
      purchaseType: raw['purchaseType'],
      referenceId: raw['referenceId'],
    };
  },
  ['id', 'startDate', 'endDate', 'createdDate', 'package', 'esim', 'source', 'purchaseType'],
);
