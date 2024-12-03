'use client';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import TimerUI from '../Timer';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';

const DialogContentMain = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentMain })), {
  ssr: false
});
const DialogTitleBox = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogTitleBox })), {
  ssr: false
});
const DialogContentSecondBox = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentSecondBox })),
  { ssr: false }
);
const DialogContentBoxQuestion = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentBoxQuestion })),
  { ssr: false }
);
const DialogContentBoxButton = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentBoxButton })),
  { ssr: false }
);
const UINewTypographyFREECredits = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyFREECredits })),
  { ssr: false }
);
const UINewTypographyJoin = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyJoin })),
  { ssr: false }
);
const UINewTypographySign = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographySign })),
  { ssr: false }
);
const UINewTypographyOffer = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyOffer })),
  { ssr: false }
);
const UINewTypographyOfferBox = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyOfferBox })),
  { ssr: false }
);
const ButtonBox = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ButtonBox })), { ssr: false });
const JoinNowAndEnjoyAEREEVideoCallMainBox = dynamic(
  () => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.JoinNowAndEnjoyAEREEVideoCallMainBox })),
  { ssr: false }
);
const ImageFirst = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ImageFirst })), { ssr: false });
const ImageSecond = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ImageSecond })), { ssr: false });

const ButtonFreeCredits = ({ open, onClose, onSignupOpen }: { open: boolean; onClose: () => void; onSignupOpen: () => void }) => {
  return (
    <DialogContentMain anchor="bottom" open={open} onClose={onClose}>
      <DialogTitleBox
        sx={{
          '&.MuiTypography-root': {
            padding: '0px 0px'
          }
        }}
      >
        <ImageFirst loading="eager" src="/images/free-credits/gitftsecond.png" alt="free_credit_gift" sx={{ py: 2 }} />
      </DialogTitleBox>

      <DialogContent sx={{ p: 0 }}>
        <DialogContentSecondBox>
          <DialogContentBoxQuestion>
            <ImageSecond loading="eager" src="/images/free-credits/coins.png" alt="free_credit_coin" />
            <UINewTypographyFREECredits>
              <FormattedMessage id="FREECall" />
            </UINewTypographyFREECredits>
          </DialogContentBoxQuestion>
          <JoinNowAndEnjoyAEREEVideoCallMainBox>
            <DialogContentBoxButton>
              <UINewTypographyJoin>
                <FormattedMessage id="JoinNowAndEnjoyAEREEVideoCall" />
              </UINewTypographyJoin>
            </DialogContentBoxButton>
            <ButtonBox variant="contained" onClick={onSignupOpen}>
              <UINewTypographySign>
                <FormattedMessage id="SignUpAndClaimNow" />
              </UINewTypographySign>
            </ButtonBox>

            <UINewTypographyOfferBox>
              <UINewTypographyOffer>
                <FormattedMessage id="offerValidFor" />
              </UINewTypographyOffer>
              <Box>
                <TimerUI />
              </Box>
            </UINewTypographyOfferBox>
          </JoinNowAndEnjoyAEREEVideoCallMainBox>
        </DialogContentSecondBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default ButtonFreeCredits;
