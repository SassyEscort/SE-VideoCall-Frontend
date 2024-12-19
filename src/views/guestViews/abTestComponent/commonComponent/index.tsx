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
import Link from 'next/link';
import { ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {
  DescriptionTextTypography,
  EarnTaxtTypography,
  FooterMainBoxContainer,
  HeadingBoxContainer,
  HeadingInnerBoxContainer,
  InputFiledInnerBoxContainer,
  InputFiledMainBoxContainer,
  InputTextFiledBoxContainer,
  JoiForFreeTextTypography,
  JoinNowButtonContainer,
  LeftSideInnerBoxContainer,
  LeftSideMainBoxContainer,
  LoginHereTextBoxContainer,
  LoginHereTextMainBoxContainer,
  RightSideInnerBoxContainer,
  RightSideMainBoxContainer,
  RightSideMainTitleText,
  RightSideSubTitleText
} from '../abRegister1Model/abRegister1Model.styled';

const ABTestSignUpUser = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
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
                        right: { xs: 0, md: '-818px' },
                        display: { sm: 'block' }
                      }}
                      onClick={onClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <LeftSideMainBoxContainer>
                    <LeftSideInnerBoxContainer>
                      <HeadingBoxContainer>
                        <Box component="img" src="/images/logo-footer.png" width={272} height={54} />
                        <HeadingInnerBoxContainer>
                          <Box>
                            <EarnTaxtTypography>
                              <FormattedMessage id="FREECall" />
                            </EarnTaxtTypography>
                            <JoiForFreeTextTypography>
                              <FormattedMessage id="JoinNowForFREE" />
                            </JoiForFreeTextTypography>
                          </Box>
                          <DescriptionTextTypography>
                            <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                              <FormattedMessage id="RealModelsRealPleasure" />
                            </span>
                            <span style={{ display: 'block' }}>
                              <FormattedMessage id="Don’tJustWatch" />
                            </span>
                          </DescriptionTextTypography>
                        </HeadingInnerBoxContainer>
                      </HeadingBoxContainer>

                      <InputFiledMainBoxContainer>
                        <InputFiledInnerBoxContainer>
                          <InputTextFiledBoxContainer>
                            <Box>
                              <ModelUITextConatiner gap={0.5}>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: isMdDown ? 'column' : 'row' }}>
                                  <ModelUITextConatiner sx={{ gap: 0.5, width: '100%' }}>
                                    <UITypographyText>
                                      <FormattedMessage id="Name" />
                                    </UITypographyText>
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
                          </InputTextFiledBoxContainer>

                          <MenuItem sx={{ p: 0, gap: { xs: '0', sm: '1' } }}>
                            <Checkbox sx={{ p: 0, pr: 1 }} />
                            <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                              <FormattedMessage id="RememberMe" />
                            </UINewTypography>
                          </MenuItem>
                        </InputFiledInnerBoxContainer>

                        <FooterMainBoxContainer>
                          <JoinNowButtonContainer variant="contained">
                            <FormattedMessage id="JoinNow" />
                          </JoinNowButtonContainer>
                          <LoginHereTextMainBoxContainer>
                            <UINewTypography variant="bodyRegular">
                              <FormattedMessage id="HaveAnAccount" />
                              <LoginHereTextBoxContainer component="span" onClick={onLoginOpen}>
                                {' '}
                                <FormattedMessage id="LogInHere" />
                              </LoginHereTextBoxContainer>
                            </UINewTypography>
                            <UINewTypography variant="bodyRegular">
                              <FormattedMessage id="SignUpAsAModel" />{' '}
                              <Box component="span" sx={{ fontWeight: 800, color: 'primary.100' }}>
                                <Link href="/">
                                  <FormattedMessage id="Here" />
                                </Link>
                              </Box>
                            </UINewTypography>
                          </LoginHereTextMainBoxContainer>
                        </FooterMainBoxContainer>
                      </InputFiledMainBoxContainer>
                    </LeftSideInnerBoxContainer>
                  </LeftSideMainBoxContainer>
                  <RightSideMainBoxContainer>
                    <RightSideMainTitleText>
                      <FormattedMessage id="UnlockTheBenefits" />
                    </RightSideMainTitleText>
                    <RightSideInnerBoxContainer>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-1.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="1MinuteFreeCall"></FormattedMessage>
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-2.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="1,000Models" />
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-3.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="Private1on1Chats" />
                        </RightSideSubTitleText>
                      </Box>

                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box component="img" src="/images/icons/ab-icon-4.svg" />
                        <RightSideSubTitleText>
                          <FormattedMessage id="SafeSecure" />
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

export default ABTestSignUpUser;
