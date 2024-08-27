'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  MobileImageBoxContainer,
  MobileImageInnerBoxContainer,
  ImageAndTextBoxContainer,
  TitleTextBoxContainer,
  TitleText,
  DescriptionTextBoxContainer
} from './GuestFreeCreditsSignup.styled';
import { FormattedMessage } from 'react-intl';

const GuestModelMobileSignup = () => {
  return (
    <MobileImageBoxContainer>
      <Box
        component="img"
        src="/images/workercards/Workercard-img.jpeg"
        sx={{
          width: '100%',
          maxWidth: '363px',
          height: '100%',
          maxHeight: '332px'
        }}
      />
      {/* <ImageContainer /> */}
      <MobileImageInnerBoxContainer>
        <Box component="img" src="/images/home/free-credits-signup-img.png" width={100} height={100} />
        <ImageAndTextBoxContainer>
          <TitleTextBoxContainer>
            <TitleText>Aesha gave you 100 FREE credits</TitleText>
          </TitleTextBoxContainer>
          <DescriptionTextBoxContainer>
            <UINewTypography variant="SubtitleSmallMedium" color="text.secondary">
              <FormattedMessage id="JoinNowAndEnjoyAFREE" /> Aesha
            </UINewTypography>
          </DescriptionTextBoxContainer>
        </ImageAndTextBoxContainer>
      </MobileImageInnerBoxContainer>
    </MobileImageBoxContainer>
  );
};

export default GuestModelMobileSignup;
