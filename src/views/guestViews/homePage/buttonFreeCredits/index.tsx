'use client';
import { Box, DialogContent } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  DialogContentMain,
  DialogTitleBox,
  DialogContentSecondBox,
  DialogContentBoxQuestion,
  DialogContentBoxButton,
  UINewTypographyFREECredits,
  UINewTypographyJoin,
  UINewTypographySign,
  UINewTypographyOffer,
  UINewTypographyOfferBox,
  ButtonBox,
  JoinNowAndEnjoyAEREEVideoCallMainBox,
  ImageFirst,
  ImageSecond
} from './ButtonfreeCredits.styled';
import TimerUI from '../Timer';

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
        <ImageFirst src="/images/free-credits/gitftsecond.png" alt="free_credit_gift" sx={{ py: 2 }} />
      </DialogTitleBox>

      <DialogContent sx={{ p: 0 }}>
        <DialogContentSecondBox>
          <DialogContentBoxQuestion>
            <ImageSecond src="/images/free-credits/coins.png" alt="free_credit_coin" />
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
