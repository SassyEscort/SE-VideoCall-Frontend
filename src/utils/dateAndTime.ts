import moment from 'moment';

export const formatFullDateWithoutTime = (str: string, def?: string) => {
  if (!str) return def ?? '';
  return moment(str).format('DD MMM YYYY');
};
