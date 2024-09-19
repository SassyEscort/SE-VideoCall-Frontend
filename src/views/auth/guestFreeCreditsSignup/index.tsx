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
import { toast } from 'react-toastify';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import GuestSignupSuccess from '../GuestSignupSuccess';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { ErrorBox, ModelUITextConatiner, UIButtonText, UITypographyText } from '../AuthCommon.styled';
import InfoIcon from '@mui/icons-material/Info';
import { signIn } from 'next-auth/react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ErrorMessage } from 'constants/common.constants';
import { useRouter } from 'next/navigation';
import { getErrorMessage } from 'utils/errorUtils';
import AuthFreeCreditsSignupCommon from './AuthFreeCreditsSignupCommon';
import GuestModelMobileSignup from './GuestModelMobileSignup';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';

export type SignupParams = {
  name: string;
  email: string;
  password: string;
};

const GuestFreeCreditsSignup = ({
  onClose,
  onLoginOpen,
  image,
  modelName
}: {
  onClose: () => void;
  onLoginOpen: () => void;
  image: string;
  modelName: string;
}) => {
  const intl = useIntl();
  const route = useRouter();
  const { refresh } = route;

  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(3);
  const [activeStep, setActiveStep] = useState(0);
  const [alert, setAlert] = useState('');

  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

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
    password: yup.string().required('Passwordisrequired').min(8, 'PasswordMustBe').matches(PASSWORD_PATTERN, {
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
          const data = await GuestAuthService.guestSignup(values);
          if (data.code === 200) {
            setActiveStep(1);
            refresh();
            const loginResponse = await signIn(PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM, {
              redirect: false,
              email: values.email,
              password: values.password
            });
            if (loginResponse?.status === 200) {
              refresh();
              setTimeout(() => {
                onClose();
              }, 3000);
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
            <AuthFreeCreditsSignupCommon onClose={onClose} image={image} mobileImage={image} modelName={modelName}>
              <Box
                position="relative"
                width="100%"
                height={activeStep > 0 ? '620px' : 'auto'}
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
                {activeStep === 0 ? (
                  <>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: { xs: '24px', sm: 0 } }}>
                        <UINewTypography
                          variant="MediumSemiBoldText"
                          color="common.white"
                          sx={{ fontSize: { xs: '27px', sm: '32px' }, lineHeight: '38.4px' }}
                        >
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
                              display: { sm: 'block' }
                            }}
                            onClick={onClose}
                          >
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      </Box>
                      {isSmDown && <GuestModelMobileSignup image={image} modelName={modelName} />}
                    </Box>

                    <Box sx={{ color: 'primary.300' }}>
                      {alert && (
                        <ErrorBox>
                          <InfoIcon />
                          <UINewTypography>{alert}</UINewTypography>
                        </ErrorBox>
                      )}
                    </Box>

                    <ModelUITextConatiner gap={3} sx={{ width: isLg ? '400px' : 'auto' }}>
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
                          onBlur={handleBlur}
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
                          onBlur={handleBlur}
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
                      <ModelUITextConatiner gap={1.5}>
                        <ModelUITextConatiner sx={{ gap: 0.5 }}>
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
                        </ModelUITextConatiner>
                        <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                          <Checkbox sx={{ p: 0, pr: 1 }} />
                          <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                            <FormattedMessage id="RememberMe" />
                          </UINewTypography>
                        </MenuItem>
                      </ModelUITextConatiner>
                    </ModelUITextConatiner>
                    <ModelUITextConatiner width="100%" gap={isSm ? '33px' : '29px'}>
                      <StyleButtonV2 variant="contained" type="submit" loading={loading} sx={{ width: isLg ? '400px' : 'auto' }}>
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
                            onClick={onLoginOpen}
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
              </Box>
            </AuthFreeCreditsSignupCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default GuestFreeCreditsSignup;
