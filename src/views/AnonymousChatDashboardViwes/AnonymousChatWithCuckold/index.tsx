'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  VideoChatEithStrangerBannerPointTypography,
  AnonymousChatWithStrangerBannerBeyondImageCard,
  AnonymousChatWithStrangerBannerTypographySubtitleBox,
  AnonymousChatWithStrangerContainer,
  AnonymousChatWithStrangerFirstBeyondBoxContainer,
  AnonymousChatWithStrangerInlineBeyondBox,
  AnonymousChatWithStrangerSecBoxBeyondContainer
} from './AnonymousChatWithCuckold.Styled';

const AnonymousChatWithCuckold = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <AnonymousChatWithStrangerContainer>
        <AnonymousChatWithStrangerBannerBeyondImageCard>
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
        </AnonymousChatWithStrangerBannerBeyondImageCard>
        <AnonymousChatWithStrangerFirstBeyondBoxContainer>
          <AnonymousChatWithStrangerSecBoxBeyondContainer>
            <AnonymousChatWithStrangerInlineBeyondBox component="h3">
              <FormattedMessage id="WhyChooseFlirtBateForAnonymousChat" />
            </AnonymousChatWithStrangerInlineBeyondBox>
            <AnonymousChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="ModelExpertise" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="OurModelsAreNot" />
            </AnonymousChatWithStrangerBannerTypographySubtitleBox>
            <AnonymousChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="RealTimeVideoChat" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="ExperienceCuckoldChatOnline" />
            </AnonymousChatWithStrangerBannerTypographySubtitleBox>
            <AnonymousChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="PrivacyAndSecurity" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="FlirtBateTakesPrivacySeriously" />
            </AnonymousChatWithStrangerBannerTypographySubtitleBox>
          </AnonymousChatWithStrangerSecBoxBeyondContainer>
        </AnonymousChatWithStrangerFirstBeyondBoxContainer>
      </AnonymousChatWithStrangerContainer>
    </HomeMainContainer>
  );
};

export default AnonymousChatWithCuckold;
