import * as core from '../../../../core';

export interface GetEsimDeviceResponseDevice {
  /** Name of the OEM */
  oem: string;
  /** Name of the Device */
  hardwareName: string;
  /** Model of the Device */
  hardwareModel: string;
  /** Serial Number of the eSIM */
  eid: string;
}

/**
 * Cast schema for the GetEsimDeviceResponseDevice model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getEsimDeviceResponseDevice = core.cast.identity<GetEsimDeviceResponseDevice>();

/**
 * Cast schema for mapping API responses to the GetEsimDeviceResponseDevice application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getEsimDeviceResponseDeviceResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>(['oem', 'hardwareName', 'hardwareModel', 'eid']);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      oem: raw['oem'],
      hardwareName: raw['hardwareName'],
      hardwareModel: raw['hardwareModel'],
      eid: raw['eid'],
    };
  },
  ['oem', 'hardwareName', 'hardwareModel', 'eid'],
);

/**
 * Cast schema for mapping the GetEsimDeviceResponseDevice application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getEsimDeviceResponseDeviceRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      oem: raw['oem'],
      hardwareName: raw['hardwareName'],
      hardwareModel: raw['hardwareModel'],
      eid: raw['eid'],
    };
  },
  ['oem', 'hardwareName', 'hardwareModel', 'eid'],
);
