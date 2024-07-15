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
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { getQueryParam } from 'utils/genericFunction';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

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
};

type SearchFiltersProps = {
  handelFilterChange: (filters: SearchFiltersTypes) => void;
};

const SearchFilters = forwardRef<HTMLDivElement, SearchFiltersProps>(({ handelFilterChange }, ref) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOnline, setIsOnline] = useState(true);
  const [newArrivals, setNewArrivals] = useState(true);

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
    page: Number(getQueryParam('page', 1)),
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams.get('page') ?? 1) - 1) * HOME_PAGE_SIZE || 0
  });

  const [filters, setFilters] = useState(getInitialFilters());

  useEffect(() => {
    setFilters(getInitialFilters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleCHangeFilter = useCallback(() => {
    const objParams: { [key: string]: string } = {};
    if (filters.fromAge) objParams.fromAge = filters.fromAge ? filters.fromAge.toString() : '';
    if (filters.toAge) objParams.toAge = filters.toAge ? filters.toAge.toString() : '';
    if (filters.page && filters.page > 1) objParams.page = filters.page ? filters.page.toString() : '1';
    if (filters.fromPrice) objParams.fromPrice = filters.fromPrice ? filters.fromPrice.toString() : '';
    if (filters.toPrice) objParams.toPrice = filters.toPrice ? filters.toPrice.toString() : '-';
    if (filters.language) objParams.language = filters.language ? filters.language.toString() : '';
    if (filters.isOnline) objParams.isOnline = filters.isOnline ? filters.isOnline.toString() : '';
    if (filters.country) objParams.country = filters.country ? filters.country.toString() : '';
    if (filters.sortOrder) objParams.sortOrder = filters.sortOrder ? filters.sortOrder.toString() : '';
    if (filters.sortField) objParams.sortField = filters.sortField ? filters.sortField.toString() : '';

    let filterCount = Object.keys(objParams).length;
    const queryString = new URLSearchParams(objParams).toString();

    if (pathname === '/' && filterCount === 0) router.push('/');
    if (pathname === '/' && filterCount === 1 && objParams.page) return;

    const isDetailsPage = pathname.startsWith('/details/');
    const isMultiple = ['language', 'isOnline', 'page', 'fromPrice', 'fromAge', 'toPrice', 'country', 'sortOrder', 'sortField'].filter(
      (x) => Object.keys(objParams).includes(x)
    );
    if (filterCount === 0) {
      if (isDetailsPage) {
        const credit = searchParams.get('credit');
        if (!credit) router.push(pathname);
      } else {
        router.push('/');
      }
    } else {
      if (isMultiple.length) {
        if (isDetailsPage) {
          router.push(`${pathname}?${queryString}`);
        } else {
          router.push(`/?${queryString}`);
        }
      } else {
        if (isDetailsPage) {
          router.push(`${pathname}?${queryString}`);
        } else {
          router.push(`/${pathname}?${queryString}`);
        }
      }
    }

    handelFilterChange(filters);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleCountryChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value as string;

    setFilters({
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
  };

  const handleNewArrivals = () => {
    setFilters({
      ...filters,
      page: 1,
      sortField: newArrivals ? 'created_at' : '',
      sortOrder: newArrivals ? 'desc' : ''
    });
    setNewArrivals(!newArrivals);
  };

  const handelChangeIsOnline = () => {
    setFilters({
      ...filters,
      page: 1,
      isOnline: isOnline ? '1' : ''
    });
    setIsOnline(!isOnline);
  };

  useEffect(() => {
    handleCHangeFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <HomeMainContainer>
      <SearchBarMainContainer ref={ref}>
        <SearchBarSubMainContainer>
          <FirstBoxMainContainer>
            <NewArrivals onClick={handleNewArrivals} />
            {isMobile && <CurrentlyOnline onClick={handelChangeIsOnline} />}
          </FirstBoxMainContainer>
          <SecondBoxMainContainer>
            <CountryFilter value={filters.country} onChange={handleCountryChange} />
          </SecondBoxMainContainer>
          <ThiredBoxMainContainer>
            <AgeFilter fromAge={filters.fromAge} toAge={filters.toAge} onChange={handleChangeAge} />
            <Price onChange={handleChangePrice} fromValue={filters?.fromPrice} toValue={filters?.toPrice} />
            {!isMobile && <CurrentlyOnline onClick={handelChangeIsOnline} />}
          </ThiredBoxMainContainer>
        </SearchBarSubMainContainer>
      </SearchBarMainContainer>
    </HomeMainContainer>
  );
});

export default SearchFilters;
