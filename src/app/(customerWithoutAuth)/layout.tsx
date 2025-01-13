import Box from '@mui/material/Box';
import { getLoggedInUser } from 'utils/getSessionData';
import Header from 'views/protectedViews/protectedLayout/Header';
import { AuthUser, User } from 'app/(guest)/layout';
import { ROLE } from 'constants/workerVerification';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
const Footer = dynamic(() => import('views/guestViews/guestLayout/footer'));
// const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'));
const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'), { ssr: false });
const HeaderABGuestComponent = dynamic(() => import('views/guestViews/abTestComponent/guestLayout/Header/HeaderGuestComponent'), {
  ssr: false
});
const FooterAB = dynamic(() => import('views/guestViews/abTestComponent/guestLayout/Footer/MainFooter'));

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();
  const user = (authUser?.user as User)?.picture;
  const providerData = user && JSON.parse(user || '{}');
  const cookieStore = await cookies();
  const group = cookieStore.get('ab-group')?.value || '{}';
  let versionDetails = (group && JSON.parse(group)) || {};

  let HeaderComponent;
  if (providerData?.role === ROLE.CUSTOMER) {
    HeaderComponent = <Header variant="worker" />;
  } else if (providerData?.role === ROLE.MODEL) {
    HeaderComponent = <Header variant="dashboard" />;
  } else {
    HeaderComponent = <>{versionDetails?.variation?.name !== 'B' ? <HeaderGuestComponent /> : <HeaderABGuestComponent />}</>;
  }
  return (
    <Box>
      {HeaderComponent}
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
      {versionDetails?.variation?.name !== 'B' ? <Footer /> : <FooterAB />}
    </Box>
  );
}
