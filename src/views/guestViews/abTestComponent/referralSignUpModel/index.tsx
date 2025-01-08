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
import * as yup from 'yup';
import { EMAIL_REGEX, NAME_REGEX } from 'constants/regexConstants';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {
  ButtonMainBoxContainer,
  FooterInnerBoxContainer,
  FooterMainBoxContainer,
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
  NewSignUpModelMainBoxContainer,
  ReferralTextTypography,
  RightSideInnerBoxContainer,
  RightSideMainBoxContainer,
  RightSideSubTitleText
} from '../newSignUpModel/NewSignUp.styled';
import { Raleway } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { ISignUpProps } from '../types';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import { ROLE } from 'constants/workerVerification';
import { gaEventTrigger } from 'utils/analytics';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { getErrorMessage } from 'utils/errorUtils';
import InfoIcon from '@mui/icons-material/Info';

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const ReferralSignUpModel = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
  const intl = useIntl();
  const route = useRouter();

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
          role: ''
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
                        <HeadingTextTypography fontFamily={ralewayFont.style.fontFamily}>
                          Sign up and get <span style={{ color: '#79E028', whiteSpace: 'nowrap' }}>1 FREE</span> Video Call
                        </HeadingTextTypography>

                        <HeadingDescriptionTextTypography>
                          Real Models, Real Pleasure, Live Now! Don’t Just Watch –{' '}
                          <span style={{ fontWeight: 800 }}>Connect, Flirt, and Enjoy!</span>
                        </HeadingDescriptionTextTypography>
                      </HeadingInnerBoxContainer>

                      <InputFiledMainBoxContainer>
                        <InputFiledInnerBoxContainer>
                          <InputTextFiledBoxContainer>
                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 1.5 }}>
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>{/* <FormattedMessage id="Name" /> */}</UITypographyText>
                                    <UIStyledInputText
                                      name="name"
                                      value={values.name}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={touched.name && Boolean(errors.name)}
                                      helperText={touched.name && errors.name ? <FormattedMessage id={errors.name} /> : ''}
                                    />
                                  </ModelUITextConatiner>{' '}
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
                            </Box>

                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 1.5 }}>
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
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>{/* <FormattedMessage id="ConfirmPassword" /> */}</UITypographyText>
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
                          <JoinNowButtonContainer>
                            <JoinNowTextTypography>Join Now</JoinNowTextTypography>
                          </JoinNowButtonContainer>

                          <JoinNowButtonContainer type="submit" loading={loading}>
                            <JoinNowTextTypography>Join Now</JoinNowTextTypography>
                          </JoinNowButtonContainer>
                        </ButtonMainBoxContainer>
                      </InputFiledMainBoxContainer>
                    </HeadingMainBoxContainer>

                    <FooterMainBoxContainer>
                      <FooterInnerBoxContainer>
                        <HaveAnAccountAlreadyTextTypography>Have an account already?</HaveAnAccountAlreadyTextTypography>
                        <ReferralTextTypography sx={{ color: 'white.main' }} onClick={onLoginOpen}>
                          Log in here
                        </ReferralTextTypography>
                      </FooterInnerBoxContainer>

                      <FooterInnerBoxContainer>
                        <HaveAnAccountAlreadyTextTypography>Sign up as a model</HaveAnAccountAlreadyTextTypography>
                        <ReferralTextTypography sx={{ color: 'primary.800' }}>Here</ReferralTextTypography>
                      </FooterInnerBoxContainer>
                    </FooterMainBoxContainer>
                  </NewSignUpModelMainBoxContainer>

                  <RightSideMainBoxContainer>
                    <RightSideInnerBoxContainer>
                      <ImageAndTextSpacingBox>
                        <Box component="img" src="/images/icons/ab-icon-1.svg" />
                        <RightSideSubTitleText>
                          <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>On signup get</span>{' '}
                          <FormattedMessage id="1MinuteFreeCall"></FormattedMessage>
                        </RightSideSubTitleText>
                      </ImageAndTextSpacingBox>

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
                </Box>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default ReferralSignUpModel;
