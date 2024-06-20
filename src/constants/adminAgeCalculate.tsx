import moment from 'moment';

export const calculateAge = (dob: string) => {
  if (!dob) {
    return '';
  }
  const calculatedAge = moment().diff(moment(dob), 'years');
  return calculatedAge;
};
