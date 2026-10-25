import * as core from '../../../../core';

export interface CreatePurchaseResponseProfile {
  /** ID of the eSIM */
  iccid: string;
  /** QR Code of the eSIM as base64 */
  activationCode: string;
  /** Manual Activation Code of the eSIM */
  manualActivationCode: string;
}

/**
 * Cast schema for the CreatePurchaseResponseProfile model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const createPurchaseResponseProfile = core.cast.identity<CreatePurchaseResponseProfile>();

/**
 * Cast schema for mapping API responses to the CreatePurchaseResponseProfile application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const createPurchaseResponseProfileResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['iccid', 'activationCode', 'manualActivationCode']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      iccid: raw['iccid'],
      activationCode: raw['activationCode'],
      manualActivationCode: raw['manualActivationCode'],
    };
  },
  ['iccid', 'activationCode', 'manualActivationCode'],
);

/**
 * Cast schema for mapping the CreatePurchaseResponseProfile application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const createPurchaseResponseProfileRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      iccid: raw['iccid'],
      activationCode: raw['activationCode'],
      manualActivationCode: raw['manualActivationCode'],
    };
  },
  ['iccid', 'activationCode', 'manualActivationCode'],
);
