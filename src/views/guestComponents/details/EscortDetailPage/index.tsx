'use client';

import HomeMainContainer from 'views/guestComponents/guestLayout/homeContainer';
import { EscortSlider } from './EscortSlider';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import EscortSliderMobile from './EscortSliderMobile';
import EscortGalleryContainer from './EscortGalleryContainer';
import EscortPersonalDetail from './EscortPersonalDetail';

const EscortDetailPage = () => {
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <HomeMainContainer>
        {!isLgDown && <EscortSlider />}
        {isLgDown && <EscortSliderMobile />}
        <EscortPersonalDetail />
        <EscortGalleryContainer />
      </HomeMainContainer>
    </>
  );
};

export default EscortDetailPage;
