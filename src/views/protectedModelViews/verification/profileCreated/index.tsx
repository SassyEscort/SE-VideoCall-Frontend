'use client';

import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import Image from 'next/image';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ChildContainer, Container, ImageContainer, TypographyContainer, TypographyContainer2 } from './profileCreated.styled';
import Link from 'next/link';

const ProfileCreated = () => {
  return (
    <>
      <Container>
        <ChildContainer>
          <Box>
            <ImageContainer>
              <Image width={286} height={212} src="/images/model/super.png" alt="profileCreated" />
            </ImageContainer>
            <TypographyContainer>
              <UINewTypography variant="h3" color={'text.secondary'}>
                <FormattedMessage id="WooHooYourProfile" />
              </UINewTypography>
              <UINewTypography variant="bodyRegular" color={'text.secondary'}>
                <FormattedMessage id="YourProfileIsNowLive" />
              </UINewTypography>
            </TypographyContainer>
          </Box>
          <TypographyContainer2>
            <Box>
              <UINewTypography variant="bodyRegular" color={'text.secondary'}>
                <FormattedMessage id="StartBySetting" />
              </UINewTypography>
            </Box>
            <Box>
              <Link href={'/model/dashboard'}>
                <UIThemeButton variant="contained">
                  <UINewTypography variant="buttonLargeBold">
                    <FormattedMessage id="GoToYourDashboard" />
                  </UINewTypography>
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
