import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import {
  BillingHistoryMainContainer,
  BillingHistoryTextContainer,
  DividerContainer,
  FirstTextContainer,
  TextAndBoxContainer,
  TextMainContainer
} from './BillingHistory.styled';
import MainLayoutNav from '../protectedLayout';
import UINewTypography from 'components/UIComponents/UINewTypography';

const BillingHistory = () => {
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <TextAndBoxContainer>
        <BillingHistoryTextContainer>
          <UINewTypography variant="h2" color="text.secondary">
            Billing History
          </UINewTypography>
        </BillingHistoryTextContainer>
        <BillingHistoryMainContainer>
          <TextMainContainer>
            <FirstTextContainer>
              <Box sx={{ display: 'flex', gap: 1.5, flexDirection: 'column' }}>
                <Typography variant="buttonLargeMenu" color="success.100">
                  + 100 credits
                </Typography>
                <Typography variant="SubtitleSmallMedium" color="text.primary">
                  05:28 PM, 12 Apr 2024
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  $120.99
                </Typography>
              </Box>
            </FirstTextContainer>
            <DividerContainer orientation="horizontal" flexItem />
          </TextMainContainer>

          <TextMainContainer>
            <FirstTextContainer>
              <Box sx={{ display: 'flex', gap: 1.5, flexDirection: 'column' }}>
                <Typography variant="buttonLargeMenu" color="error.300">
                  + 100 credits
                </Typography>
                <Typography variant="SubtitleSmallMedium" color="text.primary">
                  05:28 PM, 12 Apr 2024
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  View details
                </Typography>
              </Box>
            </FirstTextContainer>
            <DividerContainer orientation="horizontal" flexItem />
          </TextMainContainer>
        </BillingHistoryMainContainer>
      </TextAndBoxContainer>
    </MainLayoutNav>
  );
};

export default BillingHistory;
