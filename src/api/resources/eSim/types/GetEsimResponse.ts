import * as core from '../../../../core';
import {
  GetEsimResponseEsim,
  getEsimResponseEsim,
  getEsimResponseEsimRequest,
  getEsimResponseEsimResponse,
} from './GetEsimResponseEsim';

export interface GetEsimResponse {
  esim: GetEsimResponseEsim;
}

export namespace GetEsimResponse {
  export interface Esim {
    iccid: GetEsimResponseEsim['iccid'];
    smdpAddress: GetEsimResponseEsim['smdpAddress'];
    activationCode: GetEsimResponseEsim['activationCode'];
    manualActivationCode: GetEsimResponseEsim['manualActivationCode'];
    status: GetEsimResponseEsim['status'];
    connectivityStatus: GetEsimResponseEsim['connectivityStatus'];
    isTopUpAllowed: GetEsimResponseEsim['isTopUpAllowed'];
  }
}

/**
 * Cast schema for the GetEsimResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getEsimResponse = core.cast.identity<GetEsimResponse>();

/**
 * Cast schema for mapping API responses to the GetEsimResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getEsimResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['esim']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      esim: raw['esim'] == null ? raw['esim'] : getEsimResponseEsimResponse.parse(raw['esim']),
    };
  },
  ['esim'],
);

/**
 * Cast schema for mapping the GetEsimResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getEsimResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      esim: raw['esim'] == null ? raw['esim'] : getEsimResponseEsimRequest.parse(raw['esim']),
    };
  },
  ['esim'],
);
