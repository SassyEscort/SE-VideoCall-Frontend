import moment from 'moment';
import { IntlShape } from 'react-intl';

export const formatFullDateWithoutTime = (str: string, def?: string) => {
  if (!str) return def ?? '';
  return moment(str).format('DD MMM YYYY');
};

export const formatFullDate = (str: string, def?: string) => {
  if (!str) return def ?? '';
  return moment(str).format('DD MMM YYYY hh:mm A');
};

export const getLastActive = (lastActiveTime: string, intl: IntlShape) => {
  if (!lastActiveTime) return '';

  const currentDateTime = moment().utc();
  const lastActiveDateTime = moment.utc(lastActiveTime, 'YYYY-MM-DD HH:mm:ss');
  const diffInMinutes = currentDateTime.diff(lastActiveDateTime, 'minutes');

  if (diffInMinutes < 1) {
    return intl.formatMessage({ id: 'JustNow' });
  } else if (diffInMinutes < 60) {
    return intl.formatMessage({ id: 'MinutesAgo' }, { minutes: diffInMinutes });
  } else if (diffInMinutes < 1440) {
    return intl.formatMessage({ id: 'HoursAgo' }, { hours: Math.floor(diffInMinutes / 60) });
  } else if (diffInMinutes < 7 * 24 * 60) {
    const days = Math.floor(diffInMinutes / 1440);
    return intl.formatMessage({ id: 'DaysAgo' }, { days });
  } else if (diffInMinutes < 30 * 24 * 60) {
    const weeks = Math.floor(diffInMinutes / (7 * 24 * 60));
    return intl.formatMessage({ id: 'WeeksAgo' }, { weeks });
  } else if (diffInMinutes < 365 * 24 * 60) {
    const months = Math.floor(diffInMinutes / (30 * 24 * 60));
    return intl.formatMessage({ id: 'MonthsAgo' }, { months });
  } else {
    const years = Math.floor(diffInMinutes / (365 * 24 * 60));
    return intl.formatMessage({ id: 'YearsAgo' }, { years });
  }
};

export const formatDuration = (duration: string) => {
  if (!duration) return '-';

  const timeParts = duration.split(':').map(Number);

  const [hours, minutes, seconds] = timeParts;

  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};
