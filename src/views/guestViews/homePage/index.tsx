'use client';

import { useCallback, useRef, useState, useEffect } from 'react';
import HomeTopBanner from './homeBanner';
import { ModelHomeListing, ModelListingRes, ModelListingService } from 'services/modelListing/modelListing.services';
import { HomePageMainContainer } from './Home.styled';
import SearchFilters, { SearchFiltersTypes } from '../searchPage/searchFilters';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HOME_PAGE_SIZE } from 'constants/common.constants';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { useAuthContext } from 'contexts/AuthContext';

const HomeImageCards = dynamic(() => import('./homeImageCards'));
const HomeConnections = dynamic(() => import('./HomeConnections'));

const BackdropProgress = dynamic(() => import('components/UIComponents/BackDropProgress'));

const HomeContainer = ({ modelData }: { modelData: ModelListingRes }) => {
  const authContext = useAuthContext();
  const isFreeCreditAvailable = authContext?.isFreeCreditAvailable || 1;
  const { data } = useSession();
  const token = data?.user ? JSON.parse((data.user as any)?.picture) : '';

  const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();
  const searchFiltersRef = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);

  const [modelListing, setModelListing] = useState<ModelHomeListing[]>(modelData?.model_details || []);
  const [total_rows, setTotalRows] = useState(modelData?.aggregate?.total_rows || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  const getInitialFilters = () => ({
    fromAge: searchParams?.get('fromAge') ? (searchParams?.get('fromAge') as string) : '',
    toAge: searchParams?.get('toAge') ? (searchParams?.get('toAge') as string) : '',
    fromPrice: searchParams?.get('fromPrice') ? (searchParams?.get('fromPrice') as string) : '',
    toPrice: searchParams?.get('toPrice') ? (searchParams?.get('toPrice') as string) : '',
    language: searchParams?.get('language') ? (searchParams?.get('language') as string) : '',
    isOnline: searchParams?.get('isOnline') ? (searchParams?.get('isOnline') as string) : '',
    country: searchParams?.get('country') ? (searchParams?.get('country') as string) : '',
    sortOrder: searchParams?.get('sortOrder') ? (searchParams?.get('sortOrder') as string) : '',
    sortField: searchParams?.get('sortField') ? (searchParams?.get('sortField') as string) : '',
    gender: searchParams?.get('gender') ? (searchParams?.get('gender') as string) : '',
    page: Number(searchParams?.get('page') || 1),
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams.get('page') ?? 1) - 1) * HOME_PAGE_SIZE || 0,
    email: searchParams?.get('email') ? (searchParams?.get('email') as string) : ''
  });

  const [filters, setFilters] = useState(getInitialFilters());

  const handleChangeSearchFilter = useCallback(() => {
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
    if (filters.email) objParams.email = filters.email ? filters.email.toString() : '';
    if (filters.gender) objParams.gender = filters.gender ? filters.gender.toString() : '';

    let filterCount = Object.keys(objParams).length;
    const queryString = new URLSearchParams(objParams).toString();

    if (pathname === '/' && filterCount === 0) {
      const credit = searchParams.get('credit');
      if (!credit) router.push('/');
    }
    if (pathname === '/' && filterCount === 1 && objParams.page) return;

    const isMultiple = [
      'language',
      'isOnline',
      'page',
      'fromPrice',
      'fromAge',
      'toPrice',
      'country',
      'sortOrder',
      'sortField',
      'gender'
    ].filter((x) => Object.keys(objParams).includes(x));

    if (filterCount === 0) {
      const credit = searchParams.get('credit');
      if (!credit) router.push(pathname);
    } else {
      if (isMultiple.length) {
        router.push(`${pathname}?${queryString}`);
      } else {
        if (objParams.email) {
          return;
        } else {
          router.push(`/${pathname}?${queryString}`);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, router]);

  const handelFilterChange = async (values: SearchFiltersTypes) => {
    setIsLoading(true);
    const getModel = await ModelListingService.getModelListing(values, token.token);
    setModelListing(getModel?.model_details);
    setTotalRows(getModel?.aggregate?.total_rows);
    setIsLoading(false);
    if (initialRender.current === false) {
      if (searchFiltersRef.current) {
        if (scroll || searchParams?.toString()) {
          searchFiltersRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    if (token.token) {
      handelFilterChange(filters);
      setScroll(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.token]);

  const handleChangePage = useCallback(
    (value: number) => {
      if (value === 1) {
        const offset = (value - 1) * filters.pageSize;
        const newFilters = { ...filters, page: value, offset: offset };
        setFilters(newFilters);
        // handelFilterChange(newFilters);
      } else if (filters) {
        const offset = (value - 1) * filters.pageSize;
        const newFilters = { ...filters, page: value, offset: offset };
        setFilters(newFilters);
        // handelFilterChange(newFilters);
        if (pathname === '/') {
          const queryParams = new URLSearchParams(window.location.search);
          queryParams.set('page', value.toString());
          router.push(`/?${queryParams.toString()}`);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filters, router]
  );

  const handelFiltersFormSearch = (value: SearchFiltersTypes) => {
    const newFilters = { ...filters, ...value };
    setFilters(newFilters);
    setScroll(true);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
    // setTimeout(() => {
    handleChangeSearchFilter();
    // }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, searchParams]);

  useEffect(() => {
    setFilters(getInitialFilters());
    setTimeout(() => {
      handelFilterChange(getInitialFilters());
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      setIsUserInteracted(true);
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HomePageMainContainer>
      <HomeTopBanner isFreeCreditAvailable={isFreeCreditAvailable} />
      {modelListing?.length > 0 && <BackdropProgress open={isLoading} />}
      <SearchFilters isUserInteracted={isUserInteracted} handelFilterChange={handelFiltersFormSearch} ref={searchFiltersRef} />

      <HomeImageCards
        modelListing={modelListing}
        isFavPage={false}
        token={token}
        filters={filters ?? ({} as SearchFiltersTypes)}
        totalRows={total_rows}
        handleChangePage={handleChangePage}
        isFreeCreditAvailable={isFreeCreditAvailable}
        isLoading={isLoading}
      />
      <HomeConnections isFreeCreditAvailable={isFreeCreditAvailable} />
    </HomePageMainContainer>
  );
};

export default HomeContainer;
