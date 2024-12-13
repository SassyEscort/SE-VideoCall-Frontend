'use client';

import { FormattedMessage } from 'react-intl';
import {
  CuckoldChatContainer,
  CuckoldChatMainContainer,
  CuckoldChatSubTextStyledBox,
  CuckoldChatSubTitlePointTypography,
  CuckoldChatWhyChooseSubTitleTypography,
  CuckoldChatWhyChooseTitleTypography
} from './CuckoldChat.Styled';

const CuckoldChat = () => (
  <CuckoldChatMainContainer>
    <CuckoldChatContainer>
      <CuckoldChatWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="WhatToExpectFromCuckold" />
      </CuckoldChatWhyChooseTitleTypography>
      <CuckoldChatSubTextStyledBox>
        <CuckoldChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="PersonalizedCuckoldChats" />
        </CuckoldChatSubTitlePointTypography>
        <CuckoldChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="ChooseFromAVariety" />
        </CuckoldChatWhyChooseSubTitleTypography>

        <CuckoldChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="PrivateOneOnOneSessions" />
        </CuckoldChatSubTitlePointTypography>
        <CuckoldChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="FlirtBateOffersFullyPrivate" />
        </CuckoldChatWhyChooseSubTitleTypography>

        <CuckoldChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="InteractiveCuckoldRoleplay" />
        </CuckoldChatSubTitlePointTypography>
        <CuckoldChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="FlirtBateAllowsYouToExperience" />
        </CuckoldChatWhyChooseSubTitleTypography>
      </CuckoldChatSubTextStyledBox>
    </CuckoldChatContainer>
  </CuckoldChatMainContainer>
);

export default CuckoldChat;
