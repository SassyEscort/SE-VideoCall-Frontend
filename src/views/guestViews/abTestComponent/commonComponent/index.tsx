'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const ABTestSignUpModel = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
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
                              Get 1 minute of Free Call
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
                            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Real Models, Real Pleasure, Live Now!</span>
                            <span style={{ display: 'block' }}>Don’t Just Watch – Connect, Flirt, and Enjoy!</span>
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
                                sx={{ fontWeight: 800, color: 'white.main', textDecoration: 'underline' }}
                                onClick={onLoginOpen}
                              >
                                {' '}
                                Log in here
                              </Box>
                            </UINewTypography>
                            <UINewTypography variant="bodyRegular">
                              Sign up as a model{' '}
                              <Box component="span" sx={{ fontWeight: 800, color: 'primary.100' }}>
                                <Link href="/">Here</Link>
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
                        <Box component="img" src="/images/icons/ab-icon-1.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          1-Minute Free Call
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-2.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          1,000+ Models
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-3.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          Private 1-on-1 Chats
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-4.svg" />
                        <UINewTypography
                          sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32.7px', whiteSpace: 'nowrap', color: 'white.main' }}
                        >
                          Safe & Secure
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

export default ABTestSignUpModel;
