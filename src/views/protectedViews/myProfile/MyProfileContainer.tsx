import { FormattedMessage, useIntl } from 'react-intl';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { InputTypeBox, ProfileTextHeader } from './MyProfile.styled';
import { FormikErrors, FormikTouched } from 'formik';
import { MyProfile } from '.';
import { toast } from 'react-toastify';
import { authServices } from 'services/guestAuth/authuser.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { GuestStyleComponent } from 'views/guestViews/guestLayout/GuestLayout.styled';
import CheckInboxVerify from 'views/modelViews/checkInBox';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ErrorMessage } from 'constants/common.constants';
import MyProfileChangePassword from './MyProfileChangePassword';
import { InnerBox, MainContainer, MyProfileTitle, VerifiedColumn } from './MyProfileContainer.styled';
import { getErrorMessage } from 'utils/errorUtils';

const MyProfileContainer = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  token,
  isEmailVerified
}: {
  values: MyProfile;
  handleChange: (e: any) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<MyProfile>;
  touched: FormikTouched<MyProfile>;
  token: TokenIdType;
  isEmailVerified: number;
}) => {
  const router = useRouter();
  const intl = useIntl();

  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const sendLinkVerify = async () => {
    touched.email = true;
    try {
      if (!errors.email && token.token) {
        const data = await authServices.emailVerifyLink({ email: values.email }, token.token);

        if (data.code === 200) {
          setOpen(true);
          setActiveStep(1);
          toast.success('Success');
        } else {
          const errorMessage = getErrorMessage(data?.custom_code);
          toast.error(intl.formatMessage({ id: errorMessage }));
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

  const verifyEmail = useCallback(async () => {
    const verificationCode = url.searchParams.get('code');

    const payload = {
      email: String(email),
      verification_code: String(verificationCode)
    };

    try {
      if (Boolean(token.token && payload)) {
        const res = await authServices.emailVerify(payload, token.token);
        if (res.code === 200) {
          toast.success('Success');
        } else {
          toast.error(res.message);
        }
        router.push('/profile');
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, token.token, url.pathname]);

  useEffect(() => {
    if (email && token.token && !isVerified) {
      verifyEmail();
      setIsVerified(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                      <UINewTypography color={'text.secondary'} variant="buttonSmallBold" onClick={handleEditClick}>
                        <FormattedMessage id="Edit" />
                      </UINewTypography>

                      <UINewTypography
                        color={isEmailVerified === 1 ? 'green' : 'primary.600'}
                        variant="buttonSmallBold"
                        onClick={() => {
                          if (isEmailVerified !== 1) sendLinkVerify();
                        }}
                      >
                        {isEmailVerified === 1 ? <FormattedMessage id="Verified" /> : <FormattedMessage id="Verify" />}
                      </UINewTypography>
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
