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
import { ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {
  InputFiledInnerBoxContainer,
  InputTextFiledBoxContainer,
  RightSideInnerBoxContainer,
  RightSideMainBoxContainer,
  RightSideSubTitleText
} from './NewSignUp.styled';
import Button from '@mui/material/Button';
import { Raleway } from 'next/font/google';

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const NewSignUpModel = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
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
          name: '',
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
                        right: { xs: 0, md: '-782px' },
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
                      minWidth: '600px',
                      height: '100%',
                      minHeight: '700px',
                      backgroundImage: 'linear-gradient(to bottom, #07030E, #290F1E)',
                      paddingTop: '60px',
                      paddingRight: '80px',
                      paddingLeft: '80px',
                      paddingBottom: '32px'
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
                        <UINewTypography
                          fontFamily={ralewayFont.style.fontFamily}
                          sx={{ fontSize: '48px', fontWeight: 900, lineHeight: '60px', color: 'white.main' }}
                        >
                          Sign up and get <span style={{ color: '#79E028' }}>1 FREE</span> Video Call
                        </UINewTypography>

                        <UINewTypography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: 'white.main' }}>
                          Real Models, Real Pleasure, Live Now! Don’t Just Watch –{' '}
                          <span style={{ fontWeight: 800 }}>Connect, Flirt, and Enjoy!</span>
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <InputFiledInnerBoxContainer>
                          <InputTextFiledBoxContainer>
                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 1.5, flexDirection: isMdDown ? 'column' : 'row' }}>
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>{/* <FormattedMessage id="Name" /> */}</UITypographyText>
                                    <UIStyledInputText
                                      name="name"
                                      value={values.name}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      error={touched.name && Boolean(errors.name)}
                                      helperText={touched.name && errors.name ? <FormattedMessage id={errors.name} /> : ''}
                                    />
                                  </ModelUITextConatiner>{' '}
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>{/* <FormattedMessage id="Email" /> */}</UITypographyText>
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
                                <Box sx={{ display: 'flex', gap: 1.5, flexDirection: isMdDown ? 'column' : 'row' }}>
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>{/* <FormattedMessage id="Password" /> */}</UITypographyText>
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
                                    <UITypographyText>{/* <FormattedMessage id="ConfirmPassword" /> */}</UITypographyText>
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
                          </InputTextFiledBoxContainer>

                          <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                            <Checkbox
                              sx={{
                                p: 0,
                                pr: 1
                              }}
                            />
                            <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                              <FormattedMessage id="RememberMe" />
                            </UINewTypography>
                          </MenuItem>
                        </InputFiledInnerBoxContainer>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
                          <UINewTypography
                            sx={{ fontSize: '14px', fontWeight: 800, lineHeight: '24px', color: 'white.main', textDecoration: 'underline' }}
                          >
                            Have a referral Code?
                          </UINewTypography>

                          <Button
                            variant="contained"
                            sx={{ borderRadius: '100px', width: '100%', maxWidth: '440px', height: '100%', minHeight: '48px' }}
                          >
                            Join Now
                          </Button>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '70px', gap: 0.5, alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <UINewTypography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '24px', color: '#FFFFFF99' }}>
                          Have an account already?
                        </UINewTypography>
                        <UINewTypography
                          sx={{ fontSize: '14px', fontWeight: 800, lineHeight: '24px', color: 'white.main', textDecoration: 'underline' }}
                        >
                          Log in here
                        </UINewTypography>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <UINewTypography sx={{ fontSize: '14px', fontWeight: 400, lineHeight: '24px', color: '#FFFFFF99' }}>
                          Sign up as a model
                        </UINewTypography>
                        <UINewTypography
                          sx={{ fontSize: '14px', fontWeight: 800, lineHeight: '24px', color: 'primary.800', textDecoration: 'underline' }}
                        >
                          Here
                        </UINewTypography>
                      </Box>
                    </Box>
                  </Box>

                  <RightSideMainBoxContainer>
                    <RightSideInnerBoxContainer>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Box component="img" src="/images/icons/ab-icon-1.svg" />
                        <RightSideSubTitleText>
                          <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>On signup get</span>{' '}
                          <FormattedMessage id="1MinuteFreeCall"></FormattedMessage>
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Box component="img" src="/images/icons/ab-icon-2.svg" />
                        <RightSideSubTitleText>
                          <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>Talk to</span> <FormattedMessage id="1,000Models" />
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Box component="img" src="/images/icons/ab-icon-3.svg" />
                        <RightSideSubTitleText>
                          <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>Unleash yourself with</span>{' '}
                          <FormattedMessage id="Private1on1Chats" />
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Box component="img" src="/images/icons/ab-icon-4.svg" />
                        <RightSideSubTitleText>
                          <span style={{ fontWeight: 400, color: '#FFFFFF80' }}>Dont worry its</span> <FormattedMessage id="SafeSecure" />
                        </RightSideSubTitleText>
                      </Box>
                    </RightSideInnerBoxContainer>
                  </RightSideMainBoxContainer>
                </Box>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};

export default NewSignUpModel;
