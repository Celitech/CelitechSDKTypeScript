export interface CreatePurchaseV2Params {
  idempotencyKey?: string;
}

export interface ListPurchasesParams {
  purchaseId?: string;
  iccid?: string;
  afterDate?: string;
  beforeDate?: string;
  email?: string;
  referenceId?: string;
  afterCursor?: string;
  limit?: number;
  after?: number;
  before?: number;
}

export interface CreatePurchaseParams {
  idempotencyKey?: string;
}

export interface TopUpEsimParams {
  idempotencyKey?: string;
}

export interface EditPurchaseParams {
  idempotencyKey?: string;
}
