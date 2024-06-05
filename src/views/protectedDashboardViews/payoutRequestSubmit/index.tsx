'use client';
import { Box, DialogContent } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitleBox, DividerBox, FiveBox, ForBox, MainDailgConatiner, MainDailgFristBox } from './PayoutRequestSubmit';

const PayoutRequestSubmit = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <MainDailgConatiner open={true} onClose={onClose} fullWidth>
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">
          <FormattedMessage id="RequestAPayout" />
        </UINewTypography>

        <IconButton aria-label="close" onClick={onClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitleBox>
      <MainDailgFristBox>
        <DividerBox
          sx={{
            display: { sm: 'block', display: 'none' }
          }}
        />

        <DialogContent sx={{ p: 0 }}>
          <ForBox>
            <Box component={'img'} src="/images/payout/payoutSuccess.webp" sx={{ width: '214px', height: '169px' }} />
            <FiveBox>
              <UINewTypography variant="h3" color={'text.secondary'} sx={{ textAlign: 'center' }}>
                Your Request has been submitted
              </UINewTypography>
              <UINewTypography variant="bodyRegular" sx={{ textAlign: 'center' }}>
                The request will processed by the admin within 24 hours. For any help and support,
                <span style={{ color: '#FFE500' }}>Contact admin</span>
              </UINewTypography>
            </FiveBox>
          </ForBox>
        </DialogContent>
      </MainDailgFristBox>
    </MainDailgConatiner>
  );
};

export default PayoutRequestSubmit;
