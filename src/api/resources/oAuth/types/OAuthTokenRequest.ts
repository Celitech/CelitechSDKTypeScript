import * as core from '../../../../core';
import { GrantType, grantType } from './GrantType';

export interface OAuthTokenRequest {
  grant_type: GrantType;
  client_id: string;
  client_secret: string;
  scope: string;
}

/**
 * Cast schema for the OAuthTokenRequest model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const oAuthTokenRequest = core.cast.identity<OAuthTokenRequest>();

/**
 * Cast schema for mapping API responses to the OAuthTokenRequest application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const oAuthTokenRequestResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['grant_type', 'client_id', 'client_secret', 'scope']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      grant_type: raw['grant_type'],
      client_id: raw['client_id'],
      client_secret: raw['client_secret'],
      scope: raw['scope'],
    };
  },
  ['grant_type', 'client_id', 'client_secret', 'scope'],
);

/**
 * Cast schema for mapping the OAuthTokenRequest application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const oAuthTokenRequestRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      grant_type: raw['grant_type'],
      client_id: raw['client_id'],
      client_secret: raw['client_secret'],
      scope: raw['scope'],
    };
  },
  ['grant_type', 'client_id', 'client_secret', 'scope'],
);
