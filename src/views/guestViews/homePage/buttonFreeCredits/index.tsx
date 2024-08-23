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
  ImageSecond,
  UINewTypographyFREE
} from './ButtonfreeCredits.styled';
import TimerUI from '../Timer';

const ButtonFreeCredits = ({ open, onClose, Transition }: { open: boolean; onClose: () => void; Transition: any }) => {
  return (
    <DialogContentMain anchor="bottom" open={open} onClose={onClose}>
      <DialogTitleBox
        sx={{
          '&.MuiTypography-root': {
            padding: '0px 0px'
          }
        }}
      >
        <ImageFirst src="/images/free-credits/gitftsecond.png" sx={{ py: 2 }} />
      </DialogTitleBox>

      <DialogContent sx={{ p: 0 }}>
        <DialogContentSecondBox>
          <DialogContentBoxQuestion>
            <ImageSecond src="/images/free-credits/coins.png" />
            <Box sx={{ display: 'flex', gap: 1, whiteSpace: 'nowrap' }}>
              <UINewTypographyFREECredits>
                <FormattedMessage id="100" />
              </UINewTypographyFREECredits>
              <UINewTypographyFREE>
                <FormattedMessage id="FREE" />
              </UINewTypographyFREE>
              <UINewTypographyFREECredits>
                <FormattedMessage id="Credits" />
              </UINewTypographyFREECredits>
            </Box>
          </DialogContentBoxQuestion>
          <JoinNowAndEnjoyAEREEVideoCallMainBox>
            <DialogContentBoxButton>
              <UINewTypographyJoin>
                <FormattedMessage id="JoinNowAndEnjoyAEREEVideoCall" />
              </UINewTypographyJoin>
            </DialogContentBoxButton>
            <ButtonBox variant="contained">
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
