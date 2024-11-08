import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { ErrorMessage } from 'constants/common.constants';
import { PASSWORD_PATTERN } from 'constants/regexConstants';
import { RiEyeLine, RiEyeOffLine } from 'components/common/customRemixIcons';
import { adminUserServices } from 'services/adminUserService/adminUserServices';

const UpdateUserPassword = ({ open, onClose, userId }: { userId: number; open: boolean; onClose: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handleFormSubmit = async (password: string) => {
    setIsLoading(true);

    try {
      if (token.token && userId) {
        const res = await adminUserServices.updateUserPassword(userId, { password: password }, token.token);
        if (res && res.code === 200) {
          toast.success('Password updated successfully');
          onClose();
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        id="responsive-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant="subtitle">Update Password</Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleFormSubmit(values.password);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Box component="form" onSubmit={handleSubmit}>
              <DialogContent dividers>
                <Stack
                  spacing={2}
                  sx={{
                    '& .MuiFormHelperText-root': {
                      marginLeft: 0
                    }
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Password
                  </Typography>
                  <TextField
                    name="password"
                    label="Password"
                    type={showNewPassword ? 'text' : 'password'}
                    value={values.password}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password ? errors.password : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      endAdornment: (
                        <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setShowNewPassword(!showNewPassword)}>
                          {showNewPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                        </Box>
                      )
                    }}
                  />

                  <Typography variant="h6" gutterBottom>
                    Confirm Password
                  </Typography>
                  <TextField
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    label="Confirm Password"
                    error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      endAdornment: (
                        <Box sx={{ cursor: 'pointer', display: 'flex' }} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          {showConfirmPassword ? <RiEyeLine color="#86838A" /> : <RiEyeOffLine color="#86838A" />}
                        </Box>
                      )
                    }}
                  />
                </Stack>
              </DialogContent>
              <DialogActions sx={{ px: 3, py: 2 }}>
                <Button variant="outlined" size="large" onClick={onClose}>
                  Cancel
                </Button>
                <LoadingButton loading={isLoading} size="large" type="submit" variant="contained" color="primary">
                  Update Password
                </LoadingButton>
              </DialogActions>
            </Box>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default UpdateUserPassword;
