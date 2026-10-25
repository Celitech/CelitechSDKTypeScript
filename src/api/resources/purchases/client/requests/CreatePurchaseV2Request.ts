import {
  CreatePurchaseV2RequestLanguage,
  createPurchaseV2RequestLanguage,
} from '../../types/CreatePurchaseV2RequestLanguage';

export interface CreatePurchaseV2Request {
  'Idempotency-Key'?: string;
  destination: string;
  dataLimitInGB: number;
  startDate?: string;
  endDate?: string;
  duration?: number;
  quantity: number;
  email?: string;
  referenceId?: string;
  networkBrand?: string;
  emailBrand?: string;
  language?: CreatePurchaseV2RequestLanguage;
}

export namespace CreatePurchaseV2Request {
  export type Language = CreatePurchaseV2RequestLanguage;
  export const Language = CreatePurchaseV2RequestLanguage;
}
