import Box from '@mui/material/Box';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Footer from 'views/guestViews/guestLayout/footer';
import HeaderGuestComponent from 'views/guestViews/guestLayout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Box>
        <HeaderGuestComponent />
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        <Footer />
      </Box>
    </AuthGuard>
  );
}
