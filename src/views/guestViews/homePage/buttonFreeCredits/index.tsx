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

const ButtonFreeCredits = () => {
  return (
    <DialogContentMain
      scroll="body"
      open={true}
      //   onClose={onClose}
      fullWidth
    >
      <DialogTitleBox>
        <ImageFirst src="/images/free-credits/freecredits.png" />
      </DialogTitleBox>

      <DialogContent sx={{ p: 0 }}>
        <DialogContentSecondBox>
          <DialogContentBoxQuestion>
            <ImageSecond src="/images/free-credits/coins.png" />
            <UINewTypographyFREECredits>
              <FormattedMessage id="100FREECredits" />
            </UINewTypographyFREECredits>
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
