'use client';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage, useIntl } from 'react-intl';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import { ErrorBox, ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import { EMAIL_REGEX, PASSWORD_PATTERN } from 'constants/regexConstants';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {
  ButtonMainBoxContainer,
  FooterInnerBoxContainer,
  HaveAnAccountAlreadyTextTypography,
  HeadingDescriptionTextTypography,
  HeadingInnerBoxContainer,
  HeadingMainBoxContainer,
  HeadingTextTypography,
  ImageAndTextSpacingBox,
  InputFiledInnerBoxContainer,
  InputFiledMainBoxContainer,
  InputTextFiledBoxContainer,
  JoinNowButtonContainer,
  JoinNowTextTypography,
  MainBoxContainer,
  NewSignUpModelMainBoxContainer,
  ReferralTextTypography,
  RightSideInnerBoxContainer,
  RightSideMainBoxContainer,
  RightSideSubTitleText
} from '../newSignUpModel/NewSignUp.styled';
import { Raleway } from 'next/font/google';
import { LoginUserParams } from 'services/guestAuth/types';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { deleteCookie } from 'cookies-next';
import getCustomErrorMessage from 'utils/error.utils';
import InfoIcon from '@mui/icons-material/Info';

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const NewSignInModel = ({
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
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values: LoginUserParams) => handleFormSubmit(values)}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <>
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
                  <MainBoxContainer>
                    <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                      <IconButton
                        size="large"
                        sx={{
                          color: 'common.white',
                          position: 'absolute',
                          top: 0,
                          right: { xs: 0, md: '-782px' },
                          display: { sm: 'block' }
                        }}
                        onClick={onClose}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <Box sx={{ color: 'primary.300' }}>
                      {alert && (
                        <ErrorBox>
                          <InfoIcon />
                          <UINewTypography>{alert}</UINewTypography>
                        </ErrorBox>
                      )}
                    </Box>
                    <NewSignUpModelMainBoxContainer>
                      <HeadingMainBoxContainer>
                        <HeadingInnerBoxContainer>
                          <HeadingTextTypography fontFamily={ralewayFont.style.fontFamily}>Sign in</HeadingTextTypography>

                          <HeadingDescriptionTextTypography>
                            Real Models, Real Pleasure, Live Now! Don’t Just Watch –{' '}
                            <span style={{ fontWeight: 800 }}>Connect, Flirt, and Enjoy!</span>
                          </HeadingDescriptionTextTypography>
                        </HeadingInnerBoxContainer>

                        <InputFiledMainBoxContainer>
                          <InputFiledInnerBoxContainer>
                            <InputTextFiledBoxContainer>
                              <Box sx={{ display: 'flex', gap: 1.5 }}>
                                <ModelUITextConatiner gap={0.5}>
                                  <Box sx={{ display: 'flex', gap: 1.5, flexDirection: isMdDown ? 'column' : 'row' }}>
                                    <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                      <UITypographyText>{/* <FormattedMessage id="Email" /> */}</UITypographyText>
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
                                  </Box>
                                </ModelUITextConatiner>

                                <ModelUITextConatiner gap={0.5}>
                                  <Box sx={{ display: 'flex', gap: 1.5, flexDirection: isMdDown ? 'column' : 'row' }}>
                                    <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                      <UITypographyText>{/* <FormattedMessage id="Password" /> */}</UITypographyText>
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
                            </InputTextFiledBoxContainer>

                            <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                              <Checkbox
                                sx={{
                                  p: 0,
                                  pr: 1
                                }}
                              />
                              <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                                <FormattedMessage id="RememberMe" />
                              </UINewTypography>
                            </MenuItem>
                          </InputFiledInnerBoxContainer>

                          <ButtonMainBoxContainer>
                            <JoinNowButtonContainer type="submit" loading={loading}>
                              <JoinNowTextTypography>Join Now</JoinNowTextTypography>
                            </JoinNowButtonContainer>
                          </ButtonMainBoxContainer>
                        </InputFiledMainBoxContainer>
                      </HeadingMainBoxContainer>

                      <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '167px', gap: 0.5, alignItems: 'center' }}>
                        <FooterInnerBoxContainer>
                          <HaveAnAccountAlreadyTextTypography>Have an account already?</HaveAnAccountAlreadyTextTypography>
                          <ReferralTextTypography
                            sx={{
                              color: 'white.main'
                            }}
                            onClick={onSignupOpen}
                          >
                            Log in here
                          </ReferralTextTypography>
                        </FooterInnerBoxContainer>

                        <FooterInnerBoxContainer>
                          <HaveAnAccountAlreadyTextTypography>Sign up as a model</HaveAnAccountAlreadyTextTypography>
                          <ReferralTextTypography
                            sx={{
                              color: 'primary.800'
                            }}
                          >
                            Here
                          </ReferralTextTypography>
                        </FooterInnerBoxContainer>
                      </Box>
                    </NewSignUpModelMainBoxContainer>

                    <RightSideMainBoxContainer>
                      <RightSideInnerBoxContainer>
                        <ImageAndTextSpacingBox>
                          <Box component="img" src="/images/icons/ab-icon-2.svg" />
                          <RightSideSubTitleText>
                            <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>Talk to</span> <FormattedMessage id="1,000Models" />
                          </RightSideSubTitleText>
                        </ImageAndTextSpacingBox>

                        <ImageAndTextSpacingBox>
                          <Box component="img" src="/images/icons/ab-icon-3.svg" />
                          <RightSideSubTitleText>
                            <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>Unleash yourself with</span>{' '}
                            <FormattedMessage id="Private1on1Chats" />
                          </RightSideSubTitleText>
                        </ImageAndTextSpacingBox>

                        <ImageAndTextSpacingBox>
                          <Box component="img" src="/images/icons/ab-icon-4.svg" />
                          <RightSideSubTitleText>
                            <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>Dont worry its</span> <FormattedMessage id="SafeSecure" />
                          </RightSideSubTitleText>
                        </ImageAndTextSpacingBox>
                      </RightSideInnerBoxContainer>
                    </RightSideMainBoxContainer>
                  </MainBoxContainer>
                </Box>
              </Box>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default NewSignInModel;
