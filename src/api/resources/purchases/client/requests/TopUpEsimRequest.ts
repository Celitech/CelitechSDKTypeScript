export interface TopUpEsimRequest {
  'Idempotency-Key'?: string;
  iccid: string;
  dataLimitInGB: number;
  startDate?: string;
  endDate?: string;
  duration?: number;
  email?: string;
  referenceId?: string;
  emailBrand?: string;
  startTime?: number;
  endTime?: number;
}
