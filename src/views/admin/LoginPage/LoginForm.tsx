'use client';
import { useState } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadingButton } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import { ErrorBox } from 'views/auth/AuthCommon.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import InfoIcon from '@mui/icons-material/Info';
import getCustomErrorMessage from 'utils/error.utils';
import { AdminLoginParams } from 'services/adminAuth/types';
import { LoginPageFirstTextBox } from './LoginPage.styled';

export default function LoginForm() {
  const route = useRouter();
  const { push } = route;
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState('');

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required')
  });

  const handleFormSubmit = async (values: AdminLoginParams) => {
    try {
      setLoading(true);
      const res = await signIn('providerAdmin', { redirect: false, email: values.email, password: values.password });
      if (res?.status === 200) {
        push('/admin');
      } else if (res?.error) {
        setAlert(res.error === 'CredentialsSignin' ? 'Invalid email or password' : 'Something went wrong! Please try again');
      }
    } catch (error: any) {
      setAlert(getCustomErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values: AdminLoginParams) => handleFormSubmit(values)}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ color: 'primary.main' }}>
              {alert && (
                <ErrorBox p={1}>
                  <InfoIcon />
                  <UINewTypography>{alert}</UINewTypography>
                </ErrorBox>
              )}
            </Box>
            <Stack spacing={3} sx={{ mt: 3 }}>
              <LoginPageFirstTextBox
                inputProps={{ autoFocus: true }}
                name="email"
                label="Email address"
                value={values.email}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email ? errors.email : ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <LoginPageFirstTextBox
                name="password"
                label="Password"
                value={values.password}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password ? errors.password : ''}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={loading}
                sx={{ backgroundColor: 'secondary.1000' }}
              >
                Login
              </LoadingButton>
            </Stack>
          </form>
        )}
      </Formik>
      <Typography sx={{ color: 'primary.main', textAlign: 'center', fontWeight: 700 }}>
        <Link prefetch={false} href="/admin/forgot-password" passHref shallow={true}>
          <MuiLink
            sx={{
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#2f2e2e'
            }}
          >
            Forgot my password
          </MuiLink>
        </Link>
      </Typography>
    </>
  );
}
