'use client';
import { Box, DialogContent, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import theme from 'themes/theme';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { PayoutService } from 'services/payout/payout.service';
import { ErrorMessage } from 'constants/common.constants';

import * as yup from 'yup';
import {
  AddBankDetail,
  AddBankDetailsContainer,
  AddBankDetailsSecondBox,
  ButtonBox,
  DialogContentMain,
  DialogTitleBox,
  DividerBox,
  InputBox,
  InputMainBox,
  InputSecondBox
} from './AddbankDetailsModel.styled';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { BankDetailsEdit } from '../payoutPaymentContainer';

const AddBankDetailsModel = ({
  open,
  onClose,
  token,
  editValue,
  fetchBankDetails,
  cancelRemove
}: {
  open: boolean;
  onClose: () => void;
  token: TokenIdType;
  editValue: BankDetailsEdit;
  fetchBankDetails: () => void;
  cancelRemove: Boolean;
}) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);
  const validationSchema = yup.object({
    account_name: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, 'Only text is allowed')
      .required('Account name is required'),
    iban_number: yup
      .string()
      .required('IBAN number is required')
      .matches(/^[a-zA-Z0-9]*$/, 'Only alphanumeric characters are allowed in IBAN number.'),
    bank_name: yup.string().required('Bank name  is required')
  });

  const handleBankDetailsRefetch = useCallback(() => {
    fetchBankDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <DialogContentMain open={open} onClose={onClose} fullWidth>
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">
          <FormattedMessage id={isSm ? 'Payout' : 'YourPaymentMethods'} />
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
      <Box>
        <DividerBox />
      </Box>
      <DialogContent sx={{ p: 0 }}>
        <Formik
          initialValues={{
            bank_name: editValue.bank_name,
            account_name: editValue.account_name,
            iban_number: editValue.iban_number
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            try {
              setLoading(true);
              const BankDetailsObject = {
                bank_name: values.bank_name,
                account_name: values.account_name,
                iban_number: values.iban_number
              };
              const data = await PayoutService.bankDetailsEdit(token.token, editValue.id, BankDetailsObject);
              if (onClose) {
                onClose();
              }
              if (data?.code === 200) {
                toast.success('Success');
                handleBankDetailsRefetch();
              } else {
                toast.error(ErrorMessage);
              }
            } catch (error) {
              toast.error(ErrorMessage);
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => {
            return (
              <>
                <Box component="form" onSubmit={handleSubmit}>
                  <AddBankDetailsContainer>
                    <AddBankDetailsSecondBox>
                      <InputMainBox>
                        <AddBankDetail variant="h5" color="secondary.200">
                          <FormattedMessage id="AddBankDetails" />
                        </AddBankDetail>

                        <InputSecondBox>
                          <InputBox>
                            <UINewTypography variant="bodySemiBold" color="text.primary">
                              <FormattedMessage id="BankName" />
                            </UINewTypography>
                            <UIStyledInputText
                              fullWidth
                              id="bank_name"
                              name="bank_name"
                              value={values.bank_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.bank_name && Boolean(errors.bank_name)}
                              helperText={touched.bank_name && errors.bank_name}
                            />
                          </InputBox>
                          <InputBox>
                            <UINewTypography variant="bodySemiBold" color="text.primary">
                              <FormattedMessage id="AccountName" />
                            </UINewTypography>
                            <UIStyledInputText
                              fullWidth
                              id="account_name"
                              name="account_name"
                              value={values.account_name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.account_name && Boolean(errors.account_name)}
                              helperText={touched.account_name && errors.account_name}
                            />
                          </InputBox>
                          <InputBox>
                            <UINewTypography variant="bodySemiBold" color="text.primary">
                              <FormattedMessage id="IBANNumber" />
                            </UINewTypography>
                            <UIStyledInputText
                              fullWidth
                              id="iban_number"
                              name="iban_number"
                              value={values.iban_number}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.iban_number && Boolean(errors.iban_number)}
                              helperText={touched.iban_number && errors.iban_number}
                            />
                          </InputBox>
                        </InputSecondBox>
                      </InputMainBox>
                      <ButtonBox>
                        <UIThemeButton variant="contained" type="submit" loading={loading}>
                          <UINewTypography color="primary.200" variant="body">
                            <FormattedMessage id="Confirm" />
                          </UINewTypography>
                        </UIThemeButton>

                        <UINewTypography variant="body" color="primary.400" sx={{ cursor: 'pointer' }} onClick={handleReset}>
                          {cancelRemove ? '' : <FormattedMessage id="Cancel" />}
                        </UINewTypography>
                      </ButtonBox>
                    </AddBankDetailsSecondBox>
                  </AddBankDetailsContainer>
                </Box>
              </>
            );
          }}
        </Formik>
      </DialogContent>
    </DialogContentMain>
  );
};

export default AddBankDetailsModel;
