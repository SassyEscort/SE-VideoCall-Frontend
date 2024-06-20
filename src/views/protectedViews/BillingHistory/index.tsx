import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import {
  BillingHistoryBoxContainer,
  BillingHistoryMainContainer,
  BillingHistoryTextContainer,
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

export type billingHistoryParams = {
  category: string;
  details: string;
  limit: number;
  offset: number;
};

const BillingHistory = () => {
  const [guestBillingHistory, setGuestBillingHistory] = useState<BillingHistoryDetails[]>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
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
          limit: 20,
          offset: 0
        };
        if (token.token) {
          const data = await ModelBillingHistoryService.getBillingHistoryDetails(params, token.token);
          if (data) {
            setGuestBillingHistory(data.data.ledger_details);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchEarningHistoryDetails();
  }, [token.token]);

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
        <CallHistoryPaginationContainer>
          <UITheme2Pagination />
        </CallHistoryPaginationContainer>
      </BillingHistoryBoxContainer>
    </MainLayoutNav>
  );
};

export default BillingHistory;
