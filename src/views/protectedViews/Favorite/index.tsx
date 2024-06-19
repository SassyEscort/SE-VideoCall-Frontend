import React, { useCallback, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FavoriteBox, FavoriteTextMainBox, FavoritesText } from './Favorites.styled';
import MainLayoutNav from '../protectedLayout';
import { FormattedMessage } from 'react-intl';
import { ModelFavRes, CustomerFavorite } from 'services/customerFavorite/customerFavorite.service';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';
import HomeImageCard from 'views/guestViews/homePage/homeImageCards';

const Favorites = () => {
  const [favListing, setFavListing] = useState<ModelFavRes[]>([]);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });

  const modelNumber = favListing.length;

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
      const getModel = await CustomerFavorite.getCustomerFavorite(token.token);
      setFavListing(getModel.model_details);
    }
  }, [token.token]);

  useEffect(() => {
    getFavListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
                {modelNumber} <FormattedMessage id="Models" />
              </UINewTypography>
            </FavoritesText>
          </FavoriteTextMainBox>
        </Box>
        <HomeImageCard modelListing={favListing} isFavPage={true} />
      </FavoriteBox>
    </MainLayoutNav>
  );
};

export default Favorites;
