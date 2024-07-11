import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
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
import AuthCommon from '../AuthCommon';
import CustomPasswordRegex from '../customPasswordRegex';
import InputAdornment from '@mui/material/InputAdornment';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { Typography } from '@mui/material';
import { ErrorMessage } from 'constants/common.constants';

export type ResetPasswordParams = {
  email: string;
  password: string;
  reset_password_code: string;
};

const GuestNewPassword = ({ onClose, email, onLoginOpen }: { onClose: () => void; email: string; onLoginOpen: () => void }) => {
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
            <AuthCommon
              variant="resetPassword"
              onClose={onClose}
              image="images/auth/auth-model1.webp"
              mobileImage="images/auth/auth-model1.webp"
            >
              <Box
                position="relative"
                width="100%"
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pl: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '400px' },
                  pt: { xs: 0, sm: '64px', md: 0 },
                  pr: { xs: 2, md: 0 }
                }}
              >
                <Box sx={{ pt: { xs: 0, sm: '50px' } }}>
                  <Box display="flex" flexDirection="column" gap="12px" alignItems="center" justifyContent="center">
                    <UINewTypography
                      variant="MediumSemiBoldText"
                      color="common.white"
                      sx={{
                        display: 'flex',
                        whiteSpace: { xs: 'normal', sm: 'nowrap' },
                        marginTop: { xs: '100px', sm: 0 },
                        lineHeight: { xs: '41.6px', sm: '40px' },
                        fontWeight: isSm ? '600' : undefined
                      }}
                    >
                      Setup your new password
                    </UINewTypography>
                    <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
                      For the account{' '}
                      <UINewTypography variant="bodySemiBold" color="secondary.200">
                        {email}
                      </UINewTypography>
                    </UINewTypography>
                  </Box>
                  <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                    <IconButton
                      size="large"
                      sx={{
                        color: 'common.white',
                        position: 'absolute',
                        top: 0,
                        right: { xs: 0, md: '-72px' },
                        display: 'block'
                      }}
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
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
                <Box display="flex" flexDirection="column" width="100%" gap="26px">
                  <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                    <Typography sx={{ fontSize: '16px', lineHeight: '19.2px', fontWeight: '700' }}> Change password</Typography>
                  </StyleButtonV2>
                  <Box display="flex" flexDirection="column" gap={{ xs: 0.75, sm: 3 }}>
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
              </Box>
            </AuthCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default GuestNewPassword;
