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
import Button from '@mui/material/Button';
import { ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import { EMAIL_REGEX, NAME_REGEX } from 'constants/regexConstants';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
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
                      padding: '40px 64px 40px 64px'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        gap: 4,
                        alignItems: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 6,
                          alignItems: 'center'
                        }}
                      >
                        <Box component="img" src="/images/logo-footer.png" width={272} height={54} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'center' }}>
                          <Box>
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
                              Earn on Your Terms!
                            </UINewTypography>
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
                          </Box>
                          <UINewTypography
                            sx={{
                              fontSize: '24px',
                              fontWeight: 400,
                              lineHeight: '32.78px',
                              color: 'white.main',
                              whiteSpace: 'normal', // Allows wrapping
                              overflowWrap: 'break-word'
                            }}
                          >
                            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                              Flexible hours, secure payouts, and a global audience
                            </span>
                            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                              waiting to connect with you. Sign up now to start earning!
                            </span>
                          </UINewTypography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
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
                          </Box>

                          <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                            <Checkbox sx={{ p: 0, pr: 1 }} />
                            <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                              <FormattedMessage id="RememberMe" />
                            </UINewTypography>
                          </MenuItem>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                          <Button
                            variant="contained"
                            sx={{ width: '632px', height: '60px', borderRadius: '12px', backgroundColor: 'primary.100' }}
                          >
                            Join Now
                          </Button>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
                            <UINewTypography variant="bodyRegular">
                              Have an account already?
                              <Box
                                component="span"
                                sx={{ fontWeight: 800, color: 'white.main', textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={onLoginOpen}
                              >
                                {' '}
                                Log in here
                              </Box>
                            </UINewTypography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 8, gap: 4, justifyContent: 'center' }}>
                    <UINewTypography
                      sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '64px', whiteSpace: 'nowrap', color: '#FFFFFFCC' }}
                    >
                      Unlock the Benefits!
                    </UINewTypography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/earn-icon.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          Earn Money From Anywhere
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/secure-icon.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          Secure Payouts
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/global-icon.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          Global Audience
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/support-icon.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          Dedicated Support
                        </UINewTypography>
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

export default ABRegister1Model;
