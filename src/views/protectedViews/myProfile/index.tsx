'use client';
import { Box, CircularProgress } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useEffect, useState } from 'react';
import { DisableButtonBox, MyProfileContainerMain } from './MyProfile.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';
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

export type MyProfile = {
  username: string;
  email: string;
  password: string;
};

const MyProfile = () => {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const validationSchema = yup.object({
    username: yup.string().required('Username is required').min(2, 'Username is too short').max(20, 'Username is too long'),
    email: yup.string().matches(EMAIL_REGEX, 'Enter a valid email').required('Email is required')
  });

  const handleSubmit = async (username: string) => {
    try {
      setLoadingButton(true);
      const res = await CommonServices.updateUserName(token.token, username);
      if (res) {
        if (res.code === 200) {
          toast.success('Success');
        } else {
          toast.error(ErrorMessage);
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
      setCustomerDetails(customerData.data);
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
        username: customerDetails?.customer_user_name || '',
        email: customerDetails?.customer_email || '',
        password: 'test123'
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values.username);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
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
                />
                <DisableButtonBox>
                  <Box>
                    <StyleButtonV2 variant="contained" type="submit" loading={loadingButton}>
                      <UINewTypography variant="buttonSmallBold" color={'text.disabled'}>
                        <FormattedMessage id="Save1" />
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
