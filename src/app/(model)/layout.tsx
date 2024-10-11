import Box from '@mui/material/Box';
import RedirectGuardCustomer from 'utils/route-guard/RedirectGuardCustomer';
import ModelHeader from 'views/modelViews/modelHeader/ModelHeader';
import ModelFooter from 'views/modelViews/modelLayout/footer';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RedirectGuardCustomer>
      <Box>
        <ModelHeader />
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        <ModelFooter />
      </Box>
    </RedirectGuardCustomer>
  );
}
