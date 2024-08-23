import { Box, CircularProgress, DialogContent, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  SecondBox,
  ThreeBox,
  ForBox,
  ChooseYourBankFristBox,
  ChooseYourBankSecondBox,
  ChooseYourBankthreeBox,
  PayoutDetailSecondBox,
  PayoutDetailThreeBox,
  PayoutDetailForBox,
  PayoutDetailFiveBox,
  PayoutDetailSixBox,
  FirstBox,
  SmallScreenBox,
  SamllScreenFirstBox,
  UINewTypographyTitleRequestPayout,
  UINewTypographyChooseYourBank,
  UINewTypographyBankName,
  UINewTypographyRemarks,
  UINewTypographyConfirm,
  UINewTypographyYourBalance,
  UINewTypographyAmount,
  BigScreenGap,
  SmallScreenGap,
  UIStyledInputTextAmount,
  UINewTypographyPrice
} from './PayoutWidthDraw';
import CloseIcon from '@mui/icons-material/Close';
import { DividerBox } from '../payoutRequestSubmit/PayoutRequestSubmit.styled';
import { BankDetailsListRes } from 'services/payout/types';
import { ErrorMessage } from 'constants/common.constants';
import { toast } from 'react-toastify';
import { PayoutService } from 'services/payout/payout.service';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useCallback, useState } from 'react';
import { BankDetailsEdit } from '../payoutPaymentContainer';
import AddBankDetailsModel from '../addBankDetails/addBankDetailsModel';
import { Formik } from 'formik';
import * as yup from 'yup';
import PayoutRequestSubmit from '../payoutRequestSubmit';
import { LoaderBox } from '../payoutRequest/PayoutRequest.styled';
import { CancelBox, ConfirmBox } from '../payoutPaymentContainer/PayoutPaymentConatiner';
import { getErrorMessage } from 'utils/errorUtils';

