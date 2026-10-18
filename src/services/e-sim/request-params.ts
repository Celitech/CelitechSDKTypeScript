export interface GetEsimParams {
  iccid: string;
}

export interface SuspendEsimParams {
  idempotencyKey?: string;
}
