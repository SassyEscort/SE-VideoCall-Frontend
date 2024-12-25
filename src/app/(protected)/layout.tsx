import Box from '@mui/material/Box';
import { AuthUser } from 'app/(guest)/layout';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import dynamic from 'next/dynamic';
import { getLoggedInUser } from 'utils/getSessionData';
const Header = dynamic(() => import('views/protectedViews/protectedLayout/Header'));
const Footer = dynamic(() => import('views/guestViews/guestLayout/footer'));
const GuestGuard = dynamic(() => import('utils/route-guard/GuestGuard'));
// const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'));
const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/HeaderClone'), { ssr: false });

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();

  return (
    <GuestGuard>
      <Box>
        {authUser?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM ? <Header variant="worker" /> : <HeaderGuestComponent />}
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        <Footer />
      </Box>
    </GuestGuard>
  );
}
