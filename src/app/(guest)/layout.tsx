import Box from '@mui/material/Box';
import { getLoggedInUser } from 'utils/getSessionData';
import Footer from 'views/guestViews/guestLayout/footer';
import HeaderGuestComponent from 'views/guestViews/guestLayout/Header';
import Header from 'views/protectedViews/protectedLayout/Header';

export interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id?: string | null;
  provider?: string;
}

export interface AuthUser {
  user?: User;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();

  return (
    <Box>
      {authUser?.user?.provider === 'providerGuest' ? <Header variant="worker" /> : <HeaderGuestComponent />}
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
      <Footer />
    </Box>
  );
}
