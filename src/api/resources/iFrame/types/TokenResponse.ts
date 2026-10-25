import * as core from '../../../../core';

export interface TokenResponse {
  /** The generated token */
  token: string;
}

/**
 * Cast schema for the TokenResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const tokenResponse = core.cast.identity<TokenResponse>();

/**
 * Cast schema for mapping API responses to the TokenResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const tokenResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['token']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return { ...__extras, token: raw['token'] };
  },
  ['token'],
);

/**
 * Cast schema for mapping the TokenResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const tokenResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return { token: raw['token'] };
  },
  ['token'],
);
