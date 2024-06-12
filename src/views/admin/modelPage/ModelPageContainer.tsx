'use client';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';

export default function ModelPageContainer() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Typography variant="h5" gutterBottom sx={{ mb: 5 }}>
          This is model page 👋
        </Typography>
      </Container>
    </MainLayout>
  );
}
