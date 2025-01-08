import Box from '@mui/material/Box';
import { getLoggedInUser } from 'utils/getSessionData';
import Header from 'views/protectedViews/protectedLayout/Header';
import { AuthUser, User } from 'app/(guest)/layout';
import { ROLE } from 'constants/workerVerification';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('views/guestViews/guestLayout/footer'));
// const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'));
const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'), { ssr: false });

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();
  const user = (authUser?.user as User)?.picture;
  const providerData = user && JSON.parse(user || '{}');

  let HeaderComponent;
  if (providerData?.role === ROLE.CUSTOMER) {
    HeaderComponent = <Header variant="worker" />;
  } else if (providerData?.role === ROLE.MODEL) {
    HeaderComponent = <Header variant="dashboard" />;
  } else {
    HeaderComponent = <HeaderGuestComponent />;
  }
  return (
    <Box>
      {HeaderComponent}
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
      <Footer />
    </Box>
  );
}
