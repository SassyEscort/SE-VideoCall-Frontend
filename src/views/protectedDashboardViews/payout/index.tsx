'use client';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  BoxMessage,
  DollerBox,
  FirstToSiliconValleyBank,
  FirstToSiliconValleyBankMainConatiner,
  FirstUsdBox,
  ImageBox,
  MainConatiner,
  Pending,
  Pendingconatiner,
  RecentWithdrawlsMainContainer,
  SecondMainContainer,
  SecondRecentWithdrawlsMainContainer,
  SecondUsdBox,
  Showtracking,
  ShowtrackingBox,
  ToSiliconValleyBankMainConatiner,
  UsdBox,
  Withdrawls
} from './Payouts';
import { FormattedMessage } from 'react-intl';
const Payouts = () => {
  return (
    <MainConatiner>
      <BoxMessage>
        <UINewTypography variant="h2" color={'text.secondary'}>
          Good evening, Aesha
        </UINewTypography>
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

          <UIThemeButton
            variant="contained"
            sx={{ marginLeft: { xs: '16px' }, marginBottom: { xs: '16px' }, sm: { marginLeft: 0, marginBottom: 0 } }}
          >
            <UINewTypography variant="buttonLargeBold" color={'primary.200'}>
              <FormattedMessage id="Withdraw" />
            </UINewTypography>
          </UIThemeButton>
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
                  <Pending variant="captionLarge">
                    <FormattedMessage id="Completed" />
                  </Pending>
                </Pendingconatiner>
              </FirstToSiliconValleyBankMainConatiner>

              <Divider sx={{ border: '1px solid #232027 ' }} />
            </ToSiliconValleyBankMainConatiner>
          </SecondRecentWithdrawlsMainContainer>
        </RecentWithdrawlsMainContainer>
      </SecondMainContainer>
    </MainConatiner>
  );
};

export default Payouts;
