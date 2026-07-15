export interface ListPackagesParams {
  destination?: string;
  dataLimitInGb?: number;
  startDate?: string;
  endDate?: string;
  afterCursor?: string;
  limit?: number;
  startTime?: number;
  endTime?: number;
  includeUnlimited?: boolean;
}
