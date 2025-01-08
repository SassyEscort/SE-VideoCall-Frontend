import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
const ModelGuard = dynamic(() => import('utils/route-guard/ModelGuard'), { ssr: false });
const ModelFooter = dynamic(() => import('views/modelViews/modelLayout/footer'));
const ModelLastActive = dynamic(() => import('views/protectedModelViews/ModelLastAvtive'), { ssr: false });
import Header from 'views/protectedViews/protectedLayout/Header';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ModelGuard>
      <ModelLastActive />
      <Box>
        <Header variant="dashboard" />
        <main>
          <Box sx={{ mt: 10 }}>{children}</Box>
        </main>
        <ModelFooter />
      </Box>
    </ModelGuard>
  );
}
