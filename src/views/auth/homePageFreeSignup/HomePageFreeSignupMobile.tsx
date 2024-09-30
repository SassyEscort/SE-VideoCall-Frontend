'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  MobileImageBoxContainer,
  MobileImageInnerBoxContainer,
  ImageAndTextBoxContainer,
  TitleTextBoxContainer,
  TitleText,
  DescriptionTextBoxContainer,
  HeaderText
} from './HomePageFreeSignup.styled';
import { FormattedMessage } from 'react-intl';
import Timer from './timer';

const HomePageFreeSignupMobile = () => {
  return (
    <MobileImageBoxContainer>
      <MobileImageInnerBoxContainer>
        <Box component="img" src="/images/home/gitftsecond.png" alt="gift_icon" width={70} height={82} />
        <ImageAndTextBoxContainer>
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
            <Box component="img" src="/images/workercards/coin-1.png" alt="coin.png" width={20} height={20} />
            <TitleTextBoxContainer>
              <TitleText>
                <HeaderText>
                  <FormattedMessage id="FREECall" />
                </HeaderText>
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
