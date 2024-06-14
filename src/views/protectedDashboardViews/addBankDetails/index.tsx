'use client';
import { Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React, { useState } from 'react';
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
import { TokenIdType } from 'views/protectedModelViews/verification';

export type BankDetailsParams = {
  bank_name: string;
  account_name: string;
  iban_number: string;
};
const AddbankDetails = ({ token }: { token: TokenIdType }) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    bank_name: yup.string().required('IBANnumber is required'),
    account_name: yup.string().required('accountName is required'),
    iban_number: yup
      .string()
      .required('IBANnumber is required')
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
          setLoading(true);
          const BankDetailsObject = {
            bank_name: values.bank_name,
            account_name: values.account_name,
            iban_number: values.iban_number
          };
          const data = await PayoutService.bankDetails(BankDetailsObject, token.token);
          if (data?.code === 200) {
            toast.success('Success');
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
                <Box>
                  <PayoutText variant="h2" color="text.secondary">
                    <FormattedMessage id={isSm ? 'Payout' : 'YourPaymentMethods'} />
                  </PayoutText>
                </Box>
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
                      <FormattedMessage id="Cancel" />
                    </UINewTypography>
                  </ButtonBox>
                </AddBankDetailsSecondBox>
              </AddBankDetailsContainer>
            </Box>
          </>
        );
      }}
    </Formik>
  );
};

export default AddbankDetails;
