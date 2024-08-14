'use client';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { useState } from 'react';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { FormattedMessage, useIntl } from 'react-intl';
import { DialogTitleBox, DividerBox, FirstBox, InputBox, InputBoxMain, MainDialogBox } from './ChangePassword.styled';
import { authServices } from 'services/guestAuth/authuser.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { getErrorMessage } from 'utils/errorUtils';

export type ChangePasswordParams = {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
};

const MyProfileChangePassword = ({ onOpen, onClose, token }: { onOpen: boolean; onClose: () => void; token: TokenIdType }) => {
  const intl = useIntl();

  const [currentPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);

  const validationSchema = yup.object({
    currentPassword: yup.string().required('CurrentPasswordIsRequired').min(8, 'EnterValidCurrentPassword').matches(PASSWORD_PATTERN, {
      message: 'EnterValidCurrentPassword',
      excludeEmptyString: true
    }),
    newPassword: yup.string().required('NewPasswordIsRequired').min(8, 'PasswordMustBe').matches(PASSWORD_PATTERN, {
      message: 'PasswordMustContainAt',
      excludeEmptyString: true
    }),
    repeatPassword: yup
      .string()
      .required('RepeatPasswordIsRequired')
      .min(8, 'PasswordMustBe')
      .oneOf([yup.ref('newPassword')], 'PasswordsMustMatch')
      .matches(PASSWORD_PATTERN, {
        message: 'PasswordMustContainAt',
        excludeEmptyString: true
      })
  });
  return (
    <Formik
      enableReinitialize
      initialValues={{
        currentPassword: '',
        newPassword: '',
        repeatPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const data = await authServices.changePassword(
            { old_password: values.currentPassword, new_password: values.newPassword },
            token.token
          );
          if (data.code === 200) {
            toast.success('Success');
            onClose();
          } else {
            const errorMessage = getErrorMessage(data?.custom_code);
            toast.error(intl.formatMessage({ id: errorMessage }));
          }
        } catch (error) {
          toast.error(ErrorMessage);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, handleReset }) => {
        return (
          <MainDialogBox
            open={onOpen}
            onClose={() => {
              handleReset();
              onClose();
            }}
            fullWidth
            scroll="body"
            sx={{
              '& .MuiPaper-root-MuiDialog-paper.MuiDialog-paperScrollBody': {
                maxWidth: '100%'
              }
            }}
          >
            <Box component="form" onSubmit={handleSubmit}>
              <DialogTitleBox id="responsive-modal-title">
                <UINewTypography variant="h6">
                  <FormattedMessage id="ChangePassword" />
                </UINewTypography>

                <IconButton
                  aria-label="close"
                  onClick={() => {
                    handleReset();
                    onClose();
                  }}
                  sx={{
                    color: (theme) => theme.palette.text.secondary
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitleBox>
              <FirstBox>
                <Box>
                  <DividerBox
                    sx={{
                      display: { sm: 'block', display: 'none' }
                    }}
                  />
                </Box>

                <InputBoxMain>
                  <InputBox>
                    <UINewTypography variant="bodySemiBold">
                      <FormattedMessage id="EnterCurrentPassword" />
                    </UINewTypography>
                    <UIStyledInputText
                      fullWidth
                      type={currentPassword ? 'text' : 'password'}
                      id="currentPassword"
                      name="currentPassword"
                      value={values.currentPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.currentPassword && Boolean(errors.currentPassword)}
                      helperText={touched.currentPassword && errors.currentPassword ? <FormattedMessage id={errors.currentPassword} /> : ''}
                      InputProps={{
                        endAdornment: (
                          <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setShowPassword(!currentPassword)}>
                            {currentPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                          </Box>
                        )
                      }}
                    />
                  </InputBox>
                  <InputBox>
                    <UINewTypography variant="bodySemiBold">
                      <FormattedMessage id="EnterNewPassword" />
                    </UINewTypography>
                    <UIStyledInputText
                      fullWidth
                      type={newPassword ? 'text' : 'password'}
                      id="newPassword"
                      name="newPassword"
                      value={values.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.newPassword && Boolean(errors.newPassword)}
                      helperText={touched.newPassword && errors.newPassword ? <FormattedMessage id={errors.newPassword} /> : ' '}
                      InputProps={{
                        endAdornment: (
                          <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setNewPassword(!newPassword)}>
                            {newPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                          </Box>
                        )
                      }}
                    />
                  </InputBox>
                  <InputBox>
                    <UINewTypography variant="bodySemiBold">
                      <FormattedMessage id="RepeatNewPassword" />
                    </UINewTypography>
                    <UIStyledInputText
                      fullWidth
                      type={repeatPassword ? 'text' : 'password'}
                      id="repeatPassword"
                      name="repeatPassword"
                      value={values.repeatPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.repeatPassword && Boolean(errors.repeatPassword)}
                      helperText={touched.repeatPassword && errors.repeatPassword ? <FormattedMessage id={errors.repeatPassword} /> : ' '}
                      InputProps={{
                        endAdornment: (
                          <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setRepeatPassword(!repeatPassword)}>
                            {repeatPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                          </Box>
                        )
                      }}
                    />
                  </InputBox>

                  <UIThemeButton variant="contained" type="submit">
                    <UINewTypography variant="buttonLargeBold">
                      <FormattedMessage id="ChangePassword" />
                    </UINewTypography>
                  </UIThemeButton>
                </InputBoxMain>
              </FirstBox>
            </Box>
          </MainDialogBox>
        );
      }}
    </Formik>
  );
};

export default MyProfileChangePassword;
