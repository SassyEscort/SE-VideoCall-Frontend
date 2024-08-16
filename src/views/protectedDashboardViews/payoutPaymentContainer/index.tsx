'use client';
import { Box, CircularProgress } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { useCallback, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  ButtonConatinerBox,
  CancelBox,
  ConfirmBox,
  DeleteEditBox,
  IamgeBigScreenNone,
  MainConatinerBox,
  MainForBox,
  MainSecondBox,
  MainThreeBox,
  MapBox,
  SiliconBox,
  SiliconFristBox,
  SmallAndBigScreen,
  SmallScreenImg,
  UINewTypographyBankName,
  UINewTypographyTitle
} from './PayoutPaymentConatiner';
import { FormattedMessage } from 'react-intl';
import { BankDetailsListRes } from 'services/payout/types';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { PayoutService } from 'services/payout/payout.service';
import { TokenIdType } from 'views/protectedModelViews/verification';
import AddbankDetails from '../addBankDetails';
import AddBankDetailsModel from '../addBankDetails/addBankDetailsModel';
import { LoaderBox } from '../payoutRequest/PayoutRequest.styled';

export type BankDetailsEdit = {
  id: number;
  model_id: number;
  bank_name: string;
  account_name: string;
  iban_number: string;
  created_at: string;
  is_active: number;
};
export type BankListParams = {
  limit: number;
  offset: number;
};

const PayoutPaymentConatiner = ({
  bankDetailsList,
  token,
  fetchBankDetails,
  isLoading
}: {
  bankDetailsList: BankDetailsListRes;
  token: TokenIdType;
  fetchBankDetails: () => void;
  isLoading: boolean;
}) => {
  const [openBank, setOpenBank] = useState(false);
  const [open, setOpenModel] = useState(false);
  const [editValue, setEditValue] = useState<BankDetailsEdit>();
  const [cancelRemove, setCancelRemove] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleBankDetailsRefetch = useCallback(() => {
    fetchBankDetails();
    isLoading;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleBankDetailsDelete = async () => {
    try {
      if (token.token && deleteId !== null) {
        setIsLoadingDelete(true);
        const data = await PayoutService.bankDetailsDelete(token.token, deleteId);
        if (data.code === 200) {
          handleBankDetailsRefetch();
          toast.success('Success');
        } else {
          toast.error(data?.error);
        }
        setIsLoadingDelete(false);
      }
    } catch (error) {
      toast.error(ErrorMessage);
      setIsLoadingDelete(false);
    } finally {
      setDeleteId(null);
    }
  };

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
  };

  const handleBankOpen = () => {
    setOpenBank(true);
  };

  const handleBankClose = () => {
    setOpenBank(false);
  };

  const handleOpneModel = () => {
    setOpenModel(true);
  };
  const onClose = () => {
    setOpenModel(false);
  };
  const handleBankDetailsEdit = (list: BankDetailsEdit) => {
    setEditValue(list);
  };
  const hanleCancelRemove = () => {
    setCancelRemove(true);
  };

  return (
    <>
      {openBank ? (
        <AddbankDetails token={token} fetchBankDetails={fetchBankDetails} handleBankClose={handleBankClose} />
      ) : (
        <MainConatinerBox>
          <MainSecondBox>
            <UINewTypographyTitle>
              <FormattedMessage id="YourPaymentMethods" />
            </UINewTypographyTitle>

            <MapBox>
              {isLoadingDelete || isLoading ? (
                <LoaderBox>
                  <CircularProgress />
                </LoaderBox>
              ) : (
                <MainThreeBox>
                  {bankDetailsList?.data?.bank_details?.map((list, index) => (
                    <MainForBox key={index}>
                      <SmallAndBigScreen>
                        <Box
                          component={'img'}
                          src="/images/payout/home.png"
                          sx={{ width: '38px', height: '42px', color: 'text.secondary' }}
                        />
                        <IamgeBigScreenNone>
                          <SmallScreenImg>
                            {deleteId === list.id ? (
                              <>
                                <ConfirmBox component={'button'} onClick={handleBankDetailsDelete}>
                                  Confirm
                                </ConfirmBox>
                                <CancelBox component={'button'} onClick={handleCancelDelete}>
                                  Cancel
                                </CancelBox>
                              </>
                            ) : (
                              <>
                                <Box
                                  component={'img'}
                                  src="/images/payout/edit.webp"
                                  sx={{ width: '18px', height: '18px' }}
                                  onClick={() => {
                                    handleBankDetailsEdit(list);
                                    handleOpneModel();
                                    hanleCancelRemove();
                                  }}
                                />
                                <Box
                                  component={'img'}
                                  src="/images/payout/delete.webp"
                                  sx={{ width: '16px', height: '18px' }}
                                  onClick={() => handleDeleteClick(list.id)}
                                />
                              </>
                            )}
                          </SmallScreenImg>
                        </IamgeBigScreenNone>
                      </SmallAndBigScreen>
                      <SiliconBox>
                        <SiliconFristBox>
                          <UINewTypographyBankName>{list?.bank_name}</UINewTypographyBankName>
                          <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                            {list?.account_name} | {list?.iban_number}
                          </UINewTypography>
                        </SiliconFristBox>
                        <DeleteEditBox>
                          {deleteId === list.id ? (
                            <>
                              <ConfirmBox component={'button'} onClick={handleBankDetailsDelete}>
                                <FormattedMessage id="Confirm" />
                              </ConfirmBox>
                              <CancelBox component={'button'} onClick={handleCancelDelete}>
                                <FormattedMessage id="Cancel" />
                              </CancelBox>
                            </>
                          ) : (
                            <>
                              <Box
                                component={'img'}
                                src="/images/payout/edit.webp"
                                sx={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                onClick={() => {
                                  handleBankDetailsEdit(list);
                                  handleOpneModel();
                                  hanleCancelRemove();
                                }}
                              />
                              <Box
                                component={'img'}
                                src="/images/payout/delete.webp"
                                sx={{ width: '16px', height: '18px', cursor: 'pointer' }}
                                onClick={() => handleDeleteClick(list.id)}
                              />
                            </>
                          )}
                        </DeleteEditBox>
                      </SiliconBox>
                    </MainForBox>
                  ))}
                </MainThreeBox>
              )}
              <ButtonConatinerBox>
                <UIThemeButton variant="contained" onClick={handleBankOpen}>
                  <UINewTypography variant="body" color="primary.200">
                    <FormattedMessage id="AddMoreBanks" />
                  </UINewTypography>
                  <AddIcon sx={{ color: 'primary.200', height: 20, width: 20 }} />
                </UIThemeButton>
              </ButtonConatinerBox>
            </MapBox>
          </MainSecondBox>

          <AddBankDetailsModel
            open={open}
            onClose={onClose}
            token={token}
            editValue={editValue ?? ({} as BankDetailsEdit)}
            fetchBankDetails={fetchBankDetails}
            cancelRemove={cancelRemove}
          />
        </MainConatinerBox>
      )}
    </>
  );
};

export default PayoutPaymentConatiner;
