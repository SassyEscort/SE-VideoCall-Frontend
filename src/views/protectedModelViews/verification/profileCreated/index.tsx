'use client';

import { Box } from '@mui/material';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  ChildContainer,
  Container,
  FristBoxContent,
  GoToYourDashboardButton,
  ImageContainerProfile,
  ProfileCreatedText,
  ProfileLiveText,
  TypographyContainer,
  TypographyContainer2
} from './profileCreated.styled';
import Link from 'next/link';
import { GradientTypography } from 'views/protectedDashboardViews/downlaoApp/DownloadApp.styled';

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
              <ProfileCreatedText variant="h3" color="text.secondary">
                <FormattedMessage id="WooHooYourProfile" />
              </ProfileCreatedText>
              <ProfileLiveText variant="bodyRegular" color="text.secondary">
                <FormattedMessage id="YourProfileIsUnder" />
              </ProfileLiveText>
            </TypographyContainer>
          </Box>
          <TypographyContainer2>
            <Box>
              <ProfileLiveText variant="bodyRegular" color="text.secondary">
                <FormattedMessage id="DownloadOurApp" />
              </ProfileLiveText>

              <FristBoxContent>
                <Box component={'img'} src="/images/app-logo/google-pay.png" sx={{ width: '120px', height: '120px' }} />

                <Box component={'img'} src="/images/app-logo/app-store.png" sx={{ width: '120px', height: '120px' }} />
              </FristBoxContent>

              <GradientTypography variant="MediumSemiBoldText">{/* <FormattedMessage id="ComingSoon" /> */}</GradientTypography>
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
