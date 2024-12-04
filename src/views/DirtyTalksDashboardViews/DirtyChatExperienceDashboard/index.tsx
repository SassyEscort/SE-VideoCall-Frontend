'use client';

import { FormattedMessage } from 'react-intl';
import {
  DirtyChatExperienceContainer,
  DirtyChatExperienceMainContainer,
  DirtyChatExperienceSubTextStyledBox,
  DirtyChatExperienceSubTitlePointTypography,
  DirtyChatExperienceSubTitleTypography,
  DirtyChatExperienceTitleTypography
} from './DirtyChatExperienceDashboard.styled';

const DirtyChatExperienceDashboard = () => (
  <DirtyChatExperienceMainContainer>
    <DirtyChatExperienceContainer>
      <DirtyChatExperienceTitleTypography variant="h2">
        <FormattedMessage id="PersonalizeYourDirtyChatExperience" />
      </DirtyChatExperienceTitleTypography>
      <DirtyChatExperienceSubTitleTypography variant="h4" sx={{ textAlign: 'center', width: '100%', maxWidth: '850px' }}>
        <FormattedMessage id="ForgetTheOldDaysOf" />
      </DirtyChatExperienceSubTitleTypography>
      <DirtyChatExperienceSubTextStyledBox>
        <DirtyChatExperienceSubTitlePointTypography variant="h4">
          <FormattedMessage id="CustomDirtyChats" />
        </DirtyChatExperienceSubTitlePointTypography>
        <DirtyChatExperienceSubTitleTypography variant="h4">
          <FormattedMessage id="PickYourModelAndEnjoy" />
        </DirtyChatExperienceSubTitleTypography>
        <DirtyChatExperienceSubTitlePointTypography variant="h4">
          <FormattedMessage id="DirtyCamInteractions" />
        </DirtyChatExperienceSubTitlePointTypography>
        <DirtyChatExperienceSubTitleTypography variant="h4">
          <FormattedMessage id="MakeYourChatMoreIntimate" />
        </DirtyChatExperienceSubTitleTypography>
        <DirtyChatExperienceSubTitlePointTypography variant="h4">
          <FormattedMessage id="NoBoundaries" />
        </DirtyChatExperienceSubTitlePointTypography>
        <DirtyChatExperienceSubTitleTypography variant="h4">
          <FormattedMessage id="ConnectWithModelsForTheDirtiest" />
        </DirtyChatExperienceSubTitleTypography>
      </DirtyChatExperienceSubTextStyledBox>
    </DirtyChatExperienceContainer>
  </DirtyChatExperienceMainContainer>
);

export default DirtyChatExperienceDashboard;
