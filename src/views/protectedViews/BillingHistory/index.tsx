import Box from '@mui/material/Box';
import React, { useCallback, useEffect, useState } from 'react';
import {
  BillingHistoryBoxContainer,
  BillingHistoryMainContainer,
  BillingHistoryTextContainer,
  BillingPaginationBox,
  BillingUIContainer,
  DateTimeBilling,
  DividerContainer,
  DollarBillingValue,
  FirstTextContainer,
  TextAndBoxContainer,
  TextMainContainer
} from './BillingHistory.styled';
import MainLayoutNav from '../protectedLayout';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { CallHistoryPaginationContainer } from '../CallHistory/CallHistory.styled';
import { BillingHistoryDetails } from 'services/guestBilling/types';
import { toast } from 'react-toastify';
import { ModelBillingHistoryService } from 'services/guestBilling/guestBillingHistory.services';
import { ErrorMessage } from 'constants/common.constants';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import moment from 'moment';
import PaginationInWords from 'components/UIComponents/PaginationINWords';

export type billingHistoryParams = {
  category: string;
  details: string;
  limit: number;
  offset: number;
};
export type BillPaginationType = {
  page: number;
  offset: number;
  limit: number;
};

const BillingHistory = () => {
  const [guestBillingHistory, setGuestBillingHistory] = useState<BillingHistoryDetails[]>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [total_rows, setTotalRows] = useState(0);
  const [filters, setFilters] = useState<BillPaginationType>({
    page: 0,
    limit: 20,
    offset: 0
  });
  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const fetchEarningHistoryDetails = async () => {
      try {
        const params = {
          category: '',
          details: '',
          limit: filters.limit,
          offset: filters.offset
        };
        if (token.token) {
          const data = await ModelBillingHistoryService.getBillingHistoryDetails(params, token.token);
          if (data) {
            setGuestBillingHistory(data.data.ledger_details);
            setTotalRows(data.data.aggreate.total_rows);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchEarningHistoryDetails();
  }, [filters.limit, filters.offset, token.token]);
  const handleChangeFilter = useCallback((value: BillPaginationType) => {
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
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <BillingHistoryBoxContainer>
        <TextAndBoxContainer>
          <BillingHistoryTextContainer>
            <UINewTypography variant="h2" color="text.secondary" whiteSpace={'nowrap'}>
              <FormattedMessage id="BillingHistory" />
            </UINewTypography>
          </BillingHistoryTextContainer>
          <BillingHistoryMainContainer>
            {guestBillingHistory?.map((list, index) => (
              <TextMainContainer key={index}>
                <FirstTextContainer>
                  <BillingUIContainer sx={{ gap: 1.5 }}>
                    <UINewTypography variant="buttonLargeMenu" color={list.category === 'Credit' ? 'success.100' : 'error.main'}>
                      {list.category === 'Credit' ? '+' : '-'} {list.credits} {list.category}
                    </UINewTypography>
                    <DateTimeBilling variant="SubtitleSmallMedium" color="text.primary">
                      {moment(list.created_at).format('LT')}, {moment(list.created_at).format('DD MMMM YYYY')}
                    </DateTimeBilling>
                  </BillingUIContainer>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DollarBillingValue variant="h6" color="text.secondary">
                      $ {list.amount}
                    </DollarBillingValue>
                  </Box>
                </FirstTextContainer>
                <DividerContainer orientation="horizontal" flexItem />
              </TextMainContainer>
            ))}
          </BillingHistoryMainContainer>
        </TextAndBoxContainer>
        {total_rows > 0 && (
          <CallHistoryPaginationContainer>
            {total_rows > 0 && (
              <BillingPaginationBox>
                <UITheme2Pagination
                  page={filters.page}
                  count={total_rows ? Math.ceil(total_rows / filters.limit) : 1}
                  onChange={handleChangePage}
                />
                <PaginationInWords
                  page={filters.page}
                  limit={filters.limit}
                  total_rows={total_rows}
                  offset={filters.offset}
                  isEscort={true}
                />
              </BillingPaginationBox>
            )}
          </CallHistoryPaginationContainer>
        )}
      </BillingHistoryBoxContainer>
    </MainLayoutNav>
  );
};

export default BillingHistory;
