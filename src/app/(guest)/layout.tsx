import Box from '@mui/material/Box';
import { getLoggedInUser } from 'utils/getSessionData';
import Footer from 'views/guestViews/guestLayout/footer';
import HeaderGuestComponent from 'views/guestViews/guestLayout/Header';
import Header from 'views/protectedViews/protectedLayout/Header';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser = await getLoggedInUser();

  return (
    <Box>
      {authUser ? <Header variant="worker" /> : <HeaderGuestComponent />}
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
      <Footer />
    </Box>
  );
}
