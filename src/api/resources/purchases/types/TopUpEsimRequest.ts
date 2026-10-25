import * as core from '../../../../core';
import { TopUpEsimRequest } from '../client/requests/TopUpEsimRequest';

export type { TopUpEsimRequest };

/**
 * Cast schema for the TopUpEsimRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const topUpEsimRequest = core.cast.identity<TopUpEsimRequest>();

/**
 * Cast schema for mapping API responses to the TopUpEsimRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const topUpEsimRequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'iccid',
      'dataLimitInGB',
      'startDate',
      'endDate',
      'duration',
      'email',
      'referenceId',
      'emailBrand',
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
      iccid: raw['iccid'],
      dataLimitInGB: raw['dataLimitInGB'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      duration: raw['duration'],
      email: raw['email'],
      referenceId: raw['referenceId'],
      emailBrand: raw['emailBrand'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['iccid', 'dataLimitInGB'],
);

/**
 * Cast schema for mapping the TopUpEsimRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const topUpEsimRequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      iccid: raw['iccid'],
      dataLimitInGB: raw['dataLimitInGB'],
      startDate: raw['startDate'],
      endDate: raw['endDate'],
      duration: raw['duration'],
      email: raw['email'],
      referenceId: raw['referenceId'],
      emailBrand: raw['emailBrand'],
      startTime: raw['startTime'],
      endTime: raw['endTime'],
    };
  },
  ['iccid', 'dataLimitInGB'],
);
