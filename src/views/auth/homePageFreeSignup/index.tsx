import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine, RiMailLine, RiUserFillLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { lazy, Suspense, useEffect, useState } from 'react';
import * as yup from 'yup';
import { ROLE } from 'constants/workerVerification';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { EMAIL_REGEX, NAME_REGEX } from 'constants/regexConstants';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { toast } from 'react-toastify';
import InfoIcon from '@mui/icons-material/Info';
import { FormattedMessage, useIntl } from 'react-intl';
import { ErrorMessage } from 'constants/common.constants';
import { useRouter } from 'next/navigation';
import { getErrorMessage } from 'utils/errorUtils';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
const GuestSignupSuccess = lazy(() => import('../GuestSignupSuccess'));
const StyleButtonV2 = lazy(() => import('components/UIComponents/StyleLoadingButton'));
const AuthHomePageFreeSignupCommon = lazy(() => import('./AuthHomePageFreeSignupCommon'));
const HomePageFreeSignupMobile = lazy(() => import('./HomePageFreeSignupMobile'));
const ErrorBox = lazy(() => import('../AuthCommon.styled').then((module) => ({ default: module.ErrorBox })));
const ModelUICustomUIBox = lazy(() => import('../AuthCommon.styled').then((module) => ({ default: module.ModelUICustomUIBox })));
const ModelUITextConatiner = lazy(() => import('../AuthCommon.styled').then((module) => ({ default: module.ModelUITextConatiner })));
const UIButtonText = lazy(() => import('../AuthCommon.styled').then((module) => ({ default: module.UIButtonText })));
const UITypographyText = lazy(() => import('../AuthCommon.styled').then((module) => ({ default: module.UITypographyText })));
const HeaderTextInnerBoxContainer = lazy(() =>
  import('./HomePageFreeSignup.styled').then((module) => ({ default: module.HeaderTextInnerBoxContainer }))
);
const HeaderTextMainBoxContainer = lazy(() =>
  import('./HomePageFreeSignup.styled').then((module) => ({ default: module.HeaderTextMainBoxContainer }))
);
const HomeFreeSignupMainBoxContainer = lazy(() =>
  import('./HomePageFreeSignup.styled').then((module) => ({ default: module.HomeFreeSignupMainBoxContainer }))
);
const IconeButtonContainer = lazy(() => import('./HomePageFreeSignup.styled').then((module) => ({ default: module.IconeButtonContainer })));
const JoinForFreeText = lazy(() => import('./HomePageFreeSignup.styled').then((module) => ({ default: module.JoinForFreeText })));
const RemindMeBoxContainer = lazy(() => import('./HomePageFreeSignup.styled').then((module) => ({ default: module.RemindMeBoxContainer })));
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { signIn } from 'next-auth/react';
import { gaEventTrigger } from 'utils/analytics';

export type SignupParams = {
  name: string;
  email: string;
  password: string;
};

