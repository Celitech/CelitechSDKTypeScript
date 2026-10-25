import * as core from '../../../../core';

export interface CreatePurchaseV2ResponseItemProfile {
  /** ID of the eSIM */
  iccid: string;
  /** QR Code of the eSIM as base64 */
  activationCode: string;
  /** Manual Activation Code of the eSIM */
  manualActivationCode: string;
  /** iOS Activation Link of the eSIM */
  iosActivationLink: string;
  /** Android Activation Link of the eSIM */
  androidActivationLink: string;
}

/**
 * Cast schema for the CreatePurchaseV2ResponseItemProfile model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const createPurchaseV2ResponseItemProfile =
  core.cast.identity<CreatePurchaseV2ResponseItemProfile>();

/**
 * Cast schema for mapping API responses to the CreatePurchaseV2ResponseItemProfile application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const createPurchaseV2ResponseItemProfileResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'iccid',
      'activationCode',
      'manualActivationCode',
      'iosActivationLink',
      'androidActivationLink',
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
      activationCode: raw['activationCode'],
      manualActivationCode: raw['manualActivationCode'],
      iosActivationLink: raw['iosActivationLink'],
      androidActivationLink: raw['androidActivationLink'],
    };
  },
  ['iccid', 'activationCode', 'manualActivationCode', 'iosActivationLink', 'androidActivationLink'],
);

/**
 * Cast schema for mapping the CreatePurchaseV2ResponseItemProfile application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const createPurchaseV2ResponseItemProfileRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      iccid: raw['iccid'],
      activationCode: raw['activationCode'],
      manualActivationCode: raw['manualActivationCode'],
      iosActivationLink: raw['iosActivationLink'],
      androidActivationLink: raw['androidActivationLink'],
    };
  },
  ['iccid', 'activationCode', 'manualActivationCode', 'iosActivationLink', 'androidActivationLink'],
);
