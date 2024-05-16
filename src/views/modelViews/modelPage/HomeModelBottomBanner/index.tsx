import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function HomeModelBottomBanner() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '120px', position: 'relative' }}>
      <Image
        alt="home_model"
        width={1512}
        height={668.51}
        src="/images/modelHomePage/Model-footer.webp"
        style={{ borderRadius: '12px', right: 0 }}
        priority
      />
    </Box>
  );
}

export default HomeModelBottomBanner;
