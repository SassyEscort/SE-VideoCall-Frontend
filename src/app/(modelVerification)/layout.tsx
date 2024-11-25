import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
const ModelLastActive = dynamic(() => import('views/protectedModelViews/ModelLastAvtive'));

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
