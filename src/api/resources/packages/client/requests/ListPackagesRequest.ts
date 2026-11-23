export interface ListPackagesRequest {
  destination?: string;
  dataLimitInGB?: number;
  startDate?: string;
  endDate?: string;
  afterCursor?: string;
  limit?: number;
  startTime?: number;
  endTime?: number;
  includeUnlimited?: boolean;
}
