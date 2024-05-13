import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { RiEyeLine, RiEyeOffLine, RiUserFillLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import AuthCommon from '../AuthCommon';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import { toast } from 'react-toastify';
import Dialog from '@mui/material/Dialog';
import GuestForgetPasswordLink from '../guestForgetPasswordLink';
import GuestSignup from '../guestSignup';

export type LoginParams = {
  email: string;
  password: string;
};

const GuestLogin = ({ onClose }: { onClose: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setIsOpen] = useState(false);
  const [signupOpen, setSignupIsOpen] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down(330));

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().required('Password is required')
  });

  const handleForgetPasswordLinkOpen = () => {
    setIsOpen(true);
    setShowPassword(false);
  };

  const handleForgetPasswordLinkClose = () => {
    setIsOpen(false);
  };

  const handleSignupOpen = () => {
    setSignupIsOpen(true);
  };

  const handleSignupClose = () => {
    setSignupIsOpen(false);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const data = await GuestAuthService.guestLogin(values);
        if (data.code === 200) {
          toast.success('Login successfully!');
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthCommon onClose={onClose} image="images/auth/auth-model.webp" mobileImage="images/auth/auth-model.webp">
              <Box
                position="relative"
                width="100%"
                height={isSm ? '625px' : '620px'}
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
                <Box>
                  <UINewTypography variant="MediumSemiBoldText" color="common.white" sx={{ whiteSpace: { sm: 'nowrap' } }}>
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
                        display: { xs: 'none', sm: 'block' }
                      }}
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Box display="flex" flexDirection="column" gap={3}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
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
                        flexDirection: { xs: 'column', sm: 'row' },
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
                        onClick={handleForgetPasswordLinkOpen}
                      >
                        Forgot Password?
                      </UINewTypography>
                    </MenuItem>
                  </Box>
                </Box>
                <Box display="flex" flexDirection="column" gap="92px" justifyContent="space-between">
                  <Box display="flex" flexDirection="column" width="100%">
                    <UIThemeButton variant="contained" type="submit">
                      <UINewTypography variant="buttonLargeBold">Login</UINewTypography>
                    </UIThemeButton>
                  </Box>
                  <Box display="flex" flexDirection="column" gap={3}>
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                    <Box
                      display="flex"
                      gap={1}
                      alignItems="center"
                      justifyContent="center"
                      sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                    >
                      <UINewTypography variant="buttonLargeMenu">Don’t have an account?</UINewTypography>

                      <UINewTypography variant="body" sx={{ color: 'text.secondary', cursor: 'pointer' }} onClick={handleSignupOpen}>
                        Join for free now!
                      </UINewTypography>
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
              onClose={handleForgetPasswordLinkClose}
              maxWidth="md"
              fullWidth
            >
              <GuestForgetPasswordLink onClose={handleForgetPasswordLinkClose} />
            </Dialog>

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
              open={signupOpen}
              onClose={handleSignupClose}
              maxWidth="md"
              fullWidth
            >
              <GuestSignup onClose={handleSignupClose} />
            </Dialog>
          </Box>
        );
      }}
    </Formik>
  );
};

export default GuestLogin;
