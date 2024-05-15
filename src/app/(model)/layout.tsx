import Box from '@mui/material/Box';
import HeaderModelComponent from 'views/modelViews/modelLayout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <HeaderModelComponent />
      <main>
        <Box sx={{ mt: 10 }}>{children}</Box>
      </main>
    </Box>
  );
}
