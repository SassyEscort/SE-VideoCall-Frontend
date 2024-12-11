'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  ChooseNodeChatBannerBeyondImageCard,
  ChooseNodeChatBannerPointTypography,
  ChooseNodeChatBannerTypographySubtitleBox,
  ChooseNodeChatContainer,
  ChooseNodeChatFirstBeyondBoxContainer,
  ChooseNodeChatInlineBeyondBox,
  ChooseNodeChatSecBoxBeyondContainer
} from './ChooseNodeChat.styled';

const ChooseNodeChat = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <ChooseNodeChatContainer>
        <ChooseNodeChatBannerBeyondImageCard>
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
        </ChooseNodeChatBannerBeyondImageCard>
        <ChooseNodeChatFirstBeyondBoxContainer>
          <ChooseNodeChatSecBoxBeyondContainer>
            <ChooseNodeChatInlineBeyondBox component="h3">
              <FormattedMessage id="WhyChooseFlirtBateForNudeChat" />
            </ChooseNodeChatInlineBeyondBox>

            <ChooseNodeChatBannerTypographySubtitleBox>
              <ChooseNodeChatBannerPointTypography>
                <FormattedMessage id="Customized1On1NudeVideoChat" />
              </ChooseNodeChatBannerPointTypography>
              <FormattedMessage id="OnFlirtBateThereAreNoGroupShows" />
            </ChooseNodeChatBannerTypographySubtitleBox>
            <ChooseNodeChatBannerTypographySubtitleBox>
              <ChooseNodeChatBannerPointTypography>
                <FormattedMessage id="PrivateChatRoomsForNudes" />
              </ChooseNodeChatBannerPointTypography>
              <FormattedMessage id="EngageInFullyPrivateSecureChat" />
            </ChooseNodeChatBannerTypographySubtitleBox>
          </ChooseNodeChatSecBoxBeyondContainer>
        </ChooseNodeChatFirstBeyondBoxContainer>
      </ChooseNodeChatContainer>
    </HomeMainContainer>
  );
};

export default ChooseNodeChat;
