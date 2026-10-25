import * as core from '../../../../core';
import {
  GetEsimDeviceResponseDevice,
  getEsimDeviceResponseDevice,
  getEsimDeviceResponseDeviceRequest,
  getEsimDeviceResponseDeviceResponse,
} from './GetEsimDeviceResponseDevice';

export interface GetEsimDeviceResponse {
  device: GetEsimDeviceResponseDevice;
}

export namespace GetEsimDeviceResponse {
  export interface Device {
    oem: GetEsimDeviceResponseDevice['oem'];
    hardwareName: GetEsimDeviceResponseDevice['hardwareName'];
    hardwareModel: GetEsimDeviceResponseDevice['hardwareModel'];
    eid: GetEsimDeviceResponseDevice['eid'];
  }
}

/**
 * Cast schema for the GetEsimDeviceResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getEsimDeviceResponse = core.cast.identity<GetEsimDeviceResponse>();

/**
 * Cast schema for mapping API responses to the GetEsimDeviceResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getEsimDeviceResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['device']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      device:
        raw['device'] == null
          ? raw['device']
          : getEsimDeviceResponseDeviceResponse.parse(raw['device']),
    };
  },
  ['device'],
);

/**
 * Cast schema for mapping the GetEsimDeviceResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getEsimDeviceResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      device:
        raw['device'] == null
          ? raw['device']
          : getEsimDeviceResponseDeviceRequest.parse(raw['device']),
    };
  },
  ['device'],
);
