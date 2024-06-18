import Box from '@mui/material/Box';
import React from 'react';
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
  TextMainContainer,
  ViewDetailsBilling
} from './BillingHistory.styled';
import MainLayoutNav from '../protectedLayout';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import { CallHistoryPaginationContainer } from '../CallHistory/CallHistory.styled';

const BillingHistory = () => {
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
            <TextMainContainer>
              <FirstTextContainer>
                <BillingUIContainer sx={{ gap: 1.5 }}>
                  <UINewTypography variant="buttonLargeMenu" color="success.100">
                    + 100 <FormattedMessage id="Credits" />
                  </UINewTypography>
                  <DateTimeBilling variant="SubtitleSmallMedium" color="text.primary">
                    05:28 PM, 12 Apr 2024
                  </DateTimeBilling>
                </BillingUIContainer>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DollarBillingValue variant="h6" color="text.secondary">
                    $120.99
                  </DollarBillingValue>
                </Box>
              </FirstTextContainer>
              <DividerContainer orientation="horizontal" flexItem />
            </TextMainContainer>

            <TextMainContainer>
              <FirstTextContainer>
                <BillingUIContainer sx={{ gap: 1.5 }}>
                  <UINewTypography variant="buttonLargeMenu" color="error.300">
                    + 100 <FormattedMessage id="Credits" />
                  </UINewTypography>
                  <DateTimeBilling variant="SubtitleSmallMedium" color="text.primary">
                    05:28 PM, 12 Apr 2024
                  </DateTimeBilling>
                </BillingUIContainer>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ViewDetailsBilling variant="h6" color="text.secondary">
                    <FormattedMessage id="ViewDetails" />
                  </ViewDetailsBilling>
                </Box>
              </FirstTextContainer>
              <DividerContainer orientation="horizontal" flexItem />
            </TextMainContainer>
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
