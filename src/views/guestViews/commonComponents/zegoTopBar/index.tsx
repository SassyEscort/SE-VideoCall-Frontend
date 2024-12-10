'use client';

import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { usePathname } from 'next/navigation';
import React from 'react';

const ZegoTopBar = () => {
  const pathName = usePathname();
  return (
    <>
      {!pathName?.includes('/admin') && (
        <Box
          sx={{
            background: 'linear-gradient(90deg, #FECD3D, #FFF1C6, #FF68C0)',
            boxShadow: '0px 4px 10px #FF68C07A',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 999,
            paddingTop: '8px',
            paddingBottom: '8px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box>
              <UINewTypography color="primary.200" sx={{ fontSize: { xs: '15px', sm: '15px' }, fontWeight: 700 }}>
                Facing issues with Video Calls?{' '}
                <a style={{ color: 'primary.200', textDecoration: 'underline' }} target="_blank" href="https://forms.gle/jvZ5fnzcHTSxHCZj6">
                  Click here
                </a>
              </UINewTypography>
            </Box>
          </Box>
        </Box>
      )}
      : <></>
    </>
  );
};

export default ZegoTopBar;
