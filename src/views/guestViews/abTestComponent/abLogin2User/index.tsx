'use client';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Formik } from 'formik';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import { ErrorBox, ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import theme from 'themes/theme';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InfoIcon from '@mui/icons-material/Info';
import { deleteCookie } from 'cookies-next';
import { LoginUserParams } from 'services/guestAuth/types';
import getCustomErrorMessage from 'utils/error.utils';
import { EMAIL_REGEX } from 'constants/regexConstants';

const ABLogin2User = ({
  onClose,
  onSignupOpen,
  onFogotPasswordLinkOpen
}: {
  onClose: () => void;
  onSignupOpen: () => void;
  onFogotPasswordLinkOpen: () => void;
}) => {
  const intl = useIntl();

  const route = useRouter();
  const { data: session } = useSession();
  const [modelStatus, setModelStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [authRole, setAuthRole] = useState('');

  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().matches(EMAIL_REGEX, 'Enteravalidemail').required('Emailisrequired'),
    password: yup.string().required('Passwordisrequired')
  });

  const handleFormSubmit = async (values: LoginUserParams) => {
    try {
      setLoading(true);
      const { PROVIDERCUSTOM_TYPE } = await import('constants/signUpConstants');
      const res = await signIn(PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM, {
        redirect: false,
        email: values.email,
        password: values.password,
        role: values.role
      });
      if (res?.status === 200) {
        deleteCookie('ab-group');
        route.refresh();
        onClose();
      } else if (res?.error) {
        const errorMessage = res.error === 'CredentialsSignin' ? 'InvalidEmail' : 'SomethingWent';
        setAlert(intl.formatMessage({ id: errorMessage }));
      }
    } catch (error: any) {
      setAlert(getCustomErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session && session.user) {
      const parsedPicture = JSON.parse((session?.user as any)?.picture);
      setAuthRole(parsedPicture.role);
      setModelStatus(parsedPicture.profile_status);
    }
  }, [session, session?.user]);

  const checkAndRoutePath = async () => {
    const { ROLE } = await import('constants/workerVerification');
    const { MODEL_ACTION } = await import('constants/profileConstants');

    if (authRole === ROLE.CUSTOMER) {
      route.refresh();
    } else if (authRole === ROLE.MODEL) {
      if (modelStatus === MODEL_ACTION.REJECT) {
        route.push('/model/profile-reject');
      } else if (modelStatus === MODEL_ACTION.APPROVE) {
        route.push('/model/dashboard');
      } else if (modelStatus === MODEL_ACTION.PENDING) {
        route.push('/model/profile');
      }
    }
  };

  useEffect(() => {
    checkAndRoutePath();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authRole, modelStatus]);
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          role: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values: LoginUserParams) => handleFormSubmit(values)}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Box component="form" onSubmit={handleSubmit}>
              <Box
                position="relative"
                width="100%"
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pt: { xs: 0, sm: 0 },
                  pl: { xs: 2, md: 0 },
                  pr: { xs: 2, md: 0 }
                  //   maxWidth: { xs: '100%', md: '400px' }
                }}
              >
                <Box sx={{ display: 'flex', marginTop: { xs: '100px', sm: 0 } }}>
                  <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                    <IconButton
                      size="large"
                      sx={{
                        color: 'common.white',
                        position: 'absolute',
                        top: 0,
                        right: { xs: 0, md: '8px' },
                        display: { sm: 'block' },
                        zIndex: 1
                      }}
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      minWidth: '760px',
                      height: '100%',
                      //   minHeight: '880px',
                      border: '1px solid #07030E80',
                      borderRadius: '24px',
                      backgroundColor: 'rgba(7, 3, 14, 0.5)', // Add transparency for the blur effect
                      backdropFilter: 'blur(24px)',
                      padding: '62px 100px 62px 100px',
                      gap: 6
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        gap: 5,
                        alignItems: 'center'
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <UINewTypography
                          sx={{
                            fontSize: '48px',
                            fontWeight: 600,
                            lineHeight: '64px',
                            color: 'primary.100'
                          }}
                        >
                          Join Now for FREE!
                        </UINewTypography>
                        <UINewTypography
                          sx={{
                            fontSize: '48px',
                            fontWeight: 500,
                            lineHeight: '64px',
                            background: 'linear-gradient(90deg, #FFE38C, #CCA633)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                          }}
                        >
                          Get 1 minute of Free Call
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <Box sx={{ color: 'primary.300' }}>
                              {alert && (
                                <ErrorBox>
                                  <InfoIcon />
                                  <UINewTypography>{alert}</UINewTypography>
                                </ErrorBox>
                              )}
                            </Box>
                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: isMdDown ? 'column' : 'row' }}>
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>
                                      <FormattedMessage id="Email" />
                                    </UITypographyText>
                                    <UIStyledInputText
                                      fullWidth
                                      id="email"
                                      name="email"
                                      value={values.email}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={touched.email && Boolean(errors.email)}
                                      helperText={touched.email && errors.email ? <FormattedMessage id={errors.email} /> : ''}
                                      sx={{
                                        border: '2px solid',
                                        borderColor: 'secondary.light'
                                      }}
                                      InputProps={{
                                        endAdornment: (
                                          <Box sx={{ display: 'flex' }}>
                                            <EmailRoundedIcon />
                                          </Box>
                                        )
                                      }}
                                    />
                                  </ModelUITextConatiner>
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>
                                      <FormattedMessage id="Password" />
                                    </UITypographyText>
                                    <UIStyledInputText
                                      fullWidth
                                      type={showPassword ? 'text' : 'password'}
                                      id="password"
                                      name="password"
                                      value={values.password}
                                      onChange={handleChange}
                                      onBlur={() => {
                                        handleBlur;
                                        //   gaEventTrigger('signup_form_password_click', {
                                        //     source: 'model_password_click',
                                        //     category: 'TextField'
                                        //   });
                                      }}
                                      error={touched.password && Boolean(errors.password)}
                                      helperText={touched.password && errors.password ? <FormattedMessage id={errors.password} /> : ''}
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
                                  </ModelUITextConatiner>{' '}
                                </Box>
                              </ModelUITextConatiner>
                            </Box>
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
                              <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                                <FormattedMessage id="RememberMe" />
                              </UINewTypography>
                            </Box>
                            <UINewTypography
                              variant="buttonLargeMenu"
                              color="primary.400"
                              sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}
                              onClick={onFogotPasswordLinkOpen}
                            >
                              <FormattedMessage id="ForgotPassword" />
                            </UINewTypography>
                          </MenuItem>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                          <LoadingButton
                            variant="contained"
                            sx={{ width: '632px', height: '60px', borderRadius: '12px', backgroundColor: 'primary.100' }}
                            type="submit"
                            loading={loading}
                          >
                            Join Now
                          </LoadingButton>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
                            <UINewTypography variant="bodyRegular">
                              Have an account already?
                              <Box
                                component="span"
                                sx={{ fontWeight: 800, color: 'white.main', textDecoration: 'underline', cursor: 'Pointer' }}
                                onClick={onSignupOpen}
                              >
                                {' '}
                                Log in here
                              </Box>
                            </UINewTypography>
                            <UINewTypography variant="bodyRegular">
                              Sign up as a model{' '}
                              <Box component="span" sx={{ fontWeight: 800, color: 'primary.100' }}>
                                <Link href="/">Here</Link>
                              </Box>
                            </UINewTypography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <UINewTypography
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: '40px',
                          fontWeight: 800,
                          lineHeight: '64px',
                          whiteSpace: 'nowrap',
                          color: '#FFFFFFCC'
                        }}
                      >
                        Unlock the Benefits!
                      </UINewTypography>

                      <Box sx={{ display: 'flex', gap: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '304px' }}>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/ab2-icon-1.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              1-Minute Free Call
                            </UINewTypography>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/ab2-icon-2.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              1,000+ Models
                            </UINewTypography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '304px' }}>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/ab2-icon-3.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              Private 1-on-1 Chats
                            </UINewTypography>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/ab2-icon-4.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              Safe & Secure
                            </UINewTypography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default ABLogin2User;
