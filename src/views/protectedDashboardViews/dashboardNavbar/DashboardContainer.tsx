import Box from '@mui/material/Box';
import { ReactNode } from 'react';

const DashboardContainer = ({ children }: { children: ReactNode }) => (
  <Box
    sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Box sx={{ maxWidth: '1244px', width: '100%' }}>{children}</Box>
  </Box>
);

export default DashboardContainer;
