'use client';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine, RiMailLine, RiUserFillLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { toast } from 'react-toastify';
import { ModelAuthService } from 'services/modelAuth/modelAuth.service';
import AuthModelCommon from './AuthModelCommon';
import ModelSignupSuccess from './ModelSignupSuccess';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ErrorBox } from 'views/auth/AuthCommon.styled';
import InfoIcon from '@mui/icons-material/Info';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';

export type ModelSignupParams = {
  name: string;
  email: string;
  password: string;
};

const ModelSignup = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
  const route = useRouter();
  const { push } = route;
  const isSm = useMediaQuery(theme.breakpoints.down(330));

  const [showPassword, setShowPassword] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(3);
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState('');

  useEffect(() => {
    if (activeStep > 0) {
      const timer = setTimeout(() => {
        setRedirectSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      if (redirectSeconds === 0 && activeStep > 0) {
        clearTimeout(timer);
        onLoginOpen();
      }

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, redirectSeconds]);

  const validationSchema = yup.object({
    name: yup.string().required('Username is required').min(2, 'Username is too short').max(20, 'Username is too long'),
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

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          const data = await ModelAuthService.modelSignup(values);
          if (data.code === 200) {
            setActiveStep(1);
            const loginResponse = await signIn('providerModel', {
              redirect: false,
              email: values.email,
              password: values.password
            });
            if (loginResponse?.status === 200) {
              push('/model/profile');
              onClose();
            } else {
              setAlert('Login after signup failed. Please log in manually.');
            }
            toast.success('Signed up successfully!');
          }
        } catch (error) {
          setAlert('An error occurred during signup or login. Please try again.');
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
              onClose={onClose}
              image="images/model/model-signup/model-signup.webp"
              mobileImage="images/model/model-signup/model-signup.webp"
            >
              <Box
                position="relative"
                width="100%"
                height={activeStep > 0 ? '620px' : 'auto'}
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pt: { xs: 0, sm: '50px' },
                  pl: { xs: 2, md: 4 },
                  pr: { xs: 2, md: 0 },
                  maxWidth: { xs: '100%', md: '400px' }
                }}
              >
                {activeStep === 0 ? (
                  <>
                    <Box>
                      <UINewTypography variant="MediumSemiBoldText" color="common.white">
                        Join Now for Free
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
                    <Box sx={{ color: 'primary.300' }}>
                      {alert && (
                        <ErrorBox>
                          <InfoIcon />
                          <UINewTypography>{alert}</UINewTypography>
                        </ErrorBox>
                      )}
                    </Box>
                    <Box display="flex" flexDirection="column" gap={3}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <UINewTypography variant="bodySemiBold">Name</UINewTypography>
                        <UIStyledInputText
                          fullWidth
                          id="name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                          sx={{
                            border: '2px solid',
                            borderColor: 'secondary.light'
                          }}
                          InputProps={{
                            endAdornment: <RiUserFillLine color="#86838A" />
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <UINewTypography variant="bodySemiBold">Email address</UINewTypography>
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
                            endAdornment: <RiMailLine color="#86838A" />
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
                        <MenuItem sx={{ p: 0 }}>
                          <Checkbox sx={{ p: 0, pr: 1 }} />
                          <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                            Remember me
                          </UINewTypography>
                        </MenuItem>
                        <MenuItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0 }}>
                          <Checkbox sx={{ p: 0, pr: 1 }} />
                          <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                            By clicking, you agree to our <span style={{ color: '#FFE500' }}>terms of service</span> and
                            <span style={{ color: '#FFE500' }}> privacy policy.</span>
                          </UINewTypography>
                        </MenuItem>
                      </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" width="100%" gap="28px">
                      <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                        <UINewTypography variant="buttonLargeBold">Sign Up</UINewTypography>
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
                  </>
                ) : (
                  <ModelSignupSuccess />
                )}
              </Box>
            </AuthModelCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default ModelSignup;
