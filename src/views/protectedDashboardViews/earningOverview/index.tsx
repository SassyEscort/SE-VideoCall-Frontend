import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  ProfileBackSide,
  ProfileDOBContainer,
  ProfileDOBMainContainer,
  ProfileDOBox,
  ProfileDOBoxMain,
  ProfilePieContainer,
  ProfilePieMainContainer,
  ProfileStatiscsContainer,
  ProfileStatiscsMainContainer,
  StyledDatePicker
} from './EarningOverview.styled';
import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import FilterTimeDropdownV2 from './FilterTimeDropdownV2';
import { DATE_DURATION_TYPE } from 'constants/dateRange';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { ModelEarningResponse } from 'services/modelDetails/type';

const EarningOverview = () => {
  const [periodType, setPeriodType] = useState('thisWeek');
  const [fromDate, setFromDate] = useState<Moment | null>(moment().startOf('week').day(0));
  const [toDate, setToDate] = useState<Moment | null>(moment());

  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelEarning, setModelEarning] = useState<ModelEarningResponse>();

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
      case DATE_DURATION_TYPE.THIS_WEEK:
        setFromDate(moment().startOf('week').day(0));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.LAST_WEEK:
        setFromDate(moment().subtract(1, 'week').day(0));
        setToDate(moment().subtract(1, 'week').day(6));
        break;
      case DATE_DURATION_TYPE.THIS_MONTH:
        setFromDate(moment().startOf('month'));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.LAST_MONTH:
        setFromDate(moment().subtract(1, 'month').startOf('month'));
        setToDate(moment().subtract(1, 'month').endOf('month'));
        break;
      case DATE_DURATION_TYPE.LAST_3_MONTHS:
        setFromDate(moment().subtract(3, 'month').startOf('day'));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.LAST_24_HOURS:
        setFromDate(moment().subtract(24, 'hours'));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.YESTERDAY:
        setFromDate(moment().subtract(1, 'day').startOf('day'));
        setToDate(moment().subtract(1, 'day').endOf('day'));
        break;
      case DATE_DURATION_TYPE.LAST_7_DAYS:
        setFromDate(moment().subtract(7, 'days').startOf('day'));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.LAST_30_DAYS:
        setFromDate(moment().subtract(30, 'days').startOf('day'));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.THIS_YEAR:
        setFromDate(moment().startOf('year'));
        setToDate(moment());
        break;
      case DATE_DURATION_TYPE.LAST_YEAR:
        setFromDate(moment().subtract(1, 'year').startOf('year'));
        setToDate(moment().subtract(1, 'year').endOf('year'));
        break;
    }
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const modelEarning = async () => {
      const modelData = await ModelDetailsService.getModelEarning(token.token, {
        start_date: fromDate ? fromDate.format('YYYY-MM-DD') : '',
        end_date: toDate ? toDate.format('YYYY-MM-DD') : ''
      });
      setModelEarning(modelData.data);
    };
    if (token.token) {
      modelEarning();
    }
  }, [fromDate, toDate, token.id, token.token]);

  return (
    <ProfileStatiscsMainContainer>
      <ProfileStatiscsContainer>
        <UINewTypography variant="h5" color="text.secondary">
          <FormattedMessage id="EarningsOverview" />
        </UINewTypography>
        <ProfileDOBMainContainer>
          <ProfileDOBContainer>
            {periodType === DATE_DURATION_TYPE.ALL_TIME && (
              <ProfileDOBoxMain>
                <ProfileDOBox>
                  <StyledDatePicker
                    value={moment(fromDate, 'YYYY-MM-DD')}
                    onChange={(e) => handleFromDateChange(e as Moment)}
                    format="YYYY-MM-DD"
                    maxDate={toDate}
                  />
                </ProfileDOBox>
                <ProfileDOBox>
                  <StyledDatePicker
                    value={moment(toDate, 'YYYY-MM-DD')}
                    onChange={(e) => handleToDateChange(e as Moment)}
                    format="YYYY-MM-DD"
                    minDate={fromDate!}
                  />
                </ProfileDOBox>
              </ProfileDOBoxMain>
            )}
            <FilterTimeDropdownV2 periodType={periodType} handleChange={handleChangePeriodType} />
          </ProfileDOBContainer>
        </ProfileDOBMainContainer>
      </ProfileStatiscsContainer>
      <ProfilePieMainContainer>
        <ProfilePieContainer>
          <ProfileBackSide>
            <UINewTypography variant="buttonLargeBold" lineHeight="160%">
              <FormattedMessage id="TotalEarnings" />
            </UINewTypography>
            <UINewTypography variant="h3">{modelEarning?.earnings}</UINewTypography>
          </ProfileBackSide>

          <ProfileBackSide>
            <UINewTypography variant="buttonLargeBold" lineHeight="160%">
              <FormattedMessage id="WithdrawnAmount" />
            </UINewTypography>
            <UINewTypography variant="h3">{modelEarning?.withdrawn_amount}</UINewTypography>
          </ProfileBackSide>
        </ProfilePieContainer>
      </ProfilePieMainContainer>
    </ProfileStatiscsMainContainer>
  );
};

export default EarningOverview;
