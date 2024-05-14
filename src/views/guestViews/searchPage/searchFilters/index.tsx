import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import AgeFilter from './AgeFilter';
import CountryFilter from './CountryFilter';
import Box from '@mui/material/Box';
import CurrentlyOnline from './CurrentlyOnline';
import NewArrivals from './NewArrivals';

const SearchFilters = () => {
  return (
    <HomeMainContainer>
      <Box pt={{ xs: 7, sm: 10 }} pb={{ xs: 3, sm: 4 }} sx={{ width: '100%', maxWidth: '711px' }}>
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
    </HomeMainContainer>
  );
};

export default SearchFilters;
