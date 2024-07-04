'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import HomeConnections from './HomeConnections';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';
import { ModelHomeListing, ModelListingService } from 'services/modelListing/modelListing.services';
import { HomePageMainContainer } from './Home.styled';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import SearchFilters, { SearchFiltersTypes } from '../searchPage/searchFilters';
import BackdropProgress from 'components/UIComponents/BackDropProgress';
import { useRouter, useSearchParams } from 'next/navigation';
import { HOME_PAGE_SIZE } from 'constants/common.constants';

const HomeContainer = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialRender = useRef(true);

  const [modelListing, setModelListing] = useState<ModelHomeListing[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [total_rows, setTotalRows] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFiltersTypes>({
    fromAge: searchParams.get('fromAge') || '',
    toAge: searchParams.get('toAge') || '',
    fromPrice: searchParams.get('fromPrice') || '',
    toPrice: searchParams.get('toPrice') || '',
    language: searchParams.get('language') || '',
    isOnline: searchParams.get('isOnline') || '',
    country: searchParams.get('country') || '',
    sortOrder: searchParams.get('sortOrder') || '',
    sortField: searchParams.get('sortField') || '',
    page: Number(searchParams.get('page') || 1),
    pageSize: HOME_PAGE_SIZE,
    offset: (Number(searchParams.get('page') ?? 1) - 1) * HOME_PAGE_SIZE || 0
  });

  const prevState = useRef(filters);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };
    userToken();
  }, []);

  const handelFilterChange = async (values: any) => {
    setFilters(values);
    setIsLoading(true);
    const getModel = await ModelListingService.getModelListing(values);
    setModelListing(getModel?.model_details);
    setTotalRows(getModel?.aggregate?.total_rows);
    setIsLoading(false);
  };

  const handleChangePage = useCallback(
    (value: number) => {
      if (filters) {
        const offset = (value - 1) * filters.pageSize;
        const newFilters = { ...filters, page: value, offset: offset };
        setFilters(newFilters);

        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('page', value.toString());
        router.push(`/?${queryParams.toString()}`);
      }
    },
    [filters, router]
  );

  const handelFiltersFormSearch = (value: any) => {
    setFilters({ ...filters, ...value });
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      handelFilterChange(filters);
      window.scrollTo(0, 0);
    } else if (JSON.stringify(filters) !== JSON.stringify(prevState.current)) {
      handelFilterChange(filters);
    }
  }, [filters]);

  return (
    <>
      <HomePageMainContainer>
        <HomeTopBanner />
        <BackdropProgress open={isLoading} />
        <SearchFilters handelFilterChange={handelFiltersFormSearch} />
        <HomeImageCard
          modelListing={modelListing}
          isFavPage={false}
          token={token}
          filters={filters ?? ({} as SearchFiltersTypes)}
          totalRows={total_rows}
          handleChangePage={handleChangePage}
        />
        <HomeConnections />
        {/* <HomePageFAQ /> */}
      </HomePageMainContainer>
    </>
  );
};

export default HomeContainer;
