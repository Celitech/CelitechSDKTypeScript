export interface CreatePurchaseParams {
  accept: string | null;
}

export interface ListPurchasesParams {
  accept: string | null;
  purchaseId?: string | null;
  iccid?: string | null;
  afterDate?: string | null;
  beforeDate?: string | null;
  email?: string | null;
  referenceId?: string | null;
  afterCursor?: string | null;
  limit?: string | null;
  after?: string | null;
  before?: string | null;
}
