import * as core from '../../../../core';

export interface GetPurchaseConsumptionResponse {
  /** Remaining balance of the package in bytes. Returns `-1` for unlimited packages. */
  dataUsageRemainingInBytes: number;
  /** Remaining balance of the package in GB. Returns `-1` for unlimited packages. */
  dataUsageRemainingInGB: number;
  /** Status of the connectivity, possible values are 'ACTIVE' or 'NOT_ACTIVE' */
  status: string;
}

/**
 * Cast schema for the GetPurchaseConsumptionResponse model — a bare identity (see cast.ts): this
 * export is never itself used for wire<->app rename, only referenced by name from other files.
 */
export const getPurchaseConsumptionResponse = core.cast.identity<GetPurchaseConsumptionResponse>();

/**
 * Cast schema for mapping API responses to the GetPurchaseConsumptionResponse application shape.
 * Renames wire keys to idiomatic property names; performs no validation (see cast.ts).
 */
export const getPurchaseConsumptionResponseResponse = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    const __declaredKeys = new Set<string>([
      'dataUsageRemainingInBytes',
      'dataUsageRemainingInGB',
      'status',
    ]);
    const __extras: { [key: string]: unknown } = {};
    for (const __key of globalThis.Object.keys(raw as object)) {
      if (!__declaredKeys.has(__key)) {
        __extras[__key] = (raw as { [key: string]: unknown })[__key];
      }
    }
    return {
      ...__extras,
      dataUsageRemainingInBytes: raw['dataUsageRemainingInBytes'],
      dataUsageRemainingInGB: raw['dataUsageRemainingInGB'],
      status: raw['status'],
    };
  },
  ['dataUsageRemainingInBytes', 'dataUsageRemainingInGB', 'status'],
);

/**
 * Cast schema for mapping the GetPurchaseConsumptionResponse application shape to API requests.
 * Renames idiomatic property names back to wire keys; performs no validation (see cast.ts).
 */
export const getPurchaseConsumptionResponseRequest = core.cast.object(
  (raw: any): any => {
    if (raw === null || raw === undefined) {
      return raw;
    }
    return {
      dataUsageRemainingInBytes: raw['dataUsageRemainingInBytes'],
      dataUsageRemainingInGB: raw['dataUsageRemainingInGB'],
      status: raw['status'],
    };
  },
  ['dataUsageRemainingInBytes', 'dataUsageRemainingInGB', 'status'],
);
