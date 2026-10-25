import * as core from '../../../../core';
import {
  GetEsimHistoryResponseEsimHistoryItem,
  getEsimHistoryResponseEsimHistoryItem,
  getEsimHistoryResponseEsimHistoryItemRequest,
  getEsimHistoryResponseEsimHistoryItemResponse,
} from './GetEsimHistoryResponseEsimHistoryItem';
import { GetEsimHistoryResponseEsimHistory } from '../../../types/GetEsimHistoryResponseEsimHistory';

export interface GetEsimHistoryResponseEsim {
  /** ID of the eSIM */
  iccid: string;
  history: GetEsimHistoryResponseEsimHistoryItem[];
}

export namespace GetEsimHistoryResponseEsim {
  export type History = GetEsimHistoryResponseEsimHistory;
  export namespace History {
    export type Item = GetEsimHistoryResponseEsimHistoryItem;
  }
}

/**
 * Cast schema for the GetEsimHistoryResponseEsim model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getEsimHistoryResponseEsim = core.cast.identity<GetEsimHistoryResponseEsim>();

/**
 * Cast schema for mapping API responses to the GetEsimHistoryResponseEsim application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getEsimHistoryResponseEsimResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['iccid', 'history']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      iccid: raw['iccid'],
      history: Array.isArray(raw['history'])
        ? (raw['history'] as any[]).map((v: any) =>
            v == null ? v : getEsimHistoryResponseEsimHistoryItemResponse.parse(v),
          )
        : (raw['history'] as any),
    };
  },
  ['iccid', 'history'],
);

/**
 * Cast schema for mapping the GetEsimHistoryResponseEsim application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getEsimHistoryResponseEsimRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      iccid: raw['iccid'],
      history: Array.isArray(raw['history'])
        ? (raw['history'] as any[]).map((v: any) =>
            v == null ? v : getEsimHistoryResponseEsimHistoryItemRequest.parse(v),
          )
        : (raw['history'] as any),
    };
  },
  ['iccid', 'history'],
);
