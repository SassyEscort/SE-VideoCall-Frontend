import Box from '@mui/material/Box';
import { AuthUser } from 'app/(guest)/layout';
import { getLoggedInUser } from 'utils/getSessionData';
import ModelFooter from 'views/modelViews/modelLayout/footer';
import HeaderModelComponent from 'views/modelViews/modelLayout/Header';
import ModelNavItem from 'views/modelViews/modelLayout/headerAuth';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const authUser: AuthUser | null = await getLoggedInUser();

  return (
    <Box>
      {authUser?.user?.provider === 'providerModel' ? <ModelNavItem /> : <HeaderModelComponent />}

      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
      <ModelFooter />
    </Box>
  );
}
