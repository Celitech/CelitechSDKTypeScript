export interface EditPurchaseRequest {
  'Idempotency-Key'?: string;
  purchaseId: string;
  startDate: string;
  endDate: string;
  startTime?: number;
  endTime?: number;
}
