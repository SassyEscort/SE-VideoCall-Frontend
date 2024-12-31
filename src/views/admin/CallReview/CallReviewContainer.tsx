import { Stack, Typography } from '@mui/material';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';

export default function CallReviewContainer() {
  return (
    <MainLayout>
      <>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
          <Typography variant="h4" gutterBottom>
            Call Review
          </Typography>
        </Stack>
      </>
    </MainLayout>
  );
}
