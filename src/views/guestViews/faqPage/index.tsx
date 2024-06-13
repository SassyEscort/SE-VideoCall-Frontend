'use client';
import React from 'react';
import {
  ContactContainer,
  ContactUs,
  FAQConatainer,
  FaqPageMainContainer,
  FaqPageSubBoxContainer,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary
} from './faqPage.style';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import HomeMainContainer from '../guestLayout/homeContainer';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqPage = () => {
  return (
    <>
      <FaqPageMainContainer>
        <ContactContainer>
          <ContactUs>
            <UINewTypography variant="h1" color="text.secondary">
              <FormattedMessage id="FrequentlyAskedQuestions" />
            </UINewTypography>
          </ContactUs>
        </ContactContainer>
        <HomeMainContainer>
          <FaqPageSubBoxContainer>
            <FAQConatainer sx={{ width: '100%', maxWidth: '824px' }}>
              <FaqPageMainContainer>
                <FAQConatainer>
                  <StyledAccordion defaultExpanded>
                    <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                      <UINewTypography variant="bodySemiBold" color="secondary.100">
                        <FormattedMessage id="HowDoesTheCredit" />
                      </UINewTypography>
                    </StyledAccordionSummary>
                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="OurPlatformOperates" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="IsThePlatformSecure" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="wePrioritizeTheSecurity" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="CanITrustIheIdentity" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeVerifyTheIdentities" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="AreThereAnyRestrictions" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeHaveStrictGuidelines" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="HowDoITop" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="YouCanEasilyTopUp" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="WhatMeasuresAre" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeEmployRigorousAge" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="IsThereARefund" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeDoNotOfferRefunds" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="HowAreDisputesResolved" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="InTheEventOfDispute" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>
                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="DoINeedToDownload" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="OurPlatformIsEntirely" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>
                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="CanIPreviewOrBrowse" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="YouCanBrowseThrough" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>
                  <StyledAccordion>
                    <UINewTypography variant="bodySemiBold">
                      <StyledAccordionSummary
                        color="secondary.100"
                        aria-controls="panel2-content"
                        id="panel2-header"
                        expandIcon={<ExpandMoreIcon />}
                      >
                        <FormattedMessage id="IsThereMobileApp" />
                      </StyledAccordionSummary>
                    </UINewTypography>
                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeOfferResponsiveWeb" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>
                </FAQConatainer>
              </FaqPageMainContainer>
            </FAQConatainer>
          </FaqPageSubBoxContainer>
        </HomeMainContainer>
      </FaqPageMainContainer>
    </>
  );
};

export default FaqPage;
