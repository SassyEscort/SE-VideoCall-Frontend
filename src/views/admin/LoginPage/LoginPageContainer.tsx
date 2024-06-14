import Typography from '@mui/material/Typography';
import AdminLoginLayout from '../layouts/AdminLayout/AdminLoginLayout';
import LoginForm from './LoginForm';

const LoginPageContainer = () => (
  <AdminLoginLayout>
    <Typography variant="h4" textAlign="center" mb={3}>
      Login to Flirtbate Admin
    </Typography>
    <LoginForm />
  </AdminLoginLayout>
);

export default LoginPageContainer;
