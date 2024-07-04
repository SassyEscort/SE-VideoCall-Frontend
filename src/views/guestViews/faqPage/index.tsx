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
  StyledAccordionSummary,
  TypographyQuestions,
  UINewTypographyMainText
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
                      <TypographyQuestions>
                        <FormattedMessage id="HowDoesTheCredit" />
                      </TypographyQuestions>
                    </StyledAccordionSummary>
                    <UINewTypography variant="bodyRegular">
                      <StyledAccordionDetails>
                        <FormattedMessage id="OurPlatformOperates" />
                      </StyledAccordionDetails>
                    </UINewTypography>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary aria-controls="panel2-content" id="panel2-header" expandIcon={<ExpandMoreIcon />}>
                      <TypographyQuestions>
                        <FormattedMessage id="IsThePlatformSecure" />
                      </TypographyQuestions>
                    </StyledAccordionSummary>

                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="wePrioritizeTheSecurity" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <TypographyQuestions>
                        <FormattedMessage id="CanITrustIheIdentity" />
                      </TypographyQuestions>
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
                      <TypographyQuestions>
                        <FormattedMessage id="AreThereAnyRestrictions" />
                      </TypographyQuestions>
                    </StyledAccordionSummary>

                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeHaveStrictGuidelines" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <TypographyQuestions>
                        <FormattedMessage id="HowDoITop" />
                      </TypographyQuestions>
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
                      <TypographyQuestions>
                        <FormattedMessage id="WhatMeasuresAre" />
                      </TypographyQuestions>
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
                      <TypographyQuestions>
                        <FormattedMessage id="IsThereARefund" />
                      </TypographyQuestions>
                    </StyledAccordionSummary>

                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="WeDoNotOfferRefunds" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <TypographyQuestions>
                        <FormattedMessage id="HowAreDisputesResolved" />
                      </TypographyQuestions>
                    </StyledAccordionSummary>

                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="InTheEventOfDispute" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <TypographyQuestions>
                        <FormattedMessage id="DoINeedToDownload" />
                      </TypographyQuestions>
                    </StyledAccordionSummary>

                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="OurPlatformIsEntirely" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>

                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <TypographyQuestions>
                        <FormattedMessage id="CanIPreviewOrBrowse" />
                      </TypographyQuestions>
                    </StyledAccordionSummary>

                    <Box component="ul">
                      <StyledAccordionDetails>
                        <FormattedMessage id="YouCanBrowseThrough" />
                      </StyledAccordionDetails>
                    </Box>
                  </StyledAccordion>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <UINewTypography variant="bodySemiBold" color="secondary.100">
                        <FormattedMessage id="IsThereMobileApp" />
                      </UINewTypography>
                    </StyledAccordionSummary>

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
