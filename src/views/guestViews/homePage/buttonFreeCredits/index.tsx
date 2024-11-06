'use client';
import React, { lazy, Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import TimerUI from '../Timer';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';

const DialogContentMain = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentMain })));
const DialogTitleBox = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogTitleBox })));
const DialogContentSecondBox = lazy(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentSecondBox }))
);
const DialogContentBoxQuestion = lazy(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentBoxQuestion }))
);
const DialogContentBoxButton = lazy(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.DialogContentBoxButton }))
);
const UINewTypographyFREECredits = lazy(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyFREECredits }))
);
const UINewTypographyJoin = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyJoin })));
const UINewTypographySign = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographySign })));
const UINewTypographyOffer = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyOffer })));
const UINewTypographyOfferBox = lazy(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.UINewTypographyOfferBox }))
);
const ButtonBox = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ButtonBox })));
const JoinNowAndEnjoyAEREEVideoCallMainBox = lazy(() =>
  import('./ButtonfreeCredits.styled').then((module) => ({ default: module.JoinNowAndEnjoyAEREEVideoCallMainBox }))
);
const ImageFirst = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ImageFirst })));
const ImageSecond = lazy(() => import('./ButtonfreeCredits.styled').then((module) => ({ default: module.ImageSecond })));

const ButtonFreeCredits = ({ open, onClose, onSignupOpen }: { open: boolean; onClose: () => void; onSignupOpen: () => void }) => {
  return (
    <Suspense>
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
    </Suspense>
  );
};

export default ButtonFreeCredits;
