'use client';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadingButton } from '@mui/lab';
import { adminAuthServices } from 'services/adminAuth/authmodel.services';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';

export type ForgetPasswordEmailParams = {
  email: string;
};

const ForgotPasswordForm = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required')
  });

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const sendEmailObject = {
            email: values.email
          };
          const data = await adminAuthServices.adminForgotPassword(sendEmailObject);
          if (data.code === 200) {
            toast.success('Success');
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error(ErrorMessage);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              inputProps={{ autoFocus: true }}
              name="email"
              label="Email address"
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email ? errors.email : ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
            <LoadingButton fullWidth size="large" type="submit" variant="contained" sx={{ backgroundColor: 'secondary.1000' }}>
              Confirm
            </LoadingButton>
          </Stack>
        </Box>
      )}
    </Formik>
  );
};
export default ForgotPasswordForm;
