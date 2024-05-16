import { ReactNode, useState } from 'react';
import { TopNavItemVariantProps } from './Header/types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Header from './Header';
import Nav from '../navbar';
import { useRouter } from 'next/navigation';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';

export type MainLayoutType = TopNavItemVariantProps & {
  children: ReactNode;
  enlargedFooter?: boolean;
};

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden'
});

const Main = styled('div')(() => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%'
}));

const MainLayoutNav = (props: MainLayoutType) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  //   useEffect(() => {
  //     const handleStart = () => {
  //       setLoading(true);
  //     };

  //     const handleComplete = () => {
  //       setLoading(false);
  //     };

  //     router.on('routeChangeStart', handleStart);
  //     router.on('routeChangeComplete', handleComplete);
  //     router.on('routeChangeError', handleComplete);

  //     return () => {
  //       router.off('routeChangeStart', handleStart);
  //       router.off('routeChangeComplete', handleComplete);
  //       router.off('routeChangeError', handleComplete);
  //     };
  //   }, [router.events]);

  return (
    <HomeMainModelContainer>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header {...props} onOpenNav={() => setOpen(true)} />
        {/* {loading && <Loader />} */}
        <Box sx={{ width: '100%' }}>
          <StyledRoot>
            <Nav openNav={open} onCloseNav={() => setOpen(true)} />
            <Main>
              <Box
                sx={{
                  backgroundColor: 'rgba(255, 72, 179, 0.3)',
                  height: '412px',
                  width: '584px',
                  borderRadius: '50%',
                  filter: 'blur(100px)',
                  position: 'absolute',
                  zIndex: '-1',
                  right: 72,
                  top: '-232px'
                }}
              />
              <Box px={{ md: 2 }} paddingTop={{ md: 3.875 }} paddingBottom={{ md: 13 }}>
                <>{props.children}</>
              </Box>
            </Main>
          </StyledRoot>
        </Box>
      </Box>
    </HomeMainModelContainer>
  );
};

export default MainLayoutNav;
