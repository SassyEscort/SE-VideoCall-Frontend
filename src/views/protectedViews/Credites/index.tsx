import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { SecondSubContainerImgWorkerCard } from 'views/guestViews/commonComponents/WorkerCard/WorkerCard.styled';
import {
  BoxFirstTextContainer,
  BoxSecondTextContainer,
  BuyCreditsText,
  CreditsMainContainer,
  CreditsSubContainer,
  FirsTextMainContainer,
  FirsTextSubContainer,
  ImagMainContainer,
  ImagSubContainer,
  MainImagContainer,
  SecondTextSubContainer,
  TextMainContainer,
  TopTextContainer
} from './Credits.styled';

const Credits = () => {
  return (
    <CreditsMainContainer>
      <CreditsSubContainer>
        <TextMainContainer>
          <FirsTextMainContainer>
            <UINewTypography variant="h2" color="text.secondary">
              Credit
            </UINewTypography>
            <FirsTextSubContainer>
              <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                Balance:
              </UINewTypography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
                <UINewTypography variant="buttonLargeMenu" color="text.secondary">
                  40
                </UINewTypography>
              </Box>
            </FirsTextSubContainer>
          </FirsTextMainContainer>
          <SecondTextSubContainer>
            <BuyCreditsText>Buy Credits and have non stop video calls with your favourite models.</BuyCreditsText>
          </SecondTextSubContainer>
        </TextMainContainer>
        <ImagMainContainer>
          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-1.png" />
            <BoxFirstTextContainer>
              <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" sx={{ height: '16px' }} />
              <UINewTypography variant="subtitle" color="text.secondary" sx={{ marginLeft: '6px' }}>
                90 credits
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <UINewTypography variant="bodySmall" color="secondary.700" sx={{ display: 'flex', justifyContent: 'center' }}>
                Buy Now at
              </UINewTypography>
              <UINewTypography color="text.secondary" sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}>
                $1.99
              </UINewTypography>
            </BoxSecondTextContainer>
          </ImagSubContainer>

          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-2.png" />
            <BoxFirstTextContainer>
              <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" sx={{ height: '16px' }} />
              <UINewTypography variant="subtitle" color="text.secondary" sx={{ marginLeft: '6px' }}>
                90 credits
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <UINewTypography variant="bodySmall" color="secondary.700" sx={{ display: 'flex', justifyContent: 'center' }}>
                Buy Now at
              </UINewTypography>
              <UINewTypography color="text.secondary" sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}>
                $1.99
              </UINewTypography>
            </BoxSecondTextContainer>
          </ImagSubContainer>

          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-3.png" />
            <BoxFirstTextContainer>
              <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" sx={{ height: '16px' }} />
              <UINewTypography variant="subtitle" color="text.secondary" sx={{ marginLeft: '6px' }}>
                90 credits
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <UINewTypography variant="bodySmall" color="secondary.700" sx={{ display: 'flex', justifyContent: 'center' }}>
                Buy Now at
              </UINewTypography>
              <UINewTypography color="text.secondary" sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}>
                $1.99
              </UINewTypography>
            </BoxSecondTextContainer>
            <TopTextContainer>
              <UINewTypography color="text.secondary">Best Value</UINewTypography>
            </TopTextContainer>
          </ImagSubContainer>

          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-4.png" />
            <BoxFirstTextContainer>
              <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" sx={{ height: '16px' }} />
              <UINewTypography variant="subtitle" color="text.secondary" sx={{ marginLeft: '6px' }}>
                90 credits
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <UINewTypography variant="bodySmall" color="secondary.700" sx={{ display: 'flex', justifyContent: 'center' }}>
                Buy Now at
              </UINewTypography>
              <UINewTypography color="text.secondary" sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}>
                $1.99
              </UINewTypography>
            </BoxSecondTextContainer>
            <TopTextContainer>
              <UINewTypography color="text.secondary">Most Popular</UINewTypography>
            </TopTextContainer>
          </ImagSubContainer>

          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-5.png" />
            <BoxFirstTextContainer>
              <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" sx={{ height: '16px' }} />
              <UINewTypography variant="subtitle" color="text.secondary" sx={{ marginLeft: '6px' }}>
                90 credits
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <UINewTypography variant="bodySmall" color="secondary.700" sx={{ display: 'flex', justifyContent: 'center' }}>
                Buy Now at
              </UINewTypography>
              <UINewTypography color="text.secondary" sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}>
                $1.99
              </UINewTypography>
            </BoxSecondTextContainer>
          </ImagSubContainer>

          <ImagSubContainer>
            <MainImagContainer src="/images/credits/credits-img-6.png" />
            <BoxFirstTextContainer>
              <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" sx={{ height: '16px' }} />
              <UINewTypography variant="subtitle" color="text.secondary" sx={{ marginLeft: '6px' }}>
                90 credits
              </UINewTypography>
            </BoxFirstTextContainer>
            <BoxSecondTextContainer>
              <UINewTypography variant="bodySmall" color="secondary.700" sx={{ display: 'flex', justifyContent: 'center' }}>
                Buy Now at
              </UINewTypography>
              <UINewTypography color="text.secondary" sx={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}>
                $1.99
              </UINewTypography>
            </BoxSecondTextContainer>
          </ImagSubContainer>
        </ImagMainContainer>
      </CreditsSubContainer>
    </CreditsMainContainer>
  );
};

export default Credits;
