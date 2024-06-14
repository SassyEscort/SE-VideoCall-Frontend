'use client';
import { Divider, IconButton } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import {
  CreditsAddedMainBox,
  HeadingContainer,
  CreditsCloseIconContainer,
  CreditsBodyContainer,
  ImageContainer,
  UINewTypographyNew,
  NewBalanceDetailsConatainer,
  AddedCreditsContainer,
  NewBalanceDetails,
  ExploreButtonContainer
} from './CreditsAddded.styled';
function CreditsAdded({ onClose }: { onClose: () => void }) {
  return (
    <CreditsAddedMainBox>
      <HeadingContainer>
        <UINewTypography variant="h6" color="common.white">
          Credits added
        </UINewTypography>
        <CreditsCloseIconContainer display="flex" alignItems="flex-end" justifyContent="flex-end">
          <IconButton
            sx={{
              color: 'common.white',
              position: 'absolute',
              top: '18px',
              padding: '0',
              right: { xs: '19px' }
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </CreditsCloseIconContainer>
      </HeadingContainer>
      <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
      <CreditsBodyContainer>
        <ImageContainer>
          <Image alt="home_model" width={217} height={226} src="/images/credits/Frame.webp" />
        </ImageContainer>
        <AddedCreditsContainer>
          <UINewTypographyNew>40 New Credits added</UINewTypographyNew>
        </AddedCreditsContainer>
        <NewBalanceDetailsConatainer>
          <UINewTypography>New Balance: </UINewTypography>
          <NewBalanceDetails>
            <Image alt="home_model" width={24} height={24} src="/images/workercards/dollar-img.png" />
            <UINewTypography sx={{ pl: '8px' }}>60 Credits</UINewTypography>
          </NewBalanceDetails>
        </NewBalanceDetailsConatainer>
        <ExploreButtonContainer sx={{ display: 'flex', height: '39px', mt: '56px', mb: '56px', width: '176px' }}>
          <UIThemeShadowButton variant="contained">
            <UINewTypography variant="buttonLargeBold" color="white.main">
              Explore More
            </UINewTypography>
          </UIThemeShadowButton>
        </ExploreButtonContainer>
      </CreditsBodyContainer>
    </CreditsAddedMainBox>
  );
}

export default CreditsAdded;
