'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
  ButtonContainer,
  DescriptionTextBoxContainer,
  DialogContentMain,
  DialogTitleBox,
  FreeCreditSignupMainContainer,
  HeaderCloseButtonBoxContainer,
  HeaderTextContainer,
  TextInnerBoxContainer,
  TextMainBoxContainer,
  TitleTextBoxContainer,
  TitleTextInnerBoxContainer
} from './ClaimCreditsSignUp.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { Box } from '@mui/material';
import Image from 'next/image';

const ClaimCreditSignUp = ({ open, onClose, onSignupOpen }: { open: boolean; onClose: () => void; onSignupOpen: () => void }) => {
  return (
    <DialogContentMain open={open} fullWidth onClose={onClose} scroll="body">
      <DialogTitleBox id="responsive-modal-title">
        {/* <Box component="img" src="/images/home/congrulation-gif.gif" sx={{ width: '665px', height: '485px', position: 'absolute' }} /> */}
        <FreeCreditSignupMainContainer>
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
                  <FormattedMessage id="Claimyourfreecredits" />{' '}
                </HeaderTextContainer>
              </TitleTextInnerBoxContainer>
              <DescriptionTextBoxContainer>
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  <FormattedMessage id="Verifyyourphone" />
                </UINewTypography>
              </DescriptionTextBoxContainer>
            </TitleTextBoxContainer>

            <ButtonContainer variant="contained" onClick={onSignupOpen}>
              <UINewTypography variant="bodySemiBold" lineHeight={'150%'} color="white.main">
                Verify now!
              </UINewTypography>
            </ButtonContainer>
          </TextInnerBoxContainer>
          <Box sx={{ maxWidth: '655px', overflow: 'hidden', position: 'absolute', bottom: 0 }}>
            <Image src="/images/free-credits/gift.webp" alt="claim-credit" width={655} height={295} />
          </Box>
        </TextMainBoxContainer>
      </DialogContent>
    </DialogContentMain>
  );
};

export default ClaimCreditSignUp;