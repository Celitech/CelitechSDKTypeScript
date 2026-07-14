export interface ListPackagesParams {
  destination?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  afterCursor?: string | null;
  limit?: string | null;
  startTime?: string | null;
  endTime?: string | null;
}

export interface ListPurchasesParams {
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

export interface GetESimParams {
  iccid?: string | null;
}
