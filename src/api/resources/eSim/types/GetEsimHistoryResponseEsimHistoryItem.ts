import * as core from '../../../../core';

export interface GetEsimHistoryResponseEsimHistoryItem {
  /** The status of the eSIM at a given time, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR' */
  status: string;
  /** The date when the eSIM status changed in the format 'yyyy-MM-ddThh:mm:ssZZ' */
  statusDate: string;
  /** Epoch value representing the date when the eSIM status changed */
  date?: number;
}

/**
 * Cast schema for the GetEsimHistoryResponseEsimHistoryItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getEsimHistoryResponseEsimHistoryItem =
  core.cast.identity<GetEsimHistoryResponseEsimHistoryItem>();

/**
 * Cast schema for mapping API responses to the GetEsimHistoryResponseEsimHistoryItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getEsimHistoryResponseEsimHistoryItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['status', 'statusDate', 'date']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, status: raw['status'], statusDate: raw['statusDate'], date: raw['date'] };
  },
  ['status', 'statusDate'],
);

/**
 * Cast schema for mapping the GetEsimHistoryResponseEsimHistoryItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getEsimHistoryResponseEsimHistoryItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { status: raw['status'], statusDate: raw['statusDate'], date: raw['date'] };
  },
  ['status', 'statusDate'],
);
