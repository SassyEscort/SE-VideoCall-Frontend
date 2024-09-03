import React from 'react';
import moment, { Moment } from 'moment';
import { StyledDatePicker } from 'views/protectedDashboardViews/earningOverview/EarningOverview.styled';

interface ICustomDatePicker {
  value: Moment;
  handleDateChange: (e: Moment, type: string) => void;
  maxDate: Moment | null;
  keyName: string;
}
const CustomDatePicker = ({ handleDateChange, maxDate, value, keyName }: ICustomDatePicker) => {
  return (
    <StyledDatePicker
      value={moment(value, 'YYYY-MM-DD')}
      onChange={(e) => handleDateChange(e as Moment, keyName)}
      format="YYYY-MM-DD"
      {...(keyName === 'to' && { minDate: maxDate! })}
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
