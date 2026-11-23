import {
  CreatePurchaseRequestLanguage,
  createPurchaseRequestLanguage,
} from '../../types/CreatePurchaseRequestLanguage';

export interface CreatePurchaseRequest {
  'Idempotency-Key'?: string;
  destination: string;
  dataLimitInGB: number;
  startDate: string;
  endDate: string;
  email?: string;
  referenceId?: string;
  networkBrand?: string;
  emailBrand?: string;
  language?: CreatePurchaseRequestLanguage;
  startTime?: number;
  endTime?: number;
}

export namespace CreatePurchaseRequest {
  export type Language = CreatePurchaseRequestLanguage;
  export const Language = CreatePurchaseRequestLanguage;
}
