'use client';

import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { EscortSlider } from './EscortSlider';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import EscortSliderMobile from './EscortSliderMobile';
import EscortGalleryContainer from './EscortGalleryContainer';
import EscortPersonalDetail from './EscortPersonalDetail';
import EscortExplore from './EscortExplore';
import { GuestDetailsService } from 'services/guestDetails/guestDetails.services';
import { useEffect, useState } from 'react';
import { GuestDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';

const EscortDetailPage = ({ userName }: { userName: string }) => {
  const [guestData, setGuestData] = useState();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const fetchGuestData = async () => {
      try {
        const data = await GuestDetailsService.GuestModelDetails(userName);
        setGuestData(data);
        console.log(data, 'guestData');
      } catch (error) {
        console.error('Failed to fetch guest data:', error);
      }
    };

    fetchGuestData();
  }, [userName]);

  return (
    <>
      <HomeMainContainer>
        {!isLgDown && <EscortSlider />}
        {isLgDown && <EscortSliderMobile />}
        <EscortPersonalDetail guestData={guestData ?? ({} as GuestDetailsResponse)} />
        <EscortGalleryContainer />
        <EscortExplore />
      </HomeMainContainer>
    </>
  );
};

export default EscortDetailPage;
