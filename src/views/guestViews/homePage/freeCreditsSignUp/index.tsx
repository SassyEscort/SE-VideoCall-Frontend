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
  HeaderTextContainer,
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
            <Box component="img" src="/images/home/free-credit.webp" alt="credit-signup-img.webp" />
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
                <Box component="img" src="/images/workercards/dollar-img.avif" alt="coin_icon" width={26} height={26}></Box>
                <HeaderTextContainer>
                  <FormattedMessage id="Get1MinutOf" />{' '}
                  <span style={{ fontWeight: 800 }}>
                    <FormattedMessage id="Free" />{' '}
                  </span>
                  <FormattedMessage id="Call" />
                </HeaderTextContainer>
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
