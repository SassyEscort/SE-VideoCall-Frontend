import React from 'react';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FavoritesText } from './Favorites.styled';
import MainLayoutNav from '../protectedLayout';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';

const Favorites = () => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', gap: isSm ? 6 : 7, flexDirection: 'column' }}>
          <FavoritesText>
            <UINewTypography variant="h2" color="text.secondary">
              <FormattedMessage id="Favourites" />
            </UINewTypography>
            <UINewTypography variant="bodyUltraLarge" color="text.primary">
              2 <FormattedMessage id="Models" />
            </UINewTypography>
          </FavoritesText>
        </Box>
      </Box>
    </MainLayoutNav>
  );
};

export default Favorites;
