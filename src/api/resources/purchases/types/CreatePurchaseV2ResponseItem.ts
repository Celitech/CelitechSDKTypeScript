import * as core from '../../../../core';
import {
  CreatePurchaseV2ResponseItemPurchase,
  createPurchaseV2ResponseItemPurchase,
  createPurchaseV2ResponseItemPurchaseRequest,
  createPurchaseV2ResponseItemPurchaseResponse,
} from './CreatePurchaseV2ResponseItemPurchase';
import {
  CreatePurchaseV2ResponseItemProfile,
  createPurchaseV2ResponseItemProfile,
  createPurchaseV2ResponseItemProfileRequest,
  createPurchaseV2ResponseItemProfileResponse,
} from './CreatePurchaseV2ResponseItemProfile';

export interface CreatePurchaseV2ResponseItem {
  purchase: CreatePurchaseV2ResponseItemPurchase;
  profile: CreatePurchaseV2ResponseItemProfile;
}

export namespace CreatePurchaseV2ResponseItem {
  export interface Purchase {
    id: CreatePurchaseV2ResponseItemPurchase['id'];
    packageId: CreatePurchaseV2ResponseItemPurchase['packageId'];
    createdDate: CreatePurchaseV2ResponseItemPurchase['createdDate'];
  }
  export interface Profile {
    iccid: CreatePurchaseV2ResponseItemProfile['iccid'];
    activationCode: CreatePurchaseV2ResponseItemProfile['activationCode'];
    manualActivationCode: CreatePurchaseV2ResponseItemProfile['manualActivationCode'];
    iosActivationLink: CreatePurchaseV2ResponseItemProfile['iosActivationLink'];
    androidActivationLink: CreatePurchaseV2ResponseItemProfile['androidActivationLink'];
  }
}

/**
 * Cast schema for the CreatePurchaseV2ResponseItem model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const createPurchaseV2ResponseItem = core.cast.identity<CreatePurchaseV2ResponseItem>();

/**
 * Cast schema for mapping API responses to the CreatePurchaseV2ResponseItem application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const createPurchaseV2ResponseItemResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['purchase', 'profile']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      purchase:
        raw['purchase'] == null
          ? raw['purchase']
          : createPurchaseV2ResponseItemPurchaseResponse.parse(raw['purchase']),
      profile:
        raw['profile'] == null
          ? raw['profile']
          : createPurchaseV2ResponseItemProfileResponse.parse(raw['profile']),
    };
  },
  ['purchase', 'profile'],
);

/**
 * Cast schema for mapping the CreatePurchaseV2ResponseItem application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const createPurchaseV2ResponseItemRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      purchase:
        raw['purchase'] == null
          ? raw['purchase']
          : createPurchaseV2ResponseItemPurchaseRequest.parse(raw['purchase']),
      profile:
        raw['profile'] == null
          ? raw['profile']
          : createPurchaseV2ResponseItemProfileRequest.parse(raw['profile']),
    };
  },
  ['purchase', 'profile'],
);
