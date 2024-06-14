'use client';
import { IconButton, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import CloseIcon from '@mui/icons-material/Close';
import { DialogContentMain, DialogTitleBox } from './PayoutWidthDraw';
import theme from 'themes/theme';
import PayoutWithdrawContainer from './PayoutWithdrawContainer';

const PayoutWidthDraw = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!isSm ? (
        <DialogContentMain open={open} onClose={onClose} fullWidth scroll="body">
          <DialogTitleBox>
            <UINewTypography variant="h6" color={'secondary.200'}>
              <FormattedMessage id="RequestAPayout" />
            </UINewTypography>

            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                color: (theme) => theme.palette.text.secondary
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitleBox>
          <PayoutWithdrawContainer />
        </DialogContentMain>
      ) : (
        <PayoutWithdrawContainer />
      )}
    </>
  );
};

export default PayoutWidthDraw;
