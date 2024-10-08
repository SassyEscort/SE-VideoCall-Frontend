import Box from '@mui/material/Box';
import ModelLastActive from 'views/protectedModelViews/ModelLastAvtive';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <main>
        <Box>
          <ModelLastActive />
          {children}
        </Box>
      </main>
    </Box>
  );
}
