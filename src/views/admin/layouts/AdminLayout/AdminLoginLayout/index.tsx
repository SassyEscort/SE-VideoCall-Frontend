import { ReactNode } from 'react';
import { StyledContent, StyledRoot, StyledSection } from './AdminLoginLayout.styled';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Image from 'next/image';

interface AdminLoginLayoutProps {
  children: ReactNode;
}

export default function AdminLoginLayout({ children }: AdminLoginLayoutProps) {
  return (
    <>
      <StyledRoot>
        <StyledSection>
          <Typography variant="h3" color="primary.main" sx={{ px: 5, mt: 5, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          <Image height={360} width={480} src="/images/admin/illustration_login.png" alt="login" />
        </StyledSection>
        <Container maxWidth="sm">
          <StyledContent>{children}</StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
