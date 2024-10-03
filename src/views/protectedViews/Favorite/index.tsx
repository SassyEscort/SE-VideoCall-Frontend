'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FavoriteBox, FavoriteTextMainBox, FavoritesText, LoadingBox } from './Favorites.styled';
import MainLayoutNav from '../protectedLayout';
import { FormattedMessage } from 'react-intl';
import { ModelFavRes, CustomerFavorite } from 'services/customerFavorite/customerFavorite.service';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import HomeImageCard from 'views/guestViews/homePage/homeImageCards';
import CircularProgress from '@mui/material/CircularProgress';
import { CallHistoryPaginationContainer } from '../CallHistory/CallHistory.styled';
import { BillingPaginationBox } from '../BillingHistory/BillingHistory.styled';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import { useAuthContext } from '../../../../context/AuthContext';

export type FavoritesPaginationType = {
  page: number;
  offset: number;
  limit: number;
};

const Favorites = () => {
  const { isFreeCreditAvailable } = useAuthContext();

  const [favListing, setFavListing] = useState<ModelFavRes[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [total_rows, setTotalRows] = useState(0);

  const [filters, setFilters] = useState<FavoritesPaginationType>({
    page: 1,
    limit: 18,
    offset: 0
  });

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };
    userToken();
  }, []);

  const getFavListing = useCallback(async () => {
    if (token.token) {
      setIsLoading(true);
      const payload = {
        page: filters.page,
        offset: filters.offset,
        limit: filters.limit
      };
      const getModel = await CustomerFavorite.getCustomerFavorite(token.token, payload);
      setFavListing(getModel.model_details);
      setIsLoading(false);
      setTotalRows(getModel.aggregate.total_rows);
    }
  }, [token.token]);

  useEffect(() => {
    getFavListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.limit, filters.offset, token]);

  const scrollToTable = () => {
    const tableElement = document.getElementById('tableSection');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChangeFilter = useCallback((value: FavoritesPaginationType) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.limit;
      handleChangeFilter({ ...filters, page: value, offset: offset });
      scrollToTable();
    },
    [filters, handleChangeFilter]
  );

  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <FavoriteBox>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <FavoriteTextMainBox>
            <FavoritesText>
              <UINewTypography variant="h2" color="text.secondary">
                <FormattedMessage id="Favourites" />
              </UINewTypography>
              <UINewTypography variant="bodyUltraLarge" color="text.primary">
                {total_rows} <FormattedMessage id="Models" />
              </UINewTypography>
            </FavoritesText>
          </FavoriteTextMainBox>
        </Box>
        {isLoading ? (
          <LoadingBox>
            <CircularProgress />
          </LoadingBox>
        ) : (
          <HomeImageCard modelListing={favListing} isFavPage={true} token={token} isFreeCreditAvailable={isFreeCreditAvailable} />
        )}
      </FavoriteBox>
      {total_rows > 0 && (
        <CallHistoryPaginationContainer>
          {total_rows > 0 && (
            <BillingPaginationBox>
              <UITheme2Pagination
                page={filters.page}
                count={total_rows ? Math.ceil(total_rows / filters.limit) : 1}
                onChange={handleChangePage}
              />
              <PaginationInWords
                page={filters.page}
                limit={filters.limit}
                total_rows={total_rows}
                offset={filters.offset}
                isEscort={true}
              />
            </BillingPaginationBox>
          )}
        </CallHistoryPaginationContainer>
      )}
    </MainLayoutNav>
  );
};

export default Favorites;
