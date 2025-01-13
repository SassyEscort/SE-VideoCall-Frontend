import Box from '@mui/material/Box';
import { AuthUser } from 'app/(guest)/layout';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { getLoggedInUser } from 'utils/getSessionData';
const Header = dynamic(() => import('views/protectedViews/protectedLayout/Header'), { ssr: false });
const Footer = dynamic(() => import('views/guestViews/guestLayout/footer'));
const GuestGuard = dynamic(() => import('utils/route-guard/GuestGuard'), { ssr: false });
// const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'));
const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'), { ssr: false });
const HeaderABGuestComponent = dynamic(() => import('views/guestViews/abTestComponent/guestLayout/Header/HeaderGuestComponent'), {
  ssr: false
});
const FooterAB = dynamic(() => import('views/guestViews/abTestComponent/guestLayout/Footer/MainFooter'));

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();
  const cookieStore = await cookies();
  const group = cookieStore.get('ab-group')?.value || '{}';
  let versionDetails = (group && JSON.parse(group)) || {};

  return (
    <GuestGuard>
      <Box>
        {authUser?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM ? (
          <Header variant="worker" />
        ) : versionDetails?.variation?.name !== 'B' ? (
          <HeaderGuestComponent />
        ) : (
          <HeaderABGuestComponent />
        )}
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        {versionDetails?.variation?.name !== 'B' ? <Footer /> : <FooterAB />}
      </Box>
    </GuestGuard>
  );
}
