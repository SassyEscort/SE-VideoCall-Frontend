'use client';

import { FormattedMessage } from 'react-intl';
import {
  MatureChatContainer,
  MatureChatMainContainer,
  MatureChatSubTextStyledBox,
  MatureChatSubTitlePointTypography,
  MatureChatWhyChooseSubTitleTypography,
  MatureChatWhyChooseTitleTypography
} from './MatureChat.Styled';

const MatureChat = () => (
  <MatureChatMainContainer>
    <MatureChatContainer>
      <MatureChatWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="WhatIsFlirtBateMatureChat" />
      </MatureChatWhyChooseTitleTypography>
      <MatureChatWhyChooseSubTitleTypography variant="h6" sx={{ textAlign: 'center', width: '100%', maxWidth: '850px' }}>
        <FormattedMessage id="FlirtBateMatureFeature" />
      </MatureChatWhyChooseSubTitleTypography>
      <MatureChatSubTextStyledBox>
        <MatureChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="StartARandomMatureChat" />
        </MatureChatWhyChooseSubTitleTypography>
        <MatureChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="EnjoyHighQualityMature" />
        </MatureChatWhyChooseSubTitleTypography>
        <MatureChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="NoHiddenFeesMatch" />
        </MatureChatSubTitlePointTypography>
        <MatureChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="AllStrangerChatsMature" />
        </MatureChatWhyChooseSubTitleTypography>
      </MatureChatSubTextStyledBox>
    </MatureChatContainer>
  </MatureChatMainContainer>
);

export default MatureChat;
