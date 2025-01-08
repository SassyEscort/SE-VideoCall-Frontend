import { Box } from '@mui/material';
import React from 'react';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Box>{children}</Box>
    </main>
  );
}
