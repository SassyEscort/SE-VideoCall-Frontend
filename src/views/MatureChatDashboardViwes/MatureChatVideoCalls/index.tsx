'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  MatureChatVideoBannerImageCard,
  MatureChatVideoContainer,
  MatureChatVideoFirstBoxContainer,
  MatureChatVideoInlineBox,
  MatureChatVideoSecBoxContainer,
  MatureChatVideoSubtitleTypographyBox
} from './MatureChatVideoCalls.styled';

const MatureChatVideoCalls = () => {
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
      <MatureChatVideoContainer>
        <MatureChatVideoFirstBoxContainer>
          <MatureChatVideoSecBoxContainer>
            <MatureChatVideoInlineBox component="h2">
              <FormattedMessage id="FlirtBateMatureCam" />
            </MatureChatVideoInlineBox>
            <MatureChatVideoSubtitleTypographyBox variant="h5">
              <FormattedMessage id="WelcomeToTheFlirtBateMatureCamChat" />
            </MatureChatVideoSubtitleTypographyBox>
          </MatureChatVideoSecBoxContainer>
        </MatureChatVideoFirstBoxContainer>
        <MatureChatVideoBannerImageCard>
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
        </MatureChatVideoBannerImageCard>
      </MatureChatVideoContainer>
    </HomeMainContainer>
  );
};

export default MatureChatVideoCalls;
