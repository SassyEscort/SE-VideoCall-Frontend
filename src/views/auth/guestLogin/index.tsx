import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine, RiUserFillLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import * as yup from 'yup';
import AuthCommon from '../AuthCommon';
import { LoginUserParams } from 'services/guestAuth/types';
import { signIn } from 'next-auth/react';
import getCustomErrorMessage from 'utils/error.utils';
import { useRouter } from 'next/navigation';
import InfoIcon from '@mui/icons-material/Info';
import { ErrorBox } from '../AuthCommon.styled';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';

export type LoginParams = {
  email: string;
  password: string;
};

const GuestLogin = ({
  onClose,
  onSignupOpen,
  onFogotPasswordLinkOpen
}: {
  onClose: () => void;
  onSignupOpen: () => void;
  onFogotPasswordLinkOpen: () => void;
}) => {
  const route = useRouter();
  const { push } = route;
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const validationSchema = yup.object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required')
  });
  const handleFormSubmit = async (values: LoginUserParams) => {
    try {
      setLoading(true);
      const res = await signIn('providerGuest', { redirect: false, email: values.email, password: values.password });
      if (res?.status === 200) {
        push('/profile');
        onClose();
      } else if (res?.error) {
        setAlert(res.error === 'CredentialsSignin' ? 'Invalid email or password' : 'Something went wrong! Please try again');
      }
    } catch (error: any) {
      setAlert(getCustomErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values: LoginUserParams) => handleFormSubmit(values)}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthCommon onClose={onClose} image="images/auth/auth-model.webp" mobileImage="images/auth/auth-model.webp">
              <Box
                position="relative"
                width="100%"
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pt: { xs: 0, sm: '64px' },
                  pl: { xs: 2, md: 4 },
                  pr: { xs: 2, md: 0 },
                  maxWidth: { xs: '100%', md: '400px' }
                }}
              >
                <Box sx={{ display: 'flex', marginTop: { xs: '100px', sm: 0 } }}>
                  <UINewTypography
                    variant="MediumSemiBoldText"
                    color="common.white"
                    sx={{ whiteSpace: { sm: 'nowrap' }, lineHeight: '38.4px' }}
                  >
                    Log in to your account
                  </UINewTypography>
                  <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                    <IconButton
                      size="large"
                      sx={{
                        color: 'common.white',
                        position: 'absolute',
                        top: 0,
                        right: { xs: 0, md: '-84px' },
                        display: { sm: 'block' }
                      }}
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ color: 'primary.300' }}>
                  {alert && (
                    <ErrorBox>
                      <InfoIcon />
                      <UINewTypography>{alert}</UINewTypography>
                    </ErrorBox>
                  )}
                </Box>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, width: isSmDown ? 'auto' : '400px' }}>
                    <UINewTypography variant="bodySemiBold">Username / Email address</UINewTypography>
                    <UIStyledInputText
                      fullWidth
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      sx={{
                        border: '2px solid',
                        borderColor: 'secondary.light'
                      }}
                      InputProps={{
                        endAdornment: <RiUserFillLine color="#86838A" />
                      }}
                    />
                  </Box>
                  <Box display="flex" gap={1.5} flexDirection="column">
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, width: isSmDown ? 'auto' : '400px' }}>
                      <UINewTypography variant="bodySemiBold">Password</UINewTypography>
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
                            <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                            </Box>
                          )
                        }}
                      />
                    </Box>
                    <MenuItem
                      sx={{
                        display: 'flex',
                        p: 0,
                        justifyContent: 'space-between',
                        flexDirection: isSm ? 'column' : 'row',
                        gap: { xs: 1, sm: 0 }
                      }}
                    >
                      <Box>
                        <Checkbox sx={{ p: 0, pr: 1 }} />
                        <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}>
                          Remember me
                        </UINewTypography>
                      </Box>
                      <UINewTypography
                        variant="buttonLargeMenu"
                        color="primary.400"
                        sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}
                        onClick={onFogotPasswordLinkOpen}
                      >
                        Forgot Password?
                      </UINewTypography>
                    </MenuItem>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap="52px" justifyContent="space-between">
                  <Box display="flex" flexDirection="column" width="100%" sx={{ width: isSmDown ? 'auto' : '400px' }}>
                    <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                      <UINewTypography variant="buttonLargeBold">Login</UINewTypography>
                    </StyleButtonV2>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={3}>
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                    <Box
                      display="flex"
                      gap={1}
                      alignItems="center"
                      justifyContent="center"
                      pb={3}
                      sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                    >
                      <UINewTypography variant="buttonLargeMenu">Don’t have an account?</UINewTypography>

                      <UINewTypography variant="body" sx={{ color: 'text.secondary', cursor: 'pointer' }} onClick={onSignupOpen}>
                        Join for free now!
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

export default GuestLogin;
