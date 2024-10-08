import Box from '@mui/material/Box';
import ModelGuard from 'utils/route-guard/ModelGuard';
import ModelFooter from 'views/modelViews/modelLayout/footer';
import ModelLastActive from 'views/protectedModelViews/ModelLastAvtive';
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
