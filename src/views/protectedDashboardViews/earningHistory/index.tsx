'use client';
import Stack from '@mui/material/Stack';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useEffect, useState } from 'react';
import PaginationSearch from './paginationSearch/PaginationSearch';
import {
  DividerContainer,
  EarningHistoryFirstBoxContainer,
  EarningHistoryLastBoxContainer,
  EarningHistoryMainContainer,
  EarningHistorySecBoxContainer,
  EarningHistorySubContainer,
  EarningHistoryThirdBoxContainer,
  FilterDropdownBox
} from './EarningHistory.styled';
import { FormattedMessage } from 'react-intl';
import DataRange from './selectFilter/dataRange';
import AmountRange from './selectFilter/amountRange';
import MainTableLayout from './tableData/MainTableLayout';
import { ResetMainBox } from '../payoutsAndInvoicesTable/payoutsAndInvoicesTable.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { ModelEarningHistoryService } from 'services/modelEarningHistory/modelEarningHistory.services';
import { ModelEarningHistoryResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';

export type earningParams = {
  category: string;
  details: string;
  limit: number;
  offset: number;
};
const EarningHistory = ({ token }: { token: TokenIdType }) => {
  const [modelEarningHistory, setModelEarningHistory] = useState<ModelEarningHistoryResponse>();

  useEffect(() => {
    const fetchEarningHistoryDetails = async () => {
      try {
        const params = {
          category: 'Credit',
          details: 'Video_Call',
          limit: 20,
          offset: 0
        };
        const data = await ModelEarningHistoryService.getEarningHistoryDetails(params, token.token);
        setModelEarningHistory(data);
        if (data) {
          setModelEarningHistory(data);
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchEarningHistoryDetails();
  }, [token.token]);

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
                <Stack direction="row" alignItems="center" color="text.secondary" width="100%" maxWidth="312px">
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
            <MainTableLayout modelEarningHistory={modelEarningHistory ?? ({} as ModelEarningHistoryResponse)} />
          </EarningHistoryLastBoxContainer>
        </EarningHistoryFirstBoxContainer>
      </EarningHistoryMainContainer>
    </HomeMainContainer>
  );
};

export default EarningHistory;
