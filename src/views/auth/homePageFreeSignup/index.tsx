import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
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
import { ErrorBox, ModelUICustomUIBox, ModelUITextConatiner, UIButtonText, UITypographyText } from '../AuthCommon.styled';
import InfoIcon from '@mui/icons-material/Info';
import { signIn } from 'next-auth/react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ErrorMessage } from 'constants/common.constants';
import { useRouter } from 'next/navigation';
import { getErrorMessage } from 'utils/errorUtils';
import AuthHomePageFreeSignupCommon from './AuthHomePageFreeSignupCommon';
import HomePageFreeSignupMobile from './HomePageFreeSignupMobile';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ROLE } from 'constants/workerVerification';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import {
  HeaderTextInnerBoxContainer,
  HeaderTextMainBoxContainer,
  HomeFreeSignupMainBoxContainer,
  IconeButtonContainer,
  JoinForFreeText,
  RemindMeBoxContainer
} from './HomePageFreeSignup.styled';

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
    }),
    role: yup.string().required('Roleisrequired').oneOf(['customer', 'model'], 'InvalidRole')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
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
                            {!isSmDown && <CloseIcon />}
                          </IconeButtonContainer>
                        </HeaderTextInnerBoxContainer>
                      </HeaderTextMainBoxContainer>
                      {isSmDown && values.role === ROLE.CUSTOMER && <HomePageFreeSignupMobile />}
                    </Box>

                    {alert && (
                      <Box sx={{ color: 'primary.300' }}>
                        <ErrorBox>
                          <InfoIcon />
                          <UINewTypography>{alert}</UINewTypography>
                        </ErrorBox>
                      </Box>
                    )}

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
                      <ModelUITextConatiner gap={0.5}>
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
                      </ModelUITextConatiner>
                      <RemindMeBoxContainer>
                        <ModelUITextConatiner gap={0.5}>
                          <ModelUITextConatiner sx={{ gap: 0.5 }}>
                            <ModelUICustomUIBox>
                              <UITypographyText>
                                <FormattedMessage id="SignupAs" />
                              </UITypographyText>
                              <FormControl component="fieldset" error={touched.role && Boolean(errors.role)}>
                                <RadioGroup row id="role" name="role" value={values.role} onChange={handleChange}>
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
                        <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                          <Checkbox sx={{ p: 0, pr: 1 }} />
                          <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                            <FormattedMessage id="RememberMe" />
                          </UINewTypography>
                        </MenuItem>
                      </RemindMeBoxContainer>
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
              </HomeFreeSignupMainBoxContainer>
            </AuthHomePageFreeSignupCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default HomePageFreeSignup;
