import { ReactNode, useState } from 'react';
import { TopNavItemVariantProps } from './Header/types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Header from './Header';
import Nav from '../navbar';
import HomeMainModelContainer from 'views/modelViews/modelLayout/homeModelContainer';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import { ProtectedLayoutMainContainer } from './protectedLayout.styled';

export type MainLayoutType = TopNavItemVariantProps & {
  children: ReactNode;
  enlargedFooter?: boolean;
};

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  '@media (max-width: 1023px)': {
    flexDirection: 'column',
    gap: '32px'
  }
});

const Main = styled('div')(() => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%'
}));

const MainLayoutNav = (props: MainLayoutType) => {
  const [open, setOpen] = useState(false);

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <HomeMainModelContainer>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header {...props} onOpenNav={() => setOpen(true)} />
        <Box sx={{ width: '100%' }}>
          <StyledRoot>
            <Nav openNav={open} onCloseNav={() => setOpen(true)} />
            <Main>
              {isMdUp && <ProtectedLayoutMainContainer />}
              <Box paddingTop={{ md: 3.875 }}>
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
