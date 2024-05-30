'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React from 'react';
import { DisableButtonBox, InputTypeBox, MyProfileContainerMain, ProfileTextHeader } from './MyProfile.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import theme from 'themes/theme';

export type MyProfile = {
  username: string;
  email: string;
  password: string;
};
const MyProfile = () => {
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
  const isSmDown = theme.breakpoints.down(330);
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
              <Box sx={{ mb: 3 }}>
                <UINewTypography variant="h2" color="text.secondary">
                  My Profile
                </UINewTypography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <InputTypeBox>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box>
                      <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                        Username
                      </ProfileTextHeader>
                    </Box>
                    <Box>
                      <UIStyledInputText
                        fullWidth
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.username && Boolean(errors.username)}
                        helperText={touched.username && errors.username}
                      />
                    </Box>
                  </Box>
                </InputTypeBox>

                <InputTypeBox>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box>
                      <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                        Email
                      </ProfileTextHeader>
                    </Box>
                    <Box>
                      <UIStyledInputText
                        fullWidth
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        InputProps={{
                          endAdornment: (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                              <UINewTypography color={'text.secondary'} variant="buttonSmallBold">
                                Edit
                              </UINewTypography>
                              <UINewTypography color="primary.600" variant="buttonSmallBold">
                                Verify
                              </UINewTypography>
                            </Box>
                          )
                        }}
                      />
                    </Box>
                  </Box>
                </InputTypeBox>

                <InputTypeBox>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box>
                      <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                        Password
                      </ProfileTextHeader>
                    </Box>
                    <Box>
                      <UIStyledInputText
                        type="password"
                        fullWidth
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        InputProps={{
                          endAdornment: (
                            <Box>
                              <UINewTypography variant="buttonSmallBold" color="text.secondary">
                                Change
                              </UINewTypography>
                            </Box>
                          )
                        }}
                      />
                    </Box>
                  </Box>
                </InputTypeBox>
              </Box>
            </Box>
            <DisableButtonBox>
              <Box paddingRight={isSmDown ? '16px' : 0}>
                <UIThemeButton variant="contained" disabled>
                  <UINewTypography variant="buttonSmallBold" color={'text.disabled'}>
                    Cancel changes
                  </UINewTypography>
                </UIThemeButton>
              </Box>
              <Box>
                <UIThemeButton variant="contained" disabled>
                  <UINewTypography variant="buttonSmallBold" color={'text.disabled'}>
                    Save
                  </UINewTypography>
                </UIThemeButton>
              </Box>
            </DisableButtonBox>
          </MyProfileContainerMain>
        );
      }}
    </Formik>
  );
};

export default MyProfile;
