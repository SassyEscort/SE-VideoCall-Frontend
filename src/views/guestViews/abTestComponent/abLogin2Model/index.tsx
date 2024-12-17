'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine, RiUserFillLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const ABLogin2Model = ({ onClose }: { onClose: () => void }) => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = yup.object({
    password: yup.string().required('New Password Is Required').min(8, 'Password Must Be 8 character long').matches(PASSWORD_PATTERN, {
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
      excludeEmptyString: true
    }),
    confirmPassword: yup
      .string()
      .required('confirm Password Is Required')
      .min(8, 'Password Must Be 8 character long')
      .matches(PASSWORD_PATTERN, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        excludeEmptyString: true
      })
      .oneOf([yup.ref('password')], 'password and confirm password should match')
  });

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          role: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values, 'values');
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
                  pr: { xs: 2, md: 0 }
                  //   maxWidth: { xs: '100%', md: '400px' }
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
                        right: { xs: 0, md: '8px' },
                        display: { sm: 'block' },
                        zIndex: 1
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
                      padding: '62px 100px 62px 100px',
                      gap: 6
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        gap: 5,
                        alignItems: 'center'
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: isMdDown ? 'column' : 'row' }}>
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
                              <Box component="span" sx={{ fontWeight: 800, color: 'white.main', textDecoration: 'underline' }}>
                                {' '}
                                Log in here
                              </Box>
                            </UINewTypography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <UINewTypography
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: '40px',
                          fontWeight: 800,
                          lineHeight: '64px',
                          whiteSpace: 'nowrap',
                          color: '#FFFFFFCC'
                        }}
                      >
                        Unlock the Benefits!
                      </UINewTypography>

                      <Box sx={{ display: 'flex', gap: 3 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '363px' }}>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/earn1-icon.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              Earn Money From Anywhere
                            </UINewTypography>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/secure1-icon.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              Secure Payouts
                            </UINewTypography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '304px' }}>
                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/global1-icon.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              Global Audience
                            </UINewTypography>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box component="img" src="/images/icons/support1-icon.svg" />
                            <UINewTypography
                              sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                            >
                              Dedicated Support
                            </UINewTypography>
                          </Box>
                        </Box>
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

export default ABLogin2Model;
