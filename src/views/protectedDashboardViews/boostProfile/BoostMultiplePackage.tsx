'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  BoostPackageMainBoxContainer,
  BoxFirstTextContainer,
  BoxSecondTextContainer,
  CreditBuyText,
  CreditCardImage,
  DollarCreditText,
  FirstBoxContainer,
  ImagSubContainer,
  MainImagContainer
} from './BoostMultiplePackage.styled';
import { ProfilePlanResData } from 'services/commonApi/commonApi.services';
import { Grid } from '@mui/material';
import { ImagMainContainer } from 'views/protectedViews/Credites/Credits.styled';

const BoostMultiplePackage = ({
  allPlans,
  handleBoostOpen
}: {
  allPlans: ProfilePlanResData[];
  handleBoostOpen: (planDetails: ProfilePlanResData) => void;
}) => {
  return (
    <>
      {allPlans?.map((plan, index) => (
        <BoostPackageMainBoxContainer key={index} onClick={() => handleBoostOpen(plan)}>
          <UINewTypography variant="h5">
            <FormattedMessage id="ChooseABoostPackageToSpotligh" />
          </UINewTypography>
          <ImagMainContainer>
            <FirstBoxContainer>
              <Grid container sx={{ gap: 2 }}>
                <ImagSubContainer>
                  <MainImagContainer src="/images/credits/credits-img-1.png" />
                  <BoxFirstTextContainer>
                    <CreditCardImage src="/images/icons/boost-timer-icon.svg" />
                    <UINewTypography
                      sx={{
                        fontSize: '28px',
                        fontWeight: 500,
                        lineHeight: '33.6px',
                        color: 'text.secondary'
                      }}
                    >
                      {plan.duration} <FormattedMessage id="Hours" />
                    </UINewTypography>
                  </BoxFirstTextContainer>
                  <BoxSecondTextContainer>
                    {!plan.is_free && (
                      <CreditBuyText variant="bodySmall" color="secondary.700">
                        <FormattedMessage id="BuyNowAt" />
                      </CreditBuyText>
                    )}
                    <DollarCreditText color="text.secondary">
                      {plan.is_free ? <FormattedMessage id="Free" /> : `$${plan.cost}`}
                    </DollarCreditText>
                  </BoxSecondTextContainer>
                </ImagSubContainer>
              </Grid>
            </FirstBoxContainer>
          </ImagMainContainer>
        </BoostPackageMainBoxContainer>
      ))}
    </>
  );
};

export default BoostMultiplePackage;
