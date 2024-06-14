import Box from '@mui/material/Box';
import AdminGuard from 'utils/route-guard/AdminGuard';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <Box>
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
      </Box>
    </AdminGuard>
  );
}
