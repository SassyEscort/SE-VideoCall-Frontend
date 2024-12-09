'use client';

import { FormattedMessage } from 'react-intl';
import {
  NodeChatExpectContainer,
  NodeChatExpectMainContainer,
  NodeChatExpectSubTextStyledBox,
  NodeChatExpectSubTitlePointTypography,
  NodeChatExpectWhyChooseSubTitleTypography,
  NodeChatExpectWhyChooseTitleTypography
} from './NudeChatExpect.styled';

const NodeChatExpect = () => (
  <NodeChatExpectMainContainer>
    <NodeChatExpectContainer>
      <NodeChatExpectWhyChooseTitleTypography variant="h2">
        <FormattedMessage id="WhatToExpectFrom" />
      </NodeChatExpectWhyChooseTitleTypography>

      <NodeChatExpectSubTextStyledBox>
        <NodeChatExpectSubTitlePointTypography variant="h4">
          <FormattedMessage id="ExclusiveNudeLiveStreams" />
        </NodeChatExpectSubTitlePointTypography>
        <NodeChatExpectWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="FlirtBateOffersAPremiumExperience" />
        </NodeChatExpectWhyChooseSubTitleTypography>
        <NodeChatExpectSubTitlePointTypography variant="h4">
          <FormattedMessage id="FreeNudeWebcamModels" />
        </NodeChatExpectSubTitlePointTypography>
        <NodeChatExpectWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="ExploreProfilesAndChat" />
        </NodeChatExpectWhyChooseSubTitleTypography>
        <NodeChatExpectSubTitlePointTypography variant="h4">
          <FormattedMessage id="PrivateNudeCammingSessions" />
        </NodeChatExpectSubTitlePointTypography>
        <NodeChatExpectWhyChooseSubTitleTypography variant="h6">
          <FormattedMessage id="ExperienceTheThrillOfPrivate" />
        </NodeChatExpectWhyChooseSubTitleTypography>
      </NodeChatExpectSubTextStyledBox>
    </NodeChatExpectContainer>
  </NodeChatExpectMainContainer>
);

export default NodeChatExpect;
