'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  ButtonConatinerBox,
  DeleteEditBox,
  IamgeBigScreenNone,
  MainConatinerBox,
  MainForBox,
  MainSecondBox,
  MainThreeBox,
  SiliconBox,
  SiliconFristBox,
  SmallAndBigScreen,
  SmallScreenImg
} from './PayoutPaymentConatiner';
import { FormattedMessage } from 'react-intl';

const PayoutPaymentConatiner = () => {
  return (
    <MainConatinerBox>
      <MainSecondBox>
        <UINewTypography variant="h2" color={'text.secondary'}>
          <FormattedMessage id="YourPaymentMethods" />
        </UINewTypography>
        <MainThreeBox>
          <MainForBox>
            <SmallAndBigScreen>
              <Box component={'img'} src="/images/payout/home.png" sx={{ width: 48, height: 48, color: 'text.secondary' }} />
              <IamgeBigScreenNone>
                <SmallScreenImg>
                  <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '24px', height: '24px' }} />
                  <Box component={'img'} src="/images/payout/delete.webp" sx={{ width: '16px', height: '18px' }} />
                </SmallScreenImg>
              </IamgeBigScreenNone>
            </SmallAndBigScreen>
            <SiliconBox>
              <SiliconFristBox>
                <UINewTypography variant="h6" color={'text.secondary'}>
                  <FormattedMessage id=" SiliconValleyBank" />
                </UINewTypography>
                <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                  Aesha Finn | 2345678910
                </UINewTypography>
              </SiliconFristBox>
              <DeleteEditBox>
                <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '24px', height: '24px' }} />
                <Box component={'img'} src="/images/payout/delete.webp" sx={{ width: '16px', height: '18px' }} />
              </DeleteEditBox>
            </SiliconBox>
          </MainForBox>

          <ButtonConatinerBox>
            <UIThemeButton variant="contained">
              <UINewTypography variant="body" color={'primary.200'}>
                <FormattedMessage id="AddMoreBanks" />
              </UINewTypography>
              <AddIcon sx={{ color: 'primary.200' }} />
            </UIThemeButton>
          </ButtonConatinerBox>
        </MainThreeBox>
      </MainSecondBox>
    </MainConatinerBox>
  );
};

export default PayoutPaymentConatiner;
