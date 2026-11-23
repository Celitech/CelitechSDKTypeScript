import * as core from '../../../../core';
import {
  CreatePurchaseV2RequestLanguage,
  createPurchaseV2RequestLanguage,
} from './CreatePurchaseV2RequestLanguage';
import { CreatePurchaseV2Request } from '../client/requests/CreatePurchaseV2Request';

export type { CreatePurchaseV2Request };

/**
 * Cast schema for the CreatePurchaseV2Request model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const createPurchaseV2Request = core.cast.identity<CreatePurchaseV2Request>();

/**
 * Cast schema for mapping API responses to the CreatePurchaseV2Request application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const createPurchaseV2RequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'destination',
      'dataLimitInGB',
      'startDate',
      'endDate',
      'duration',
      'quantity',
      'email',
      'referenceId',
      'networkBrand',
      'emailBrand',
      'language',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      destination: raw['destination'],
      dataLimitInGB: raw['dataLimitInGB'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      duration: raw['duration'],
      quantity: raw['quantity'],
      email: raw['email'],
      referenceId: raw['referenceId'],
      networkBrand: raw['networkBrand'],
      emailBrand: raw['emailBrand'],
      language: raw['language'],
    };
  },
  ['destination', 'dataLimitInGB', 'quantity'],
);

/**
 * Cast schema for mapping the CreatePurchaseV2Request application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const createPurchaseV2RequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      destination: raw['destination'],
      dataLimitInGB: raw['dataLimitInGB'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      duration: raw['duration'],
      quantity: raw['quantity'],
      email: raw['email'],
      referenceId: raw['referenceId'],
      networkBrand: raw['networkBrand'],
      emailBrand: raw['emailBrand'],
      language: raw['language'],
    };
  },
  ['destination', 'dataLimitInGB', 'quantity'],
);
