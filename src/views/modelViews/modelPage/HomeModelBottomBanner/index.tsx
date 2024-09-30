import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import theme from 'themes/theme';
import { ModelUITextConatiner } from 'views/auth/AuthCommon.styled';

function HomeModelBottomBanner() {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ModelUITextConatiner sx={{ alignItems: 'center', marginTop: isSmDown ? '72px' : '120px', position: 'relative' }}>
      <Image
        alt="footer_logo"
        width={1512}
        height={668.51}
        src="/images/modelHomePage/Model-footer.webp"
        style={{ borderRadius: '12px', right: 0 }}
        priority
      />
    </ModelUITextConatiner>
  );
}

export default HomeModelBottomBanner;
