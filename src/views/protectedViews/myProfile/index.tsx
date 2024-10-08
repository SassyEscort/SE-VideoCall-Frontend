'use client';
import { Box, CircularProgress, Tooltip } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useEffect, useState } from 'react';
import { DisableButtonBox, MyProfileContainerMain } from './MyProfile.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import MyProfileContainer from './MyProfileContainer';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { CustomerDetails, CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { EMAIL_REGEX } from 'constants/regexConstants';
import { LoaderBox } from '../Credites/Credits.styled';
import { CommonServices } from 'services/commonApi/commonApi.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { useCallFeatureContext } from '../../../../context/CallFeatureContext';
import { getErrorMessage } from 'utils/errorUtils';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { customerVerificationService } from 'services/customerVerification/customerVerification.services';

export type MyProfile = {
  username: string;
  email: string;
  phone: string;
  password: string;
  emailOtp: string;
  phoneOtp: string;
};

const MyProfile = () => {
  const { handelNameChange } = useCallFeatureContext();
  const intl = useIntl();

  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const validationSchema = yup.object({
    username: yup.string().required('Username is required').min(2, 'Username is too short').max(20, 'Username is too long'),
    email: yup.string().matches(EMAIL_REGEX, 'Enter a valid email').required('Email is required')
  });
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  console.log(customerDetails, 'customerDetails');

  const handleSubmit = async (name: string, email: string) => {
    try {
      setLoadingButton(true);
      const res = await CommonServices.updateUserName(token.token, name, email);

      handelNameChange();
      if (res) {
        if (res.code === 200 && res.custom_code === null) {
          toast.success('Success');
        } else {
          const errorMessage = getErrorMessage(res?.custom_code);
          toast.error(intl.formatMessage({ id: errorMessage }));
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoadingButton(false);
    }
  };

  const handelClaimFreeCredit = async () => {
    try {
      setLoadingButton(true);
      if (token.token) {
        const res = await customerVerificationService.claimFreeCredit(token.token);
        if (res) {
          if (res.code === 200) {
            toast.success('Success');
          }
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoadingButton(false);
    }
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const customerDetails = async () => {
      setIsLoading(true);
      const customerData = await CustomerDetailsService.customerModelDetails(token.token);
      setCustomerDetails(customerData?.data);
      setIsEmailVerified(customerData?.data?.email_verified === 1 ? true : false);
      setIsPhoneVerified(customerData?.data?.phone_verified === 1 ? true : false);
      setIsLoading(false);
    };
    if (token.token) {
      customerDetails();
    }
  }, [token.id, token.token]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        username: customerDetails?.customer_name || '',
        email: customerDetails?.customer_email || '',
        password: 'test123',
        emailOtp: '',
        phoneOtp: '',
        phone: customerDetails?.customer_phone_number || ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values.username, values.email);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched }) => {
        const isButtonDisabled = !values.username || !values.email;
        const buttonColor = isButtonDisabled ? 'secondary.light' : 'secondary.main';
        return (
          <MyProfileContainerMain>
            {isLoading ? (
              <LoaderBox>
                <CircularProgress />
              </LoaderBox>
            ) : (
              <Box component="form" onSubmit={handleSubmit}>
                <MyProfileContainer
                  values={values}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors}
                  handleBlur={handleBlur}
                  token={token}
                  isEmailVerified={customerDetails?.email_verified as number}
                  isPhoneNumberVerified={customerDetails?.phone_verified as number}
                  setFieldValue={setFieldValue}
                  setFieldTouched={setFieldTouched}
                />
                <DisableButtonBox>
                  {customerDetails?.free_credits_claimed === 0 ? (
                    <Tooltip
                      title={
                        !isPhoneVerified && !isEmailVerified
                          ? 'Email and phone verification pending'
                          : !isPhoneVerified
                            ? 'Phone verification pending'
                            : !isEmailVerified
                              ? 'Email verification pending'
                              : ''
                      }
                      disableHoverListener={false}
                    >
                      <Box sx={{ display: 'inline-block' }}>
                        <UIThemeButton
                          disabled={!isPhoneVerified || !isEmailVerified}
                          onClick={handelClaimFreeCredit}
                          sx={{
                            width: '252px',
                            background: isPhoneVerified && isEmailVerified ? 'linear-gradient(90deg, #FECD3D, #FFF1C6, #FF68C0)' : '',
                            boxShadow: isPhoneVerified && isEmailVerified ? '0px 4px 10px #FF68C07A' : '',
                            borderRadius: '8px',
                            gap: 1
                          }}
                        >
                          <Box component="img" src="/images/icons/free-credit-icon.png" width="24px" height="30px" alt="free_credit" />
                          <UINewTypography variant="body" lineHeight={'150%'} color="primary.200">
                            Claim Free Credits
                          </UINewTypography>
                        </UIThemeButton>
                      </Box>
                    </Tooltip>
                  ) : (
                    <Box></Box>
                  )}
                  <Box>
                    <StyleButtonV2
                      variant="contained"
                      type="submit"
                      loading={loadingButton}
                      disabled={customerDetails?.customer_name === values.username}
                    >
                      <UINewTypography variant="buttonSmallBold" color={buttonColor}>
                        <FormattedMessage id="Save" />
                      </UINewTypography>
                    </StyleButtonV2>
                  </Box>
                </DisableButtonBox>
              </Box>
            )}
          </MyProfileContainerMain>
        );
      }}
    </Formik>
  );
};

export default MyProfile;
