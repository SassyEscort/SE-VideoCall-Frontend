import { FormattedMessage, useIntl } from 'react-intl';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { InputTypeBox, ProfileTextHeader } from './MyProfile.styled';
import { FormikErrors, FormikTouched } from 'formik';
import { MyProfile } from '.';
import { toast } from 'react-toastify';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { useState } from 'react';
import { ErrorMessage } from 'constants/common.constants';
import MyProfileChangePassword from './MyProfileChangePassword';
import { InnerBox, MainContainer, MyProfileTitle, VerifiedColumn } from './MyProfileContainer.styled';
import { customerVerificationService } from 'services/customerVerification/customerVerification.services';
import DoneIcon from '@mui/icons-material/Done';
import CountryCodeSelect from 'components/UIComponents/CountryCode';

const MyProfileContainer = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  token,
  isEmailVerified,
  isPhoneNumberVerified,
  FetchCustomerDetails
}: {
  values: MyProfile;
  handleChange: (e: any) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<MyProfile>;
  touched: FormikTouched<MyProfile>;
  token: TokenIdType;
  isEmailVerified: number;
  isPhoneNumberVerified: number;
  FetchCustomerDetails: () => void;
}) => {
  const [openModel, setOpenModel] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isNumberEditable, setIsNumberEditable] = useState(false);
  const [isEmailOptSent, setIsEmailOptSent] = useState(false);
  const [isPhoneOptSent, setIsPhoneOptSent] = useState(false);
  const [countryCode, setCountryCode] = useState<any>(null);

  const intl = useIntl();

  const sendLinkVerify = async () => {
    touched.email = true;
    setIsEmailOptSent(true);
    setIsEditable(false);
    try {
      if (!errors.email && token.token) {
        try {
          const res = await customerVerificationService.sendEmailOtp({ email: values.email }, token.token);
          if (res.code === 200) {
            toast.success(intl.formatMessage({ id: 'OTPSendOnYourEmail' }));
          } else {
            toast.error(res?.response?.data?.error || 'Something went wrong');
          }
        } catch (error) {
          toast.error(ErrorMessage);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const sendPhoneOtp = async () => {
    touched.phone = true;
    setIsNumberEditable(false);
    try {
      if (!errors.phone && token.token) {
        try {
          if (countryCode) {
            const res = await customerVerificationService.sendPhoneOtp({ phone_number: countryCode.phone + values.phone }, token.token);
            if (res.code === 200) {
              toast.success('OTP sent successfully');
              setIsPhoneOptSent(true);
            } else {
              if (res?.response?.data?.custom_code == 3015) toast.error('Phone number already exist');
              else toast.error('Something went wrong');
            }
          } else {
            toast.error('Country code is required');
          }
        } catch (error) {
          toast.error(ErrorMessage);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleClsoeModel = () => {
    setOpenModel(false);
  };
  const handleEditClick = () => {
    setIsEditable(true);
  };
  const handleNumberEditClick = () => {
    setIsNumberEditable(true);
  };

  const handelVerfifyEmailOtp = async () => {
    const payload = {
      email: String(values.email),
      otp: String(values.emailOtp)
    };

    try {
      if (Boolean(token.token && payload)) {
        const res = await customerVerificationService.emailVerify(payload, token.token);

        if (res.code === 200) {
          toast.success('Email verified successfully');
          setIsEmailOptSent(false);
          setIsEditable(false);
          FetchCustomerDetails();
        } else {
          toast.error('Invalid OTP');
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };
  const handelVerfifyPhoneOtp = async () => {
    const payload = {
      phone_number: String(countryCode.phone + values.phone),
      otp: String(values.phoneOtp)
    };
    try {
      if (Boolean(token.token && payload)) {
        const res = await customerVerificationService.phoneVerify(payload, token.token);

        if (res.code === 200) {
          toast.success('Phone number verified successfully');
          setIsPhoneOptSent(false);
          setIsEditable(false);
          setIsNumberEditable(false);
          FetchCustomerDetails();
        } else {
          toast.error('Invalid OTP');
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleChangeCountryTel1 = (value: any) => {
    setCountryCode(value);
  };

  // const changePasswordOpenModel = () => {
  //   setOpenModel(true);
  // };

  return (
    <>
      <MyProfileTitle>
        <UINewTypography variant="h2" color="text.secondary">
          <FormattedMessage id="MyProfile" />
        </UINewTypography>
      </MyProfileTitle>
      <MainContainer>
        <InputTypeBox>
          <InnerBox>
            <Box>
              <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                <FormattedMessage id="Name" />
              </ProfileTextHeader>
            </Box>
            <Box>
              <UIStyledInputText
                fullWidth
                id="username"
                name="username"
                disabled={isEmailVerified === 0 || isPhoneNumberVerified === 0}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
            </Box>
          </InnerBox>
        </InputTypeBox>

        <InputTypeBox>
          <InnerBox>
            <Box>
              <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                <FormattedMessage id="Email" />
              </ProfileTextHeader>
            </Box>
            <Box>
              <UIStyledInputText
                fullWidth
                disabled={!isEditable}
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                InputProps={{
                  endAdornment: (
                    <VerifiedColumn>
                      {isEmailVerified !== 1 && (
                        <UINewTypography color={'text.secondary'} variant="buttonSmallBold" onClick={handleEditClick}>
                          <FormattedMessage id="Edit" />
                        </UINewTypography>
                      )}

                      {(!isEmailOptSent || isEditable) && !isPhoneOptSent && (
                        <UINewTypography
                          color={isEmailVerified === 1 && !isEditable ? 'green' : 'primary.400'}
                          variant="buttonSmallBold"
                          onClick={() => {
                            if (isEmailVerified !== 1 || isEditable) sendLinkVerify();
                          }}
                        >
                          {isEmailVerified === 1 && !isEditable ? <DoneIcon /> : <FormattedMessage id="Verify" />}
                        </UINewTypography>
                      )}
                    </VerifiedColumn>
                  )
                }}
              />
            </Box>
            {isEmailOptSent && (
              <>
                <Box>
                  <UIStyledInputText
                    fullWidth
                    id="emailOtp"
                    name="emailOtp"
                    value={values.emailOtp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter OTP"
                    InputProps={{
                      endAdornment: (
                        <VerifiedColumn>
                          <UINewTypography
                            color={isEmailVerified === 1 && !isEditable ? 'green' : 'primary.400'}
                            variant="buttonSmallBold"
                            onClick={() => {
                              if (isEmailVerified !== 1 || isEditable) handelVerfifyEmailOtp();
                            }}
                          >
                            Confirm
                          </UINewTypography>
                        </VerifiedColumn>
                      )
                    }}
                  />
                </Box>
                {/* <UINewTypography
                  color={isEmailVerified === 1 && !isEditable ? 'primary.400' : 'secondary.700'}
                  variant="buttonSmallBold"
                  onClick={() => {
                    if (isEmailVerified !== 1 || isEditable) sendLinkVerify();
                  }}
                >
                  Resend
                </UINewTypography> */}
              </>
            )}
          </InnerBox>
        </InputTypeBox>

        <InputTypeBox>
          <InnerBox>
            <Box>
              <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                <FormattedMessage id="phoneNumber" />
              </ProfileTextHeader>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 1 }}>
              {isPhoneNumberVerified !== 1 && (
                <CountryCodeSelect
                  disabled={!isNumberEditable}
                  values={countryCode}
                  handleChange={handleChangeCountryTel1}
                ></CountryCodeSelect>
              )}
              <UIStyledInputText
                fullWidth
                disabled={!isNumberEditable}
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Add Phone number"
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                InputProps={{
                  endAdornment: (
                    <VerifiedColumn>
                      {isPhoneNumberVerified !== 1 && (
                        <UINewTypography color={'text.secondary'} variant="buttonSmallBold" onClick={handleNumberEditClick}>
                          <FormattedMessage id="Edit" />
                        </UINewTypography>
                      )}

                      {(!isPhoneOptSent || isNumberEditable) && !isEmailOptSent && (
                        <UINewTypography
                          color={isPhoneNumberVerified === 1 && !isEditable ? 'green' : 'primary.400'}
                          variant="buttonSmallBold"
                          onClick={() => {
                            if (isPhoneNumberVerified !== 1 || isEditable) sendPhoneOtp();
                          }}
                        >
                          {isPhoneNumberVerified === 1 && !isEditable ? <DoneIcon /> : <FormattedMessage id="Verify" />}
                        </UINewTypography>
                      )}
                    </VerifiedColumn>
                  )
                }}
              />
            </Box>
            {isPhoneOptSent && (
              <>
                <Box>
                  <UIStyledInputText
                    fullWidth
                    id="phoneOtp"
                    name="phoneOtp"
                    value={values.phoneOtp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter OTP"
                    InputProps={{
                      endAdornment: (
                        <VerifiedColumn>
                          <UINewTypography
                            color={isPhoneNumberVerified === 1 && !isEditable ? 'green' : 'primary.400'}
                            variant="buttonSmallBold"
                            onClick={() => {
                              if (isPhoneNumberVerified !== 1 || isEditable) handelVerfifyPhoneOtp();
                            }}
                          >
                            Confirm
                          </UINewTypography>
                        </VerifiedColumn>
                      )
                    }}
                  />
                </Box>
              </>
            )}
          </InnerBox>
        </InputTypeBox>

        {/* 
        <InputTypeBox>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Box>
              <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                <FormattedMessage id="Password" />
              </ProfileTextHeader>
            </Box>
            <Box>
              <UIStyledInputText
                type="password"
                fullWidth
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <Box onClick={changePasswordOpenModel} sx={{ cursor: 'pointer' }}>
                      <UINewTypography variant="buttonSmallBold" color="text.secondary">
                        <FormattedMessage id="Change" />
                      </UINewTypography>
                    </Box>
                  )
                }}
              />
            </Box>
          </Box>
        </InputTypeBox> */}
      </MainContainer>
      <MyProfileChangePassword onOpen={openModel} onClose={handleClsoeModel} token={token} />
    </>
  );
};

export default MyProfileContainer;
