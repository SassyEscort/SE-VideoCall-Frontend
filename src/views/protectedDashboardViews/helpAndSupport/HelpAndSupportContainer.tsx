'use client';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  FAQConatainer,
  FAQMainContainer,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary
} from '../payoutFAQS/PayoutFAQS.styled';
import { FormattedMessage } from 'react-intl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  FAQTitle,
  FirstBoxContainer,
  HeaderTextContainer,
  HelpAndSupportMainContainer,
  HelpAndSupportSubContainer,
  MobileBoxContainer,
  SecBoxContainer,
  TextFirstBoxContainer,
  TextSecondBoxContainer
} from './helpAndSupport.styled';

const HelpAndSupportContainer = () => {
  return (
    <HelpAndSupportMainContainer>
      <HelpAndSupportSubContainer>
        <FirstBoxContainer>
          <SecBoxContainer>
            <HeaderTextContainer>
              <UINewTypography variant="h2" color="text.secondary" whiteSpace="nowrap">
                <FormattedMessage id="HowHelp" />
              </UINewTypography>
            </HeaderTextContainer>
          </SecBoxContainer>

          <MobileBoxContainer>
            <TextFirstBoxContainer>
              <TextSecondBoxContainer>
                <UINewTypography variant="body" color="text.primary" lineHeight="160%">
                  <FormattedMessage id="CallOn" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary" whiteSpace="nowrap">
                  +91 9876543210
                </UINewTypography>
              </TextSecondBoxContainer>
            </TextFirstBoxContainer>
            <TextFirstBoxContainer>
              <TextSecondBoxContainer>
                <UINewTypography variant="body" color="text.primary" lineHeight="160%">
                  <FormattedMessage id="MailUs" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary">
                  help@sassy.com
                </UINewTypography>
              </TextSecondBoxContainer>
            </TextFirstBoxContainer>
          </MobileBoxContainer>
        </FirstBoxContainer>

        <Box
          sx={{
            display: 'flex',
            width: '100%'
          }}
        >
          <FAQConatainer sx={{ width: '100%', maxWidth: '824px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <FAQMainContainer>
                <FAQTitle>
                  <FormattedMessage id="FAQs" />
                </FAQTitle>
              </FAQMainContainer>

              <FAQConatainer>
                <StyledAccordion defaultExpanded>
                  <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                    <UINewTypography variant="bodySemiBold" sx={{ color: 'secondary.100' }}>
                      <FormattedMessage id="HowDoISignUp" />
                    </UINewTypography>
                  </StyledAccordionSummary>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanSignUpByClicking" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhatAreTheRequirements" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouMustBeAtLeast" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowDoISetMyRates" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanSetYourRates" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowAreMyEarnings" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YourEarningsAreCalculated" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhenAndHowDoI" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="PaymentsAreProcessed" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="CanIChangeMyRates" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YesYouCanUpdate" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhatIfIHaveTechnical" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ForAnyTechnicalIssues" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowCanIIncrease" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ToIncreaseVisibility" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowDoIViewMy" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanViewYourCallHistory" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <UINewTypography variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhoDoIContactIf" />
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ForAnyQuestionsOrAssistance" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>
              </FAQConatainer>
            </Box>
          </FAQConatainer>
        </Box>
      </HelpAndSupportSubContainer>
    </HelpAndSupportMainContainer>
  );
};

export default HelpAndSupportContainer;
