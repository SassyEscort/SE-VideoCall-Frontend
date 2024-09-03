'use client';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MainLayout from '../layouts/AdminLayout/DashboardLayout';
import { useEffect, useState } from 'react';
import { adminDashboardServices } from 'services/adminDashboard/adminDashboard.services';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';

import { ErrorMessage } from 'constants/common.constants';

export default function DashboardPageContainer() {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const dashboardDetails = async () => {
      try {
        const params = {
          filter: 'someFilterValue',
          dateRange: [
            {
              startDate: '',
              endDate: ''
            }
          ]
        };
        await adminDashboardServices.adminDashboard(params, token.token);
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };
    if (token.token) {
      dashboardDetails();
    }
  }, [token.token]);

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
