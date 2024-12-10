'use client';

import { FormattedMessage } from 'react-intl';
import {
  StrangerCamChatContainer,
  StrangerCamChatMainContainer,
  StrangerCamChatSubTextStyledBox,
  StrangerCamChatSubTitlePointTypography,
  StrangerCamChatWhyChooseSubTitleTypography,
  StrangerCamChatWhyChooseTitleTypography
} from './StrangerCamChat.Styled';

const StrangerCamChat = () => (
  <StrangerCamChatMainContainer>
    <StrangerCamChatContainer>
      <StrangerCamChatWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="WhatIsFlirtBateStrangerCamChat" />
      </StrangerCamChatWhyChooseTitleTypography>
      <StrangerCamChatWhyChooseSubTitleTypography variant="h6" sx={{ textAlign: 'center', width: '100%', maxWidth: '850px' }}>
        <FormattedMessage id="FlirtBate’sStrangerCamFeature" />
      </StrangerCamChatWhyChooseSubTitleTypography>
      <StrangerCamChatSubTextStyledBox>
        <StrangerCamChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="InstantConnectionss" />
        </StrangerCamChatSubTitlePointTypography>
        <StrangerCamChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="StartARandomCamChat" />
        </StrangerCamChatWhyChooseSubTitleTypography>
        <StrangerCamChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="RealTimeEngagement" />
        </StrangerCamChatSubTitlePointTypography>
        <StrangerCamChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="EnjoyHighQuality" />
        </StrangerCamChatWhyChooseSubTitleTypography>
        <StrangerCamChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="NoHiddenFees" />
        </StrangerCamChatSubTitlePointTypography>
        <StrangerCamChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="AllStrangerCamChats" />
        </StrangerCamChatWhyChooseSubTitleTypography>
      </StrangerCamChatSubTextStyledBox>
    </StrangerCamChatContainer>
  </StrangerCamChatMainContainer>
);

export default StrangerCamChat;
