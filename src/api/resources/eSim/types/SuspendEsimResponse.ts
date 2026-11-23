import * as core from '../../../../core';

export interface SuspendEsimResponse {
  /** Confirmation message */
  message: string;
}

/**
 * Cast schema for the SuspendEsimResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const suspendEsimResponse = core.cast.identity<SuspendEsimResponse>();

/**
 * Cast schema for mapping API responses to the SuspendEsimResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const suspendEsimResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['message']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, message: raw['message'] };
  },
  ['message'],
);

/**
 * Cast schema for mapping the SuspendEsimResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const suspendEsimResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { message: raw['message'] };
  },
  ['message'],
);
