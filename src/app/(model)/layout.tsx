import Box from '@mui/material/Box';
import Loading from 'loading';
import dynamic from 'next/dynamic';
// import RedirectGuardCustomer from 'utils/route-guard/RedirectGuardCustomer';
// import ModelHeader from 'views/modelViews/modelHeader/ModelHeader';
// import ModelFooter from 'views/modelViews/modelLayout/footer';
const ModelFooter = dynamic(() => import('views/modelViews/modelLayout/footer'), {
  ssr: false,
  loading: Loading
});
const ModelHeader = dynamic(() => import('views/modelViews/modelHeader/ModelHeader'), {
  ssr: false,
  loading: Loading
});
const RedirectGuardCustomer = dynamic(() => import('utils/route-guard/RedirectGuardCustomer'), {
  ssr: false,
  loading: Loading
});

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
