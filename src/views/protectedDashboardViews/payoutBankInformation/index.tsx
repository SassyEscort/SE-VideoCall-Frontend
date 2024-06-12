'use client';
import { Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React, { useState } from 'react';
import {
  AddBoxDetails,
  AddIconAdd,
  MainConatiner,
  NoBankInformationAdded,
  NoBoxInfoBox,
  Payout,
  PleaseAddYour,
  SecondConatiner,
  ThreeConatiner
} from './PayoutBankInformation.styled';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import AddbankDetails from '../addBankDetails';
const PayoutBankInformation = () => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  const handleBankDetails = () => {
    setOpen(true);
  };

  return (
    <>
      {open ? (
        <AddbankDetails />
      ) : (
        <MainConatiner>
          <Payout variant="h2" color={'text.secondary'}>
            <FormattedMessage id={isSm ? 'Payout' : 'YourPaymentMethod'} />
          </Payout>
          <SecondConatiner>
            <Box component="img" src="/images/payout/frame.webp" width="266px" />
            <ThreeConatiner>
              <NoBoxInfoBox>
                <NoBankInformationAdded variant="h3" color="text.secondary">
                  <FormattedMessage id="NoBankInformationAdded" />
                </NoBankInformationAdded>

                <PleaseAddYour variant="body1" color="text.secondary">
                  <FormattedMessage id="PleaseAddYour" />
                </PleaseAddYour>
              </NoBoxInfoBox>
              <AddBoxDetails>
                <UIThemeButton variant="contained" onClick={handleBankDetails}>
                  <UINewTypography variant="body" color="primary.200">
                    <FormattedMessage id="AddBankDetails" />
                  </UINewTypography>
                  <AddIconAdd />
                </UIThemeButton>
              </AddBoxDetails>
            </ThreeConatiner>
          </SecondConatiner>
        </MainConatiner>
      )}
    </>
  );
};

export default PayoutBankInformation;
