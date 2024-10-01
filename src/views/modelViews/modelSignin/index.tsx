import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine, RiUserFillLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { signIn, useSession } from 'next-auth/react';
import getCustomErrorMessage from 'utils/error.utils';
import { useRouter } from 'next/navigation';
import InfoIcon from '@mui/icons-material/Info';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import AuthModelCommon from '../modelSignup/AuthModelCommon';
import { ErrorBox, ModelUITextConatiner, UIButtonText, UITypographyText } from 'views/auth/AuthCommon.styled';
import { LoginModelParams } from 'services/modelAuth/types';
import { FormattedMessage, useIntl } from 'react-intl';
import { EMAIL_REGEX } from 'constants/regexConstants';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { ROLE } from 'constants/workerVerification';
import { MODEL_ACTION } from 'constants/profileConstants';

export type LoginParams = {
  email: string;
  password: string;
};

const ModelSignin = ({
  onClose,
  onSignupOpen,
  onFogotPasswordLinkOpen
}: {
  onClose: () => void;
  onSignupOpen: () => void;
  onFogotPasswordLinkOpen: () => void;
}) => {
  const intl = useIntl();
  const route = useRouter();
  const { push, refresh } = route;
  const { data: session } = useSession();

  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [authRole, setAuthRole] = useState('');
  const [modelStatus, setModelStatus] = useState('');

  const validationSchema = yup.object({
    email: yup.string().matches(EMAIL_REGEX, 'Enteravalidemail').required('Emailisrequired'),
    password: yup.string().required('Passwordisrequired')
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
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values: LoginModelParams) => handleFormSubmit(values)}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
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
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pt: { xs: 0, sm: '64px' },
                  pl: { xs: 2, md: 4 },
                  pr: { xs: 2, md: 0 },
                  maxWidth: { xs: '100%', md: '400px' }
                }}
              >
                <Box sx={{ display: 'flex', marginTop: { xs: '100px', sm: 0 } }}>
                  <UINewTypography
                    variant="MediumSemiBoldText"
                    color="common.white"
                    sx={{ whiteSpace: { sm: 'nowrap' }, lineHeight: '38.4px' }}
                  >
                    <FormattedMessage id="LogInToYourAccount" />
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
                <Box sx={{ color: 'primary.300' }}>
                  {alert && (
                    <ErrorBox>
                      <InfoIcon />
                      <UINewTypography>{alert}</UINewTypography>
                    </ErrorBox>
                  )}
                </Box>
                <ModelUITextConatiner gap={3}>
                  <ModelUITextConatiner sx={{ gap: 0.5 }}>
                    <UITypographyText>
                      <FormattedMessage id="UsernameEmail" />
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
                        endAdornment: <RiUserFillLine color="#86838A" />
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
                        <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}>
                          <FormattedMessage id="RememberMe" />
                        </UINewTypography>
                      </Box>
                      <UINewTypography
                        variant="buttonLargeMenu"
                        color="primary.400"
                        sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}
                        onClick={onFogotPasswordLinkOpen}
                      >
                        <FormattedMessage id="ForgotPassword" />
                      </UINewTypography>
                    </MenuItem>
                  </ModelUITextConatiner>
                </ModelUITextConatiner>
                <ModelUITextConatiner gap="52px" justifyContent="space-between">
                  <ModelUITextConatiner width="100%">
                    <StyleButtonV2 variant="contained" type="submit" loading={loading} sx={{ width: isLg ? '400px' : 'auto' }}>
                      <UIButtonText>
                        <FormattedMessage id="LogIn" />
                      </UIButtonText>
                    </StyleButtonV2>
                  </ModelUITextConatiner>
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
                      <UINewTypography variant="buttonLargeMenu">
                        <FormattedMessage id="DontHaveAccount" />
                      </UINewTypography>

                      <UINewTypography variant="body" sx={{ color: 'text.secondary', cursor: 'pointer' }} onClick={onSignupOpen}>
                        <FormattedMessage id="JoinForFreeNow" />
                      </UINewTypography>
                    </Box>
                  </ModelUITextConatiner>
                </ModelUITextConatiner>
              </Box>
            </AuthModelCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default ModelSignin;
