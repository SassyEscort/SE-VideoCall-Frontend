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
import { useState } from 'react';
import * as yup from 'yup';
import AuthCommon from '../AuthCommon';
import { LoginUserParams } from 'services/guestAuth/types';
import { signIn } from 'next-auth/react';
import getCustomErrorMessage from 'utils/error.utils';
import { useRouter } from 'next/navigation';
import InfoIcon from '@mui/icons-material/Info';
import { ErrorBox, ModelUITextConatiner, UIButtonText, UITypographyText } from '../AuthCommon.styled';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { FormattedMessage, useIntl } from 'react-intl';
import { EMAIL_REGEX } from 'constants/regexConstants';

export type LoginParams = {
  email: string;
  password: string;
};

const GuestLogin = ({
  onClose,
  onSignupOpen,
  onFogotPasswordLinkOpen,
  image
}: {
  onClose: () => void;
  onSignupOpen: () => void;
  onFogotPasswordLinkOpen: () => void;
  image: string;
}) => {
  const intl = useIntl();

  const route = useRouter();
  const { refresh } = route;
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const validationSchema = yup.object({
    email: yup.string().matches(EMAIL_REGEX, 'Enteravalidemail').required('Emailisrequired'),
    password: yup.string().required('Passwordisrequired')
  });
  const handleFormSubmit = async (values: LoginUserParams) => {
    try {
      setLoading(true);
      const res = await signIn('providerGuest', { redirect: false, email: values.email, password: values.password });
      if (res?.status === 200) {
        refresh();
        onClose();
      } else if (res?.error) {
        const errorMessage = res.error === 'CredentialsSignin' ? 'InvalidEmail' : 'SomethingWent';
        setAlert(intl.formatMessage({ id: errorMessage }));
      }
    } catch (error: any) {
      setAlert(getCustomErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values: LoginUserParams) => handleFormSubmit(values)}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthCommon onClose={onClose} image={image} mobileImage="images/auth/auth-model1.webp">
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
                  <ModelUITextConatiner sx={{ gap: 0.5, width: isSmDown ? 'auto' : '400px' }}>
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
                        borderColor: 'secondary.light'
                      }}
                      InputProps={{
                        endAdornment: <RiUserFillLine color="#86838A" />
                      }}
                    />
                  </ModelUITextConatiner>
                  <ModelUITextConatiner gap={1.5}>
                    <ModelUITextConatiner sx={{ gap: 0.5, width: isSmDown ? 'auto' : '400px' }}>
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
                    <MenuItem
                      sx={{
                        display: 'flex',
                        p: 0,
                        justifyContent: 'space-between',
                        flexDirection: isSm ? 'column' : 'row',
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
                  <ModelUITextConatiner width="100%" sx={{ width: isSmDown ? 'auto' : '400px' }}>
                    <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                      <UIButtonText>
                        <FormattedMessage id="Login" />
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
            </AuthCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default GuestLogin;
