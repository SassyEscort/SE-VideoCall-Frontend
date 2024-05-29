'use client';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import PaginationSearch from './paginationSearch/PaginationSearch';
import { EarningHistoryMainContainer, EarningHistorySubContainer, FilterDropdownBox } from './EarningHistory.styled';
import { FormattedMessage } from 'react-intl';
import Divider from '@mui/material/Divider';
import DataRange from './selectFilter/dataRange';
import AmountRange from './selectFilter/amountRange';
import MainTableLayout from './tableData/MainTableLayout';

const EarningHistory = () => {
  return (
    <EarningHistoryMainContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '33px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
            <UINewTypography variant="h2" color="text.secondary" mt="32px">
              <FormattedMessage id="EarningsHistory" />
            </UINewTypography>

            <EarningHistorySubContainer>
              <Stack direction="row" alignItems="center" color="text.secondary">
                <PaginationSearch placeholder={'Search'} />
              </Stack>

              <FilterDropdownBox>
                <DataRange />
                <AmountRange />
                <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700', height: '40px', justifyContent: 'center' }} />
                <UINewTypography variant="bodyLight" color="text.disabled">
                  <FormattedMessage id="Reset" />
                </UINewTypography>
              </FilterDropdownBox>
            </EarningHistorySubContainer>
          </Box>

          <UINewTypography variant="SubtitleSmallMedium" color="text.primary">
            <FormattedMessage id="TotalOf100Calls" />
          </UINewTypography>
        </Box>

        <Box sx={{ display: 'flex', width: '100%', maxWidth: '741px' }}>
          <MainTableLayout />
        </Box>
      </Box>
    </EarningHistoryMainContainer>
  );
};

export default EarningHistory;
