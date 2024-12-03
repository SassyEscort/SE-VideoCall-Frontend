'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  DirtyCamToCamChatBannerBeyondImageCard,
  DirtyCamToCamChatBannerPointInnerTypography,
  DirtyCamToCamChatBannerPointTypography,
  DirtyCamToCamChatBannerTypographySubtitleBox,
  DirtyCamToCamChatContainer,
  DirtyCamToCamChatFirstBeyondBoxContainer,
  DirtyCamToCamChatInlineBeyondBox,
  DirtyCamToCamChatSecBoxBeyondContainer
} from './DirtyCamToCamChatsDashboard.styled';

const DirtyCamToCamChatsDashboard = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <DirtyCamToCamChatContainer>
        <DirtyCamToCamChatBannerBeyondImageCard>
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
        </DirtyCamToCamChatBannerBeyondImageCard>
        <DirtyCamToCamChatFirstBeyondBoxContainer>
          <DirtyCamToCamChatSecBoxBeyondContainer>
            <DirtyCamToCamChatInlineBeyondBox>
              <FormattedMessage id="WhyChooseFlirtBateForYourDirty" />
            </DirtyCamToCamChatInlineBeyondBox>
            {/* <DirtyCamToCamChatBannerTypographySubtitleBox>
              <FormattedMessage id="FlirtbateWeGoBeyondTheUsualSexChat" />
            </DirtyCamToCamChatBannerTypographySubtitleBox> */}
            <DirtyCamToCamChatBannerTypographySubtitleBox>
              <DirtyCamToCamChatBannerPointTypography>
                <FormattedMessage id="ExclusiveModelSelection" />
              </DirtyCamToCamChatBannerPointTypography>
              <DirtyCamToCamChatBannerPointInnerTypography>
                <FormattedMessage id="AtFlirtBateWePutThePower" />
              </DirtyCamToCamChatBannerPointInnerTypography>
            </DirtyCamToCamChatBannerTypographySubtitleBox>
            <DirtyCamToCamChatBannerTypographySubtitleBox>
              <DirtyCamToCamChatBannerPointTypography>
                <FormattedMessage id="TotalPrivacyAndSecurity" />
              </DirtyCamToCamChatBannerPointTypography>
              <DirtyCamToCamChatBannerPointInnerTypography>
                <FormattedMessage id="YourPrivacyIsAlwaysAPriority" />
              </DirtyCamToCamChatBannerPointInnerTypography>
            </DirtyCamToCamChatBannerTypographySubtitleBox>
            <DirtyCamToCamChatBannerTypographySubtitleBox>
              <DirtyCamToCamChatBannerPointTypography>
                <FormattedMessage id="SeamlessVideoCalls" />
              </DirtyCamToCamChatBannerPointTypography>
              <DirtyCamToCamChatBannerPointInnerTypography>
                <FormattedMessage id="WeFocusExclusivelyOnDirty" />
              </DirtyCamToCamChatBannerPointInnerTypography>
            </DirtyCamToCamChatBannerTypographySubtitleBox>
          </DirtyCamToCamChatSecBoxBeyondContainer>
        </DirtyCamToCamChatFirstBeyondBoxContainer>
      </DirtyCamToCamChatContainer>
    </HomeMainContainer>
  );
};

export default DirtyCamToCamChatsDashboard;
