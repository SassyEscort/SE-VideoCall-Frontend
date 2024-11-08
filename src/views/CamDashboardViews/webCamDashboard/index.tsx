'use client';

import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';
import {
  WebBannerContainer,
  WebBannerImageCard,
  WebCamSubtitleTypographyBox,
  WebFirstBoxContainer,
  WebInlineBox,
  WebSecBoxContainer
} from './webCamDashboard.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';

const WebcamDashboard = () => {
  const isXsDown = useMediaQuery(theme.breakpoints.down(321));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  let imageWidth, imageHeight;
  if (isXsDown) {
    imageWidth = 300;
    imageHeight = 300;
  } else if (isSmDown) {
    imageWidth = 337;
    imageHeight = 339;
  } else if (isMdDown) {
    imageWidth = 580;
    imageHeight = 500;
  } else if (isLgDown) {
    imageWidth = 600;
    imageHeight = 540;
  } else {
    imageWidth = 780;
    imageHeight = 540;
  }

  return (
    <HomeMainContainer>
      <WebBannerContainer>
        <WebFirstBoxContainer>
          <WebSecBoxContainer>
            <WebInlineBox>
              <FormattedMessage id="FlirtBateCamToCam" />
            </WebInlineBox>
            <WebCamSubtitleTypographyBox>
              <FormattedMessage id="DiveText" />
            </WebCamSubtitleTypographyBox>
          </WebSecBoxContainer>
        </WebFirstBoxContainer>
        <WebBannerImageCard>
          <Image
            alt="home_model"
            decoding="async"
            width={imageWidth}
            height={imageHeight}
            src="/images/web-cam.webp"
            priority={true}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, (max-width: 1024px) 580px, 780px"
          />
        </WebBannerImageCard>
      </WebBannerContainer>
    </HomeMainContainer>
  );
};

export default WebcamDashboard;
