'use client';
import Stack from '@mui/material/Stack';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useCallback, useEffect, useState } from 'react';
import PaginationSearch from './paginationSearch/PaginationSearch';
import {
  DividerContainer,
  EarningHistoryFirstBoxContainer,
  EarningHistoryLastBoxContainer,
  EarningHistoryMainContainer,
  EarningHistoryPagination,
  EarningHistorySecBoxContainer,
  EarningHistorySubContainer,
  EarningHistoryThirdBoxContainer,
  FilterDropdownBox,
  PaginationBox
} from './EarningHistory.styled';
import { FormattedMessage } from 'react-intl';
import DataRange from './selectFilter/dataRange';
import AmountRange from './selectFilter/amountRange';
import MainTableLayout from './tableData/MainTableLayout';
import { ResetMainBox } from '../payoutsAndInvoicesTable/payoutsAndInvoicesTable.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ModelEarningHistoryService } from 'services/modelEarningHistory/modelEarningHistory.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { ModelEarningHistoryPageDetailsRes } from 'services/modelEarningHistory/typs';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import PaginationInWords from 'components/UIComponents/PaginationINWords';

export type earningParams = {
  category: string;
  details: string;
  limit: number;
  offset: number;
};
const EarningHistory = ({ token }: { token: TokenIdType }) => {
  const [modelEarningHistory, setModelEarningHistory] = useState<ModelEarningHistoryPageDetailsRes>();
  const [total_rows, setTotalRows] = useState(0);
  const [filters, setFilters] = useState({
    page: 0,
    limit: 20,
    offset: 0
  });
  useEffect(() => {
    const fetchEarningHistoryDetails = async () => {
      try {
        const params = {
          category: 'Credit',
          details: 'Video_Call',
          limit: filters.limit,
          offset: filters.offset
        };
        const data = await ModelEarningHistoryService.getEarningHistoryDetails(params, token.token);

        if (data) {
          setModelEarningHistory(data);
          setTotalRows(data.data.aggreate.total_rows);
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchEarningHistoryDetails();
  }, [filters.limit, filters.offset, token.token]);
  const handleChangeFilter = useCallback((value: any) => {
    setFilters(value);
  }, []);
  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.limit;
      handleChangeFilter({ ...filters, page: value, offset: offset });
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

              <EarningHistorySubContainer>
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
              </EarningHistorySubContainer>
            </EarningHistoryThirdBoxContainer>

            <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
              <FormattedMessage id="TotalOf100Calls" />
            </UINewTypography>
          </EarningHistorySecBoxContainer>

          <EarningHistoryLastBoxContainer>
            <MainTableLayout modelEarningHistory={modelEarningHistory ?? ({} as ModelEarningHistoryPageDetailsRes)} />
          </EarningHistoryLastBoxContainer>
          <EarningHistoryPagination>
            {total_rows > 0 && (
              <PaginationBox>
                <UITheme2Pagination
                  page={filters.page}
                  count={modelEarningHistory ? Math.ceil(modelEarningHistory.data.aggreate.total_rows / filters.limit) : 1}
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
        </EarningHistoryFirstBoxContainer>
      </EarningHistoryMainContainer>
    </HomeMainContainer>
  );
};

export default EarningHistory;
