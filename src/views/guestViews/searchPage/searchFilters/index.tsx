import useMediaQuery from '@mui/material/useMediaQuery';
import { forwardRef, memo, useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  SearchBarMainContainer,
  SearchBarSubMainContainer,
  FirstBoxMainContainer,
  SecondBoxMainContainer,
  ThiredBoxMainContainer
} from '../Search.styled';
// import GenderFilter from './GenderFilter';
const AgeFilter = dynamic(() => import('./AgeFilter'));
const GenderFilter = dynamic(() => import('./GenderFilter'));
const CountryFilter = dynamic(() => import('./CountryFilter'));
const CurrentlyOnline = dynamic(() => import('./CurrentlyOnline'));
const Price = dynamic(() => import('./Price'));
const HomeMainContainer = dynamic(() => import('views/guestViews/guestLayout/homeContainer'));

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
  email?: string;
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
    fromAge: searchParams.get('fromAge') ? (searchParams.get('fromAge') as string) : '',
    toAge: searchParams.get('toAge') ? (searchParams.get('toAge') as string) : '',
    fromPrice: searchParams.get('fromPrice') ? (searchParams.get('fromPrice') as string) : '',
    toPrice: searchParams.get('toPrice') ? (searchParams.get('toPrice') as string) : '',
    language: searchParams.get('language') ? (searchParams.get('language') as string) : '',
    isOnline: searchParams.get('isOnline') ? (searchParams.get('isOnline') as string) : '',
    country: searchParams.get('country') ? (searchParams.get('country') as string) : '',
    sortOrder: searchParams.get('sortOrder') ? (searchParams.get('sortOrder') as string) : '',
    sortField: searchParams.get('sortField') ? (searchParams.get('sortField') as string) : '',
    gender: searchParams.get('gender') ? (searchParams.get('gender') as string) : '',
    page: Number(searchParams.get('page') || 1),
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams.get('page') || 1) - 1) * HOME_PAGE_SIZE || 0,
    email: searchParams?.get('email') ? (searchParams.get('email') as string) : ''
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

export default memo(SearchFilters);
