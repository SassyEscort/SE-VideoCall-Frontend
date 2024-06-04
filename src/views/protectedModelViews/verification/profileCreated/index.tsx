'use client';

import { Box } from '@mui/material';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  ChildContainer,
  Container,
  GoToYourDashboardButton,
  ImageContainerProfile,
  ProfileCreatedText,
  ProfileLiveText,
  TypographyContainer,
  TypographyContainer2
} from './profileCreated.styled';
import Link from 'next/link';

const ProfileCreated = () => {
  return (
    <>
      <Container>
        <ChildContainer>
          <Box>
            <ImageContainerProfile>
              <Image width={286} height={212} src="/images/model/super.png" alt="profileCreated" />
            </ImageContainerProfile>
            <TypographyContainer>
              <ProfileCreatedText variant="h3" color={'text.secondary'}>
                <FormattedMessage id="WooHooYourProfile" />
              </ProfileCreatedText>
              <ProfileLiveText variant="bodyRegular" color={'text.secondary'}>
                <FormattedMessage id="YourProfileIsNowLive" />
              </ProfileLiveText>
            </TypographyContainer>
          </Box>
          <TypographyContainer2>
            <Box>
              <ProfileLiveText variant="bodyRegular" color={'text.secondary'}>
                <FormattedMessage id="StartBySetting" />
              </ProfileLiveText>
            </Box>
            <Box>
              <Link href={'/model/dashboard'}>
                <UIThemeButton variant="contained">
                  <GoToYourDashboardButton variant="buttonLargeBold">
                    <FormattedMessage id="GoToYourDashboard" />
                  </GoToYourDashboardButton>
                </UIThemeButton>
              </Link>
            </Box>
          </TypographyContainer2>
        </ChildContainer>
      </Container>
    </>
  );
};

export default ProfileCreated;
