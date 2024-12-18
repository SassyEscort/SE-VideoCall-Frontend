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
import { ModelUITextConatiner, UITypographyText } from 'views/auth/AuthCommon.styled';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {
  BenefitsTextTypography,
  ButtonBoxContainer,
  ButtonInnerBoxContainer,
  DescriptionTextBox,
  DescriptionTextContainer,
  DescriptionTextInner2Box,
  DescriptionTextTypography,
  FooterMainBoxContainer,
  GetFreeCallTextTypography,
  HeadingTextMainBoxContainer,
  InputFiledInnerBoxContainer,
  InputFiledMainBoxContainer,
  JoinForFreeTextTypography,
  LoginTextBoxContainer,
  ModelInnerBoxContainer,
  ModelMainBoxContainer
} from '../abRegister2User/abRegister2User.styled';
import { JoinNowButtonContainer } from '../abRegister1Model/abRegister1Model.styled';

const ABLogin2Model = ({ onClose }: { onClose: () => void }) => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);

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
                  <ModelMainBoxContainer>
                    <ModelInnerBoxContainer>
                      <HeadingTextMainBoxContainer>
                        <JoinForFreeTextTypography>Join Now for FREE!</JoinForFreeTextTypography>
                        <GetFreeCallTextTypography>Earn on Your Terms!</GetFreeCallTextTypography>
                      </HeadingTextMainBoxContainer>

                      <InputFiledMainBoxContainer>
                        <InputFiledInnerBoxContainer>
                          <InputFiledMainBoxContainer>
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
                          </InputFiledMainBoxContainer>

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
                              <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' } }}>
                                <FormattedMessage id="RememberMe" />
                              </UINewTypography>
                            </Box>
                            <UINewTypography
                              variant="buttonLargeMenu"
                              color="primary.400"
                              sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}
                              onClick={() => {}}
                            >
                              <FormattedMessage id="ForgotPassword" />
                            </UINewTypography>
                          </MenuItem>
                        </InputFiledInnerBoxContainer>

                        <ButtonBoxContainer>
                          <JoinNowButtonContainer variant="contained" type="submit">
                            Join Now
                          </JoinNowButtonContainer>
                          <ButtonInnerBoxContainer>
                            <UINewTypography variant="bodyRegular">
                              Have an account already?
                              <LoginTextBoxContainer> Log in here</LoginTextBoxContainer>
                            </UINewTypography>
                          </ButtonInnerBoxContainer>
                        </ButtonBoxContainer>
                      </InputFiledMainBoxContainer>
                    </ModelInnerBoxContainer>
                    <FooterMainBoxContainer>
                      <BenefitsTextTypography>Unlock the Benefits!</BenefitsTextTypography>

                      <DescriptionTextBox>
                        <DescriptionTextInner2Box>
                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/earn1-icon.svg" />
                            <DescriptionTextTypography>Earn Money From Anywhere</DescriptionTextTypography>
                          </DescriptionTextContainer>

                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/secure1-icon.svg" />
                            <DescriptionTextTypography>Secure Payouts</DescriptionTextTypography>
                          </DescriptionTextContainer>
                        </DescriptionTextInner2Box>
                        <DescriptionTextInner2Box>
                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/global1-icon.svg" />
                            <DescriptionTextTypography>Global Audience</DescriptionTextTypography>
                          </DescriptionTextContainer>

                          <DescriptionTextContainer>
                            <Box component="img" src="/images/icons/support1-icon.svg" />
                            <DescriptionTextTypography>Dedicated Support</DescriptionTextTypography>
                          </DescriptionTextContainer>
                        </DescriptionTextInner2Box>
                      </DescriptionTextBox>
                    </FooterMainBoxContainer>
                  </ModelMainBoxContainer>
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
