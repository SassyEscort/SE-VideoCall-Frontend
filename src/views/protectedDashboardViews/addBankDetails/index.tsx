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

export type BnakDetails = {
  bankName: string;
  accountName: string;
  ibanNumber: string;
};
const AddbankDetails = () => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const validationSchema = yup.object({
    bankName: yup.string().required('bankName is required'),
    accountName: yup.string().required('accountName is required'),
    ibanNumber: yup
      .string()
      .required('ibanNumber is required')
      .matches(/^[a-zA-Z0-9]*$/, 'Only alphanumeric characters are allowed in IBAN number.')
  });
  return (
    <Formik
      initialValues={{
        bankName: '',
        accountName: '',
        ibanNumber: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
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
                      id="bankName"
                      name="bankName"
                      value={values.bankName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.bankName && Boolean(errors.bankName)}
                      helperText={touched.bankName && errors.bankName}
                    />
                  </InputBox>
                  <InputBox>
                    <UINewTypography variant="bodySemiBold" color={'text.primary'}>
                      <FormattedMessage id="AccountName" />
                    </UINewTypography>
                    <UIStyledInputText
                      fullWidth
                      id="accountName"
                      name="accountName"
                      value={values.accountName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.accountName && Boolean(errors.accountName)}
                      helperText={touched.accountName && errors.accountName}
                    />
                  </InputBox>
                  <InputBox>
                    <UINewTypography variant="bodySemiBold" color={'text.primary'}>
                      <FormattedMessage id="IBANNumber" />
                    </UINewTypography>
                    <UIStyledInputText
                      fullWidth
                      id="ibanNumber"
                      name="ibanNumber"
                      value={values.ibanNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.ibanNumber && Boolean(errors.ibanNumber)}
                      helperText={touched.ibanNumber && errors.ibanNumber}
                    />
                  </InputBox>
                </InputSecondBox>
              </InputMainBox>
              <ButtonBox>
                <UIThemeButton variant="contained">
                  <UINewTypography color={'primary.200'} variant="body">
                    <FormattedMessage id="Confirm" />
                  </UINewTypography>
                </UIThemeButton>
                <UINewTypography variant="body" color={'primary.400'}>
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
