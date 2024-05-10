import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { RiMailLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import * as yup from 'yup';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { toast } from 'react-toastify';
import { useState } from 'react';
import AuthCommon from '../AuthCommon';
import CheckInbox from './CheckInbox';

export type ForgetPasswordParams = {
  email: string;
};
const GuestForgetPasswordLink = ({ onClose }: { onClose: () => void }) => {
  const isSm = useMediaQuery(theme.breakpoints.down(330));

  const [activeStep, setActiveStep] = useState(0);

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required')
  });

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const data = await GuestAuthService.guestForgetPasswordLink(values);
        if (data.code === 200) {
          setActiveStep(1);
          toast.success('Reset password link sent successfully!');
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthCommon onClose={onClose} image="images/auth/auth-model.webp" mobileImage="images/auth/auth-model.webp">
              <Box
                position="relative"
                width="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                sx={{
                  pt: { xs: 0, sm: '126.5px' },
                  pl: { xs: 2, md: 4 },
                  pr: { xs: 2, md: 0 },
                  maxWidth: { xs: '100%', md: '400px' },
                  gap: { xs: 5, sm: 4 }
                }}
              >
                {activeStep === 0 ? (
                  <>
                    <Box>
                      <Box display="flex" flexDirection="column" gap="12px" alignItems="center">
                        <UINewTypography variant="MediumSemiBoldText" color="common.white">
                          Reset password
                        </UINewTypography>
                        <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
                          Enter your email and we&apos;ll send you instructions on how to reset your password.
                        </UINewTypography>
                      </Box>
                      <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
                        <IconButton
                          size="large"
                          sx={{
                            color: 'common.white',
                            position: 'absolute',
                            top: 0,
                            right: { xs: 0, md: '-84px' },
                            display: { xs: 'none', sm: 'block' }
                          }}
                          onClick={onClose}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={3}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <UINewTypography variant="bodySemiBold">Email address</UINewTypography>
                        <UIStyledInputText
                          fullWidth
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                          sx={{
                            border: '2px solid',
                            borderColor: 'secondary.light'
                          }}
                          InputProps={{
                            endAdornment: <RiMailLine color="#86838A" />
                          }}
                        />
                      </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" width="100%" gap="28px">
                      <UIThemeButton variant="contained" type="submit">
                        <UINewTypography variant="buttonLargeBold">Request link</UINewTypography>
                      </UIThemeButton>
                    </Box>
                  </>
                ) : (
                  <CheckInbox onClose={onClose} email={values.email} />
                )}
                <Box display="flex" flexDirection="column" gap={3} pb={3}>
                  <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                  <Box display="flex" gap={1} alignItems="center" justifyContent="center">
                    <UINewTypography variant="buttonLargeMenu" sx={{ whiteSpace: isSm ? 'wrap' : 'nowrap' }}>
                      Remember password?
                    </UINewTypography>
                    <Link prefetch={false} href="/login" shallow={true} style={{ textDecoration: 'underline' }}>
                      <UINewTypography whiteSpace="nowrap" variant="body" sx={{ color: 'text.secondary' }}>
                        Log in instead!
                      </UINewTypography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </AuthCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default GuestForgetPasswordLink;
