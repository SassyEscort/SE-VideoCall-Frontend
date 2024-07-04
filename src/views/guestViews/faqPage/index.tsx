'use client';
import React from 'react';
import {
  ContactContainer,
  ContactUs,
  FAQConatainer,
  FaqPageMainContainer,
  FaqPageSubBoxContainer,
  FirstTextContainer,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  TypographyQuestions,
  UINewTypographyMainText
} from './faqPage.style';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import HomeMainContainer from '../guestLayout/homeContainer';
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
                      <TypographyQuestions>
                        <FormattedMessage id="HowAreDisputesResolved" />
                      </TypographyQuestions>
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
                      <TypographyQuestions>
                        <FormattedMessage id="DoINeedToDownload" />
                      </TypographyQuestions>
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
                      <TypographyQuestions>
                        <FormattedMessage id="CanIPreviewOrBrowse" />
                      </TypographyQuestions>
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
    </>
  );
};

export default FaqPage;
