import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { DATE_DURATION_TYPE, dateDurationTypes } from 'constants/dateRange';
import moment, { Moment } from 'moment';
import { StyledEarningSelectInputLabel, UIStyledSelectPastPayout } from 'components/UIComponents/UIStyledSelect';
import {
  ProfileDOBContainer,
  ProfileDOBMainContainer,
  ProfileDOBox,
  StyledDatePickerPayout
} from 'views/protectedDashboardViews/earningOverview/EarningOverview.styled';
import { FormControlContainer, InvoiceBoxContainer, ProfileDOBoxContainer } from './status.styled';

const InvoiceDate = () => {
  const [periodType, setPeriodType] = useState(''); // Initialize with an empty string
  const [fromDate, setFromDate] = useState<Moment | null>(moment().startOf('week').day(0));
  const [toDate, setToDate] = useState<Moment | null>(moment());

  const handleFromDateChange = (date: Moment) => {
    if (date?.isValid()) {
      setFromDate(date);
    }
  };

  const handleToDateChange = (date: Moment) => {
    if (date?.isValid()) {
      setToDate(date);
    }
  };

  const handleChangePeriodType = (value: string) => {
    setPeriodType(value);
    switch (value) {
      case DATE_DURATION_TYPE.TODAY:
        setFromDate(moment().startOf('day'));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.LAST_WEEK:
        setFromDate(moment().startOf('week').day(0));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.LAST_MONTH:
        setFromDate(moment().subtract(1, 'month').startOf('month'));
        setToDate(moment().subtract(1, 'month').endOf('month'));
        break;
      case DATE_DURATION_TYPE.LAST_YEAR:
        setFromDate(moment().subtract(1, 'year').startOf('year'));
        setToDate(moment().subtract(1, 'year').endOf('year'));
        break;
      default:
        break;
    }
  };

  return (
    <InvoiceBoxContainer>
      <FormControlContainer id="invoiceDate">
        <StyledEarningSelectInputLabel>
          <FormattedMessage id="InvoiceDate" />
        </StyledEarningSelectInputLabel>
        <UIStyledSelectPastPayout
          MenuProps={{ disableScrollLock: true }}
          label="invoice date"
          name="invoiceDate"
          labelId="invoiceDate"
          value={periodType}
          onChange={(e) => handleChangePeriodType(e.target.value as string)}
          IconComponent={() => <ExpandMoreIcon />}
        >
          {dateDurationTypes?.map((data, index) => (
            <MenuItem key={index} value={data?.id}>
              {data?.name}
            </MenuItem>
          ))}
        </UIStyledSelectPastPayout>
      </FormControlContainer>
      {periodType === DATE_DURATION_TYPE.ALL_TIME && (
        <ProfileDOBMainContainer>
          <ProfileDOBContainer>
            <ProfileDOBoxContainer>
              <ProfileDOBox>
                <StyledDatePickerPayout
                  value={moment(fromDate, 'YYYY-MM-DD')}
                  onChange={(date) => handleFromDateChange(date as Moment)}
                  format="YYYY-MM-DD"
                  maxDate={toDate!}
                />
              </ProfileDOBox>
              <ProfileDOBox>
                <StyledDatePickerPayout
                  value={moment(toDate, 'YYYY-MM-DD')}
                  onChange={(date) => handleToDateChange(date as Moment)}
                  format="YYYY-MM-DD"
                  minDate={fromDate!}
                />
              </ProfileDOBox>
            </ProfileDOBoxContainer>
          </ProfileDOBContainer>
        </ProfileDOBMainContainer>
      )}
    </InvoiceBoxContainer>
  );
};

export default InvoiceDate;
