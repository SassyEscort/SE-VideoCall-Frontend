import moment from 'moment';

export const formatFullDateWithoutTime = (str: string, def?: string) => {
  if (!str) return def ?? '';
  return moment(str).format('DD MMM YYYY');
};

export const formatFullDate = (str: string, def?: string) => {
  if (!str) return def ?? '';
  return moment(str).format('DD MMM YYYY hh:mm A');
};

export const getLastActive = (lastActiveTime: string, def?: string) => {
  if (!lastActiveTime) return def ?? '';

  const currentDateTime = moment().utc();
  const lastActiveDateTime = moment.utc(lastActiveTime, 'YYYY-MM-DD HH:mm:ss');

  const diffInMinutes = currentDateTime.diff(lastActiveDateTime, 'minutes');
  if (diffInMinutes < 1) {
    return `1m ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)}h ago`;
  } else if (diffInMinutes < 24 * 60) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes < 7 * 24 * 60) {
    const days = Math.floor(diffInMinutes / (24 * 60));
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes < 30 * 24 * 60) {
    const weeks = Math.floor(diffInMinutes / (7 * 24 * 60));
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffInMinutes < 365 * 24 * 60) {
    const months = Math.floor(diffInMinutes / (30 * 24 * 60));
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInMinutes / (365 * 24 * 60));
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};
