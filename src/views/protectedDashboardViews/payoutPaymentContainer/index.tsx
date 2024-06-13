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
import { BankDetailsListRes } from 'services/payout/types';

export type BankListParams = {
  limit: number;
  offset: number;
};

export type BankDetaildDeleteParam = {
  id: number;
};
const PayoutPaymentConatiner = ({ bankDetailsList }: { bankDetailsList: BankDetailsListRes }) => {
  const handleBankDetailsDelete = (id: number) => {
    try {
    } catch (error) {}
  };
  return (
    <MainConatinerBox>
      <MainSecondBox>
        <UINewTypography variant="h2" color={'text.secondary'}>
          <FormattedMessage id="YourPaymentMethods" />
        </UINewTypography>
        <MainThreeBox>
          {bankDetailsList?.data?.bank_details.map((list, index) => {
            return (
              <>
                <MainForBox>
                  <SmallAndBigScreen>
                    <Box component={'img'} src="/images/payout/home.png" sx={{ width: '38px', height: '42px', color: 'text.secondary' }} />
                    <IamgeBigScreenNone>
                      <SmallScreenImg>
                        <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '18px', height: '18px' }} />
                        <Box component={'img'} src="/images/payout/delete.webp" sx={{ width: '16px', height: '18px' }} />
                      </SmallScreenImg>
                    </IamgeBigScreenNone>
                  </SmallAndBigScreen>
                  <SiliconBox>
                    <SiliconFristBox>
                      <UINewTypography variant="h6" color={'text.secondary'}>
                        {list?.bank_name}
                      </UINewTypography>
                      <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                        {list?.account_name} | {list?.iban_number}
                      </UINewTypography>
                    </SiliconFristBox>
                    <DeleteEditBox>
                      <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '18px', height: '18px' }} />
                      <Box
                        component={'img'}
                        src="/images/payout/delete.webp"
                        sx={{ width: '16px', height: '18px' }}
                        onClick={handleBankDetailsDelete(list?.id)}
                      />
                    </DeleteEditBox>
                  </SiliconBox>
                </MainForBox>
              </>
            );
          })}

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
