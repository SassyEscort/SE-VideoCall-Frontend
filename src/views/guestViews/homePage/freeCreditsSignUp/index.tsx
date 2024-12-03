'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import { lazy, Suspense } from 'react';

const ButtonContainer = lazy(() => import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.ButtonContainer })));
const DescriptionTextBoxContainer = lazy(() =>
  import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.DescriptionTextBoxContainer }))
);
const DialogContentMain = lazy(() => import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.DialogContentMain })));
const DialogTitleBox = lazy(() => import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.DialogTitleBox })));
const FreeCreditSignupMainContainer = lazy(() =>
  import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.FreeCreditSignupMainContainer }))
);
const HeaderCloseButtonBoxContainer = lazy(() =>
  import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.HeaderCloseButtonBoxContainer }))
);
const HeaderTextContainer = lazy(() => import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.HeaderTextContainer })));
const ImageBoxContainer = lazy(() => import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.ImageBoxContainer })));
const TextInnerBoxContainer = lazy(() =>
  import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.TextInnerBoxContainer }))
);
const TextMainBoxContainer = lazy(() => import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.TextMainBoxContainer })));
const TitleTextBoxContainer = lazy(() =>
  import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.TitleTextBoxContainer }))
);
const TitleTextInnerBoxContainer = lazy(() =>
  import('./FreeCreditsSignUp.styled').then((module) => ({ default: module.TitleTextInnerBoxContainer }))
);

const FreeCreditsSignUp = ({ open, onClose, onSignupOpen }: { open: boolean; onClose: () => void; onSignupOpen: () => void }) => {
  return (
    <Suspense>
      <DialogContentMain open={open} fullWidth onClose={onClose} scroll="body">
        <DialogTitleBox id="responsive-modal-title">
          {/* <Box component="img" src="/images/home/congrulation-gif.gif" sx={{ width: '665px', height: '485px', position: 'absolute' }} /> */}
          <FreeCreditSignupMainContainer>
            <ImageBoxContainer>
              <Box component="img" loading="lazy" src="/images/home/free-credit.webp" alt="credit-signup-img.webp" />
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
        <DialogContent sx={{ padding: '30px 24px' }}>
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
    </Suspense>
  );
};

export default FreeCreditsSignUp;
