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
import Link from 'next/link';
import { ErrorBox, ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InfoIcon from '@mui/icons-material/Info';
import {
  BenefitsTextTypography,
  ButtonBoxContainer,
  ButtonInnerBoxContainer,
  DescriptionTextBox,
  DescriptionTextContainer,
  DescriptionTextInnerBox,
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
} from './abRegister2User.styled';
import { JoinNowButtonContainer } from '../abRegister1Model/abRegister1Model.styled';
import { useRouter } from 'next/navigation';
import { NAME_REGEX, EMAIL_REGEX } from 'constants/regexConstants';
import { ErrorMessage } from 'constants/common.constants';
import { ROLE } from 'constants/workerVerification';
import { toast } from 'react-toastify';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import { gaEventTrigger } from 'utils/analytics';
import { getErrorMessage } from 'utils/errorUtils';
import { ISignUpProps } from '../types';

const ABRegister2User = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
  const intl = useIntl();
  const route = useRouter();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(3);
  const [activeStep, setActiveStep] = useState(0);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    if (activeStep > 0) {
      const timer = setTimeout(() => {
        setRedirectSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      if (redirectSeconds === 0 && activeStep > 0) {
        clearTimeout(timer);
      }

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep, redirectSeconds]);

  const validationSchema = yup.object({
    name: yup
      .string()
      .trim()
      .required('Nameisrequired')
      .min(2, 'Nameistooshort')
      .max(20, 'Nameistoolong')
      .matches(NAME_REGEX, 'Noleadingspaces'),
    email: yup.string().matches(EMAIL_REGEX, 'Enteravalidemail').required('Emailisrequired'),
    password: yup.string().required('Passwordisrequired').min(8, 'PasswordMustBe'),
    confirmPassword: yup
      .string()
      .required('ConfirmPasswordIsRequired')
      .oneOf([yup.ref('password'), ''], 'ConfirmPasswordDoesNotMatch'),
    role: yup.string().required('Roleisrequired').oneOf(['customer', 'model'], 'InvalidRole')
  });

  const handleFormSubmit = async (values: ISignUpProps) => {
    try {
      const { PROVIDERCUSTOM_TYPE } = await import('constants/signUpConstants');
      setLoading(true);
      values.name = values.name.trim();
      const data = await GuestAuthService.genericSignup(values);
      if (data.code === 200) {
        setActiveStep(1);
        route.refresh();
        const { signIn } = await import('next-auth/react');
        if (values?.role === ROLE.CUSTOMER) {
          const loginResponse = await signIn(PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM, {
            redirect: false,
            email: values.email,
            password: values.password
          });

          if (loginResponse?.status === 200) {
            route.refresh();
            setTimeout(() => {
              onClose();
            }, 3000);
            gaEventTrigger('client_signup_completed', { source: 'guest_signup', category: 'Button' });
          } else {
            setAlert('Login after signup failed. Please log in manually.');
          }
        } else {
          const loginResponse = await signIn(PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM, {
            redirect: false,
            email: values.email,
            password: values.password
          });
          if (loginResponse?.status === 200) {
            route.push('/model/profile');
            onClose();
            gaEventTrigger('signup_form_CTA_click', { source: 'model_signup', category: 'Button' });
          } else {
            setAlert('Login after signup failed. Please log in manually.');
          }
        }
      } else if (data?.code === 403) {
        toast.error(ErrorMessage);
      } else {
        const errorMessage = getErrorMessage(data?.custom_code);
        setAlert(intl.formatMessage({ id: errorMessage }));
      }
    } catch (error) {
      toast.error(ErrorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: ROLE.CUSTOMER
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            handleFormSubmit(values);
          } catch (error) {
            //nothing
          } finally {
            setLoading(false);
            setSubmitting(false);
          }
        }}
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
                        <JoinForFreeTextTypography>Join Now for FREE!</JoinForFreeTextTypography>
                        <GetFreeCallTextTypography>Get 1 minute of Free Call</GetFreeCallTextTypography>
                      </HeadingTextMainBoxContainer>

                      <InputFiledMainBoxContainer>
                        <InputFiledInnerBoxContainer>
                          <InputFiledMainBoxContainer>
                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: isMdDown ? 'column' : 'row' }}>
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>
                                      <FormattedMessage id="Name" />
                                    </UITypographyText>
                                    <UIStyledInputText
                                      name="name"
                                      value={values.name}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={touched.name && Boolean(errors.name)}
                                      helperText={touched.name && errors.name ? <FormattedMessage id={errors.name} /> : ''}
                                      InputProps={{
                                        endAdornment: (
                                          <Box sx={{ display: 'flex' }}>
                                            <PersonRoundedIcon />
                                          </Box>
                                        )
                                      }}
                                    />
                                  </ModelUITextConatiner>{' '}
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
                                </Box>
                              </ModelUITextConatiner>
                            </Box>

                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: isMdDown ? 'column' : 'row' }}>
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
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>
                                      <FormattedMessage id="ConfirmPassword" />
                                    </UITypographyText>
                                    <UIStyledInputText
                                      fullWidth
                                      type={showConfirmPassword ? 'text' : 'password'}
                                      id="confirmPassword"
                                      name="confirmPassword"
                                      value={values.confirmPassword}
                                      onChange={handleChange}
                                      onBlur={() => {
                                        handleBlur;
                                        //   gaEventTrigger('signup_form_confirm_password_click', {
                                        //     source: 'model_confirm_password_click',
                                        //     category: 'TextField'
                                        //   });
                                      }}
                                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                      helperText={
                                        touched.confirmPassword && errors.confirmPassword ? (
                                          <FormattedMessage id={errors.confirmPassword} />
                                        ) : (
                                          ''
                                        )
                                      }
                                      sx={{
                                        border: '2px solid',
                                        borderColor: 'secondary.light'
                                      }}
                                      InputProps={{
                                        endAdornment: (
                                          <Box
                                            sx={{ cursor: 'pointer', display: 'flex' }}
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                          >
                                            {showConfirmPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                                          </Box>
                                        )
                                      }}
                                    />
                                  </ModelUITextConatiner>
                                </Box>
                              </ModelUITextConatiner>
                            </Box>
                          </InputFiledMainBoxContainer>

                          <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                            <Checkbox sx={{ p: 0, pr: 1 }} />
                            <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                              <FormattedMessage id="RememberMe" />
                            </UINewTypography>
                          </MenuItem>
                        </InputFiledInnerBoxContainer>

                        <ButtonBoxContainer>
                          <JoinNowButtonContainer type="submit" variant="contained" loading={loading}>
                            Join Now
                          </JoinNowButtonContainer>
                          <ButtonInnerBoxContainer>
                            <UINewTypography variant="bodyRegular">
                              Have an account already?
                              <LoginTextBoxContainer component="span" onClick={onLoginOpen}>
                                {' '}
                                Log in here
                              </LoginTextBoxContainer>
                            </UINewTypography>
                            <UINewTypography variant="bodyRegular">
                              Sign up as a model{' '}
                              <Box component="span" sx={{ fontWeight: 800, color: 'primary.100' }}>
                                <Link href="/">Here</Link>
                              </Box>
                            </UINewTypography>
                          </ButtonInnerBoxContainer>
                        </ButtonBoxContainer>
                      </InputFiledMainBoxContainer>
                    </ModelInnerBoxContainer>
                    <FooterMainBoxContainer>
                      <BenefitsTextTypography>Unlock the Benefits!</BenefitsTextTypography>

                      <DescriptionTextBox>
                        <DescriptionTextInnerBox>
                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/ab2-icon-1.svg" />
                            <DescriptionTextTypography>1-Minute Free Call</DescriptionTextTypography>
                          </DescriptionTextContainer>

                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/ab2-icon-2.svg" />
                            <DescriptionTextTypography>1,000+ Models</DescriptionTextTypography>
                          </DescriptionTextContainer>
                        </DescriptionTextInnerBox>
                        <DescriptionTextInnerBox>
                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/ab2-icon-3.svg" />
                            <DescriptionTextTypography>Private 1-on-1 Chats</DescriptionTextTypography>
                          </DescriptionTextContainer>

                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/ab2-icon-4.svg" />
                            <DescriptionTextTypography>Safe & Secure</DescriptionTextTypography>
                          </DescriptionTextContainer>
                        </DescriptionTextInnerBox>
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

export default ABRegister2User;
