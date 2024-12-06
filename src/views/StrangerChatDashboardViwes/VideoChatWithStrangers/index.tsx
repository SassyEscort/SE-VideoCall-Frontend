'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  VideoChatEithStrangerBannerPointTypography,
  VideoChatWithStrangerBannerBeyondImageCard,
  VideoChatWithStrangerBannerTypographySubtitleBox,
  VideoChatWithStrangerContainer,
  VideoChatWithStrangerFirstBeyondBoxContainer,
  VideoChatWithStrangerInlineBeyondBox,
  VideoChatWithStrangerSecBoxBeyondContainer
} from './VideoChatWithStrangers.Styled';

const VideoChatWithStrangers = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <VideoChatWithStrangerContainer>
        <VideoChatWithStrangerBannerBeyondImageCard>
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
        </VideoChatWithStrangerBannerBeyondImageCard>
        <VideoChatWithStrangerFirstBeyondBoxContainer>
          <VideoChatWithStrangerSecBoxBeyondContainer>
            <VideoChatWithStrangerInlineBeyondBox component="h3">
              <FormattedMessage id="HowToStartYourVideoChatWithStrangers" />
            </VideoChatWithStrangerInlineBeyondBox>
            <VideoChatWithStrangerBannerTypographySubtitleBox component="h5">
              <FormattedMessage id="GettingStartedWithFlirtBate’s" />
            </VideoChatWithStrangerBannerTypographySubtitleBox>
            <VideoChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="EnterTheStrangerCamSection" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="SimplyVisitOurStranger" />
            </VideoChatWithStrangerBannerTypographySubtitleBox>
            <VideoChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="ChooseAModel" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="BrowseThroughAvailableModels" />
            </VideoChatWithStrangerBannerTypographySubtitleBox>
            <VideoChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="StartYourVideoCall" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="ClickToStartYourVideoChat" />
            </VideoChatWithStrangerBannerTypographySubtitleBox>
            <VideoChatWithStrangerBannerTypographySubtitleBox component="h5">
              <FormattedMessage id="WhetherYou'reSeekingFunConversations" />
            </VideoChatWithStrangerBannerTypographySubtitleBox>
          </VideoChatWithStrangerSecBoxBeyondContainer>
        </VideoChatWithStrangerFirstBeyondBoxContainer>
      </VideoChatWithStrangerContainer>
    </HomeMainContainer>
  );
};

export default VideoChatWithStrangers;
