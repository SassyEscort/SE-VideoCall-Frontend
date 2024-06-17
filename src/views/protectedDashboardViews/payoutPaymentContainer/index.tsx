'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { useCallback, useState } from 'react';
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
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { PayoutService } from 'services/payout/payout.service';
import { TokenIdType } from 'views/protectedModelViews/verification';
import AddbankDetails from '../addBankDetails';

export type BankListParams = {
  limit: number;
  offset: number;
};

const PayoutPaymentConatiner = ({
  bankDetailsList,
  token,
  fetchBankDetails
}: {
  bankDetailsList: BankDetailsListRes;
  token: TokenIdType;
  fetchBankDetails: () => void;
}) => {
  const [openBank, setOpenBank] = useState(false);
  const handleBankDetailsRefetch = useCallback(() => {
    fetchBankDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleBankDetailsDetele = async (id: number) => {
    try {
      if (token.token) {
        const data = await PayoutService.bankDetailsDelete(token.token, id);
        if (data.code === 200) {
          handleBankDetailsRefetch();
          toast.success('Success');
        } else {
          toast.error(data?.error);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleBankOpen = () => {
    setOpenBank(true);
  };

  const handleBankClose = () => {
    setOpenBank(false);
  };

  return (
    <>
      {openBank ? (
        <AddbankDetails token={token} fetchBankDetails={fetchBankDetails} handleBankClose={handleBankClose} />
      ) : (
        <MainConatinerBox>
          <MainSecondBox>
            <UINewTypography variant="h2" color="text.secondary">
              <FormattedMessage id="YourPaymentMethods" />
            </UINewTypography>
            <MainThreeBox>
              {bankDetailsList?.data?.bank_details.map((list, index) => {
                return (
                  <>
                    <MainForBox>
                      <SmallAndBigScreen>
                        <Box
                          component={'img'}
                          src="/images/payout/home.png"
                          sx={{ width: '38px', height: '42px', color: 'text.secondary' }}
                        />
                        <IamgeBigScreenNone>
                          <SmallScreenImg>
                            <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '18px', height: '18px' }} />
                            <Box
                              component={'img'}
                              src="/images/payout/delete.webp"
                              sx={{ width: '16px', height: '18px' }}
                              onClick={() => handleBankDetailsDetele(list?.id)}
                            />
                          </SmallScreenImg>
                        </IamgeBigScreenNone>
                      </SmallAndBigScreen>
                      <SiliconBox>
                        <SiliconFristBox>
                          <UINewTypography variant="h6" color="text.secondary">
                            {list?.bank_name}
                          </UINewTypography>
                          <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                            {list?.account_name} | {list?.iban_number}
                          </UINewTypography>
                        </SiliconFristBox>
                        <DeleteEditBox>
                          <Box component={'img'} src="/images/payout/edit.webp" sx={{ width: '18px', height: '18px', cursor: 'pointer' }} />

                          <Box
                            component={'img'}
                            src="/images/payout/delete.webp"
                            sx={{ width: '16px', height: '18px', cursor: 'pointer' }}
                            onClick={() => handleBankDetailsDetele(list?.id)}
                          />
                        </DeleteEditBox>
                      </SiliconBox>
                    </MainForBox>
                  </>
                );
              })}

              <ButtonConatinerBox>
                <UIThemeButton variant="contained" onClick={handleBankOpen}>
                  <UINewTypography variant="body" color="primary.200">
                    <FormattedMessage id="AddMoreBanks" />
                  </UINewTypography>
                  <AddIcon sx={{ color: 'primary.200' }} />
                </UIThemeButton>
              </ButtonConatinerBox>
            </MainThreeBox>
          </MainSecondBox>
        </MainConatinerBox>
      )}
    </>
  );
};

export default PayoutPaymentConatiner;
