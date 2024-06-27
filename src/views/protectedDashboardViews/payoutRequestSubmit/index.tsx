'use client';
import { useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogTitleBox, MainDailgConatiner } from './PayoutRequestSubmit.styled';
import theme from 'themes/theme';
import Requestsubmit from './Requestsubmit';

const PayoutRequestSubmit = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!isSm ? (
        <MainDailgConatiner open={open} onClose={onClose} fullWidth scroll="body">
          <DialogTitleBox id="responsive-modal-title">
            <UINewTypography variant="h6" color={'text.primary'}>
              <FormattedMessage id="RequestAPayout" />
            </UINewTypography>

            <IconButton aria-label="close" onClick={onClose} sx={{ color: 'text.secondary' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitleBox>
          <Requestsubmit />
        </MainDailgConatiner>
      ) : (
        <Requestsubmit />
      )}
    </>
  );
};

export default PayoutRequestSubmit;
