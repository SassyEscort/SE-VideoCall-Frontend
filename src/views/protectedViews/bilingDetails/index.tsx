'use client';
import * as React from 'react';

import Dialog from '@mui/material/Dialog';
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
  DialogContentBox
} from './BillingDetails';
import WorkerCardMobile from 'views/guestViews/commonComponents/mobileWorkerCard';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';

const BillingDetails = ({ open, handleClose, selectDetails }: { open: boolean; handleClose: () => void; selectDetails: any }) => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSMDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      scroll="body"
      PaperProps={{
        sx: {
          maxWidth: '634px'
        }
      }}
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: '#07030E',
          borderRadius: '12px',
          border: isMdDown ? 'solid 0px' : 'solid 1px #232027'
        },
        '& .MuiDialog-container': {
          backgroundColor: isMdDown ? '#07030E' : '#07030e99 !important',
          backdropFilter: 'blur(24px)'
        }
      }}
    >
      <DialogTitleContainer id="responsive-modal-title">
        <UINewTypography variant="h6" color={'#B7B5B9'}>
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
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <UINewTypography variant="buttonLargeMenu" color={'#E9E8EB'}>
                    Credits used:
                  </UINewTypography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
                    <UINewTypography variant="buttonLargeMenu" color={'#E9E8EB'}>
                      70
                    </UINewTypography>
                  </Box>
                </Box>
                <Box>
                  <UINewTypography variant="SubtitleSmallMedium" color={'#B7B5B9'}>
                    05:28 PM, 12 Apr 2024
                  </UINewTypography>
                </Box>
              </ThreeBox>
              <Box>
                <UINewTypography variant="SubtitleSmallMedium" color={'#B7B5B9'}>
                  Duration: 1 hour
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
                    {isSMDown ? 'Start Video Call' : 'Start Video Call again'}
                  </UINewTypography>
                </Box>
              </UIThemeShadowButton>
              <UINewTypography variant="bodySemiBold" color="#FFFFFF" sx={{ textAlign: 'center' }}>
                Explore more models
              </UINewTypography>
            </ButtonMainContainer>
          </FirstBox>
        </MainContainer>
      </DialogContentBox>
    </Dialog>
  );
};

export default BillingDetails;
