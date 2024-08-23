'use client';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine, RiMailLine, RiUserFillLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { EMAIL_REGEX, NAME_REGEX, PASSWORD_PATTERN } from 'constants/regexConstants';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { ModelAuthService } from 'services/modelAuth/modelAuth.service';
import AuthModelCommon from './AuthModelCommon';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { ErrorBox, ModelUITextConatiner, UIButtonText, UITypographyText } from 'views/auth/AuthCommon.styled';
import InfoIcon from '@mui/icons-material/Info';
import { FormattedMessage, useIntl } from 'react-intl';
import { ModelSignUpUIRemember } from './ModelSignup.styled';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import Link from 'next/link';
import { getErrorMessage } from 'utils/errorUtils';

export type ModelSignupParams = {
  name: string;
  email: string;
  password: string;
};

const ModelSignup = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
  const intl = useIntl();

  const route = useRouter();
  const { push } = route;
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [showPassword, setShowPassword] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(3);
  const [loading, setLoading] = useState(false);
  const [isAgreeChecked, setIsAgreeChecked] = useState(false);

  const [alert, setAlert] = useState('');
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirectSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (redirectSeconds === 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectSeconds]);

  const validationSchema = yup.object({
    name: yup
      .string()
      .trim()
      .required('Usernameisrequired')
      .min(2, 'Usernameistooshort')
      .max(20, 'Usernameistoolong')
      .matches(NAME_REGEX, 'Noleadingspaces'),
    email: yup.string().matches(EMAIL_REGEX, 'Enteravalidemail').required('Emailisrequired'),
    password: yup.string().required('Passwordisrequired').min(8, 'Passwordmust').matches(PASSWORD_PATTERN, {
      message: 'PasswordMustContainAt',
      excludeEmptyString: true
    })
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          values.name = values.name.trim();
          const data = await ModelAuthService.modelSignup(values);
          if (data.code === 200) {
            const loginResponse = await signIn('providerModel', {
              redirect: false,
              email: values.email,
              password: values.password
            });
            if (loginResponse?.status === 200) {
              push('/model/profile');
              onClose();
            } else {
              setAlert('Login after signup failed. Please log in manually.');
            }
          } else if (data?.code === 403) {
            toast.error(ErrorMessage);
          } else {
            const errorMessage = getErrorMessage(data?.custom_code);
            setAlert(intl.formatMessage({ id: errorMessage }));
          }
        } catch (error) {
          setAlert('An error occurred during signup or login. Please try again.');
        } finally {
          setLoading(false);
          setSubmitting(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthModelCommon
              onClose={onClose}
              image="images/model/model-signup/model-signup.webp"
              mobileImage="images/model/model-signup/model-signup.webp"
            >
              <Box
                position="relative"
                width="100%"
                height="auto"
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pt: { xs: 0, sm: '50px' },
                  pl: { xs: 2, md: 4 },
                  pr: { xs: 2, md: 0 },
                  maxWidth: { xs: '100%', md: '400px' }
                }}
              >
                {
                  <>
                    <Box marginTop={isSmDown ? '100px' : '0px'}>
                      <UINewTypography variant="MediumSemiBoldText" color="common.white" sx={{ lineHeight: '38.4px' }}>
                        <FormattedMessage id="JoinNowForFree" />
                      </UINewTypography>
                      <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                        <IconButton
                          size="large"
                          sx={{
                            color: 'common.white',
                            position: 'absolute',
                            top: 0,
                            right: { xs: 0, md: '-84px' },
                            display: { xs: 'none', sm: 'block' }
                          }}
                          onClick={onClose}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box sx={{ color: 'primary.300' }}>
                      {alert && (
                        <ErrorBox>
                          <InfoIcon />
                          <UINewTypography>{alert}</UINewTypography>
                        </ErrorBox>
                      )}
                    </Box>
                    <ModelUITextConatiner gap={3}>
                      <ModelUITextConatiner gap={0.5}>
                        <UITypographyText>
                          <FormattedMessage id="Name" />
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
                          onBlur={handleBlur}
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name ? <FormattedMessage id={errors.name} /> : ''}
                          sx={{
                            border: '2px solid',
                            borderColor: 'secondary.light',
                            width: isSmDown ? 'auto' : '400px'
                          }}
                          InputProps={{
                            endAdornment: <RiUserFillLine color="#86838A" />
                          }}
                        />
                      </ModelUITextConatiner>
                      <ModelUITextConatiner gap={0.5}>
                        <UITypographyText>
                          <FormattedMessage id="EmailAddress" />
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
                            borderColor: 'secondary.light',
                            width: isSmDown ? 'auto' : '400px'
                          }}
                          InputProps={{
                            endAdornment: <RiMailLine color="#86838A" />
                          }}
                        />
                      </ModelUITextConatiner>
                      <ModelUITextConatiner gap={1.5}>
                        <ModelUITextConatiner gap={0.5}>
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
                              borderColor: 'secondary.light',
                              width: isSmDown ? 'auto' : '400px'
                            }}
                            InputProps={{
                              endAdornment: (
                                <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setShowPassword(!showPassword)}>
                                  {showPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                                </Box>
                              )
                            }}
                          />
                        </ModelUITextConatiner>
                        <MenuItem sx={{ p: 0 }}>
                          <Checkbox sx={{ p: 0, pr: 1 }} />
                          <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                            <FormattedMessage id="RememberMe" />
                          </UINewTypography>
                        </MenuItem>
                        <MenuItem sx={{ display: 'flex', alignItems: 'flex-start', p: 0 }}>
                          <Checkbox sx={{ p: 0, pr: 1 }} checked={isAgreeChecked} onChange={(e) => setIsAgreeChecked(e.target.checked)} />
                          <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                            <FormattedMessage id="ByClickingYouAgree" />
                            <Link href="/terms-and-condition">
                              <span style={{ color: '#FFE500' }}>
                                <FormattedMessage id="TermsOfService" />
                              </span>
                            </Link>
                            <FormattedMessage id="And" />
                            <Link href="/privacy-statement">
                              <span style={{ color: '#FFE500' }}>
                                <FormattedMessage id="PrivacyPolicy" />
                              </span>
                            </Link>
                          </UINewTypography>
                        </MenuItem>
                      </ModelUITextConatiner>
                    </ModelUITextConatiner>
                    <ModelUITextConatiner width="100%" gap={isSmDown ? '32px' : '24px'}>
                      <StyleButtonV2
                        variant="contained"
                        type="submit"
                        disabled={!isAgreeChecked || !isValid || loading}
                        loading={loading}
                        sx={{ width: isLg ? '400px' : 'auto' }}
                      >
                        <UIButtonText>
                          <FormattedMessage id="SignUp" />
                        </UIButtonText>
                      </StyleButtonV2>
                      <ModelUITextConatiner gap={3}>
                        <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />

                        <ModelSignUpUIRemember>
                          <UINewTypography variant="buttonLargeMenu" sx={{ whiteSpace: isSm ? 'wrap' : 'nowrap' }}>
                            <FormattedMessage id="RememberPassword" />
                          </UINewTypography>
                          <UINewTypography
                            whiteSpace="nowrap"
                            variant="body"
                            sx={{ color: 'text.secondary', cursor: 'pointer' }}
                            onClick={onLoginOpen}
                          >
                            <FormattedMessage id="LogInInstead" />
                          </UINewTypography>
                        </ModelSignUpUIRemember>
                      </ModelUITextConatiner>
                    </ModelUITextConatiner>
                  </>
                }
              </Box>
            </AuthModelCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default ModelSignup;
