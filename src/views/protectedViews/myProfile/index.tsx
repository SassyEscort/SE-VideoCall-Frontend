'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React, { useEffect, useState } from 'react';
import { DisableButtonBox, MyProfileContainerMain } from './MyProfile.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import MyProfileContainer from './MyProfileContainer';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';

export type MyProfile = {
  username: string;
  email: string;
  password: string;
};
const MyProfile = () => {
  const isSmDown = theme.breakpoints.down(330);

  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const validationSchema = yup.object({
    username: yup.string().required('Username is required').min(2, 'Username is too short').max(20, 'Username is too long'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        PASSWORD_PATTERN,
        'Invalid Password! Does not meet requirements (this password has appeared in a data breach elsewhere and should never be used on any website)'
      )
  });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <MyProfileContainerMain>
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
                <Box paddingRight={isSmDown ? '16px' : 0}>
                  <UIThemeButton variant="contained" disabled>
                    <UINewTypography variant="buttonSmallBold" color={'text.disabled'}>
                      <FormattedMessage id="CancelChanges" />
                    </UINewTypography>
                  </UIThemeButton>
                </Box>
                <Box>
                  <UIThemeButton variant="contained" disabled>
                    <UINewTypography variant="buttonSmallBold" color={'text.disabled'}>
                      <FormattedMessage id="Save" />
                    </UINewTypography>
                  </UIThemeButton>
                </Box>
              </DisableButtonBox>
            </Box>
          </MyProfileContainerMain>
        );
      }}
    </Formik>
  );
};

export default MyProfile;
