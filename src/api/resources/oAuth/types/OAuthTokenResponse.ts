import * as core from '../../../../core';

export interface OAuthTokenResponse {
  access_token?: string;
  expires_in?: number | null;
}

/**
 * Cast schema for the OAuthTokenResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const oAuthTokenResponse = core.cast.identity<OAuthTokenResponse>();

/**
 * Cast schema for mapping API responses to the OAuthTokenResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const oAuthTokenResponseResponse = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  const __declaredKeys = new Set<string>(['access_token', 'expires_in']);
  const __extras: { [key: string]: unknown } = {};
  for (const __key of globalThis.Object.keys(raw as object)) {
    if (!__declaredKeys.has(__key)) {
      __extras[__key] = (raw as { [key: string]: unknown })[__key];
    }
  }
  return { ...__extras, access_token: raw['access_token'], expires_in: raw['expires_in'] };
}, []);

/**
 * Cast schema for mapping the OAuthTokenResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const oAuthTokenResponseRequest = core.cast.object((raw: any): any => {
  if (raw === null || raw === undefined) {
    return raw;
  }
  return { access_token: raw['access_token'], expires_in: raw['expires_in'] };
}, []);
