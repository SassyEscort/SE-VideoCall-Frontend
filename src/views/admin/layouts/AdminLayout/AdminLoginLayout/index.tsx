'use client';

import { ReactNode } from 'react';
import { StyledContent, StyledRoot, StyledSection } from './AdminLoginLayout.styled';
import Container from '@mui/material/Container';
import theme from 'themes/theme';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

interface AdminLoginLayoutProps {
  children: ReactNode;
}

export default function AdminLoginLayout({ children }: AdminLoginLayoutProps) {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <StyledRoot>
        {!isMdDown && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <Box component="img" src="/images/admin/illustration_login.png" alt="login" />
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
