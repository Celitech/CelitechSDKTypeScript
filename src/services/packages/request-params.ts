export interface ListPackagesParams {
  destination?: string;
  startDate?: string;
  endDate?: string;
  dataLimitInGb?: number;
  includeUnlimited?: boolean;
  afterCursor?: string;
  limit?: number;
  startTime?: number;
  endTime?: number;
  duration?: number;
}
