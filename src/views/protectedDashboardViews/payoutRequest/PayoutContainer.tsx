'use client';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { FormattedMessage } from 'react-intl';
import {
  MainConatiner,
  BoxMessage,
  SecondMainContainer,
  FirstUsdBox,
  SecondUsdBox,
  UsdBox,
  DollerBox,
  ButtonBox,
  RecentWithdrawlsMainContainer,
  SecondRecentWithdrawlsMainContainer,
  Withdrawls,
  ToSiliconValleyBankMainConatiner,
  FirstToSiliconValleyBankMainConatiner,
  FirstToSiliconValleyBank,
  ImageBox,
  Showtracking,
  ShowtrackingBox,
  Pendingconatiner,
  Pending,
  TextDetail,
  PendingSecond
} from './PayoutRequest';
import PayoutWidthDraw from '../payoutWithDraw';

const PayoutContainer = () => {
  const [open, setIsOpen] = useState(false);

  const openDailog = () => {
    setIsOpen(true);
  };

  const closeDailog = () => {
    setIsOpen(false);
  };
  return (
    <MainConatiner>
      <BoxMessage>
        <TextDetail variant="h2" color={'text.secondary'}>
          Good evening, Aesha
        </TextDetail>
      </BoxMessage>
      <SecondMainContainer>
        <FirstUsdBox>
          <SecondUsdBox>
            <UsdBox>
              <Box component={'img'} src="/images/payout/pay.webp" alt="usd" sx={{ borderRadius: '50%' }} />
              <UINewTypography variant="SubtitleSmallMedium">
                <FormattedMessage id="USD" />
              </UINewTypography>
            </UsdBox>
            <DollerBox>
              <UINewTypography variant="h5" color={'text.secondary'}>
                $
              </UINewTypography>
              <UINewTypography variant="h5" color={'text.secondary'}>
                10,000
              </UINewTypography>
            </DollerBox>
          </SecondUsdBox>

          <ButtonBox variant="contained" onClick={openDailog}>
            <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
              <FormattedMessage id="Withdraw" />
            </UINewTypography>
          </ButtonBox>
        </FirstUsdBox>
        <RecentWithdrawlsMainContainer>
          <SecondRecentWithdrawlsMainContainer>
            <Withdrawls>
              <UINewTypography variant="SubtitleSmallMedium" color={'text.primary'}>
                <FormattedMessage id="RecentWithdrawls" />
              </UINewTypography>
            </Withdrawls>
            <ToSiliconValleyBankMainConatiner>
              <FirstToSiliconValleyBankMainConatiner>
                <FirstToSiliconValleyBank>
                  <ImageBox>
                    <Box component={'img'} src="/images/payout/home.png" />
                  </ImageBox>
                  <Showtracking>
                    <UINewTypography variant="buttonLargeMenu" color={'text.secondary'}>
                      <FormattedMessage id="ToSiliconValleyBank" />
                    </UINewTypography>
                    <ShowtrackingBox>
                      <UINewTypography variant="captionLarge" color="text.primary">
                        <FormattedMessage id=" ShowTracking" />
                      </UINewTypography>
                      <KeyboardArrowDownOutlinedIcon />
                    </ShowtrackingBox>
                  </Showtracking>
                </FirstToSiliconValleyBank>
                <Pendingconatiner>
                  <UINewTypography variant="body" color={'text.secondary'}>
                    - $12,000
                  </UINewTypography>
                  <Pending variant="captionLarge">Pending</Pending>
                </Pendingconatiner>
              </FirstToSiliconValleyBankMainConatiner>

              <Divider sx={{ border: '1px solid #232027 ' }} />
            </ToSiliconValleyBankMainConatiner>
            <ToSiliconValleyBankMainConatiner>
              <FirstToSiliconValleyBankMainConatiner>
                <FirstToSiliconValleyBank>
                  <ImageBox>
                    <Box component={'img'} src="/images/payout/home.png" />
                  </ImageBox>
                  <Showtracking>
                    <UINewTypography variant="buttonLargeMenu" color={'text.secondary'}>
                      <FormattedMessage id="ToSiliconValleyBank" />
                    </UINewTypography>
                    <ShowtrackingBox>
                      <UINewTypography variant="captionLarge" color="text.primary">
                        <FormattedMessage id="ShowTracking" />
                      </UINewTypography>
                      <KeyboardArrowDownOutlinedIcon />
                    </ShowtrackingBox>
                  </Showtracking>
                </FirstToSiliconValleyBank>
                <Pendingconatiner>
                  <UINewTypography variant="body" color={'text.secondary'}>
                    - $12,000
                  </UINewTypography>
                  <PendingSecond variant="captionLarge">
                    <FormattedMessage id="Completed" />
                  </PendingSecond>
                </Pendingconatiner>
              </FirstToSiliconValleyBankMainConatiner>

              <Divider sx={{ border: '1px solid #232027 ' }} />
            </ToSiliconValleyBankMainConatiner>
          </SecondRecentWithdrawlsMainContainer>
        </RecentWithdrawlsMainContainer>
      </SecondMainContainer>
      <PayoutWidthDraw open={open} onClose={closeDailog} />
    </MainConatiner>
  );
};

export default PayoutContainer;
