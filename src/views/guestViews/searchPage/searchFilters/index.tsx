import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import AgeFilter from './AgeFilter';
import CountryFilter from './CountryFilter';
import CurrentlyOnline from './CurrentlyOnline';
import NewArrivals from './NewArrivals';
import Price from './Price';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  FirstBoxMainContainer,
  SearchBarMainContainer,
  SearchBarSubMainContainer,
  SecondBoxMainContainer,
  ThiredBoxMainContainer
} from '../Search.styled';

const SearchFilters = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <HomeMainContainer>
      <SearchBarMainContainer>
        <SearchBarSubMainContainer>
          <FirstBoxMainContainer>
            <NewArrivals />
            {isMobile && <CurrentlyOnline />}
          </FirstBoxMainContainer>
          <SecondBoxMainContainer>
            <CountryFilter />
          </SecondBoxMainContainer>
          <ThiredBoxMainContainer>
            <AgeFilter />
            <Price />
            {!isMobile && <CurrentlyOnline />}
          </ThiredBoxMainContainer>
        </SearchBarSubMainContainer>
      </SearchBarMainContainer>
    </HomeMainContainer>
  );
};

export default SearchFilters;
