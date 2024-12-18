'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  VideoChatEithStrangerBannerPointTypography,
  MatureChatWithStrangerBannerBeyondImageCard,
  MatureChatWithStrangerBannerTypographySubtitleBox,
  MatureChatWithStrangerContainer,
  MatureChatWithStrangerFirstBeyondBoxContainer,
  MatureChatWithStrangerInlineBeyondBox,
  MatureChatWithStrangerSecBoxBeyondContainer
} from './VideoChatWithMature.Styled';

const VideoChatWithMature = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <MatureChatWithStrangerContainer>
        <MatureChatWithStrangerBannerBeyondImageCard>
          <Box
            component="img"
            alt="home_model"
            decoding="async"
            width={isSm && isSmDown ? 300 : isSmDown ? 347 : 580}
            height={isSmDown ? 339 : 540}
            src="/images/beyond.webp"
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
          />
        </MatureChatWithStrangerBannerBeyondImageCard>
        <MatureChatWithStrangerFirstBeyondBoxContainer>
          <MatureChatWithStrangerSecBoxBeyondContainer>
            <MatureChatWithStrangerInlineBeyondBox component="h3">
              <FormattedMessage id="HowToStartYourVideoChatWithMature" />
            </MatureChatWithStrangerInlineBeyondBox>
            <MatureChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="EnterTheMatureCamSection" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="SimplyVisitOurMature" />
            </MatureChatWithStrangerBannerTypographySubtitleBox>
            <MatureChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="ChooseAModelFreeMature" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="BrowseThroughFreeMature" />
            </MatureChatWithStrangerBannerTypographySubtitleBox>
            <MatureChatWithStrangerBannerTypographySubtitleBox component="h5">
              <FormattedMessage id="WhetherYoureSeekingFunMatureFirst" />
            </MatureChatWithStrangerBannerTypographySubtitleBox>
            <MatureChatWithStrangerBannerTypographySubtitleBox component="h5">
              <FormattedMessage id="WhetherYoureSeekingFunMatureSecond" />
            </MatureChatWithStrangerBannerTypographySubtitleBox>
          </MatureChatWithStrangerSecBoxBeyondContainer>
        </MatureChatWithStrangerFirstBeyondBoxContainer>
      </MatureChatWithStrangerContainer>
    </HomeMainContainer>
  );
};

export default VideoChatWithMature;
