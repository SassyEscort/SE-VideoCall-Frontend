import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import CountryFilter from 'views/guestViews/searchPage/searchFilters/CountryFilter';
import AgeFilter from 'views/guestViews/searchPage/searchFilters/AgeFilter';
import CurrentlyOnline from 'views/guestViews/searchPage/searchFilters/CurrentlyOnline';
import NewArrivals from 'views/guestViews/searchPage/searchFilters/NewArrivals';
import HomeImageCard from 'views/guestViews/homePage/homeImageCards';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

const EscortExplore = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: isSmDown ? 12 : 15 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: isSmDown ? 1.5 : 2, textAlign: isSmDown ? 'center' : 'left' }}>
          <UINewTypography variant="h2" color="text.secondary">
            Explore from the world of diverse beauty and charm
          </UINewTypography>
          <UINewTypography variant="subtitle">Select the companion who aligns with your desires.</UINewTypography>
        </Box>
        <Box sx={{ width: '100%', maxWidth: '711px' }}>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={{ xs: 1.5, sm: 4 }}>
            <Box display="flex" gap={{ xs: 1.5, sm: 4 }} width="100%" maxWidth={{ xs: '267px', sm: '305px' }}>
              <CountryFilter />
              <AgeFilter />
            </Box>
            <Box display="flex" gap={{ xs: 1.5, sm: 4 }} width="100%">
              <CurrentlyOnline />
              <NewArrivals />
            </Box>
          </Box>
        </Box>
        <Box>
          <HomeImageCard />
        </Box>
      </Box>
    </>
  );
};

export default EscortExplore;
