'use client';

import { ReactNode } from 'react';
import { StyledContent, StyledRoot, StyledSection } from './AdminLoginLayout.styled';
import Container from '@mui/material/Container';
import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

interface AdminLoginLayoutProps {
  children: ReactNode;
}

export default function AdminLoginLayout({ children }: AdminLoginLayoutProps) {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <StyledRoot>
        {isMdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/images/admin/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="sm">
          <StyledContent>
            <Box display="flex" justifyContent="center" mb={5}>
              <Box component="img" src="/images/header/headerlogo.png" alt="logo" width={180} />
            </Box>
            {children}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
