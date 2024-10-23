'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useEffect, useState } from 'react';
import { DisableButtonBox, EditButton, MyProfileContainerMain, SaveButton } from './MyProfile.styled';
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
import { getErrorMessage } from 'utils/errorUtils';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuthContext } from '../../../../context/AuthContext';

export type MyProfile = {
  username: string;
  email: string;
  phone: string;
  password: string;
  emailOtp: string;
  phoneOtp: string;
};

const MyProfile = () => {
  const { handelNameChange } = useAuthContext();
  //TODO for verify email and phone and claim free credits
  // const { handleFreeCreditClaim, isFreeCreditAvailable } = useAuthContext();
  const intl = useIntl();

  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const validationSchema = yup.object({
    username: yup.string().required('Username is required').min(2, 'Username is too short').max(20, 'Username is too long'),
    email: yup.string().matches(EMAIL_REGEX, 'Enter a valid email').required('Email is required')
  });
  const [isEditable, setIsEditable] = useState(false);
  const [isReset, setIsReset] = useState(false);

  //TODO for verify email and phone and claim free credits
  // const [isEmailVerified, setIsEmailVerified] = useState(false);
  // const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const handleSubmit = async (name: string, email: string) => {
    try {
      setLoadingButton(true);
      const res = await CommonServices.updateUserName(token.token, name, email);

      if (res) {
        if (res.code === 200 && res.custom_code === null) {
          toast.success('Updated Successfully');
          FetchCustomerDetails();
          handelNameChange();
          setIsEditable(false);
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

  //TODO for verify email and phone and claim free credits

  // const handelClaimFreeCredit = async () => {
  //   try {
  //     setLoadingButton(true);
  //     if (token.token) {
  //       const res = await customerVerificationService.claimFreeCredit(token.token);
  //       handleFreeCreditClaim();

  //       if (res.code === 200) {
  //         toast.success('Free Credit Claimed');
  //         FetchCustomerDetails();
  //       }
  //     }
  //   } catch (error) {
  //     toast.error(ErrorMessage);
  //   } finally {
  //     setLoadingButton(false);
  //   }
  // };

  const FetchCustomerDetails = async () => {
    setIsLoading(true);

    try {
      const customerData = await CustomerDetailsService.customerModelDetails(token.token);
      setCustomerDetails(customerData?.data);

      //TODO for verify email and phone and claim free credits
      // setIsEmailVerified(customerData?.data?.email_verified === 1 ? true : false);
      // setIsPhoneVerified(customerData?.data?.phone_verified === 1 ? true : false);
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    if (token.token) {
      FetchCustomerDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm }) => {
        const isButtonDisabled = !values.username || !values.email;
        const buttonColor = isButtonDisabled ? 'secondary.light' : 'secondary.main';
        const handleCancel = () => {
          setIsEditable(false);
          resetForm();
          setIsReset(!isReset);
        };
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
                  isEditable={isEditable}
                  //TODO for verify email and phone and claim free credits
                  // isEmailVerified={customerDetails?.email_verified as number}
                  // isPhoneNumberVerified={customerDetails?.phone_verified as number}
                  // FetchCustomerDetails={FetchCustomerDetails}
                />
                <DisableButtonBox>
                  {/* //TODO for verify email and phone and claim free credits
                   {customerDetails?.free_credits_claimed === 0 && Boolean(isFreeCreditAvailable) && (
                    <Tooltip
                      title={
                        !isPhoneVerified && !isEmailVerified
                          ? 'Please verify your email and phone'
                          : !isPhoneVerified
                            ? 'Please verify your phone'
                            : !isEmailVerified
                              ? 'Please verify your email'
                              : ''
                      }
                      disableHoverListener={false}
                    >
                      <Box sx={{ display: 'inline-block' }}>
                        <UIThemeButton
                          disabled={!isPhoneVerified || !isEmailVerified}
                          onClick={handelClaimFreeCredit}
                          sx={{
                            background: isPhoneVerified && isEmailVerified ? 'linear-gradient(90deg, #FECD3D, #FFF1C6, #FF68C0)' : '',
                            boxShadow: isPhoneVerified && isEmailVerified ? '0px 4px 10px #FF68C07A' : '',
                            borderRadius: '8px',
                            gap: 1
                          }}
                        >
                          <Box component="img" src="/images/icons/free-credit-icon.png" width="24px" height="30px" alt="free_credit" />
                          <UINewTypography variant="body" lineHeight={'150%'} color="primary.200">
                            <FormattedMessage id="ClaimFreeCredits" />
                          </UINewTypography>
                        </UIThemeButton>
                      </Box>
                    </Tooltip>
                  )} */}
                  {/* {customerDetails?.free_credits_claimed === 1 && ( */}
                  {isEditable ? (
                    <EditButton variant="contained" onClick={() => handleCancel()}>
                      <UINewTypography variant="buttonSmallBold" color={'secondary.main'}>
                        <FormattedMessage id="Cancel" />
                      </UINewTypography>
                    </EditButton>
                  ) : (
                    <EditButton variant="contained" onClick={() => setIsEditable(!isEditable)}>
                      <UINewTypography variant="buttonSmallBold" color={'secondary.main'}>
                        <FormattedMessage id="Edit" />
                      </UINewTypography>
                    </EditButton>
                  )}

                  <SaveButton variant="contained" type="submit" loading={loadingButton} disabled={!isEditable}>
                    <UINewTypography variant="buttonSmallBold" color={buttonColor}>
                      <FormattedMessage id="Save" />
                    </UINewTypography>
                  </SaveButton>
                  {/* )} */}
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
