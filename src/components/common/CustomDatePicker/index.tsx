import React from 'react';
import moment, { Moment } from 'moment';
import { StyledDatePicker } from 'views/protectedDashboardViews/earningOverview/EarningOverview.styled';

interface ICustomDatePicker {
  value: Moment;
  keyName: string;
  handleDateChange: (e: Moment, type: string) => void;
  maxDate?: Moment | null;
  minDate?: Moment | null;
}
const CustomDatePicker = ({ handleDateChange, maxDate, minDate, value, keyName }: ICustomDatePicker) => {
  return (
    <StyledDatePicker
      value={moment(value, 'YYYY-MM-DD')}
      onChange={(e) => handleDateChange(e as Moment, keyName)}
      format="YYYY-MM-DD"
      {...(keyName === 'to' && { minDate: minDate! })}
      {...(keyName === 'from' && { maxDate: maxDate! })}
      slotProps={{
        calendarHeader: {
          sx: {
            '& .MuiPickersArrowSwitcher-button': {
              color: 'white.main'
            },
            '& .MuiPickersCalendarHeader-switchViewIcon': {
              color: 'white.main'
            }
          }
        }
      }}
    />
  );
};

export default CustomDatePicker;
