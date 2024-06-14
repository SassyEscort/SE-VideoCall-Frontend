'use client';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Avatar, Box } from '@mui/material';
import { StyledAccount } from './Nav.styled';
import AdminSidbar from '../sidbar';
import { useEffect, useState } from 'react';
import { getUserDataClient } from 'utils/getSessionData';

const NAV_WIDTH = 280;

interface NavProps {
  openNav: boolean;
  onCloseNav: () => void;
}

export default function Nav({ openNav, onCloseNav }: NavProps) {
  const [adminData, setAdminData] = useState({ name: '', email: '' });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setAdminData({ name: data.name, email: data.email });
    };

    userToken();
  }, []);

  const renderContent = (
    <>
      <Box sx={{ mb: 2, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar src="/images/admin/avatar.jpg" alt="photoURL" />

            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" color="primary.main" sx={{ textTransform: 'capitalize' }}>
                {adminData?.name}
              </Typography>

              <Typography variant="body2" color="text.primary">
                {adminData?.email}
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
        <AdminSidbar />
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH }
      }}
    >
      {renderContent}
    </Box>
  );
}
