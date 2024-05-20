import React from 'react';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Image from 'next/image';
import WorkerCard from 'views/guestViews/commonComponents/WorkerCard/WorkerCard';
import { FavoritesText } from './Favorites.styled';
import MainLayoutNav from '../protectedLayout';

const Favorites = () => {
  return (
    <MainLayoutNav variant={'worker'} enlargedFooter={true}>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', gap: 6, flexDirection: 'column' }}>
          <FavoritesText>
            <UINewTypography variant="h2" color="text.secondary">
              Favourites
            </UINewTypography>
            <UINewTypography variant="bodyUltraLarge" color="text.primary">
              2 models
            </UINewTypography>
          </FavoritesText>
          <WorkerCard />
        </Box>
        <Box sx={{ width: '100%', maxWidth: { xs: '175px', sm: '300px' } }}>
          <UIThemeShadowButton
            sx={{
              padding: 0,
              maxWidth: '100%',
              '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
            }}
            fullWidth
            variant="contained"
          >
            <Box display="flex" alignItems="center" gap="10px">
              <Image src="/images/workercards/video-call.svg" alt="video-call" height={24} width={24} />
              <UINewTypography color="common.white" variant="bodySemiBold" sx={{ textWrap: 'no-wrap' }}>
                Start Video Call
              </UINewTypography>
            </Box>
          </UIThemeShadowButton>
        </Box>
      </Box>
    </MainLayoutNav>
  );
};

export default Favorites;
