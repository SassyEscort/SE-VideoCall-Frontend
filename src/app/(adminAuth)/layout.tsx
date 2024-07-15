import Box from '@mui/material/Box';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
    </Box>
  );
}
