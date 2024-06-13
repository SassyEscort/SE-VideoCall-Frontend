'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import * as yup from 'yup';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { toast } from 'react-toastify';
import InputAdornment from '@mui/material/InputAdornment';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import AuthModelCommon from '../modelSignup/AuthModelCommon';
import CustomPasswordRegex from 'views/auth/customPasswordRegex';
import { IconeButtonBox, ModelNewPasswordBox, SetYourNewPasswordBox, SetupNewPasswordBox } from './ModelNewPassword.styled';
import { ErrorMessage } from 'constants/common.constants';

export type ResetPasswordParams = {
  email: string;
  password: string;
  reset_password_code: string;
};

const ModelNewPassword = ({ onClose, email, onLoginOpen }: { onClose: () => void; email: string; onLoginOpen: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down(330));

  const validationSchema = yup.object({
    password: yup
      .string()
      .required('New password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(PASSWORD_PATTERN, 'Password Condition'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password'), ''], 'New Password does not match')
  });

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          const url = new URL(window.location.href);
          const verificationCode = url.searchParams.get('code');

          if (verificationCode !== null && email !== null) {
            const resetPasswordObject = {
              email: email,
              password: values.password,
              reset_password_code: verificationCode
            };
            const data = await GuestAuthService.guestResetPassword(resetPasswordObject);

            if (data.code === 200) {
              toast.success('Success');
              onClose();
            } else {
              toast.error(data.error);
            }
          }
        } catch (error) {
          toast.error(ErrorMessage);
        } finally {
          setLoading(false);
          setSubmitting(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthModelCommon
              variant="resetPassword"
              onClose={onClose}
              image="images/model/model-signup/model-signup.webp"
              mobileImage="images/model/model-signup/model-signup.webp"
            >
              <ModelNewPasswordBox id="hello">
                <Box sx={{ pt: { xs: 0, sm: '50px' } }}>
                  <SetupNewPasswordBox>
                    <SetYourNewPasswordBox variant="MediumSemiBoldText" color="common.white">
                      Setup your new password
                    </SetYourNewPasswordBox>
                    <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
                      For the account{' '}
                      <UINewTypography variant="bodySemiBold" color="secondary.200">
                        {email}
                      </UINewTypography>
                    </UINewTypography>
                  </SetupNewPasswordBox>
                  <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                    <IconeButtonBox size="large" onClick={onClose}>
                      <CloseIcon />
                    </IconeButtonBox>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Box display="flex" gap={1.5} flexDirection="column">
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <UINewTypography variant="bodySemiBold">New password</UINewTypography>
                      <UIStyledInputText
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{
                          border: '2px solid',
                          borderColor: 'secondary.light'
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end" sx={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                            </InputAdornment>
                          )
                        }}
                      />
                    </Box>
                  </Box>

                  <Box display="flex" gap={1.5} flexDirection="column">
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <UINewTypography variant="bodySemiBold">Confirm new password</UINewTypography>
                      <UIStyledInputText
                        fullWidth
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
                        sx={{
                          border: '2px solid',
                          borderColor: 'secondary.light'
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{ cursor: 'pointer' }}
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                            </InputAdornment>
                          )
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <CustomPasswordRegex password={values.password} />
                </Box>
                <Box display="flex" flexDirection="column" width="100%" gap="28px">
                  <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                    <UINewTypography variant="buttonLargeBold">Change password</UINewTypography>
                  </StyleButtonV2>
                  <Box display="flex" flexDirection="column" gap={3}>
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                    <Box display="flex" gap={1} alignItems="center" justifyContent="center" pb={3}>
                      <UINewTypography variant="buttonLargeMenu" sx={{ whiteSpace: isSm ? 'wrap' : 'nowrap' }}>
                        Remember password?
                      </UINewTypography>
                      <UINewTypography
                        whiteSpace="nowrap"
                        variant="body"
                        sx={{ color: 'text.secondary', cursor: 'pointer' }}
                        onClick={onLoginOpen}
                      >
                        Log in instead!
                      </UINewTypography>
                    </Box>
                  </Box>
                </Box>
              </ModelNewPasswordBox>
            </AuthModelCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default ModelNewPassword;
