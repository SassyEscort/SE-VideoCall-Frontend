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
      <DirtyChatExperienceTitleTypography>
        <FormattedMessage id="PersonalizeYourDirtyChatExperience" />
      </DirtyChatExperienceTitleTypography>
      <DirtyChatExperienceSubTitleTypography sx={{ textAlign: 'center', width: '100%', maxWidth: '850px' }}>
        <FormattedMessage id="ForgetTheOldDaysOf" />
      </DirtyChatExperienceSubTitleTypography>
      <DirtyChatExperienceSubTextStyledBox>
        <DirtyChatExperienceSubTitlePointTypography>
          <FormattedMessage id="CustomDirtyChats" />
        </DirtyChatExperienceSubTitlePointTypography>
        <DirtyChatExperienceSubTitleTypography>
          <FormattedMessage id="PickYourModelAndEnjoy" />
        </DirtyChatExperienceSubTitleTypography>
        <DirtyChatExperienceSubTitlePointTypography>
          <FormattedMessage id="DirtyCamInteractions" />
        </DirtyChatExperienceSubTitlePointTypography>
        <DirtyChatExperienceSubTitleTypography>
          <FormattedMessage id="MakeYourChatMoreIntimate" />
        </DirtyChatExperienceSubTitleTypography>
        <DirtyChatExperienceSubTitlePointTypography>
          <FormattedMessage id="NoBoundaries" />
        </DirtyChatExperienceSubTitlePointTypography>
        <DirtyChatExperienceSubTitleTypography>
          <FormattedMessage id="ConnectWithModelsForTheDirtiest" />
        </DirtyChatExperienceSubTitleTypography>
      </DirtyChatExperienceSubTextStyledBox>
    </DirtyChatExperienceContainer>
  </DirtyChatExperienceMainContainer>
);

export default DirtyChatExperienceDashboard;
