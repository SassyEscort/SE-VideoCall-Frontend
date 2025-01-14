import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
const ModelFooter = dynamic(() => import('views/modelViews/modelLayout/footer'));
const ModelHeader = dynamic(() => import('views/modelViews/modelHeader/ModelHeader'), { ssr: false });
const RedirectGuardCustomer = dynamic(() => import('utils/route-guard/RedirectGuardCustomer'), { ssr: false });

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
