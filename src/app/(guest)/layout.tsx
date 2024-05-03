import Box from '@mui/material/Box';
import GuestGuard from 'utils/route-guard/GuestGuard';
import Footer from 'views/guestLayout/footer';
import HeaderGuestComponent from 'views/guestLayout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GuestGuard>
      <Box>
        <HeaderGuestComponent />
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        <Footer />
      </Box>
    </GuestGuard>
  );
}
