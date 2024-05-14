import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import Link from 'next/link';
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
import Dialog from '@mui/material/Dialog';
import GuestLogin from '../GuestLogin';

export type ResetPasswordParams = {
  email: string;
  password: string;
  reset_password_code: string;
};

const GuestNewPassword = ({ onClose, email }: { onClose: () => void; email: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [open, setIsOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsOpen(true);
  };

  const handleLoginClose = () => {
    setIsOpen(false);
  };

  const isSm = useMediaQuery(theme.breakpoints.down(330));

  const validationSchema = yup.object({
    password: yup
      .string()
      .required('New Password Required')
      .min(8, 'Password must be at least 8 characters')
      .matches(PASSWORD_PATTERN, 'Password Condition'),
    confirmPassword: yup
      .string()
      .required('Confirm Password Required')
      .oneOf([yup.ref('password'), ''], 'New Password Does Not Match')
  });

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
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
            toast.success('Your password has been updated');
          }
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthCommon
              variant="resetPassword"
              onClose={onClose}
              image="images/auth/auth-model.webp"
              mobileImage="images/auth/auth-model.webp"
            >
              <Box
                position="relative"
                width="100%"
                height={isSm ? '625px' : '720px'}
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pl: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '400px' }
                }}
              >
                <Box sx={{ pt: { xs: 0, sm: '50px' } }}>
                  <Box display="flex" flexDirection="column" gap="12px" alignItems="center" justifyContent="center">
                    <UINewTypography variant="MediumSemiBoldText" color="common.white" sx={{ whiteSpace: 'nowrap' }}>
                      Setup your new password
                    </UINewTypography>
                    <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
                      For the account {email}
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
                        display: { xs: 'none', sm: 'block' }
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
                <Box display="flex" flexDirection="column" width="100%" gap="28px">
                  <UIThemeButton variant="contained" type="submit">
                    <UINewTypography variant="buttonLargeBold" onClick={handleLoginOpen}>
                      Change password
                    </UINewTypography>
                  </UIThemeButton>
                  <Box display="flex" flexDirection="column" gap={3}>
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                    <Box display="flex" gap={1} alignItems="center" justifyContent="center">
                      <UINewTypography variant="buttonLargeMenu" sx={{ whiteSpace: isSm ? 'wrap' : 'nowrap' }}>
                        Remember password?
                      </UINewTypography>

                      <Link prefetch={false} href="/login" shallow={true} style={{ textDecoration: 'underline' }}>
                        <UINewTypography whiteSpace="nowrap" variant="body" sx={{ color: 'text.secondary' }}>
                          Log in instead!
                        </UINewTypography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </AuthCommon>
            <Dialog
              sx={{
                '& .MuiDialog-paper': {
                  backgroundColor: '#07030E',
                  borderRadius: '12px'
                },
                '& .MuiDialog-container': {
                  backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
                  backdropFilter: 'blur(12px)'
                }
              }}
              PaperProps={{
                sx: {
                  maxWidth: 920,
                  borderRadius: '12px'
                }
              }}
              open={open}
              onClose={handleLoginClose}
              maxWidth="md"
              fullWidth
            >
              <GuestLogin onClose={handleLoginClose} />
            </Dialog>
          </Box>
        );
      }}
    </Formik>
  );
};

export default GuestNewPassword;
