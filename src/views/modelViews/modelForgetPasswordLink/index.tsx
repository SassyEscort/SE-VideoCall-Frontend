import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RiMailLine } from 'components/common/customRemixIcons';
import { Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import * as yup from 'yup';
import { GuestAuthService } from 'services/guestAuth/guestAuth.service';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { toast } from 'react-toastify';
import { useState } from 'react';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';
import AuthModelCommon from '../modelSignup/AuthModelCommon';
import CheckInbox from './CheckInbox';

export type ForgetPasswordParams = {
  id: string;
  email: string;
};
const ModelForgetPasswordLink = ({ onClose, onLoginOpen }: { onClose: () => void; onLoginOpen: () => void }) => {
  const isSm = useMediaQuery(theme.breakpoints.down(330));

  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required')
  });

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setLoading(true);
          const data = await GuestAuthService.guestForgetPasswordLink(values);
          if (data.code === 200) {
            toast.success('Reset password link sent successfully!');
            setActiveStep(1);
          } else {
            toast.error(data.error);
          }
        } catch (error) {
          toast.error('An error occurred. Please try again.');
        } finally {
          setLoading(false);
          setSubmitting(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <AuthModelCommon
              onClose={onClose}
              image="images/model/model-signup/model-signup.webp"
              mobileImage="images/model/model-signup/model-signup.webp"
            >
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
                    <Box sx={{ display: 'flex', marginTop: { xs: '100px', sm: 0 } }}>
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
                            display: { sm: 'block' }
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
                      <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                        <UINewTypography variant="buttonLargeBold">Request link</UINewTypography>
                      </StyleButtonV2>
                    </Box>
                  </>
                ) : (
                  <CheckInbox onClose={onClose} email={values.email} />
                )}
                <Box display="flex" flexDirection="column" gap={3} pb={3} sx={{ paddingTop: { xs: 0, md: '90px' } }}>
                  <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                  <Box display="flex" gap={1} alignItems="center" justifyContent="center">
                    <UINewTypography variant="buttonLargeMenu" sx={{ whiteSpace: isSm ? 'wrap' : 'nowrap' }}>
                      Remember password?
                    </UINewTypography>
                    <UINewTypography
                      whiteSpace="nowrap"
                      variant="body"
                      sx={{ color: 'text.secondary', cursor: 'pointer' }}
                      onClick={onLoginOpen}
                    >
                      Log in instead!
                    </UINewTypography>
                  </Box>
                </Box>
              </Box>
            </AuthModelCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default ModelForgetPasswordLink;
