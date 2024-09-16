import Box from '@mui/material/Box';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { getLoggedInUser } from 'utils/getSessionData';
import RedirectGuard from 'utils/route-guard/RedirectGuard';
import Footer from 'views/guestViews/guestLayout/footer';
import HeaderGuestComponent from 'views/guestViews/guestLayout/Header';
import Header from 'views/protectedViews/protectedLayout/Header';

export interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id?: string | null;
  provider?: string;
  picture?: string;
}

export interface AuthUser {
  user?: User;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();

  let HeaderComponent;
  if (authUser?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM) {
    HeaderComponent = <Header variant="worker" />;
  } else if (authUser?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM) {
    HeaderComponent = <Header variant="dashboard" />;
  } else {
    HeaderComponent = <HeaderGuestComponent />;
  }

  return (
    <RedirectGuard>
      <Box>
        {HeaderComponent}
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        <Footer />
      </Box>
    </RedirectGuard>
  );
}
