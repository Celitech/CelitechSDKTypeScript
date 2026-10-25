import * as core from '../../../../core';
import {
  TopUpEsimResponsePurchase,
  topUpEsimResponsePurchase,
  topUpEsimResponsePurchaseRequest,
  topUpEsimResponsePurchaseResponse,
} from './TopUpEsimResponsePurchase';
import {
  TopUpEsimResponseProfile,
  topUpEsimResponseProfile,
  topUpEsimResponseProfileRequest,
  topUpEsimResponseProfileResponse,
} from './TopUpEsimResponseProfile';

export interface TopUpEsimResponse {
  purchase: TopUpEsimResponsePurchase;
  profile: TopUpEsimResponseProfile;
}

export namespace TopUpEsimResponse {
  export interface Purchase {
    id: TopUpEsimResponsePurchase['id'];
    packageId: TopUpEsimResponsePurchase['packageId'];
    startDate: TopUpEsimResponsePurchase['startDate'];
    endDate: TopUpEsimResponsePurchase['endDate'];
    createdDate: TopUpEsimResponsePurchase['createdDate'];
    startTime?: TopUpEsimResponsePurchase['startTime'];
    endTime?: TopUpEsimResponsePurchase['endTime'];
  }
  export interface Profile {
    iccid: TopUpEsimResponseProfile['iccid'];
  }
}

/**
 * Cast schema for the TopUpEsimResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const topUpEsimResponse = core.cast.identity<TopUpEsimResponse>();

/**
 * Cast schema for mapping API responses to the TopUpEsimResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const topUpEsimResponseResponse = core.cast.object(
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
          : topUpEsimResponsePurchaseResponse.parse(raw['purchase']),
      profile:
        raw['profile'] == null
          ? raw['profile']
          : topUpEsimResponseProfileResponse.parse(raw['profile']),
    };
  },
  ['purchase', 'profile'],
);

/**
 * Cast schema for mapping the TopUpEsimResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const topUpEsimResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      purchase:
        raw['purchase'] == null
          ? raw['purchase']
          : topUpEsimResponsePurchaseRequest.parse(raw['purchase']),
      profile:
        raw['profile'] == null
          ? raw['profile']
          : topUpEsimResponseProfileRequest.parse(raw['profile']),
    };
  },
  ['purchase', 'profile'],
);
