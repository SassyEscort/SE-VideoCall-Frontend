'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  MobileImageInnerBoxContainer,
  ImageAndTextBoxContainer,
  TitleTextBoxContainer,
  TitleText,
  DescriptionTextBoxContainer
} from './GuestFreeCreditsSignup.styled';
import { FormattedMessage } from 'react-intl';
import { AuthCommonBox } from '../AuthCommon.styled';

const GuestModelMobileSignup = ({ image, modelName }: { image: string; modelName: string }) => {
  return (
    <AuthCommonBox>
      <Box
        sx={{
          width: '100%',
          maxWidth: '363px',
          height: '100%',
          minHeight: '290px',
          backgroundImage: `linear-gradient(180deg, #00000000, #000000), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute'
        }}
      />
      {/* <ImageContainer /> */}
      <MobileImageInnerBoxContainer>
        <Box
          component="img"
          src="/images/home/free-credits-signup-img.png"
          alt="signup_free_creditsa"
          width={100}
          height={100}
          sx={{ zIndex: 2 }}
        />
        <ImageAndTextBoxContainer>
          <TitleTextBoxContainer>
            <TitleText>
              {modelName} <FormattedMessage id="GaveYou" /> 30 <FormattedMessage id="FREECredits" />
            </TitleText>
          </TitleTextBoxContainer>
          <DescriptionTextBoxContainer>
            <UINewTypography variant="SubtitleSmallMedium" color="text.secondary" sx={{ zIndex: 2 }}>
              <FormattedMessage id="JoinNowAndEnjoy" /> {modelName}
            </UINewTypography>
          </DescriptionTextBoxContainer>
        </ImageAndTextBoxContainer>
      </MobileImageInnerBoxContainer>
    </AuthCommonBox>
  );
};

export default GuestModelMobileSignup;
