'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Formik } from 'formik';
import * as yup from 'yup';
import { LoadingButton } from '@mui/lab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required')
  });

  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
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

              <TextField
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
              <LoadingButton fullWidth size="large" type="submit" variant="contained">
                Login
              </LoadingButton>
            </Stack>
          </form>
        )}
      </Formik>
      <Typography sx={{ color: 'primary.main', textAlign: 'center' }}>
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
