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
import { AuthCommonBox } from '../AuthCommon.styled';

const GuestModelMobileSignup = ({ image, modelName }: { image: string; modelName: string }) => {
  console.log(image, 'image');

  return (
    <AuthCommonBox>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          maxHeight: '290px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'absolute'
        }}
      />
      {/* <ImageContainer /> */}
      <MobileImageInnerBoxContainer>
        <Box component="img" src="/images/home/free-credits-signup-img.png" width={100} height={100} />
        <ImageAndTextBoxContainer>
          <TitleTextBoxContainer>
            <TitleText>
              {modelName} <FormattedMessage id="GaveYou" /> 30 <FormattedMessage id="FREECredits" />
            </TitleText>
          </TitleTextBoxContainer>
          <DescriptionTextBoxContainer>
            <UINewTypography variant="SubtitleSmallMedium" color="text.secondary">
              <FormattedMessage id="JoinNowAndEnjoy" /> {modelName}
            </UINewTypography>
          </DescriptionTextBoxContainer>
        </ImageAndTextBoxContainer>
      </MobileImageInnerBoxContainer>
    </AuthCommonBox>
  );
};

export default GuestModelMobileSignup;
