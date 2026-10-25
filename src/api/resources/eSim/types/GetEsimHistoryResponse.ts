import * as core from '../../../../core';
import {
  GetEsimHistoryResponseEsim,
  getEsimHistoryResponseEsim,
  getEsimHistoryResponseEsimRequest,
  getEsimHistoryResponseEsimResponse,
} from './GetEsimHistoryResponseEsim';
import { GetEsimHistoryResponseEsimHistory } from '../../../types/GetEsimHistoryResponseEsimHistory';
import { GetEsimHistoryResponseEsimHistoryItem } from './GetEsimHistoryResponseEsimHistoryItem';

export interface GetEsimHistoryResponse {
  esim: GetEsimHistoryResponseEsim;
}

export namespace GetEsimHistoryResponse {
  export interface Esim {
    iccid: GetEsimHistoryResponseEsim['iccid'];
    history: GetEsimHistoryResponseEsim['history'];
  }
  export namespace Esim {
    export type History = GetEsimHistoryResponseEsimHistory;
    export namespace History {
      export type Item = GetEsimHistoryResponseEsimHistoryItem;
    }
  }
}

/**
 * Cast schema for the GetEsimHistoryResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getEsimHistoryResponse = core.cast.identity<GetEsimHistoryResponse>();

/**
 * Cast schema for mapping API responses to the GetEsimHistoryResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getEsimHistoryResponseResponse = core.cast.object(
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
      esim:
        raw['esim'] == null ? raw['esim'] : getEsimHistoryResponseEsimResponse.parse(raw['esim']),
    };
  },
  ['esim'],
);

/**
 * Cast schema for mapping the GetEsimHistoryResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getEsimHistoryResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      esim:
        raw['esim'] == null ? raw['esim'] : getEsimHistoryResponseEsimRequest.parse(raw['esim']),
    };
  },
  ['esim'],
);
