'use client';
import React, { lazy, Suspense } from 'react';
const ContactContainer = lazy(() => import('./faqPage.style').then((module) => ({ default: module.ContactContainer })));
const ContactUs = lazy(() => import('./faqPage.style').then((module) => ({ default: module.ContactUs })));
const FAQConatainer = lazy(() => import('./faqPage.style').then((module) => ({ default: module.FAQConatainer })));
const FaqPageMainContainer = lazy(() => import('./faqPage.style').then((module) => ({ default: module.FaqPageMainContainer })));
const FaqPageSubBoxContainer = lazy(() => import('./faqPage.style').then((module) => ({ default: module.FaqPageSubBoxContainer })));
const FirstTextContainer = lazy(() => import('./faqPage.style').then((module) => ({ default: module.FirstTextContainer })));
const StyledAccordion = lazy(() => import('./faqPage.style').then((module) => ({ default: module.StyledAccordion })));
const StyledAccordionDetails = lazy(() => import('./faqPage.style').then((module) => ({ default: module.StyledAccordionDetails })));
const StyledAccordionSummary = lazy(() => import('./faqPage.style').then((module) => ({ default: module.StyledAccordionSummary })));
const UINewTypographyMainText = lazy(() => import('./faqPage.style').then((module) => ({ default: module.UINewTypographyMainText })));
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import HomeMainContainer from '../guestLayout/homeContainer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqPage = () => {
  return (
    <Suspense>
      <FaqPageMainContainer>
        <ContactContainer>
          <ContactUs>
            <UINewTypographyMainText>
              <FormattedMessage id="FrequentlyAskedQuestions" />
            </UINewTypographyMainText>
          </ContactUs>
        </ContactContainer>
        <HomeMainContainer>
          <FaqPageSubBoxContainer>
            <FAQConatainer sx={{ width: '100%', maxWidth: '824px' }}>
              <FaqPageMainContainer>
                <FAQConatainer>
                  <StyledAccordion defaultExpanded>
                    <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="HowDoesTheCredit" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>
                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="OurPlatformOperates" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary aria-controls="panel2-content" id="panel2-header" expandIcon={<ExpandMoreIcon />}>
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="IsThePlatformSecure" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="wePrioritizeTheSecurity" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="CanITrustIheIdentity" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeVerifyTheIdentities" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="AreThereAnyRestrictions" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeHaveStrictGuidelines" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="HowDoITop" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>
                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="YouCanEasilyTopUp" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="WhatMeasuresAre" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeEmployRigorousAge" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="IsThereARefund" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeDoNotOfferRefunds" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="HowAreDisputesResolved" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="InTheEventOfDispute" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="DoINeedToDownload" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="OurPlatformIsEntirely" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="CanIPreviewOrBrowse" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="YouCanBrowseThrough" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FirstTextContainer color="secondary.100">
                        <FormattedMessage id="IsThereMobileApp" />
                      </FirstTextContainer>
                    </StyledAccordionSummary>

                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeOfferResponsiveWeb" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>
                </FAQConatainer>
              </FaqPageMainContainer>
            </FAQConatainer>
          </FaqPageSubBoxContainer>
        </HomeMainContainer>
      </FaqPageMainContainer>
    </Suspense>
  );
};

export default FaqPage;
