'use client';
import { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import ModelNav from '../dashboardNavbar';
import { TopNavItemVariantProps } from 'views/protectedViews/protectedLayout/Header/types';
import { ProtectedDashboardLayoutBoxContainer, ProtectedDashboardLayoutMainContainer } from './protectedDashboardLayout.styled';

export type MainLayoutType = TopNavItemVariantProps & {
  children: ReactNode;
  enlargedFooter?: boolean;
};

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'hidden',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
    gap: '24px'
  },
  '@media (min-width: 900px) and (max-width: 1258px)': {
    paddingLeft: ' 15px',
    paddingRight: '15px'
  }
});

const Main = styled('div')(() => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  scrollbarWidth: 'none'
}));

const MainLayoutNav = (props: MainLayoutType) => {
  const [open, setOpen] = useState(false);

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Box sx={{ width: '100%', display: 'flex' }}>
          <StyledRoot sx={{ width: '100%' }}>
            <ModelNav openNav={open} onCloseNav={() => setOpen(true)} />
            <Main>
              {isMdUp && <ProtectedDashboardLayoutMainContainer />}
              <ProtectedDashboardLayoutBoxContainer>{props.children}</ProtectedDashboardLayoutBoxContainer>
            </Main>
          </StyledRoot>
        </Box>
      </Box>
    </>
  );
};

export default MainLayoutNav;