export type RequestPayoutParams = {
  amount: number | null;
  bank_account_id: number | null;
  remarks: string;
};
const PayoutWithdrawContainer = ({
  bankDetailsList,
  token,
  fetchBankDetails,
  payoutStep,
  isSm,
  handlePayoutStep,
  amountSave,
  handlePayoutStepSubmit,
  closeDailog,
  isLoading
}: {
  bankDetailsList: BankDetailsListRes;
  token: TokenIdType;
  fetchBankDetails: () => void;
  payoutStep?: number;
  isSm?: boolean;
  handlePayoutStep?: () => void;
  amountSave: number;
  handlePayoutStepSubmit?: (step: number) => void;
  closeDailog?: () => void;
  isLoading: boolean;
}) => {
  const intl = useIntl();

  const [open, setOpenModel] = useState(false);
  const [selectBank, setSelectBank] = useState<string | null>(null);
  const [selectedBankId, setSelectedBankId] = useState<number | null>(null);
  const [openSubmitModel, setOpenSubmitModel] = useState(false);
  const [editValue, setEditValue] = useState<BankDetailsEdit>();
  const [cancelRemove, setCancelRemove] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleBankDetailsRefetch = useCallback(() => {
    fetchBankDetails();
    isLoading;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const handleBankDetailsDelete = async (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      if (token.token) {
        const data = await PayoutService.bankDetailsDelete(token.token, id);
        if (data.code === 200) {
          handleBankDetailsRefetch();
          toast.success('Success');
          if (handlePayoutStep) {
            handlePayoutStep();
          }
        } else {
          toast.error(data?.error);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setDeleteId(null);
    }
  };

  const handleBankDetailsEdit = (list: BankDetailsEdit) => {
    setEditValue(list);
  };

  const handleOpneModel = () => {
    setOpenModel(true);
  };
  const onClose = () => {
    setOpenModel(false);
    setOpenSubmitModel(false);
  };

  const handleBankClick = (
    bankName: string,
    bankId: number,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
  ) => {
    if (selectBank === bankName) {
      setSelectBank(null);
      setSelectedBankId(null);
      setFieldValue('bank_account_id', null);
    } else {
      setSelectBank(bankName);
      setSelectedBankId(bankId);
      setFieldValue('bank_account_id', bankId);
    }
  };

  const validationSchema = yup.object({
    amount: yup.number().required('AmountNumberIsRequired'),
    bank_account_id: yup.number().required('SelectAnyBank')
  });

  const hanleCancelRemove = () => {
    setCancelRemove(true);
  };

  return (
    <>
      {(payoutStep === 1 || !isSm) && (
        <Formik
          initialValues={{
            amount: null,
            bank_account_id: '',
            remarks: ''
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            try {
              const requestPaoutObject: RequestPayoutParams = {
                amount: values.amount,
                bank_account_id: selectedBankId,
                remarks: values.remarks
              };
              const data = await PayoutService.requestPayout(requestPaoutObject, token.token);
              if (data?.code === 200) {
                if (handlePayoutStep) {
                  handlePayoutStep();
                }
                setOpenSubmitModel(true);
              } else {
                const errorCode = data?.custom_code;
                const errorMessage = getErrorMessage(errorCode);
                toast.error(intl.formatMessage({ id: errorMessage }));
              }
            } catch (error) {
              toast.error(ErrorMessage);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset, setFieldValue }) => {
            return (
              <Box component="form" onSubmit={handleSubmit}>
                <SmallScreenBox>
                  <SamllScreenFirstBox>
                    <Box>
                      <UINewTypographyTitleRequestPayout>
                        <FormattedMessage id="RequestAPayout" />
                      </UINewTypographyTitleRequestPayout>
                    </Box>
                    <Box>
                      <IconButton
                        aria-label="close"
                        sx={{
                          color: (theme) => theme.palette.text.secondary
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </SamllScreenFirstBox>

                  <FirstBox>
                    <DividerBox
                      sx={{
                        display: { sm: 'block', display: 'none' }
                      }}
                    />
                    <DialogContent sx={{ p: 0 }}>
                      <SecondBox>
                        <ThreeBox>
                          <ForBox>
                            {/* <FiveBox>
                              <UINewTypographyGetPaidIn>
                                <FormattedMessage id="GetPaidIn" />
                              </UINewTypographyGetPaidIn>
                              <SixBox>
                                <SevenBox>
                                  <ImageBox src="/images/payout/pay.webp" />
                                  <UINewTypographyGetPaidIn>
                                    <FormattedMessage id="USD" />
                                  </UINewTypographyGetPaidIn>
                                </SevenBox>
                                <ExpandIcon />
                              </SixBox>
                            </FiveBox> */}
                            <Box sx={{ display: 'flex' }}>
                              <UINewTypographyYourBalance>
                                <FormattedMessage id="YourBalance" />
                              </UINewTypographyYourBalance>
                              <UINewTypographyAmount>: ${amountSave}</UINewTypographyAmount>
                            </Box>
                          </ForBox>
                          <Box>
                            <UIStyledInputTextAmount
                              fullWidth
                              type="number"
                              id="amount"
                              name="amount"
                              value={values.amount}
                              onChange={(e) => {
                                if (e.target.value.length <= 5) {
                                  handleChange(e);
                                }
                              }}
                              onBlur={handleBlur}
                              error={touched.amount && Boolean(errors.amount)}
                              helperText={touched.amount && errors.amount ? <FormattedMessage id={errors.amount} /> : ' '}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <UINewTypographyPrice>$</UINewTypographyPrice>
                                  </InputAdornment>
                                )
                              }}
                            />
                          </Box>
                        </ThreeBox>
                        <ChooseYourBankFristBox>
                          {isLoading ? (
                            <LoaderBox>
                              <CircularProgress />
                            </LoaderBox>
                          ) : (
                            <>
                              <ChooseYourBankSecondBox>
                                <ChooseYourBankthreeBox>
                                  <BigScreenGap>
                                    <UINewTypographyChooseYourBank>
                                      <FormattedMessage id="ChooseYourBank" />
                                    </UINewTypographyChooseYourBank>
                                    <SmallScreenGap>
                                      {bankDetailsList?.data?.bank_details?.map((bankList, index) => (
                                        <>
                                          <PayoutDetailSecondBox
                                            key={index}
                                            sx={{
                                              backgroundColor: selectBank === bankList.bank_name ? 'primary.200' : 'primary.700',
                                              borderRadius: selectBank === bankList?.bank_name ? '8px' : '8px',
                                              border: selectBank === bankList.bank_name ? '1px solid' : '',
                                              borderColor: selectBank === bankList.bank_name ? 'primary.400' : 'primary.400'
                                            }}
                                            onClick={() => handleBankClick(bankList?.bank_name, bankList?.id, setFieldValue)}
                                          >
                                            <PayoutDetailThreeBox>
                                              <Box
                                                component={'img'}
                                                src="/images/payout/home.png"
                                                width={'38px'}
                                                height={'42px'}
                                                color={'text.secondary'}
                                              />
                                              <PayoutDetailForBox>
                                                <UINewTypographyBankName>{bankList?.bank_name}</UINewTypographyBankName>
                                                <UINewTypography variant="buttonLargeMenu" color="text.primary">
                                                  {bankList?.account_name}| {bankList?.iban_number}
                                                </UINewTypography>
                                              </PayoutDetailForBox>
                                            </PayoutDetailThreeBox>
                                            <PayoutDetailFiveBox>
                                              {deleteId === bankList.id ? (
                                                <>
                                                  <ConfirmBox
                                                    component={'button'}
                                                    sx={{ mr: 1 }}
                                                    onClick={(e) => handleBankDetailsDelete(bankList.id, e)}
                                                  >
                                                    <FormattedMessage id="Confirm" />
                                                  </ConfirmBox>
                                                  <CancelBox component={'button'} onClick={() => setDeleteId(null)}>
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
                                                      handleBankDetailsEdit(bankList);
                                                      handleOpneModel();
                                                      hanleCancelRemove();
                                                    }}
                                                  />
                                                  <Box
                                                    component={'img'}
                                                    src="/images/payout/delete.webp"
                                                    sx={{ width: '16px', height: '18px', cursor: 'pointer' }}
                                                    onClick={() => setDeleteId(bankList.id)}
                                                  />
                                                </>
                                              )}
                                            </PayoutDetailFiveBox>
                                          </PayoutDetailSecondBox>
                                        </>
                                      ))}
                                      {touched.bank_account_id && errors.bank_account_id && (
                                        <FormHelperText error>
                                          {errors.bank_account_id ? <FormattedMessage id={errors.bank_account_id} /> : ''}
                                        </FormHelperText>
                                      )}
                                    </SmallScreenGap>
                                  </BigScreenGap>
                                </ChooseYourBankthreeBox>
                              </ChooseYourBankSecondBox>
                            </>
                          )}

                          <PayoutDetailSixBox>
                            <Box>
                              <UINewTypographyRemarks>
                                <FormattedMessage id="Remarks" />
                              </UINewTypographyRemarks>
                            </Box>

                            <UIStyledInputText
                              multiline
                              rows={4.9}
                              fullWidth
                              id="remarks"
                              name="remarks"
                              value={values.remarks}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.remarks && Boolean(errors.remarks)}
                              helperText={touched.remarks && errors.remarks}
                            />
                          </PayoutDetailSixBox>

                          <UIThemeButton variant="contained" sx={{ width: '100%' }} type="submit">
                            <UINewTypographyConfirm>
                              <FormattedMessage id="Confirm" />
                            </UINewTypographyConfirm>
                          </UIThemeButton>
                        </ChooseYourBankFristBox>
                      </SecondBox>
                    </DialogContent>
                  </FirstBox>
                </SmallScreenBox>
                <AddBankDetailsModel
                  open={open}
                  onClose={onClose}
                  token={token}
                  editValue={editValue ?? ({} as BankDetailsEdit)}
                  fetchBankDetails={fetchBankDetails}
                  cancelRemove={cancelRemove}
                />
              </Box>
            );
          }}
        </Formik>
      )}
      {(payoutStep === 2 || !isSm) && (
        <PayoutRequestSubmit
          open={openSubmitModel}
          onClose={onClose}
          payoutStep={payoutStep}
          handlePayoutStepSubmit={handlePayoutStepSubmit}
          closeDailog={closeDailog}
        />
      )}
    </>
  );
};

export default PayoutWithdrawContainer;
