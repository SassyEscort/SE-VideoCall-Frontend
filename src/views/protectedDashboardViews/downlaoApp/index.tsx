'use client';
import { Box } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Dwonload, ForBox, ImageBox, ImageSecondBox, MainConatiner, SecondBox, TextFirst, ThreeBox } from './DownloadApp.styled';
import Link from 'next/link';
const DownloadApp = () => {
  // const isSmallScreen = useMediaQuery('(max-width:320px)');
  return (
    <>
      <MainConatiner>
        <Dwonload variant="h2" color="text.secondary">
          <FormattedMessage id="DownloadApp" />
        </Dwonload>

        <SecondBox>
          <TextFirst variant="buttonLargeMenu" color="secondary.200">
            <FormattedMessage id="DownloadTheApp" />
          </TextFirst>

          <ThreeBox>
            <ImageBox src="/images/app-logo/app-video.png" alt="video_icon" />
            <ImageSecondBox src="/images/app-logo/fb-messenger.png" alt="fb_messenger" />
          </ThreeBox>
        </SecondBox>
      </MainConatiner>
      <ForBox>
        <Box>
          <Link href="https://play.google.com/store/apps/details?id=com.bookmyartist.app" target="_blank">
            <Box component={'img'} src="/images/app-logo/google-pay.png" sx={{ width: '120px', height: '120px' }} />
          </Link>
        </Box>
        <Box>
          <Link href="https://apps.apple.com/us/app/book-my-artist-provider/id6630371131" target="_blank">
            <Box component={'img'} src="/images/app-logo/app-store.png" sx={{ width: '120px', height: '120px' }} />
          </Link>
        </Box>
      </ForBox>
      {/* <GradientTypography variant="MediumSemiBoldText" sx={{ marginLeft: isSmallScreen ? '15px' : '55px' }}>
        <FormattedMessage id="ComingSoon" />
      </GradientTypography> */}
    </>
  );
};

export default DownloadApp;
