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
        <Box component="img" src="/images/home/gitftsecond.png" width={70} height={82} />
        <ImageAndTextBoxContainer>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box component="img" src="/images/workercards/coin-1.png" width={20} height={20} />
            <TitleTextBoxContainer>
              <TitleText>
                <UINewTypography
                  sx={{
                    fontSize: { xs: '24px', sm: '32px' },
                    fontWeight: 700,
                    lineHeight: { xs: '33.6px', sm: '44.8px' }
                  }}
                >
                  100
                </UINewTypography>
                <UINewTypography
                  sx={{
                    fontSize: { xs: '24px', sm: '32px' },
                    fontWeight: 800,
                    lineHeight: { xs: '33.6px', sm: '44.8px' }
                  }}
                >
                  <FormattedMessage id="FREE" />
                </UINewTypography>
                <UINewTypography
                  sx={{
                    fontSize: { xs: '24px', sm: '32px' },
                    fontWeight: 700,
                    lineHeight: { xs: '33.6px', sm: '44.8px' }
                  }}
                >
                  <FormattedMessage id="Creditss" />
                </UINewTypography>
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
