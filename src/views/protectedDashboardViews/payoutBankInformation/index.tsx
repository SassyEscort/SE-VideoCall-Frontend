import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';

const PayoutBankInformation = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: 4,
          gap: 7
          //   width: '100%',
          //   maxWidth: '757px'
        }}
      >
        <Box>
          <UINewTypography variant="h2" color={'text.secondary'}>
            Your Payment Method
          </UINewTypography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Box component="img" src="/images/payout/frame.png" />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '484px'
            }}
          >
            <UINewTypography variant="h3" color={'text.secondary'}>
              No Bank Information added
            </UINewTypography>

            <UINewTypography variant="bodyRegular" color={'text.secondary'} sx={{ textAlign: 'center' }}>
              Please add your bank details to request your payout. Otherwise we won’t be able to process your request.
            </UINewTypography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PayoutBankInformation;
