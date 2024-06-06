import { FormattedMessage } from 'react-intl';
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

const MyProfileContainer = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  token
}: {
  values: MyProfile;
  handleChange: (e: any) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  errors: FormikErrors<MyProfile>;
  touched: FormikTouched<MyProfile>;
  token: TokenIdType;
}) => {
  const router = useRouter();

  const url = new URL(window.location.href);
  const email = url.searchParams.get('email');

  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const sendLinkVerify = async () => {
    try {
      const data = await authServices.emailVerifyLink({ email: values.email }, token.token);
      if (data.code === 200) {
        setOpen(true);
        setActiveStep(1);
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleClose = () => {
    setActiveStep(0);
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
          toast.success(res.message);
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
  }, [token, email]);

  return (
    <>
      <Box sx={{ mb: 3 }}>
        <UINewTypography variant="h2" color="text.secondary">
          <FormattedMessage id="MyProfile" />
        </UINewTypography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <InputTypeBox>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <Box>
              <ProfileTextHeader variant="bodySemiBold" color="text.primary">
                <FormattedMessage id="Username" />
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
          </Box>
        </InputTypeBox>

        <InputTypeBox>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
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
                    <Box sx={{ display: 'flex', gap: 2, cursor: 'pointer' }}>
                      <UINewTypography color={'text.secondary'} variant="buttonSmallBold" onClick={handleEditClick}>
                        <FormattedMessage id="Edit" />
                      </UINewTypography>

                      <UINewTypography
                        color="primary.600"
                        variant="buttonSmallBold"
                        onClick={() => {
                          sendLinkVerify();
                        }}
                      >
                        <FormattedMessage id="Verify" />
                      </UINewTypography>
                    </Box>
                  )
                }}
              />

              {activeStep === 1 && (
                <GuestStyleComponent scroll="body" open={open} onClose={handleClose} maxWidth="md" fullWidth>
                  <CheckInboxVerify onOpen={open} onClose={handleClose} email={values.email} />
                </GuestStyleComponent>
              )}
            </Box>
          </Box>
        </InputTypeBox>

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
                    <Box>
                      <UINewTypography variant="buttonSmallBold" color="text.secondary">
                        <FormattedMessage id="Change" />
                      </UINewTypography>
                    </Box>
                  )
                }}
              />
            </Box>
          </Box>
        </InputTypeBox>
      </Box>
    </>
  );
};

export default MyProfileContainer;
