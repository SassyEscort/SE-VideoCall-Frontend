import Box from '@mui/material/Box';
import { AuthUser, User } from 'app/(guest)/layout';
import { getLoggedInUser } from 'utils/getSessionData';
import ModelFooter from 'views/modelViews/modelLayout/footer';
import Header from 'views/protectedViews/protectedLayout/Header';
import { ROLE } from 'constants/workerVerification';
import HeaderModelComponent from 'views/modelViews/modelLayout/Header';

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
    HeaderComponent = <HeaderModelComponent />;
  }
  return (
    <Box>
      {HeaderComponent}
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
      <ModelFooter />
    </Box>
  );
}
