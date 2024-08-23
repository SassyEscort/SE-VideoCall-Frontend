import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import * as yup from 'yup';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { toast } from 'react-toastify';
import AuthCommon from '../AuthCommon';
import CustomPasswordRegex from '../customPasswordRegex';
import InputAdornment from '@mui/material/InputAdornment';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import { ErrorMessage } from 'constants/common.constants';
import { FormattedMessage } from 'react-intl';
import {
  FirstBoxContainer,
  FiveBoxContainer,
  FourBoxContainer,
  GuestNewPasswordText,
  MainBoxContainer,
  SecBoxContainer,
  SecTextContainer,
  SixBoxContainer,
  ThirdBoxContainer
} from './GuestNewPassword.styled';

export type ResetPasswordParams = {
  email: string;
  password: string;
  reset_password_code: string;
};

export type ResetPasswordEmailParams = {
  email: string;
};

const GuestNewPassword = ({ onClose, email, onLoginOpen }: { onClose: () => void; email: string; onLoginOpen: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down(330));

  const validationSchema = yup.object({
    password: yup.string().required('NewPasswordIsRequired').min(8, 'PasswordMustBe').matches(PASSWORD_PATTERN, {
      message: 'PasswordMustContainAt',
      excludeEmptyString: true
    }),
    confirmPassword: yup
      .string()
      .required('ConfirmPasswordIsRequired')
      .oneOf([yup.ref('password'), ''], 'NewPasswordDoesNotMatch')
  });

  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          const url = new URL(window.location.href);
          const verificationCode = url.searchParams.get('code');

          if (verificationCode !== null && email !== null) {
            const resetPasswordObject = {
              email: email,
              password: values.password,
              reset_password_code: verificationCode
            };
            const data = await GuestAuthService.guestResetPassword(resetPasswordObject);

            if (data.code === 200) {
              toast.success('Success');
              onClose();
            } else {
              toast.error(ErrorMessage);
            }
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
            <AuthCommon
              variant="resetPassword"
              onClose={onClose}
              image="images/auth/auth-model1.webp"
              mobileImage="images/auth/auth-model1.webp"
            >
              <Box
                position="relative"
                width="100%"
                gap={4}
                display="flex"
                flexDirection="column"
                sx={{
                  pl: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '400px' },
                  pt: { xs: 0, sm: '64px', md: 0 },
                  pr: { xs: 2, md: 0 }
                }}
              >
                <Box sx={{ pt: { xs: 0, sm: '50px' } }}>
                  <MainBoxContainer>
                    <GuestNewPasswordText
                      variant="MediumSemiBoldText"
                      color="common.white"
                      sx={{
                        fontWeight: isSm ? '600' : undefined
                      }}
                    >
                      <FormattedMessage id="SetupYourNewPassword" />
                    </GuestNewPasswordText>
                    <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
                      <FormattedMessage id="ForTheAccount" />{' '}
                      <UINewTypography variant="bodySemiBold" color="secondary.200">
                        {email}
                      </UINewTypography>
                    </UINewTypography>
                  </MainBoxContainer>
                  <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                    <IconButton
                      size="large"
                      sx={{
                        color: 'common.white',
                        position: 'absolute',
                        top: 0,
                        right: { xs: 0, md: '-72px' },
                        display: 'block'
                      }}
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Box>
                <FirstBoxContainer>
                  <SecBoxContainer>
                    <ThirdBoxContainer>
                      <UINewTypography variant="bodySemiBold">
                        {' '}
                        <FormattedMessage id="NewPassword" />
                      </UINewTypography>
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
                            <InputAdornment position="end" sx={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                            </InputAdornment>
                          )
                        }}
                      />
                    </ThirdBoxContainer>
                  </SecBoxContainer>

                  <SecBoxContainer>
                    <ThirdBoxContainer>
                      <UINewTypography variant="bodySemiBold">
                        <FormattedMessage id="ConfirmNewPassword" />
                      </UINewTypography>
                      <UIStyledInputText
                        fullWidth
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                            <InputAdornment
                              position="end"
                              sx={{ cursor: 'pointer' }}
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                            </InputAdornment>
                          )
                        }}
                      />
                    </ThirdBoxContainer>
                  </SecBoxContainer>
                </FirstBoxContainer>
                <Box>
                  <CustomPasswordRegex password={values.password} />
                </Box>
                <FourBoxContainer>
                  <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                    <SecTextContainer>
                      <FormattedMessage id="ChangePassword" />
                    </SecTextContainer>
                  </StyleButtonV2>
                  <FiveBoxContainer>
                    <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                    <SixBoxContainer>
                      <UINewTypography variant="buttonLargeMenu" sx={{ whiteSpace: isSm ? 'wrap' : 'nowrap' }}>
                        <FormattedMessage id="RememberPasswordd" />
                      </UINewTypography>
                      <UINewTypography
                        whiteSpace="nowrap"
                        variant="body"
                        sx={{ color: 'text.secondary', cursor: 'pointer' }}
                        onClick={onLoginOpen}
                      >
                        <FormattedMessage id="LogInInstead" />
                      </UINewTypography>
                    </SixBoxContainer>
                  </FiveBoxContainer>
                </FourBoxContainer>
              </Box>
            </AuthCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default GuestNewPassword;
