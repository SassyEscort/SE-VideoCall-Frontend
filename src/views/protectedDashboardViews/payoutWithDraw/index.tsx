'use client';
import { IconButton, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import CloseIcon from '@mui/icons-material/Close';
import { DialogContentMain, DialogTitleBox } from './PayoutWidthDraw';
import theme from 'themes/theme';
import PayoutWithdrawContainer from './PayoutWithdrawContainer';
import { BankDetailsListRes } from 'services/payout/types';
import { TokenIdType } from 'views/protectedModelViews/verification';

const PayoutWidthDraw = ({
  open,
  closeDailog,
  bankDetailsList,
  token,
  fetchBankDetails,
  handlePayoutStep,
  payoutStep,
  amountSave,
  handlePayoutStepSubmit,
  isLoading
}: {
  open: boolean;
  closeDailog: () => void;
  bankDetailsList: BankDetailsListRes;
  token: TokenIdType;
  fetchBankDetails: () => void;
  handlePayoutStep: () => void;
  payoutStep: number;
  amountSave: number;
  handlePayoutStepSubmit: (step: number) => void;
  isLoading: boolean;
}) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {!isSm ? (
        <DialogContentMain open={open} onClose={closeDailog} fullWidth scroll="body">
          <DialogTitleBox>
            <UINewTypography variant="h6" color={'secondary.200'}>
              <FormattedMessage id="RequestAPayout" />
            </UINewTypography>

            <IconButton
              aria-label="close"
              onClick={closeDailog}
              sx={{
                color: (theme) => theme.palette.text.secondary
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitleBox>
          <PayoutWithdrawContainer
            bankDetailsList={bankDetailsList}
            token={token}
            fetchBankDetails={fetchBankDetails}
            amountSave={amountSave}
            closeDailog={closeDailog}
            isLoading={isLoading}
          />
        </DialogContentMain>
      ) : (
        (payoutStep === 1 || payoutStep === 2 || !isSm) && (
          <PayoutWithdrawContainer
            bankDetailsList={bankDetailsList}
            token={token}
            fetchBankDetails={fetchBankDetails}
            payoutStep={payoutStep}
            isSm={isSm}
            handlePayoutStep={handlePayoutStep}
            amountSave={amountSave}
            handlePayoutStepSubmit={handlePayoutStepSubmit}
            isLoading={isLoading}
          />
        )
      )}
    </>
  );
};

export default PayoutWidthDraw;
