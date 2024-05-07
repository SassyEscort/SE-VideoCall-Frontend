import HomeMainContainer from 'views/guestComponents/guestLayout/homeContainer';
import AgeFilter from './AgeFilter';
import CountryFilter from './CountryFilter';
import Box from '@mui/material/Box';

const SearchFilters = () => {
  return (
    <HomeMainContainer>
      <Box pt={10} pb={4}>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={1.5} width="100%" maxWidth={'711px'}>
          <Box display="flex" gap={1.5} width="100%">
            <CountryFilter />
            <AgeFilter />
          </Box>
          <Box display="flex" gap={1.5} width="100%">
            <CountryFilter />
            <AgeFilter />
          </Box>
        </Box>
      </Box>
    </HomeMainContainer>
  );
};

export default SearchFilters;
