import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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
import {
  ForgetPasswordLinkMainContainer,
  IconBoxConatiner,
  IconButtonConatiner,
  InputTypeFristEmailBox,
  InputTypeSecondEmailBox,
  RememberpasswordSecondBox,
  RememberpasswordfirstBox,
  RequestlinkBox,
  RestePasswordBox
} from './ModelForgetPasswordLink.styled';

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
              <ForgetPasswordLinkMainContainer>
                {activeStep === 0 ? (
                  <>
                    <Box sx={{ display: 'flex', marginTop: { xs: '100px', sm: 0 } }}>
                      <RestePasswordBox>
                        <UINewTypography variant="MediumSemiBoldText" color="common.white">
                          Reset password
                        </UINewTypography>
                        <UINewTypography variant="bodyRegular" color="secondary.200" textAlign="center">
                          Enter your email and we&apos;ll send you instructions on how to reset your password.
                        </UINewTypography>
                      </RestePasswordBox>
                      <IconBoxConatiner>
                        <IconButtonConatiner size="large" onClick={onClose}>
                          <CloseIcon />
                        </IconButtonConatiner>
                      </IconBoxConatiner>
                    </Box>

                    <InputTypeFristEmailBox>
                      <InputTypeSecondEmailBox>
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
                      </InputTypeSecondEmailBox>
                    </InputTypeFristEmailBox>

                    <RequestlinkBox>
                      <StyleButtonV2 variant="contained" type="submit" loading={loading}>
                        <UINewTypography variant="buttonLargeBold">Request link</UINewTypography>
                      </StyleButtonV2>
                    </RequestlinkBox>
                  </>
                ) : (
                  <CheckInbox onClose={onClose} email={values.email} />
                )}
                <RememberpasswordfirstBox>
                  <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                  <RememberpasswordSecondBox>
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
                  </RememberpasswordSecondBox>
                </RememberpasswordfirstBox>
              </ForgetPasswordLinkMainContainer>
            </AuthModelCommon>
          </Box>
        );
      }}
    </Formik>
  );
};

export default ModelForgetPasswordLink;
