'use client';
import Divider from '@mui/material/Divider';
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
  ExploreButtonContainer,
  NewUIIconButton
} from './CreditsAddded.styled';

import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
function CreditsAdded({ onClose, addedCredits, newBalance }: { onClose: () => void; addedCredits: number; newBalance: number }) {
  return (
    <CreditsAddedMainBox>
      <HeadingContainer>
        <UINewTypography variant="h6" color="common.white">
          <FormattedMessage id="Creditsadded" />
        </UINewTypography>
        <CreditsCloseIconContainer display="flex" alignItems="flex-end" justifyContent="flex-end">
          <NewUIIconButton onClick={onClose}>
            <CloseIcon />
          </NewUIIconButton>
        </CreditsCloseIconContainer>
      </HeadingContainer>
      <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
      <CreditsBodyContainer>
        <ImageContainer>
          <Image alt="home_model" width={217} height={226} src="/images/credits/Frame.webp" />
        </ImageContainer>
        <AddedCreditsContainer>
          <UINewTypographyNew>
            {addedCredits} <FormattedMessage id="NewCredits" />
          </UINewTypographyNew>
        </AddedCreditsContainer>
        <NewBalanceDetailsConatainer>
          <UINewTypography>
            <FormattedMessage id="NewBalance" />
          </UINewTypography>
          <NewBalanceDetails>
            <Image alt="home_model" width={24} height={24} src="/images/workercards/dollar-img.png" />
            <UINewTypography sx={{ pl: '8px' }}>
              {newBalance} <FormattedMessage id="Credits" />
            </UINewTypography>
          </NewBalanceDetails>
        </NewBalanceDetailsConatainer>
        <ExploreButtonContainer>
          <Link prefetch={false} href="/">
            <UIThemeShadowButton variant="contained" sx={{ p: '10px 29px', width: '176px' }}>
              <UINewTypography variant="buttonLargeBold" color="white.main">
                <FormattedMessage id="ExploreModels" />
              </UINewTypography>
            </UIThemeShadowButton>
          </Link>
        </ExploreButtonContainer>
      </CreditsBodyContainer>
    </CreditsAddedMainBox>
  );
}

export default CreditsAdded;
