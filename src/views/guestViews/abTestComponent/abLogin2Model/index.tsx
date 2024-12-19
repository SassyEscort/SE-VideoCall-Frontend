'use client';
import { useEffect, useState } from 'react';
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
  BenefitsTextTypography,
  ButtonBoxContainer,
  ButtonInnerBoxContainer,
  DescriptionTextBox,
  DescriptionTextContainer,
  DescriptionTextInner2Box,
  DescriptionTextTypography,
  FooterMainBoxContainer,
  GetFreeCallTextTypography,
  HeadingTextMainBoxContainer,
  InputFiledInnerBoxContainer,
  InputFiledMainBoxContainer,
  JoinForFreeTextTypography,
  LoginTextBoxContainer,
  ModelInnerBoxContainer,
  ModelMainBoxContainer
} from '../abRegister2User/abRegister2User.styled';
import { JoinNowButtonContainer } from '../abRegister1Model/abRegister1Model.styled';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { LoginModelParams } from 'services/modelAuth/types';
import { ROLE } from 'constants/workerVerification';
import { MODEL_ACTION } from 'constants/profileConstants';
import getCustomErrorMessage from 'utils/error.utils';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import InfoIcon from '@mui/icons-material/Info';

const ABLogin2Model = ({ onClose }: { onClose: () => void }) => {
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
          confirmPassword: '',
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
                  <Box sx={{ color: 'primary.300' }}>
                    {alert && (
                      <ErrorBox>
                        <InfoIcon />
                        <UINewTypography>{alert}</UINewTypography>
                      </ErrorBox>
                    )}
                  </Box>
                  <ModelMainBoxContainer>
                    <ModelInnerBoxContainer>
                      <HeadingTextMainBoxContainer>
                        <JoinForFreeTextTypography>
                          <FormattedMessage id="JoinNowForFREE" />
                        </JoinForFreeTextTypography>
                        <GetFreeCallTextTypography>
                          <FormattedMessage id="EarnOnYourTerms" />
                        </GetFreeCallTextTypography>
                      </HeadingTextMainBoxContainer>

                      <InputFiledMainBoxContainer>
                        <InputFiledInnerBoxContainer>
                          <InputFiledMainBoxContainer>
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
                          </InputFiledMainBoxContainer>

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

                        <ButtonBoxContainer>
                          <JoinNowButtonContainer variant="contained" type="submit" loading={loading}>
                            <FormattedMessage id="JoinNow" />
                          </JoinNowButtonContainer>
                          <ButtonInnerBoxContainer>
                            <UINewTypography variant="bodyRegular">
                              <FormattedMessage id="HaveAnAccount" />
                              <LoginTextBoxContainer>
                                {' '}
                                <FormattedMessage id="LogInHere" />
                              </LoginTextBoxContainer>
                            </UINewTypography>
                          </ButtonInnerBoxContainer>
                        </ButtonBoxContainer>
                      </InputFiledMainBoxContainer>
                    </ModelInnerBoxContainer>
                    <FooterMainBoxContainer>
                      <BenefitsTextTypography>
                        <FormattedMessage id="UnlockTheBenefits" />
                      </BenefitsTextTypography>

                      <DescriptionTextBox>
                        <DescriptionTextInner2Box>
                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/earn1-icon.svg" />
                            <DescriptionTextTypography>
                              <FormattedMessage id="EarnMoneyFromAnywhere" />
                            </DescriptionTextTypography>
                          </DescriptionTextContainer>

                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/secure1-icon.svg" />
                            <DescriptionTextTypography>
                              <FormattedMessage id="SecurePayouts" />
                            </DescriptionTextTypography>
                          </DescriptionTextContainer>
                        </DescriptionTextInner2Box>
                        <DescriptionTextInner2Box>
                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/global1-icon.svg" />
                            <DescriptionTextTypography>
                              <FormattedMessage id="GlobalAudiencee" />
                            </DescriptionTextTypography>
                          </DescriptionTextContainer>

                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/support1-icon.svg" />
                            <DescriptionTextTypography>
                              <FormattedMessage id="DedicatedSupport" />
                            </DescriptionTextTypography>
                          </DescriptionTextContainer>
                        </DescriptionTextInner2Box>
                      </DescriptionTextBox>
                    </FooterMainBoxContainer>
                  </ModelMainBoxContainer>
                </Box>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default ABLogin2Model;
