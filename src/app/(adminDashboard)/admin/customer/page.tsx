import Box from '@mui/material/Box';
import React from 'react';
import CustomerPageContainer from 'views/admin/customerPage/CustomerPageContainer';

const AdminMain = () => (
  <>
    <Box sx={{ backgroundColor: '#FFFAFD' }}>
      <CustomerPageContainer />
    </Box>
  </>
);

export default AdminMain;
