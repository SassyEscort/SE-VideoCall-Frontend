import Box from '@mui/material/Box';
import Footer from 'views/guestViews/guestLayout/footer';
import HeaderModelComponent from 'views/modelViews/modelLayout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <HeaderModelComponent />
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
      <Footer />
    </Box>
  );
}
