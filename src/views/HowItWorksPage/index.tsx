'use client';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Divider from '@mui/material/Divider';
import {
  CallsTextTypography,
  // HeadingInnerBoxContainer,
  HeadingMainBoxContainer,
  HowItWorksMainBoxContainer,
  Level2ChipMainBoxContainer,
  Level2FirstInnerBoxContainer,
  Level2FirstMainBoxContainer,
  Level2MainBoxContainer,
  Level2TextTypography,
  Level2ToLevel3ChipInnerBoxContainer,
  Level2ToLevel3ChipMainBoxContainer,
  Level2ToLevel3FirstMainBoxContainer,
  Level2ToLevel3InnerBoxContainer,
  LevelsComponentMainBoxContainer,
  LevelSystemMainBoxContainer,
  LevelTextTypography,
  MoreCallsTextTypography,
  RewardsInnerBoxContainer,
  RulesToFollowDescriptionTextTypography,
  RulesToFollowInnerBoxContainer,
  RulesToFollowMainBoxContainer,
  TimerTextTypography,
  TimmerInnerBoxContainer,
  TipsMianBoxContainer
} from './HowItWorks.styled';
import { FormattedMessage } from 'react-intl';

const HowItWorks = () => {
  return (
    <HowItWorksMainBoxContainer>
      <HeadingMainBoxContainer>
        {/* <HeadingInnerBoxContainer>
          <ArrowCircleLeftIcon id="back-button" sx={{ color: 'black.main' }} />
          <UINewTypography variant="h6" color="black.main">
            <FormattedMessage id="HowItWorkss" />
          </UINewTypography>
        </HeadingInnerBoxContainer> */}

        <UINewTypography variant="bodyUltraLarge" color="#00000099">
          <FormattedMessage id="WelcomeToTheRewardsSystem" />
        </UINewTypography>
      </HeadingMainBoxContainer>

      <LevelSystemMainBoxContainer>
        <UINewTypography variant="body" color="#000000CC">
          <FormattedMessage id="LevelSystem" />
        </UINewTypography>

        <UINewTypography variant="bodyUltraLarge" color="#00000099">
          <FormattedMessage id="EarnRewardsByCompletingFree" />
        </UINewTypography>
      </LevelSystemMainBoxContainer>

      <LevelsComponentMainBoxContainer>
        <Level2MainBoxContainer>
          <Level2FirstMainBoxContainer>
            <Level2FirstInnerBoxContainer>
              <Level2ChipMainBoxContainer>
                <Box component="img" src="/images/icons/icon-park_level.svg" width={24} height={24} />
                <UINewTypography variant="h6" color="black.main">
                  <FormattedMessage id="Level" />
                </UINewTypography>
              </Level2ChipMainBoxContainer>
              <Level2TextTypography>2</Level2TextTypography>
            </Level2FirstInnerBoxContainer>
            <UINewTypography variant="bodyUltraLarge" color="#00000099">
              <FormattedMessage id="ThisShowsYourCurrentLevel" />
            </UINewTypography>
          </Level2FirstMainBoxContainer>
          <Box>
            <ul style={{ listStyleType: 'disc', paddingInlineStart: '15px' }}>
              <li>
                <LevelTextTypography>
                  Level 1: Complete
                  <span style={{ fontWeight: 800 }}>
                    {' '}
                    50 minutes = <span style={{ color: '#FF8B36' }}>$5</span>
                  </span>
                </LevelTextTypography>
              </li>
              <li>
                <LevelTextTypography>
                  Level 2: Complete
                  <span style={{ fontWeight: 800 }}>
                    {' '}
                    150 more minutes = <span style={{ color: '#FF8B36' }}>$20</span>
                  </span>
                </LevelTextTypography>
              </li>
              <li>
                <LevelTextTypography>
                  Level 3: Complete
                  <span style={{ fontWeight: 800 }}>
                    {' '}
                    300 more minutes = <span style={{ color: '#FF8B36' }}>$50</span>
                  </span>
                </LevelTextTypography>
              </li>
              <li>
                <LevelTextTypography>
                  Level 4 and higher:
                  <span style={{ fontWeight: 800 }}>
                    {' '}
                    For every 100 minutes = <span style={{ color: '#FF8B36' }}>$20</span>
                  </span>
                </LevelTextTypography>
              </li>
            </ul>
          </Box>
        </Level2MainBoxContainer>

        <Level2MainBoxContainer>
          <Level2ToLevel3InnerBoxContainer>
            <Level2ToLevel3FirstMainBoxContainer>
              <Level2ToLevel3ChipMainBoxContainer>
                <Level2ToLevel3ChipInnerBoxContainer>
                  <UINewTypography variant="captionLargeSemiBold" color="#000000CC">
                    Lv2
                  </UINewTypography>
                  <Divider orientation="vertical" flexItem sx={{ borderColor: 'primary.700' }} />
                  <CallsTextTypography>84 minutes</CallsTextTypography>
                </Level2ToLevel3ChipInnerBoxContainer>
                <UINewTypography variant="captionLargeSemiBold" color="#000000CC">
                  Lv3
                </UINewTypography>
              </Level2ToLevel3ChipMainBoxContainer>

              <Box component="img" src="/images/levelup-img.png" />

              <MoreCallsTextTypography>
                Make total<span style={{ fontWeight: 800 }}>116</span> minutes of calls to level up
              </MoreCallsTextTypography>
            </Level2ToLevel3FirstMainBoxContainer>
            <UINewTypography variant="bodySmallBold" color="#00000099">
              <FormattedMessage id="ThisShowsYourCurrentLevelNextLevel" />
            </UINewTypography>
          </Level2ToLevel3InnerBoxContainer>

          <Box>
            <ul style={{ listStyleType: 'disc', paddingInlineStart: '15px' }}>
              <li>
                <LevelTextTypography>
                  <FormattedMessage id="TheBarFillsUpAs" />
                </LevelTextTypography>
              </li>
              <li>
                <LevelTextTypography>
                  <FormattedMessage id="EachMilestoneUnlocksAReward" />
                </LevelTextTypography>
              </li>
            </ul>
          </Box>
        </Level2MainBoxContainer>

        <Level2ToLevel3InnerBoxContainer>
          <RewardsInnerBoxContainer>
            <UINewTypography variant="captionLarge" color="black.main">
              <FormattedMessage id="UpcomingRewards" />
            </UINewTypography>
            <Box component="img" src="/images/rewards-img.png" />
          </RewardsInnerBoxContainer>
          <UINewTypography variant="bodyUltraLarge" color="#00000099">
            <FormattedMessage id="ThisSectionShowsYouWhichRewards" />
          </UINewTypography>
        </Level2ToLevel3InnerBoxContainer>

        <Level2ToLevel3InnerBoxContainer>
          <TimmerInnerBoxContainer>
            <Box component="img" src="/images/icons/ic_sharp-av-timer.svg" />
            <TimerTextTypography>6d 15h 24m left</TimerTextTypography>
          </TimmerInnerBoxContainer>
          <UINewTypography variant="bodySmallBold" color="#00000099">
            <FormattedMessage id="ThisTimerShowsHowMuchTime" />
          </UINewTypography>
        </Level2ToLevel3InnerBoxContainer>

        <TipsMianBoxContainer>
          <UINewTypography variant="bodySmallBold" color="#00000080">
            💡 <FormattedMessage id="TipIfYouDon’tFinish" />
          </UINewTypography>
        </TipsMianBoxContainer>
      </LevelsComponentMainBoxContainer>

      <RulesToFollowMainBoxContainer>
        <UINewTypography variant="body" color="#000000CC">
          <FormattedMessage id="SimpleRulesToFollow" />
        </UINewTypography>

        <RulesToFollowInnerBoxContainer>
          <ul style={{ listStyleType: 'disc', paddingInlineStart: '20px' }}>
            <li>
              <RulesToFollowDescriptionTextTypography>
                <FormattedMessage id="PickFreeCalls" />
              </RulesToFollowDescriptionTextTypography>
            </li>
            <li>
              <RulesToFollowDescriptionTextTypography>
                <FormattedMessage id="StayConnected" />
              </RulesToFollowDescriptionTextTypography>
            </li>
            <li>
              <RulesToFollowDescriptionTextTypography>
                <FormattedMessage id="FirstImpressionsMatter" />
              </RulesToFollowDescriptionTextTypography>
            </li>
          </ul>
        </RulesToFollowInnerBoxContainer>
      </RulesToFollowMainBoxContainer>
    </HowItWorksMainBoxContainer>
  );
};

export default HowItWorks;
