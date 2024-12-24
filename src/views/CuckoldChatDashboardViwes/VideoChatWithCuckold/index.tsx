'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  VideoChatEithStrangerBannerPointTypography,
  CuckoldChatWithStrangerBannerBeyondImageCard,
  CuckoldChatWithStrangerBannerTypographySubtitleBox,
  CuckoldChatWithStrangerContainer,
  CuckoldChatWithStrangerFirstBeyondBoxContainer,
  CuckoldChatWithStrangerInlineBeyondBox,
  CuckoldChatWithStrangerSecBoxBeyondContainer
} from './VideoChatWithCuckold.Styled';

const VideoChatWithCuckold = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <CuckoldChatWithStrangerContainer>
        <CuckoldChatWithStrangerBannerBeyondImageCard>
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
        </CuckoldChatWithStrangerBannerBeyondImageCard>
        <CuckoldChatWithStrangerFirstBeyondBoxContainer>
          <CuckoldChatWithStrangerSecBoxBeyondContainer>
            <CuckoldChatWithStrangerInlineBeyondBox component="h3">
              <FormattedMessage id="WhyChooseFlirtBateForCuckold" />
            </CuckoldChatWithStrangerInlineBeyondBox>
            <CuckoldChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="ModelExpertise" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="OurModelsAreNot" />
            </CuckoldChatWithStrangerBannerTypographySubtitleBox>
            <CuckoldChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="RealTimeVideoChat" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="ExperienceCuckoldChatOnline" />
            </CuckoldChatWithStrangerBannerTypographySubtitleBox>
            <CuckoldChatWithStrangerBannerTypographySubtitleBox>
              <VideoChatEithStrangerBannerPointTypography>
                <FormattedMessage id="PrivacyAndSecurity" />
              </VideoChatEithStrangerBannerPointTypography>
              <FormattedMessage id="FlirtBateTakesPrivacySeriously" />
            </CuckoldChatWithStrangerBannerTypographySubtitleBox>
          </CuckoldChatWithStrangerSecBoxBeyondContainer>
        </CuckoldChatWithStrangerFirstBeyondBoxContainer>
      </CuckoldChatWithStrangerContainer>
    </HomeMainContainer>
  );
};

export default VideoChatWithCuckold;
