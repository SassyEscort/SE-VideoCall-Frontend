'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  AnonymousChatVideoBannerImageCard,
  AnonymousChatVideoContainer,
  AnonymousChatVideoFirstBoxContainer,
  AnonymousChatVideoInlineBox,
  AnonymousChatVideoSecBoxContainer,
  AnonymousChatVideoSubtitleTypographyBox
} from './AnonymousChatVideoCalls.styled';

const AnonymousChatVideoCalls = () => {
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
      <AnonymousChatVideoContainer>
        <AnonymousChatVideoFirstBoxContainer>
          <AnonymousChatVideoSecBoxContainer>
            <AnonymousChatVideoInlineBox component="h2">
              <FormattedMessage id="PrivateAnonymousVideo" />
            </AnonymousChatVideoInlineBox>
            <AnonymousChatVideoSubtitleTypographyBox variant="h5">
              <FormattedMessage id="LookingForDiscreetIntimate" />
            </AnonymousChatVideoSubtitleTypographyBox>
          </AnonymousChatVideoSecBoxContainer>
        </AnonymousChatVideoFirstBoxContainer>
        <AnonymousChatVideoBannerImageCard>
          <Box
            component="img"
            alt="home_model"
            decoding="async"
            width={imageWidth}
            height={imageHeight}
            src="/images/web-cam.webp"
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, (max-width: 1024px) 580px, 780px"
          />
        </AnonymousChatVideoBannerImageCard>
      </AnonymousChatVideoContainer>
    </HomeMainContainer>
  );
};

export default AnonymousChatVideoCalls;
