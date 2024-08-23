'use client';
import { Timer } from '@mui/icons-material';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  MobileImageBoxContainer,
  MobileImageInnerBoxContainer,
  ImageAndTextBoxContainer,
  TitleTextBoxContainer,
  TitleText,
  DescriptionTextBoxContainer
} from './HomePageFreeSignup.styled';
import { FormattedMessage } from 'react-intl';

const HomePageFreeSignupMobile = () => {
  return (
    <MobileImageBoxContainer>
      <MobileImageInnerBoxContainer>
        <Box component="img" src="/images/home/free-credits-signup-img.png" width={100} height={100} />
        <ImageAndTextBoxContainer>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box component="img" src="/images/workercards/coin-1.png" width={20} height={20} />
            <TitleTextBoxContainer>
              <TitleText>
                100 <FormattedMessage id="FREE" />
                <FormattedMessage id="Creditss" />
              </TitleText>
            </TitleTextBoxContainer>
          </Box>
          <DescriptionTextBoxContainer>
            <UINewTypography variant="SubtitleSmallMedium" color="text.secondary">
              <FormattedMessage id="JoinNowAndEnjoyAFREEVideo" />
            </UINewTypography>
          </DescriptionTextBoxContainer>
        </ImageAndTextBoxContainer>
      </MobileImageInnerBoxContainer>
      <Timer />
    </MobileImageBoxContainer>
  );
};

export default HomePageFreeSignupMobile;
