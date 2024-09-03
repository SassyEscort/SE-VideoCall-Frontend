import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import { useCallback, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { DATE_DURATION_TYPE, dateDurationTypes } from 'constants/dateRange';
import moment, { Moment } from 'moment';
import { StyledEarningSelectInputLabel, UIStyledSelectPastPayout } from 'components/UIComponents/UIStyledSelect';
import {
  ProfileDOBContainer,
  ProfileDOBMainContainer,
  ProfileDOBox
} from 'views/protectedDashboardViews/earningOverview/EarningOverview.styled';
import { FormControlContainer, InvoiceBoxContainer, ProfileDOBoxContainer } from './status.styled';
import { PaginationType } from '..';
import { debounce } from 'lodash';
import CustomDatePicker from 'components/common/CustomDatePicker';

const InvoiceDate = ({ handleChangeFilter, filters }: { handleChangeFilter: (value: PaginationType) => void; filters: PaginationType }) => {
  const [periodType, setPeriodType] = useState(''); // Initialize with an empty string
  const [fromDate, setFromDate] = useState<Moment | null>(moment().startOf('week').day(0));
  const [toDate, setToDate] = useState<Moment | null>(moment());

  useEffect(() => {
    if (fromDate && toDate) {
      handleChangeFilter({ ...filters, fromDate: fromDate.format('YYYY-MM-DD'), toDate: toDate.format('YYYY-MM-DD') });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromDate, toDate]);

  const handleFromToDateChange = (date: Moment, dateType: string) => {
    if (date?.isValid()) {
      dateType === 'from' ? setFromDate(date) : setToDate(date);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleDateChange = useCallback(debounce(handleFromToDateChange, 1000), []);

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
          IconComponent={ExpandMore}
        >
          {dateDurationTypes?.map((data, index) => (
            <MenuItem
              key={index}
              value={data?.id}
              sx={{
                margin: '10px 12px',
                '&. MuiPaper-root': { borderRadius: '16px 0px' }
              }}
            >
              <FormattedMessage id={data?.name} />
            </MenuItem>
          ))}
        </UIStyledSelectPastPayout>
      </FormControlContainer>
      {periodType === DATE_DURATION_TYPE.ALL_TIME && (
        <ProfileDOBMainContainer>
          <ProfileDOBContainer>
            <ProfileDOBoxContainer>
              <ProfileDOBox>
                <CustomDatePicker
                  value={moment(fromDate, 'YYYY-MM-DD')}
                  maxDate={toDate!}
                  keyName="from"
                  handleDateChange={handleDateChange}
                />
              </ProfileDOBox>
              <ProfileDOBox>
                <CustomDatePicker
                  value={moment(toDate, 'YYYY-MM-DD')}
                  minDate={fromDate!}
                  keyName="to"
                  handleDateChange={handleDateChange}
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
