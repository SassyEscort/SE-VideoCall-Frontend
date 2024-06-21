export type MultipleOptions = {
  id: number | string;
  name: string;
};

export const dateDurationTypes: MultipleOptions[] = [
  { id: 'today', name: 'Today' },
  { id: 'last24Hours', name: 'Last24Hours' },
  { id: 'yesterday', name: 'Yesterday' },
  { id: 'last7Days', name: 'Last7Days' },
  { id: 'thisWeek', name: 'This Week' },
  { id: 'lastWeek', name: 'LastWeek' },
  { id: 'last30Days', name: 'Last30Days' },
  { id: 'thisMonth', name: 'ThisMonth' },
  { id: 'lastMonth', name: 'LastMonth' },
  { id: 'last3Months', name: 'Last3Months' },
  { id: 'thisYear', name: 'ThisYear' },
  { id: 'lastYear', name: 'LastYear' },
  { id: 'allTime', name: 'AllTime' }
];

export enum DATE_DURATION_TYPE {
  TODAY = 'today',
  THIS_WEEK = 'thisWeek',
  LAST_WEEK = 'lastWeek',
  THIS_MONTH = 'thisMonth',
  LAST_MONTH = 'lastMonth',
  LAST_3_MONTHS = 'last3Months',
  LAST_24_HOURS = 'last24Hours',
  YESTERDAY = 'yesterday',
  LAST_7_DAYS = 'last7Days',
  LAST_30_DAYS = 'last30Days',
  THIS_YEAR = 'thisYear',
  LAST_YEAR = 'lastYear',
  ALL_TIME = 'allTime'
}
