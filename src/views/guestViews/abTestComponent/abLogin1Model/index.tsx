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
  DescriptionTextTypography,
  EarnTaxtTypography,
  FooterMainBoxContainer,
  HeadingBoxContainer,
  HeadingInnerBoxContainer,
  InputFiledInnerBoxContainer,
  InputFiledMainBoxContainer,
  InputTextFiledBoxContainer,
  JoiForFreeTextTypography,
  JoinNowButtonContainer,
  LeftSideInnerBoxContainer,
  LeftSideMainBoxContainer,
  LoginHereTextBoxContainer,
  RightSideInnerBoxContainer,
  RightSideMainBoxContainer,
  RightSideMainTitleText,
  RightSideSubTitleText
} from '../abRegister1Model/abRegister1Model.styled';
import { LoginModelParams } from 'services/modelAuth/types';
import { MODEL_ACTION } from 'constants/profileConstants';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { ROLE } from 'constants/workerVerification';
import { signIn, useSession } from 'next-auth/react';
import getCustomErrorMessage from 'utils/error.utils';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/navigation';

const ABLogin1Model = ({ onClose, onSignupOpen }: { onClose: () => void; onSignupOpen: () => void }) => {
  const intl = useIntl();
  const route = useRouter();
  const { push, refresh } = route;
  const { data: session } = useSession();

  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [authRole, setAuthRole] = useState('');
  const [modelStatus, setModelStatus] = useState('');

  const validationSchema = yup.object({
    email: yup.string().matches(EMAIL_REGEX, 'Enteravalidemail').required('Emailisrequired'),
    password: yup.string().required('New Password Is Required').min(8, 'Password Must Be 8 character long').matches(PASSWORD_PATTERN, {
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      excludeEmptyString: true
    })
  });

  const handleFormSubmit = async (values: LoginModelParams) => {
    try {
      setLoading(true);
      const res = await signIn(PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM, { redirect: false, email: values.email, password: values.password });
      if (res?.status === 200) {
        onClose();
      } else if (res?.error) {
        const errorMessage = res?.error === 'CredentialsSignin' ? 'InvalidEmail' : res?.error.replace('Error: ', '') || 'SomethingWent';
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
    if (authRole === ROLE.CUSTOMER) {
      refresh();
    } else if (authRole === ROLE.MODEL) {
      if (modelStatus === MODEL_ACTION.REJECT) {
        push('/model/profile-reject');
      } else if (modelStatus === MODEL_ACTION.APPROVE) {
        push('/model/dashboard');
      } else if (modelStatus === MODEL_ACTION.PENDING) {
        push('/model/profile');
      }
    }
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
        onSubmit={(values: LoginModelParams) => handleFormSubmit(values)}
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
                  <Box sx={{ color: 'primary.300' }}>
                    {alert && (
                      <ErrorBox>
                        <InfoIcon />
                        <UINewTypography>{alert}</UINewTypography>
                      </ErrorBox>
                    )}
                  </Box>
                  <LeftSideMainBoxContainer>
                    <LeftSideInnerBoxContainer>
                      <HeadingBoxContainer>
                        <Box component="img" src="/images/logo-footer.png" width={272} height={54} />
                        <HeadingInnerBoxContainer>
                          <Box>
                            <EarnTaxtTypography>
                              <FormattedMessage id="EarnOnYourTerms" />
                            </EarnTaxtTypography>
                            <JoiForFreeTextTypography>
                              <FormattedMessage id="JoinNowForFREE" />
                            </JoiForFreeTextTypography>
                          </Box>
                          <DescriptionTextTypography>
                            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                              <FormattedMessage id="FlexibleHoursSecurePayouts" />
                            </span>
                            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                              <FormattedMessage id="waitingToConnectWithYou" />
                            </span>
                          </DescriptionTextTypography>
                        </HeadingInnerBoxContainer>
                      </HeadingBoxContainer>

                      <InputFiledMainBoxContainer>
                        <InputFiledInnerBoxContainer>
                          <InputTextFiledBoxContainer>
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
                              onClick={() => {}}
                            >
                              <FormattedMessage id="ForgotPassword" />
                            </UINewTypography>
                          </MenuItem>
                        </InputFiledInnerBoxContainer>

                        <FooterMainBoxContainer>
                          <JoinNowButtonContainer type="submit" variant="contained" loading={loading}>
                            <FormattedMessage id="JoinNow" />
                          </JoinNowButtonContainer>
                          <UINewTypography variant="bodyRegular" sx={{ display: 'flex' }}>
                            <FormattedMessage id="HaveAnAccount" />
                            <LoginHereTextBoxContainer>
                              <FormattedMessage id="LogInHere" />
                            </LoginHereTextBoxContainer>
                          </UINewTypography>
                        </FooterMainBoxContainer>
                      </InputFiledMainBoxContainer>
                    </LeftSideInnerBoxContainer>
                  </LeftSideMainBoxContainer>
                  <RightSideMainBoxContainer>
                    <RightSideMainTitleText>
                      <FormattedMessage id="UnlockTheBenefits" />
                    </RightSideMainTitleText>
                    <RightSideInnerBoxContainer>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/earn-icon.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="EarnMoneyFromAnywhere" />
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/secure-icon.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="SecurePayouts" />
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/global-icon.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="GlobalAudiencee" />
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/support-icon.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="DedicatedSupport" />
                        </RightSideSubTitleText>
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

export default ABLogin1Model;
