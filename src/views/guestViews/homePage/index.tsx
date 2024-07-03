'use client';
import { useCallback, useEffect, useState } from 'react';
import HomeConnections from './HomeConnections';
import HomeTopBanner from './homeBanner';
import HomeImageCard from './homeImageCards';
import { ModelHomeListing, ModelListingService } from 'services/modelListing/modelListing.services';
import { HomePageMainContainer } from './Home.styled';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import SearchFilters, { SearchFiltersTypes } from '../searchPage/searchFilters';

const HomeContainer = () => {
  const [modelListing, setModelListing] = useState<ModelHomeListing[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [filters, setFilters] = useState<SearchFiltersTypes>();
  const [total_rows, setTotalRows] = useState(0);

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };
    userToken();
  }, []);

  const handelFilterChange = async (values: any) => {
    setFilters(values);
    const getModel = await ModelListingService.getModelListing(values);
    setModelListing(getModel?.model_details);
    setTotalRows(getModel.aggregate.total_rows);
  };

  const handleChangePage = useCallback(
    (value: number) => {
      if (filters) {
        const offset = (value - 1) * filters?.pageSize;
        setFilters({ ...filters, page: value, offset: offset });
      }
    },
    [filters]
  );

  useEffect(() => {
    handelFilterChange(filters);
  }, [filters]);

  return (
    <>
      <HomePageMainContainer>
        <HomeTopBanner />
        <SearchFilters handelFilterChange={handelFilterChange} />
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
