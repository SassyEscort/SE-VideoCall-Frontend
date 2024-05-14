'use client';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import CloseIcon from '@mui/icons-material/Close';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { useState } from 'react';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';

export type ChangePasswordParams = {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
};

const MyProfileChangePassword = ({ onClose }: { onClose: () => void }) => {
  const [currentPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);

  const validationSchema = yup.object({
    currentPassword: yup
      .string()
      .required('current Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        PASSWORD_PATTERN,
        'Invalid Password! Does not meet requirements (this password has appeared in a data breach elsewhere and should never be used on any website)'
      ),
    newPassword: yup
      .string()
      .required('New Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        PASSWORD_PATTERN,
        'Invalid Password! Does not meet requirements (this password has appeared in a data breach elsewhere and should never be used on any website)'
      ),
    repeatPassword: yup
      .string()
      .required('Repeat Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        PASSWORD_PATTERN,
        'Invalid Password! Does not meet requirements (this password has appeared in a data breach elsewhere and should never be used on any website)'
      )
  });
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <Formik
      initialValues={{
        currentPassword: '',
        newPassword: '',
        repeatPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        //submit
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Box component="form" onSubmit={handleSubmit}>
            <Box
              position="relative"
              width="100%"
              height={isSm ? '625px' : '620px'}
              gap={4}
              display="flex"
              flexDirection="column"
              sx={{
                pt: { xs: 0, sm: '50px' },
                pl: { xs: 2, md: 4 },
                pr: { xs: 2, md: 0 },
                maxWidth: { xs: '100%', md: '400px' }
              }}
            >
              <Box>
                <UINewTypography variant="MediumSemiBoldText" color="common.white">
                  Change Password
                </UINewTypography>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
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
                  <UINewTypography variant="bodySemiBold">Current Password</UINewTypography>
                  <UIStyledInputText
                    fullWidth
                    type={currentPassword ? 'text' : 'password'}
                    id="currentPassword"
                    name="currentPassword"
                    value={values.currentPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.currentPassword && Boolean(errors.currentPassword)}
                    helperText={touched.currentPassword && errors.currentPassword}
                    sx={{
                      border: '2px solid',
                      borderColor: 'secondary.light'
                    }}
                    InputProps={{
                      endAdornment: (
                        <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setShowPassword(!currentPassword)}>
                          {currentPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                        </Box>
                      )
                    }}
                  />
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" gap={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <UINewTypography variant="bodySemiBold">Enter New Password</UINewTypography>
                  <UIStyledInputText
                    fullWidth
                    type={newPassword ? 'text' : 'password'}
                    id="newPassword"
                    name="newPassword"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.newPassword && Boolean(errors.newPassword)}
                    helperText={touched.newPassword && errors.newPassword}
                    sx={{
                      border: '2px solid',
                      borderColor: 'secondary.light'
                    }}
                    InputProps={{
                      endAdornment: (
                        <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setNewPassword(!newPassword)}>
                          {newPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                        </Box>
                      )
                    }}
                  />
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" gap={3}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <UINewTypography variant="bodySemiBold">Repeat New Password</UINewTypography>
                  <UIStyledInputText
                    fullWidth
                    type={repeatPassword ? 'text' : 'password'}
                    id="repeatPassword"
                    name="repeatPassword"
                    value={values.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.repeatPassword && Boolean(errors.repeatPassword)}
                    helperText={touched.repeatPassword && errors.repeatPassword}
                    sx={{
                      border: '2px solid',
                      borderColor: 'secondary.light'
                    }}
                    InputProps={{
                      endAdornment: (
                        <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setRepeatPassword(!repeatPassword)}>
                          {repeatPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                        </Box>
                      )
                    }}
                  />
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" gap={3}>
                <UIThemeButton variant="contained" type="submit">
                  <UINewTypography variant="buttonLargeBold">Change Password</UINewTypography>
                </UIThemeButton>
              </Box>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};

export default MyProfileChangePassword;
