import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { getLoggedInUser } from 'utils/getSessionData';
// import RedirectGuard from 'utils/route-guard/RedirectGuard';
import Header from 'views/protectedViews/protectedLayout/Header';
// const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'));
const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'), { ssr: false });
const HeaderABGuestComponent = dynamic(() => import('views/guestViews/abTestComponent/guestLayout/Header/HeaderGuestComponent'), {
  ssr: false
});
const RedirectGuard = dynamic(() => import('utils/route-guard/RedirectGuard'), { ssr: false });
const Footer = dynamic(() => import('views/guestViews/guestLayout/footer'));
const FooterAB = dynamic(() => import('views/guestViews/abTestComponent/guestLayout/Footer/MainFooter'));

export interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  id?: string | null;
  provider?: string;
  picture?: string;
  module_permissions?: {
    module_id: number | null;
    permission: string | null;
    module_name: string | null;
  }[];
}

export interface AuthUser {
  user?: User;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();
  const cookieStore = await cookies();
  const group = cookieStore.get('ab-group')?.value || '{}';
  let versionDetails = (group && JSON.parse(group)) || {};

  let HeaderComponent;
  if (authUser?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM) {
    HeaderComponent = (
      <>
        <RedirectGuard>{versionDetails?.variation?.name !== 'B' ? <Header variant="worker" /> : <>New Header</>}</RedirectGuard>
      </>
    );
  } else if (authUser?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM) {
    HeaderComponent = (
      <>
        <RedirectGuard>
          <Header variant="dashboard" />;
        </RedirectGuard>
      </>
    );
  } else {
    HeaderComponent = <>{versionDetails?.variation?.name !== 'B' ? <HeaderGuestComponent /> : <HeaderABGuestComponent />}</>;
  }

  return (
    <>
      {HeaderComponent}
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>

      {versionDetails?.variation?.name !== 'B' ? <Footer /> : <FooterAB />}
    </>
  );
}
