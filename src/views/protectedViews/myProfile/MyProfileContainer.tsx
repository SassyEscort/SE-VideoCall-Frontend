import { FormattedMessage } from 'react-intl';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { InputTypeBox, ProfileTextHeader } from './MyProfile.styled';
import { FormikErrors, FormikTouched } from 'formik';
import { MyProfile } from '.';
import { toast } from 'react-toastify';
// import { authServices } from 'services/guestAuth/authuser.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { GuestStyleComponent } from 'views/guestViews/guestLayout/GuestLayout.styled';
import CheckInboxVerify from 'views/modelViews/checkInBox';
import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import { ErrorMessage } from 'constants/common.constants';
import MyProfileChangePassword from './MyProfileChangePassword';
import { InnerBox, MainContainer, MyProfileTitle, VerifiedColumn } from './MyProfileContainer.styled';
import { customerVerificationService } from 'services/customerVerification/customerVerification.services';
// import { getErrorMessage } from 'utils/errorUtils';
import DoneIcon from '@mui/icons-material/Done';
import { useRouter } from 'next/navigation';

const MyProfileContainer = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  token,
  isEmailVerified,
  isPhoneNumberVerified
}: {
  values: MyProfile;
  handleChange: (e: any) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<MyProfile>;
  touched: FormikTouched<MyProfile>;
  token: TokenIdType;
  isEmailVerified: number;
  isPhoneNumberVerified: number;
}) => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [isNumberEditable, setIsNumberEditable] = useState(false);
  const [isEmailOptSent, setIsEmailOptSent] = useState(false);

  const route = useRouter();
  const { refresh } = route;

  const sendLinkVerify = async () => {
    touched.email = true;
    setIsEmailOptSent(true);
    try {
      if (!errors.email && token.token) {
        try {
          const res = await customerVerificationService.sendEmailOtp({ email: values.email }, token.token);
          if (res.code === 200) {
            toast.success('Success');
            setOpen(true);
            setActiveStep(1);
            handleEditClick();
          } else {
            toast.error(res.message);
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
    touched.email = true;
    setIsEmailOptSent(true);
    try {
      if (!errors.email && token.token) {
        try {
          const res = await customerVerificationService.sendPhoneOtp({ phone_number: values.phone }, token.token);
          if (res.code === 200) {
            toast.success('Success');
            setOpen(true);
            setActiveStep(1);
          } else {
            toast.error(res.message);
          }
        } catch (error) {
          toast.error(ErrorMessage);
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleClose = () => {
    setActiveStep(0);
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
          toast.success('Success');
          setIsEmailOptSent(false);
          setIsEditable(false);
          refresh();
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
      phone_number: String(values.phone),
      otp: String(values.phoneOtp)
    };

    try {
      if (Boolean(token.token && payload)) {
        const res = await customerVerificationService.phoneVerify(payload, token.token);

        if (res.code === 200) {
          toast.success('Success');
          setIsEmailOptSent(false);
          setIsEditable(false);
          setIsNumberEditable(false);
          refresh();
        } else {
          toast.error('Invalid OTP');
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  // const changePasswordOpenModel = () => {
  //   setOpenModel(true);
  // };

  // console.log(values.emailOtp, 'values.emailOtp');
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

                      {(!isEmailOptSent || isEditable) && (
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

              {activeStep === 1 && (
                <GuestStyleComponent scroll="body" open={open} onClose={handleClose} maxWidth="md" fullWidth>
                  <CheckInboxVerify onOpen={open} onClose={handleClose} email={values.email} />
                </GuestStyleComponent>
              )}
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
                            {/* {isEmailVerified === 1 ? <FormattedMessage id="Verified" /> : <FormattedMessage id="Verify" />} */}
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
            <Box>
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

                      {(!isEmailOptSent || isNumberEditable) && (
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

              {activeStep === 1 && (
                <GuestStyleComponent scroll="body" open={open} onClose={handleClose} maxWidth="md" fullWidth>
                  <CheckInboxVerify onOpen={open} onClose={handleClose} email={values.email} />
                </GuestStyleComponent>
              )}
            </Box>
            {isEmailOptSent && (
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
                            color={isEmailVerified === 1 && !isEditable ? 'green' : 'primary.400'}
                            variant="buttonSmallBold"
                            onClick={() => {
                              if (isEmailVerified !== 1 || isEditable) handelVerfifyPhoneOtp();
                            }}
                          >
                            Confirm
                            {/* {isEmailVerified === 1 ? <FormattedMessage id="Verified" /> : <FormattedMessage id="Verify" />} */}
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
