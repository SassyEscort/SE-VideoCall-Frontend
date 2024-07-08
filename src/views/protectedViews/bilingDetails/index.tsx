'use client';
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

import theme from 'themes/theme';
import { SecondSubContainerImgWorkerCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';

import {
  DialogTitleContainer,
  MainContainer,
  FirstBox,
  SecondBox,
  ThreeBox,
  ButtonMainContainer,
  BoxImage,
  DialogContentBox,
  DialogBox,
  CreditsMainBox,
  CreditsPriceBox
} from './BillingDetails';
import WorkerCardMobile from 'views/guestViews/commonComponents/mobileWorkerCard';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import { FormattedMessage } from 'react-intl';

const BillingDetails = ({ open, handleClose, selectDetails }: { open: boolean; handleClose: () => void; selectDetails: any }) => {
  const isSMDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <DialogBox open={open} onClose={handleClose} fullWidth scroll="body">
      <DialogTitleContainer id="responsive-modal-title">
        <UINewTypography variant="h6" color="secondary.200">
          Details
        </UINewTypography>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: (theme) => theme.palette.text.secondary
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleContainer>
      <Box>
        <Divider
          sx={{
            border: '1px solid #232027',
            display: { sm: 'block', display: 'none' }
          }}
        />
      </Box>
      <DialogContentBox>
        <MainContainer>
          <WorkerCardMobile modelDetails={selectDetails} />
          <FirstBox>
            <SecondBox>
              <ThreeBox>
                <CreditsMainBox>
                  <UINewTypography variant="buttonLargeMenu" color="secondary.200">
                    <FormattedMessage id=" CreditsUsed" />
                  </UINewTypography>
                  <CreditsPriceBox>
                    <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
                    <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                      70
                    </UINewTypography>
                  </CreditsPriceBox>
                </CreditsMainBox>
                <Box>
                  <UINewTypography variant="SubtitleSmallMedium" color="secondary.200">
                    05:28 PM, 12 Apr 2024
                  </UINewTypography>
                </Box>
              </ThreeBox>
              <Box>
                <UINewTypography variant="SubtitleSmallMedium" color="secondary.200">
                  <FormattedMessage id="Duration" /> 1 hour
                </UINewTypography>
              </Box>
            </SecondBox>
            <ButtonMainContainer>
              <UIThemeShadowButton
                sx={{
                  height: 'auto',
                  maxWidth: '100%',
                  '&.MuiButtonBase-root': { height: { xs: '40px', sm: '44px' } }
                }}
                fullWidth
                variant="contained"
              >
                <Box display="flex" alignItems="center" gap="10px">
                  <BoxImage src="/images/workercards/video-call.svg" alt="video-call" />
                  <UINewTypography color="common.white" variant="bodySemiBold" sx={{ whiteSpace: 'nowrap' }}>
                    {isSMDown ? <FormattedMessage id="StartVideoCall" /> : <FormattedMessage id="StartVideoCallAgain" />}
                  </UINewTypography>
                </Box>
              </UIThemeShadowButton>
              <UINewTypography variant="bodySemiBold" color="#FFFFFF" sx={{ textAlign: 'center' }}>
                <FormattedMessage id="ExploreMoreModels" />
              </UINewTypography>
            </ButtonMainContainer>
          </FirstBox>
        </MainContainer>
      </DialogContentBox>
    </DialogBox>
  );
};

export default BillingDetails;