const HomePageFreeSignup = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
  const intl = useIntl();
  const route = useRouter();
  const { refresh, push } = route;

  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    // .matches(PASSWORD_PATTERN, {
    //   message: 'PasswordMustContainAt',
    //   excludeEmptyString: true
    // })
    confirmPassword: yup
      .string()
      .required('ConfirmPasswordIsRequired')
      .oneOf([yup.ref('password'), ''], 'ConfirmPasswordDoesNotMatch'),
    role: yup.string().required('Roleisrequired').oneOf(['customer', 'model'], 'InvalidRole')
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: ROLE.CUSTOMER
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setLoading(true);
            values.name = values.name.trim();
            const data = await GuestAuthService.genericSignup(values);
            if (data.code === 200) {
              setActiveStep(1);
              refresh();
              if (values?.role === ROLE.CUSTOMER) {
                const loginResponse = await signIn(PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM, {
                  redirect: false,
                  email: values.email,
                  password: values.password
                });

                if (loginResponse?.status === 200) {
                  refresh();
                  setTimeout(() => {
                    onClose();
                    gaEventTrigger('client_signup_completed', { source: 'generic_signup', category: 'Button' });
                  }, 3000);
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
                  push('/model/profile');
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
            setSubmitting(false);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Box component="form" onSubmit={handleSubmit}>
              <AuthHomePageFreeSignupCommon onClose={onClose} role={values.role}>
                <HomeFreeSignupMainBoxContainer height={activeStep > 0 ? '620px' : 'auto'}>
                  {activeStep === 0 ? (
                    <>
                      <Box>
                        <HeaderTextMainBoxContainer>
                          <JoinForFreeText variant="MediumSemiBoldText" color="common.white">
                            <FormattedMessage id="JoinNowForFree" />
                          </JoinForFreeText>
                          <HeaderTextInnerBoxContainer>
                            <IconeButtonContainer size="large" onClick={onClose}>
                              {isSmUp && <CloseIcon />}
                            </IconeButtonContainer>
                          </HeaderTextInnerBoxContainer>
                        </HeaderTextMainBoxContainer>
                        {isMdDown && values.role === ROLE.CUSTOMER && <HomePageFreeSignupMobile />}
                      </Box>

                      {alert && (
                        <Box sx={{ color: 'primary.300' }}>
                          <ErrorBox>
                            <InfoIcon />
                            <UINewTypography>{alert}</UINewTypography>
                          </ErrorBox>
                        </Box>
                      )}

                      <ModelUITextConatiner gap={3} sx={{ width: 'auto' }}>
                        <ModelUITextConatiner gap={0.5}>
                          <ModelUITextConatiner sx={{ gap: 0.5 }}>
                            <ModelUICustomUIBox>
                              <UITypographyText>
                                <FormattedMessage id="SignupAs" />
                              </UITypographyText>
                              <FormControl
                                component="fieldset"
                                sx={{ gap: '48px' }}
                                error={touched.role && Boolean(errors.role)}
                                onChange={(e) => {
                                  const target = e.target as HTMLInputElement;
                                  if (target.value === 'model') {
                                    gaEventTrigger('signup_form_model_click', { source: 'model_click', category: 'Button' });
                                  }
                                }}
                              >
                                <RadioGroup row id="role" name="role" value={values.role} onChange={handleChange} sx={{ gap: 3 }}>
                                  <FormControlLabel value="customer" control={<Radio />} label={<FormattedMessage id="Customer" />} />
                                  <FormControlLabel value="model" control={<Radio />} label={<FormattedMessage id="Model" />} />
                                </RadioGroup>
                                {touched.role && errors.role && (
                                  <UINewTypography color="error" variant="caption">
                                    <FormattedMessage id={errors.role} />
                                  </UINewTypography>
                                )}
                              </FormControl>
                            </ModelUICustomUIBox>
                          </ModelUITextConatiner>
                        </ModelUITextConatiner>
                        <ModelUITextConatiner sx={{ gap: 0.5 }}>
                          <UITypographyText>
                            <FormattedMessage id="ClientName" />
                          </UITypographyText>
                          <UIStyledInputText
                            fullWidth
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={(e) => {
                              e.target.value = e.target.value.trimStart();
                              handleChange(e);
                            }}
                            onBlur={() => {
                              handleBlur;
                              gaEventTrigger('signup_form_name_click', { source: 'model_name_click', category: 'Button' });
                            }}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name ? <FormattedMessage id={errors.name} /> : ''}
                            sx={{
                              border: '2px solid',
                              borderColor: 'secondary.light'
                            }}
                            InputProps={{
                              endAdornment: <RiUserFillLine color="#86838A" />
                            }}
                          />
                        </ModelUITextConatiner>
                        <ModelUITextConatiner sx={{ gap: 0.5 }}>
                          <UITypographyText>
                            <FormattedMessage id="EmailAddress" />
                          </UITypographyText>
                          <UIStyledInputText
                            fullWidth
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={() => {
                              handleBlur;
                              gaEventTrigger('signup_form_email_click', { source: 'model_email_click', category: 'Button' });
                            }}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email ? <FormattedMessage id={errors.email} /> : ''}
                            sx={{
                              border: '2px solid',
                              borderColor: 'secondary.light'
                            }}
                            InputProps={{
                              endAdornment: <RiMailLine color="#86838A" />
                            }}
                          />
                        </ModelUITextConatiner>
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
                                  gaEventTrigger('signup_form_password_click', { source: 'model_password_click', category: 'Button' });
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
                                  gaEventTrigger('signup_form_confirm_password_click', {
                                    source: 'model_confirm_password_click',
                                    category: 'Button'
                                  });
                                }}
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={
                                  touched.confirmPassword && errors.confirmPassword ? <FormattedMessage id={errors.confirmPassword} /> : ''
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
                        <RemindMeBoxContainer>
                          <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                            <Checkbox sx={{ p: 0, pr: 1 }} />
                            <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                              <FormattedMessage id="RememberMe" />
                            </UINewTypography>
                          </MenuItem>
                        </RemindMeBoxContainer>
                      </ModelUITextConatiner>
                      <ModelUITextConatiner width="100%" gap={isSm ? '33px' : '29px'}>
                        <StyleButtonV2 variant="contained" type="submit" loading={loading} sx={{ width: 'auto' }}>
                          <UIButtonText>
                            <FormattedMessage id="SignUp" />
                          </UIButtonText>
                        </StyleButtonV2>
                        <ModelUITextConatiner gap={3}>
                          <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                          <Box
                            display="flex"
                            gap={1}
                            alignItems="center"
                            justifyContent="center"
                            pb={3}
                            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                          >
                            <UINewTypography variant="buttonLargeMenu" color="text.secondary" sx={{ whiteSpace: isSm ? 'wrap' : 'nowrap' }}>
                              <FormattedMessage id="HaveAnAccount" />
                            </UINewTypography>
                            <UINewTypography
                              whiteSpace="nowrap"
                              variant="body"
                              sx={{ color: 'text.secondary', cursor: 'pointer' }}
                              onClick={() => {
                                onLoginOpen();
                                gaEventTrigger('signup_form_login_instead_click', {
                                  source: 'model_login_instead_click',
                                  category: 'Button'
                                });
                              }}
                            >
                              <FormattedMessage id="LogInInstead" />
                            </UINewTypography>
                          </Box>
                        </ModelUITextConatiner>
                      </ModelUITextConatiner>
                    </>
                  ) : (
                    <GuestSignupSuccess redirectSeconds={redirectSeconds} />
                  )}
                </HomeFreeSignupMainBoxContainer>
              </AuthHomePageFreeSignupCommon>
            </Box>
          );
        }}
      </Formik>
    </Suspense>
  );
};

export default HomePageFreeSignup;
