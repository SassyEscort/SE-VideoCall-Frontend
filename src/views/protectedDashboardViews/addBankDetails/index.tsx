'use client';
import { Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { useCallback, useState } from 'react';
import {
  AddBankDetailsContainer,
  AddBankDetailsSecondBox,
  AddBankTitle,
  ButtonBox,
  InputBox,
  InputMainBox,
  InputSecondBox,
  LabelCreate,
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
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';

export type BankDetailsParams = {
  bank_name: string;
  account_name: string;
  iban_number: string;
};
const AddbankDetails = ({
  token,
  fetchBankDetails,
  handleBankClose
}: {
  token: TokenIdType;
  fetchBankDetails: () => void;
  handleBankClose?: () => void;
}) => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    bank_name: yup.string().required('BankNameIsRequired'),
    account_name: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, 'OnlyTextIsAllowed')
      .required('AccountNameIsRequired'),
    iban_number: yup
      .string()
      .required('IBANNumberIsRequired')
      .matches(/^[a-zA-Z0-9]*$/, 'OnlyAlphanumericCharacters')
  });

  const handleBankDetailsRefetch = useCallback(() => {
    fetchBankDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
          const data = await PayoutService.bankDetailsAdd(BankDetailsObject, token.token);
          if (handleBankClose) {
            handleBankClose();
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
                <Box>
                  <PayoutText variant="h2" color="text.secondary">
                    {!isSm && <FormattedMessage id="YourPaymentMethods" />}
                  </PayoutText>
                </Box>
                <AddBankDetailsSecondBox>
                  <InputMainBox>
                    <AddBankTitle>
                      <FormattedMessage id="AddBankDetails" />
                    </AddBankTitle>

                    <InputSecondBox>
                      <InputBox>
                        <LabelCreate>
                          <FormattedMessage id="BankName" />
                        </LabelCreate>
                        <UIStyledInputText
                          fullWidth
                          id="bank_name"
                          name="bank_name"
                          value={values.bank_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.bank_name && Boolean(errors.bank_name)}
                          helperText={touched.bank_name && errors.bank_name ? <FormattedMessage id={errors.bank_name} /> : ''}
                        />
                      </InputBox>
                      <InputBox>
                        <LabelCreate>
                          <FormattedMessage id="AccountName" />
                        </LabelCreate>
                        <UIStyledInputText
                          fullWidth
                          id="account_name"
                          name="account_name"
                          value={values.account_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.account_name && Boolean(errors.account_name)}
                          helperText={touched.account_name && errors.account_name ? <FormattedMessage id={errors.account_name} /> : ''}
                        />
                      </InputBox>
                      <InputBox>
                        <LabelCreate>
                          <FormattedMessage id="IBANNumber" />
                        </LabelCreate>
                        <UIStyledInputText
                          fullWidth
                          id="iban_number"
                          name="iban_number"
                          value={values.iban_number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.iban_number && Boolean(errors.iban_number)}
                          helperText={touched.iban_number && errors.iban_number ? <FormattedMessage id={errors.iban_number} /> : ''}
                        />
                      </InputBox>
                    </InputSecondBox>
                  </InputMainBox>
                  <ButtonBox>
                    <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                      <UINewTypography color="primary.200" variant="body">
                        <FormattedMessage id="Confirm" />
                      </UINewTypography>
                    </StyleButtonV2>
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
