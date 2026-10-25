import * as core from '../../../../core';
import {
  CreatePurchaseResponsePurchase,
  createPurchaseResponsePurchase,
  createPurchaseResponsePurchaseRequest,
  createPurchaseResponsePurchaseResponse,
} from './CreatePurchaseResponsePurchase';
import {
  CreatePurchaseResponseProfile,
  createPurchaseResponseProfile,
  createPurchaseResponseProfileRequest,
  createPurchaseResponseProfileResponse,
} from './CreatePurchaseResponseProfile';

export interface CreatePurchaseResponse {
  purchase: CreatePurchaseResponsePurchase;
  profile: CreatePurchaseResponseProfile;
}

export namespace CreatePurchaseResponse {
  export interface Purchase {
    id: CreatePurchaseResponsePurchase['id'];
    packageId: CreatePurchaseResponsePurchase['packageId'];
    startDate: CreatePurchaseResponsePurchase['startDate'];
    endDate: CreatePurchaseResponsePurchase['endDate'];
    createdDate: CreatePurchaseResponsePurchase['createdDate'];
    startTime?: CreatePurchaseResponsePurchase['startTime'];
    endTime?: CreatePurchaseResponsePurchase['endTime'];
  }
  export interface Profile {
    iccid: CreatePurchaseResponseProfile['iccid'];
    activationCode: CreatePurchaseResponseProfile['activationCode'];
    manualActivationCode: CreatePurchaseResponseProfile['manualActivationCode'];
  }
}

/**
 * Cast schema for the CreatePurchaseResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const createPurchaseResponse = core.cast.identity<CreatePurchaseResponse>();

/**
 * Cast schema for mapping API responses to the CreatePurchaseResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const createPurchaseResponseResponse = core.cast.object(
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
          : createPurchaseResponsePurchaseResponse.parse(raw['purchase']),
      profile:
        raw['profile'] == null
          ? raw['profile']
          : createPurchaseResponseProfileResponse.parse(raw['profile']),
    };
  },
  ['purchase', 'profile'],
);

/**
 * Cast schema for mapping the CreatePurchaseResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const createPurchaseResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      purchase:
        raw['purchase'] == null
          ? raw['purchase']
          : createPurchaseResponsePurchaseRequest.parse(raw['purchase']),
      profile:
        raw['profile'] == null
          ? raw['profile']
          : createPurchaseResponseProfileRequest.parse(raw['profile']),
    };
  },
  ['purchase', 'profile'],
);
