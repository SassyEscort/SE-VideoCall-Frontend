import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { Raleway } from 'next/font/google';
import React from 'react';

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const PreSignUpWeb = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <UINewTypography
            fontFamily={ralewayFont.style.fontFamily}
            sx={{ fontSize: '100px', fontWeight: 900, lineHeight: '120px', color: 'white.main' }}
          >
            Are You Ready to Get <span style={{ color: '#79E028' }}>Naughty?</span>
          </UINewTypography>
          <UINewTypography sx={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: 'white.main' }}>
            Unleash your wildest desires with models who are here to tease, please, and make it all about you.
          </UINewTypography>
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: '100px',
            width: '400px',
            height: '72px',
            gap: 1
          }}
        >
          <Box component="img" src="/images/icons/new-video-call-icon.svg" alt="video-call" height={32} width={32} />

          <UINewTypography sx={{ fontSize: '24px', fontWeight: 800, lineHeight: '32px', color: 'white.main' }}>
            Start Free Video Chat
          </UINewTypography>
        </Button>
      </Box>
    </>
  );
};

export default PreSignUpWeb;
