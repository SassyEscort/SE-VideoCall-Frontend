'use client';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import TimerUI from '../Timer';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';

const DialogContentMain = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentMain })));
const DialogTitleBox = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogTitleBox })));
const DialogContentSecondBox = dynamic(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentSecondBox }))
);
const DialogContentBoxQuestion = dynamic(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentBoxQuestion }))
);
const DialogContentBoxButton = dynamic(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentBoxButton }))
);
const UINewTypographyFREECredits = dynamic(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyFREECredits }))
);
const UINewTypographyJoin = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyJoin })));
const UINewTypographySign = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographySign })));
const UINewTypographyOffer = dynamic(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyOffer }))
);
const UINewTypographyOfferBox = dynamic(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyOfferBox }))
);
const ButtonBox = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ButtonBox })));
const JoinNowAndEnjoyAEREEVideoCallMainBox = dynamic(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.JoinNowAndEnjoyAEREEVideoCallMainBox }))
);
const ImageFirst = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ImageFirst })));
const ImageSecond = dynamic(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ImageSecond })));

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
