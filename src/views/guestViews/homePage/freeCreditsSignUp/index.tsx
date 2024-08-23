'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import {
  ButtonContainer,
  DescriptionTextBoxContainer,
  DialogContentMain,
  DialogTitleBox,
  FreeCreditSignupMainContainer,
  HeaderCloseButtonBoxContainer,
  ImageBoxContainer,
  TextInnerBoxContainer,
  TextMainBoxContainer,
  TitleTextBoxContainer,
  TitleTextInnerBoxContainer
} from './FreeCreditsSignUp.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';

const FreeCreditsSignUp = ({ open, onClose, onSignupOpen }: { open: boolean; onClose: () => void; onSignupOpen: () => void }) => {
  return (
    <DialogContentMain open={open} fullWidth onClose={onClose} scroll="body">
      <DialogTitleBox id="responsive-modal-title">
        {/* <Box component="img" src="/images/home/congrulation-gif.gif" sx={{ width: '665px', height: '485px', position: 'absolute' }} /> */}
        <FreeCreditSignupMainContainer>
          <ImageBoxContainer>
            <Box component="img" src="/images/home/credit-signup-img.png" width={291} height={291}></Box>
          </ImageBoxContainer>
          <HeaderCloseButtonBoxContainer>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                color: (theme) => theme.palette.text.secondary
              }}
            >
              <CloseIcon />
            </IconButton>
          </HeaderCloseButtonBoxContainer>
        </FreeCreditSignupMainContainer>
      </DialogTitleBox>
      <DialogContent sx={{ p: 0 }}>
        <TextMainBoxContainer>
          <TextInnerBoxContainer>
            <TitleTextBoxContainer>
              <TitleTextInnerBoxContainer>
                <Box component="img" src="/images/workercards/coin-1.png" width={26} height={26}></Box>
                <UINewTypography
                  variant="MediumSemiBoldText"
                  style={{
                    background: 'linear-gradient(90deg, #FBA631, #FFFFFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  <FormattedMessage id="100FREECreditsForYou" />
                </UINewTypography>
              </TitleTextInnerBoxContainer>
              <DescriptionTextBoxContainer>
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  <FormattedMessage id="JoinNowAndEnjoyAFREEVideo" />
                </UINewTypography>
              </DescriptionTextBoxContainer>
            </TitleTextBoxContainer>

            <ButtonContainer variant="contained" onClick={onSignupOpen}>
              <UINewTypography variant="bodySemiBold" lineHeight={'150%'} color="white.main">
                <FormattedMessage id="SignUpAndClaimNow" />
              </UINewTypography>
            </ButtonContainer>
          </TextInnerBoxContainer>
        </TextMainBoxContainer>
      </DialogContent>
    </DialogContentMain>
  );
};

export default FreeCreditsSignUp;
