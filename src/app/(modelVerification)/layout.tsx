import Box from '@mui/material/Box';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <main>
        <Box>{children}</Box>
      </main>
    </Box>
  );
}
