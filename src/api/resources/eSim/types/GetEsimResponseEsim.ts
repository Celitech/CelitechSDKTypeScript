import * as core from '../../../../core';

export interface GetEsimResponseEsim {
  /** ID of the eSIM */
  iccid: string;
  /** SM-DP+ Address */
  smdpAddress: string;
  /** QR Code of the eSIM as base64 */
  activationCode: string;
  /** The manual activation code */
  manualActivationCode: string;
  /** Status of the eSIM, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR' */
  status: string;
  /** Status of the eSIM connectivity, possible values are 'ACTIVE' or 'NOT_ACTIVE' */
  connectivityStatus: string;
  /** Indicates whether the eSIM is currently eligible for a top-up. This flag should be checked before attempting a top-up request. */
  isTopUpAllowed: boolean;
}

/**
 * Cast schema for the GetEsimResponseEsim model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getEsimResponseEsim = core.cast.identity<GetEsimResponseEsim>();

/**
 * Cast schema for mapping API responses to the GetEsimResponseEsim application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getEsimResponseEsimResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'iccid',
      'smdpAddress',
      'activationCode',
      'manualActivationCode',
      'status',
      'connectivityStatus',
      'isTopUpAllowed',
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
      smdpAddress: raw['smdpAddress'],
      activationCode: raw['activationCode'],
      manualActivationCode: raw['manualActivationCode'],
      status: raw['status'],
      connectivityStatus: raw['connectivityStatus'],
      isTopUpAllowed: raw['isTopUpAllowed'],
    };
  },
  [
    'iccid',
    'smdpAddress',
    'activationCode',
    'manualActivationCode',
    'status',
    'connectivityStatus',
    'isTopUpAllowed',
  ],
);

/**
 * Cast schema for mapping the GetEsimResponseEsim application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getEsimResponseEsimRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      iccid: raw['iccid'],
      smdpAddress: raw['smdpAddress'],
      activationCode: raw['activationCode'],
      manualActivationCode: raw['manualActivationCode'],
      status: raw['status'],
      connectivityStatus: raw['connectivityStatus'],
      isTopUpAllowed: raw['isTopUpAllowed'],
    };
  },
  [
    'iccid',
    'smdpAddress',
    'activationCode',
    'manualActivationCode',
    'status',
    'connectivityStatus',
    'isTopUpAllowed',
  ],
);
