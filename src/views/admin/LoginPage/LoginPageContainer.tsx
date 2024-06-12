import React from 'react';
import Typography from '@mui/material/Typography';
import AdminLoginLayout from '../layouts/AdminLayout/AdminLoginLayout';
import LoginForm from './LoginForm';
import Box from '@mui/material/Box';

const LoginPageContainer = () => (
  <AdminLoginLayout>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box component="img" width={220} height={44} src="/images/header/headerlogo.png"></Box>
      </Box>
      <Typography variant="h4" color="black.main" textAlign="center" mb={3}>
        Login to Flirtbate Admin
      </Typography>
    </Box>
    <LoginForm />
  </AdminLoginLayout>
);

export default LoginPageContainer;
