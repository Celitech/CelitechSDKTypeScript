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
