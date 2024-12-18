'use client';
import React, { Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import TimerUI from '../Timer';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import {
  ButtonBox,
  DialogContentBoxButton,
  DialogContentBoxQuestion,
  DialogContentMain,
  DialogContentSecondBox,
  DialogTitleBox,
  ImageFirst,
  ImageSecond,
  JoinNowAndEnjoyAEREEVideoCallMainBox,
  UINewTypographyFREECredits,
  UINewTypographyJoin,
  UINewTypographyOffer,
  UINewTypographyOfferBox,
  UINewTypographySign
} from './ChatMessageClickPopUp.styled';

const ChatMessageClickPopUp = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
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
    </Suspense>
  );
};

export default ChatMessageClickPopUp;
