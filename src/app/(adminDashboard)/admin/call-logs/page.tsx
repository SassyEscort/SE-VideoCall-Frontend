import Box from '@mui/material/Box';
import React from 'react';
import CallLogsContainer from 'views/admin/Call-logs/CallLogsContainer';

const AdminMain = () => (
  <>
    <Box sx={{ backgroundColor: '#FFFAFD' }}>
      <CallLogsContainer />
    </Box>
  </>
);

export default AdminMain;
