'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useCallback, useEffect, useState } from 'react';
import {
  EarningHistoryFirstBoxContainer,
  EarningHistoryLastBoxContainer,
  EarningHistoryMainContainer,
  EarningHistoryPagination,
  EarningHistorySecBoxContainer,
  EarningHistoryThirdBoxContainer,
  PaginationBox
} from './EarningHistory.styled';
import { FormattedMessage } from 'react-intl';
import MainTableLayout from './tableData/MainTableLayout';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ModelEarningHistoryService } from 'services/modelEarningHistory/modelEarningHistory.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { ModelEarningHistoryPageDetailsRes } from 'services/modelEarningHistory/typs';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import { LoaderBox } from '../payoutRequest/PayoutRequest.styled';
import { CircularProgress } from '@mui/material';
import {
  ProfileDOBContainer,
  ProfileDOBMainContainer,
  ProfileDOBox,
  ProfileDOBoxMain,
  StyledDatePicker
} from '../earningOverview/EarningOverview.styled';
import { DATE_DURATION_TYPE } from 'constants/dateRange';
import moment, { Moment } from 'moment';
import FilterTimeDropdownV2 from '../earningOverview/FilterTimeDropdownV2';

export type earningParams = {
  category: string;
  details: string;
  limit: number;
  offset: number;
  start_date: string;
  end_date: string;
};
export type EarningPaginationType = {
  page: number;
  offset: number;
  limit: number;
};
const EarningHistory = ({ token }: { token: TokenIdType }) => {
  const [periodType, setPeriodType] = useState('lastWeek');
  const [fromDate, setFromDate] = useState<Moment | null>(moment().startOf('week').day(0));
  const [toDate, setToDate] = useState<Moment | null>(moment());

  const [modelEarningHistory, setModelEarningHistory] = useState<ModelEarningHistoryPageDetailsRes>();
  const [total_rows, setTotalRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState<EarningPaginationType>({
    page: 1,
    limit: 20,
    offset: 0
  });

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
      // case DATE_DURATION_TYPE.THIS_WEEK:
      //   setFromDate(moment().startOf('week').day(0));
      //   setToDate(moment());
      //   break;
      case DATE_DURATION_TYPE.LAST_WEEK:
        setFromDate(moment().subtract(1, 'week').day(0));
        setToDate(moment().subtract(1, 'week').day(6));
        break;
      // case DATE_DURATION_TYPE.THIS_MONTH:
      //   setFromDate(moment().startOf('month'));
      //   setToDate(moment());
      //   break;
      case DATE_DURATION_TYPE.LAST_MONTH:
        setFromDate(moment().subtract(1, 'month').startOf('month'));
        setToDate(moment().subtract(1, 'month').endOf('month'));
        break;
      // case DATE_DURATION_TYPE.LAST_3_MONTHS:
      //   setFromDate(moment().subtract(3, 'month').startOf('day'));
      //   setToDate(moment());
      //   break;
      // case DATE_DURATION_TYPE.LAST_24_HOURS:
      //   setFromDate(moment().subtract(24, 'hours'));
      //   setToDate(moment());
      //   break;
      // case DATE_DURATION_TYPE.YESTERDAY:
      //   setFromDate(moment().subtract(1, 'day').startOf('day'));
      //   setToDate(moment().subtract(1, 'day').endOf('day'));
      //   break;
      // case DATE_DURATION_TYPE.LAST_7_DAYS:
      //   setFromDate(moment().subtract(7, 'days').startOf('day'));
      //   setToDate(moment());
      //   break;
      // case DATE_DURATION_TYPE.LAST_30_DAYS:
      //   setFromDate(moment().subtract(30, 'days').startOf('day'));
      //   setToDate(moment());
      //   break;
      // case DATE_DURATION_TYPE.THIS_YEAR:
      //   setFromDate(moment().startOf('year'));
      //   setToDate(moment());
      //   break;
      case DATE_DURATION_TYPE.LAST_YEAR:
        setFromDate(moment().subtract(1, 'year').startOf('year'));
        setToDate(moment().subtract(1, 'year').endOf('year'));
        break;
    }
  };

  useEffect(() => {
    const fetchEarningHistoryDetails = async () => {
      try {
        const params = {
          category: 'Credit',
          details: 'Video_Call',
          limit: filters.limit,
          offset: filters.offset,
          start_date: fromDate ? fromDate.format('YYYY-MM-DD') : '',
          end_date: toDate ? toDate.format('YYYY-MM-DD') : ''
        };
        setIsLoading(true);
        const data = await ModelEarningHistoryService.getEarningHistoryDetails(params, token.token);

        if (data) {
          setModelEarningHistory(data);
          setTotalRows(data.data.aggregate.total_rows);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error, 'error');

        toast.error(ErrorMessage);
      }
    };

    fetchEarningHistoryDetails();
  }, [filters.limit, filters.offset, token.token, fromDate, toDate]);

  const scrollToTable = () => {
    const tableElement = document.getElementById('tableSection');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChangeFilter = useCallback((value: EarningPaginationType) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.limit;
      handleChangeFilter({ ...filters, page: value, offset: offset });
      scrollToTable();
    },
    [filters, handleChangeFilter]
  );

  return (
    <HomeMainContainer>
      <EarningHistoryMainContainer>
        <EarningHistoryFirstBoxContainer>
          <EarningHistorySecBoxContainer>
            <EarningHistoryThirdBoxContainer>
              <UINewTypography variant="h2" color="text.secondary" mt="32px">
                <FormattedMessage id="EarningsHistory" />
              </UINewTypography>
              <ProfileDOBMainContainer sx={{ mt: 4 }}>
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

              {/* <EarningHistorySubContainer>
                <Stack direction="row" alignItems="center" color="text.secondary" width="100%">
                  <PaginationSearch placeholder={'Search'} />
                </Stack>

                <FilterDropdownBox>
                  <DataRange />
                  <AmountRange />
                </FilterDropdownBox>
                <ResetMainBox>
                  <DividerContainer orientation="vertical" flexItem />
                  <UINewTypography variant="bodyLight" color="text.disabled">
                    <FormattedMessage id="Reset" />
                  </UINewTypography>
                </ResetMainBox>
              </EarningHistorySubContainer> */}
            </EarningHistoryThirdBoxContainer>

            <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
              <FormattedMessage id="TotalOf100Calls" /> {modelEarningHistory?.data?.ledger_details?.length}{' '}
              <FormattedMessage id="Earningss" />
            </UINewTypography>
          </EarningHistorySecBoxContainer>

          {isLoading ? (
            <LoaderBox>
              <CircularProgress />
            </LoaderBox>
          ) : (
            <>
              <EarningHistoryLastBoxContainer id="tableSection">
                <MainTableLayout modelEarningHistory={modelEarningHistory ?? ({} as ModelEarningHistoryPageDetailsRes)} />
              </EarningHistoryLastBoxContainer>

              <EarningHistoryPagination>
                {total_rows > 0 && (
                  <PaginationBox>
                    <UITheme2Pagination
                      page={filters.page}
                      count={modelEarningHistory ? Math.ceil(modelEarningHistory.data.aggregate.total_rows / filters.limit) : 1}
                      onChange={handleChangePage}
                    />
                    <PaginationInWords
                      page={filters.page}
                      limit={filters.limit}
                      total_rows={total_rows}
                      offset={filters.offset}
                      isCall={true}
                    />
                  </PaginationBox>
                )}
              </EarningHistoryPagination>
            </>
          )}
        </EarningHistoryFirstBoxContainer>
      </EarningHistoryMainContainer>
    </HomeMainContainer>
  );
};

export default EarningHistory;
