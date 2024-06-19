import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FavoritesText } from './Favorites.styled';
import MainLayoutNav from '../protectedLayout';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
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

  const getFavListing = async () => {
    if (token.token) {
      const getModel = await CustomerFavorite.getCustomerFavorite(token.token);
      setFavListing(getModel.model_details);
    }
  };

  useEffect(() => {
    getFavListing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <Box width="100%" gap={6} display="flex" flexDirection="column">
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', gap: isSm ? 6 : 7, flexDirection: 'column' }}>
            <FavoritesText>
              <UINewTypography variant="h2" color="text.secondary">
                <FormattedMessage id="Favourites" />
              </UINewTypography>
              <UINewTypography variant="bodyUltraLarge" color="text.primary">
                {modelNumber} <FormattedMessage id="Models" />
              </UINewTypography>
            </FavoritesText>
          </Box>
        </Box>
        <HomeImageCard modelListing={favListing} isFavPage={true} />
      </Box>
    </MainLayoutNav>
  );
};

export default Favorites;
