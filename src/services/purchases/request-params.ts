export interface ListPurchasesParams {
  iccid?: string;
  afterDate?: string;
  beforeDate?: string;
  referenceId?: string;
  afterCursor?: string;
  limit?: number;
  after?: number;
  before?: number;
}
