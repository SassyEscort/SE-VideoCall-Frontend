'use client';

import { FormattedMessage } from 'react-intl';
import {
  LesbianChatContainer,
  LesbianChatMainContainer,
  LesbianChatSubTextStyledBox,
  LesbianChatSubTitlePointTypography,
  LesbianChatWhyChooseSubTitleTypography,
  LesbianChatWhyChooseTitleTypography
} from './LesbianChat.Styled';

const LesbianChat = () => (
  <LesbianChatMainContainer>
    <LesbianChatContainer>
      <LesbianChatWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="WhatIsFlirtBateLesbianChat" />
      </LesbianChatWhyChooseTitleTypography>

      <LesbianChatSubTextStyledBox>
        <LesbianChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="ConnectInRealTime" />
        </LesbianChatSubTitlePointTypography>
        <LesbianChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="YoureEngagingInLive" />
        </LesbianChatWhyChooseSubTitleTypography>

        <LesbianChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="LesbianCamToCamChats" />
        </LesbianChatSubTitlePointTypography>
        <LesbianChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="OurPlatformIsAllAbout" />
        </LesbianChatWhyChooseSubTitleTypography>

        <LesbianChatSubTitlePointTypography variant="h4">
          <FormattedMessage id="PrivateLesbianSexChat" />
        </LesbianChatSubTitlePointTypography>
        <LesbianChatWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="ForThoseSeekingMoreIntimate" />
        </LesbianChatWhyChooseSubTitleTypography>
      </LesbianChatSubTextStyledBox>
    </LesbianChatContainer>
  </LesbianChatMainContainer>
);

export default LesbianChat;
