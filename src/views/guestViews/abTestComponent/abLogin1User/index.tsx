'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Formik } from 'formik';
import Link from 'next/link';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { ErrorBox, ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { EMAIL_REGEX } from 'constants/regexConstants';
import theme from 'themes/theme';
import * as yup from 'yup';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import getCustomErrorMessage from 'utils/error.utils';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InfoIcon from '@mui/icons-material/Info';
import useMediaQuery from '@mui/material/useMediaQuery';
import { deleteCookie } from 'cookies-next';
import { LoginUserParams } from 'services/guestAuth/types';
import {
  DescriptionTextTypography,
  EarnTaxtTypography,
  FooterMainBoxContainer,
  HeadingBoxContainer,
  HeadingInnerBoxContainer,
  InputFiledInnerBoxContainer,
  InputFiledMainBoxContainer,
  InputTextFiledBoxContainer,
  JoiForFreeTextTypography,
  LeftSideInnerBoxContainer,
  LeftSideMainBoxContainer,
  LoginHereTextBoxContainer,
  LoginHereTextMainBoxContainer,
  RightSideInnerBoxContainer,
  RightSideMainBoxContainer,
  RightSideMainTitleText,
  RightSideSubTitleText
} from '../abRegister1Model/abRegister1Model.styled';

const ABLogin1User = ({
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

  const handleFormSubmit = async (values: LoginUserParams) => {
    try {
      const { PROVIDERCUSTOM_TYPE } = await import('constants/signUpConstants');
      setLoading(true);
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
                  pr: { xs: 2, md: 0 },
                  maxWidth: { xs: '100%', md: '400px' }
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
                        right: { xs: 0, md: '-818px' },
                        display: { sm: 'block' }
                      }}
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <LeftSideMainBoxContainer>
                    <LeftSideInnerBoxContainer>
                      <HeadingBoxContainer>
                        <Box component="img" src="/images/logo-footer.png" width={272} height={54} />
                        <HeadingInnerBoxContainer>
                          <Box>
                            <EarnTaxtTypography>Get 1 minute of Free Call</EarnTaxtTypography>
                            <JoiForFreeTextTypography>Join Now for FREE!</JoiForFreeTextTypography>
                          </Box>
                          <DescriptionTextTypography>
                            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Real Models, Real Pleasure, Live Now!</span>
                            <span style={{ display: 'block' }}>Don’t Just Watch – Connect, Flirt, and Enjoy!</span>
                          </DescriptionTextTypography>
                        </HeadingInnerBoxContainer>
                      </HeadingBoxContainer>

                      <InputFiledMainBoxContainer>
                        <InputFiledInnerBoxContainer>
                          <InputTextFiledBoxContainer>
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
                                      onBlur={handleBlur}
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
                          </InputTextFiledBoxContainer>

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
                        </InputFiledInnerBoxContainer>

                        <FooterMainBoxContainer>
                          <LoadingButton
                            variant="contained"
                            sx={{ width: '632px', height: '60px', borderRadius: '12px', backgroundColor: 'primary.100' }}
                            type="submit"
                            loading={loading}
                          >
                            Join Now
                          </LoadingButton>
                          <LoginHereTextMainBoxContainer>
                            <UINewTypography variant="bodyRegular">
                              Have an account already?
                              <LoginHereTextBoxContainer component="span" onClick={onSignupOpen}>
                                Log in here
                              </LoginHereTextBoxContainer>
                            </UINewTypography>
                            <UINewTypography variant="bodyRegular">
                              Sign up as a model{' '}
                              <Box component="span" sx={{ fontWeight: 800, color: 'primary.100' }}>
                                <Link href="/">Here</Link>
                              </Box>
                            </UINewTypography>
                          </LoginHereTextMainBoxContainer>
                        </FooterMainBoxContainer>
                      </InputFiledMainBoxContainer>
                    </LeftSideInnerBoxContainer>
                  </LeftSideMainBoxContainer>
                  <RightSideMainBoxContainer>
                    <RightSideMainTitleText>Unlock the Benefits!</RightSideMainTitleText>
                    <RightSideInnerBoxContainer>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-1.svg" />
                        <RightSideSubTitleText>1-Minute Free Call</RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-2.svg" />
                        <RightSideSubTitleText>1,000+ Models</RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-3.svg" />
                        <RightSideSubTitleText>Private 1-on-1 Chats</RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-4.svg" />
                        <RightSideSubTitleText>Safe & Secure</RightSideSubTitleText>
                      </Box>
                    </RightSideInnerBoxContainer>
                  </RightSideMainBoxContainer>
                </Box>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default ABLogin1User;
