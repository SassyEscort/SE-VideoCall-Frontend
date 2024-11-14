import Box from '@mui/material/Box';
import { SEO_DATA_CAM_TO_CAM } from 'constants/seoConstants';
import { PROVIDERCUSTOM_TYPE } from 'constants/signUpConstants';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getLoggedInUser } from 'utils/getSessionData';
import Header from 'views/protectedViews/protectedLayout/Header';
const HeaderGuestComponent = dynamic(() => import('views/guestViews/guestLayout/Header'), {
  ssr: false
});
const RedirectGuard = dynamic(() => import('utils/route-guard/RedirectGuard'), {
  ssr: false
});
const Footer = dynamic(() => import('views/guestViews/guestLayout/footer'), {
  ssr: false
});

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

export const metadata: Metadata = {
  title: SEO_DATA_CAM_TO_CAM.TITLE,
  description: SEO_DATA_CAM_TO_CAM.DESCRIPTION
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();

  let HeaderComponent;
  if (authUser?.user?.provider === PROVIDERCUSTOM_TYPE.PROVIDERCUSTOM) {
    HeaderComponent = (
      <>
        <RedirectGuard>
          <Header variant="worker" />;
        </RedirectGuard>
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
    HeaderComponent = <HeaderGuestComponent />;
  }

  return (
    <>
      {HeaderComponent}
      <main>
        <Box>{children}</Box>
      </main>
      <Footer />
    </>
  );
}
