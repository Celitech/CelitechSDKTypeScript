import * as core from '../../../../core';
import {
  CreatePurchaseRequestLanguage,
  createPurchaseRequestLanguage,
} from './CreatePurchaseRequestLanguage';
import { CreatePurchaseRequest } from '../client/requests/CreatePurchaseRequest';

export type { CreatePurchaseRequest };

/**
 * Cast schema for the CreatePurchaseRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const createPurchaseRequest = core.cast.identity<CreatePurchaseRequest>();

/**
 * Cast schema for mapping API responses to the CreatePurchaseRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const createPurchaseRequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'destination',
      'dataLimitInGB',
      'startDate',
      'endDate',
      'email',
      'referenceId',
      'networkBrand',
      'emailBrand',
      'language',
      'startTime',
      'endTime',
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
      email: raw['email'],
      referenceId: raw['referenceId'],
      networkBrand: raw['networkBrand'],
      emailBrand: raw['emailBrand'],
      language: raw['language'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['destination', 'dataLimitInGB', 'startDate', 'endDate'],
);

/**
 * Cast schema for mapping the CreatePurchaseRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const createPurchaseRequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      destination: raw['destination'],
      dataLimitInGB: raw['dataLimitInGB'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      email: raw['email'],
      referenceId: raw['referenceId'],
      networkBrand: raw['networkBrand'],
      emailBrand: raw['emailBrand'],
      language: raw['language'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['destination', 'dataLimitInGB', 'startDate', 'endDate'],
);
