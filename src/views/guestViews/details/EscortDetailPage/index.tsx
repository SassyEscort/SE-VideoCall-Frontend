'use client';

import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { EscortSlider } from './EscortSlider';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import EscortSliderMobile from './EscortSliderMobile';
import EscortPersonalDetail from './EscortPersonalDetail';
import EscortExplore from './EscortExplore';
import { GuestDetailsService } from 'services/guestDetails/guestDetails.services';
import { useEffect, useState } from 'react';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';

const EscortDetailPage = ({ userName }: { userName: string }) => {
  const [guestData, setGuestData] = useState<ModelDetailsResponse>();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const fetchGuestData = async () => {
      try {
        const data = await GuestDetailsService.GuestModelDetails(userName);
        setGuestData(data.data);
        console.log(data.data, 'guestData');
      } catch (error) {
        console.error('Failed to fetch guest data:', error);
      }
    };

    fetchGuestData();
  }, [userName]);

  return (
    <>
      <HomeMainContainer>
        {!isLgDown && <EscortSlider workerPhotos={guestData?.photos ?? ([] as WorkerPhotos[])} />}
        {isLgDown && <EscortSliderMobile workerPhotos={guestData?.photos ?? ([] as WorkerPhotos[])} />}
        <EscortPersonalDetail guestData={guestData ?? ({} as ModelDetailsResponse)} />
        {/* <EscortGalleryContainer workerPhotos={guestData?.photos ?? ([] as WorkerPhotos[])} /> */}
        <EscortExplore />
      </HomeMainContainer>
    </>
  );
};

export default EscortDetailPage;
