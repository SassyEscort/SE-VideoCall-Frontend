import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import AgeFilter from './AgeFilter';
import CountryFilter from './CountryFilter';
import CurrentlyOnline from './CurrentlyOnline';
// import NewArrivals from './NewArrivals';
import Price from './Price';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  FirstBoxMainContainer,
  SearchBarMainContainer,
  SearchBarSubMainContainer,
  SecondBoxMainContainer,
  ThiredBoxMainContainer
} from '../Search.styled';
import { forwardRef, useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { getQueryParam } from 'utils/genericFunction';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { useSearchParams } from 'next/navigation';
import GenderFilter from './GenderFilter';

export type SearchFiltersTypes = {
  fromAge: string;
  toAge: string;
  fromPrice: string;
  toPrice: string;
  language: string;
  isOnline: string;
  country: string;
  sortOrder: string;
  sortField: string;
  page: number;
  pageSize: number;
  offset: number;
  email?: string | number;
  gender: string;
};

type SearchFiltersProps = {
  isUserInteracted: boolean;
  handelFilterChange: (filters: SearchFiltersTypes) => void;
};

const SearchFilters = forwardRef<HTMLDivElement, SearchFiltersProps>(({ handelFilterChange, isUserInteracted }, ref) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const searchParams = useSearchParams();

  const [isOnline, setIsOnline] = useState(true);
  // const [newArrivals, setNewArrivals] = useState(true);

  const getInitialFilters = () => ({
    fromAge: getQueryParam('fromAge') ? (getQueryParam('fromAge') as string) : '',
    toAge: getQueryParam('toAge') ? (getQueryParam('toAge') as string) : '',
    fromPrice: getQueryParam('fromPrice') ? (getQueryParam('fromPrice') as string) : '',
    toPrice: getQueryParam('toPrice') ? (getQueryParam('toPrice') as string) : '',
    language: getQueryParam('language') ? (getQueryParam('language') as string) : '',
    isOnline: getQueryParam('isOnline') ? (getQueryParam('isOnline') as string) : '',
    country: getQueryParam('country') ? (getQueryParam('country') as string) : '',
    sortOrder: getQueryParam('sortOrder') ? (getQueryParam('sortOrder') as string) : '',
    sortField: getQueryParam('sortField') ? (getQueryParam('sortField') as string) : '',
    gender: getQueryParam('gender') ? (getQueryParam('gender') as string) : '',
    page: Number(getQueryParam('page', 1)),
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams.get('page') ?? 1) - 1) * HOME_PAGE_SIZE || 0,
    email: getQueryParam('email') ? getQueryParam('email') : ''
  });

  const [filters, setFilters] = useState(getInitialFilters());

  useEffect(() => {
    setFilters(getInitialFilters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleCountryChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    setFilters({
      ...filters,
      country: value,
      page: 1
    });
    handelFilterChange({
      ...filters,
      country: value,
      page: 1
    });
  };
  const handleChangePrice = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    const priceRange = value.split('-');
    setFilters({
      ...filters,
      fromPrice: priceRange[0],
      toPrice: priceRange[1],
      page: 1
    });

    handelFilterChange({
      ...filters,
      fromPrice: priceRange[0],
      toPrice: priceRange[1],
      page: 1
    });
  };

  const handleGender = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    const genderValue = value;
    setFilters({
      ...filters,
      gender: genderValue,
      page: 1
    });

    handelFilterChange({
      ...filters,
      gender: genderValue,
      page: 1
    });
  };

  const handleChangeAge = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;
    const ageRange = value.split('-');

    setFilters({
      ...filters,
      fromAge: ageRange[0],
      toAge: ageRange[1],
      page: 1
    });
    handelFilterChange({
      ...filters,
      fromAge: ageRange[0],
      toAge: ageRange[1],
      page: 1
    });
  };

  // const handleNewArrivals = () => {
  //   setFilters({
  //     ...filters,
  //     page: 1,
  //     sortField: newArrivals ? 'created_at' : '',
  //     sortOrder: newArrivals ? 'desc' : ''
  //   });
  //   handelFilterChange({
  //     ...filters,
  //     page: 1,
  //     sortField: newArrivals ? 'created_at' : '',
  //     sortOrder: newArrivals ? 'desc' : ''
  //   });

  //   setNewArrivals(!newArrivals);
  // };

  const handelChangeIsOnline = () => {
    setFilters({
      ...filters,
      page: 1,
      isOnline: isOnline ? '1' : ''
    });
    handelFilterChange({
      ...filters,
      page: 1,
      isOnline: isOnline ? '1' : ''
    });
    setIsOnline(!isOnline);
  };

  return (
    <HomeMainContainer>
      <SearchBarMainContainer ref={ref}>
        <SearchBarSubMainContainer>
          <FirstBoxMainContainer>
            {/* <NewArrivals onClick={handleNewArrivals} /> */}
            {!isMobile && <CurrentlyOnline onClick={handelChangeIsOnline} />}
            {isMobile && <CurrentlyOnline onClick={handelChangeIsOnline} />}
            {isMobile && <AgeFilter fromAge={filters.fromAge} toAge={filters.toAge} onChange={handleChangeAge} />}
          </FirstBoxMainContainer>
          <SecondBoxMainContainer>
            <CountryFilter isUserInteracted={isUserInteracted} value={filters.country} onChange={handleCountryChange} />
          </SecondBoxMainContainer>
          <ThiredBoxMainContainer>
            {!isMobile && <AgeFilter fromAge={filters.fromAge} toAge={filters.toAge} onChange={handleChangeAge} />}
            <GenderFilter onChange={handleGender} Value={filters?.gender} />
            <Price onChange={handleChangePrice} fromValue={filters?.fromPrice} toValue={filters?.toPrice} />
          </ThiredBoxMainContainer>
        </SearchBarSubMainContainer>
      </SearchBarMainContainer>
    </HomeMainContainer>
  );
});

export default SearchFilters;
