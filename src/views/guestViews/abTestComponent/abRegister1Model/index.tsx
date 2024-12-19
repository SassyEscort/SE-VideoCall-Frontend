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
import { EMAIL_REGEX, NAME_REGEX } from 'constants/regexConstants';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InfoIcon from '@mui/icons-material/Info';
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
} from './abRegister1Model.styled';
import { useRouter } from 'next/navigation';
import { ROLE } from 'constants/workerVerification';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import { gaEventTrigger } from 'utils/analytics';
import { toast } from 'react-toastify';
import { getErrorMessage } from 'utils/errorUtils';
import { ErrorMessage } from 'constants/common.constants';

interface ISignUpProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: ROLE;
}

const ABRegister1Model = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
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
          role: ROLE.MODEL
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
                            <span style={{ whiteSpace: 'nowrap' }}>
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
                          </InputTextFiledBoxContainer>

                          <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                            <Checkbox sx={{ p: 0, pr: 1 }} />
                            <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                              <FormattedMessage id="RememberMe" />
                            </UINewTypography>
                          </MenuItem>
                        </InputFiledInnerBoxContainer>

                        <FooterMainBoxContainer>
                          <JoinNowButtonContainer type="submit" variant="contained" loading={loading}>
                            <FormattedMessage id="JoinNow" />
                          </JoinNowButtonContainer>
                          <UINewTypography variant="bodyRegular">
                            <FormattedMessage id="HaveAnAccount" />
                            <LoginHereTextBoxContainer component="span" onClick={onLoginOpen}>
                              {' '}
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

export default ABRegister1Model;
