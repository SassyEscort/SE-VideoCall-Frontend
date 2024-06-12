'use client';
import { Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React from 'react';
import {
  AddBankDetail,
  AddBankDetailsContainer,
  AddBankDetailsSecondBox,
  ButtonBox,
  InputBox,
  InputMainBox,
  InputSecondBox,
  PayoutText
} from './AddbankDetails';
import theme from 'themes/theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { ErrorMessage } from 'constants/common.constants';

import { toast } from 'react-toastify';
import { PayoutService } from 'services/payout/payout.service';

export type BnakDetailsParams = {
  bank_name: string;
  account_name: string;
  iban_number: string;
};
const AddbankDetails = () => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const validationSchema = yup.object({
    bank_name: yup.string().required('bankName is required'),
    account_name: yup.string().required('accountName is required'),
    iban_number: yup
      .string()
      .required('ibanNumber is required')
      .matches(/^[a-zA-Z0-9]*$/, 'Only alphanumeric characters are allowed in IBAN number.')
  });

  return (
    <Formik
      initialValues={{
        bank_name: '',
        account_name: '',
        iban_number: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const BankDetailsObject = {
            bank_name: values.bank_name,
            account_name: values.account_name,
            iban_number: values.iban_number
          };
          const data = await PayoutService.bankDetails(BankDetailsObject, 'token.token');
          console.log(data, 'iban_number');
        } catch (error) {
          toast.error(ErrorMessage);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <AddBankDetailsContainer>
            <Box component="form" onSubmit={handleSubmit}>
              <PayoutText variant="h2" color={'text.secondary'}>
                <FormattedMessage id={isSm ? 'Payout' : 'YourPaymentMethods'} />
              </PayoutText>
            </Box>
            <AddBankDetailsSecondBox>
              <InputMainBox>
                <AddBankDetail variant="h5" color={'secondary.200'}>
                  <FormattedMessage id="AddBankDetails" />
                </AddBankDetail>

                <InputSecondBox>
                  <InputBox>
                    <UINewTypography variant="bodySemiBold" color={'text.primary'}>
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
                    <UINewTypography variant="bodySemiBold" color={'text.primary'}>
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
                    <UINewTypography variant="bodySemiBold" color={'text.primary'}>
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
                <UIThemeButton variant="contained" type="submit">
                  <UINewTypography color={'primary.200'} variant="body">
                    <FormattedMessage id="Confirm" />
                  </UINewTypography>
                </UIThemeButton>
                <UINewTypography variant="body" color={'primary.400'} sx={{ cursor: 'pointer' }}>
                  <FormattedMessage id="Cancel" />
                </UINewTypography>
              </ButtonBox>
            </AddBankDetailsSecondBox>
          </AddBankDetailsContainer>
        );
      }}
    </Formik>
  );
};

export default AddbankDetails;
