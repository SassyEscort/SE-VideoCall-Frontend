'use client';
import Box from '@mui/material/Box';
import AdminLoginLayout from '../layouts/AdminLayout/AdminLoginLayout';
import ForgotPasswordForm from './ForgetPasswordForm';
import Typography from '@mui/material/Typography';

const ForgotPasswordPageContainer = () => (
  <>
    <AdminLoginLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="h4" color="primary.main" textAlign="center" fontWeight={700} mb={3}>
          Forgot Password
        </Typography>
        <ForgotPasswordForm />
      </Box>
    </AdminLoginLayout>
  </>
);

export default ForgotPasswordPageContainer;
