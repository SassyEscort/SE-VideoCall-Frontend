import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
const AdminGuard = dynamic(() => import('utils/route-guard/AdminGuard'), { ssr: false });

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
