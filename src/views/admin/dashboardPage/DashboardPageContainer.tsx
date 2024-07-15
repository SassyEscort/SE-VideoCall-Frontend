'use client';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';

export default function DashboardPageContainer() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Typography variant="h5" color="primary.main" gutterBottom sx={{ mb: 5 }}>
          Hi, Welcome back 👋
        </Typography>
      </Container>
    </MainLayout>
  );
}
