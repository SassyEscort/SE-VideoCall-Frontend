import Box from '@mui/material/Box';
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainFooter from 'views/guestViews/guestLayout/footer/MainFooter';
import Header from 'views/protectedViews/protectedLayout/Header';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Box>
        <Header variant="dashboard" />
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        <MainFooter />
      </Box>
    </AuthGuard>
  );
}
