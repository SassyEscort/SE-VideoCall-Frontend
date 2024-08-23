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
  FirstTextContainer,
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
              <UINewTypography variant="h2" color="text.secondary">
                <FormattedMessage id="HowHelp" />
              </UINewTypography>
            </HeaderTextContainer>
          </SecBoxContainer>

          <MobileBoxContainer>
            <TextFirstBoxContainer>
              <TextSecondBoxContainer>
                <UINewTypography variant="body" color="text.primary" lineHeight="160%">
                  <FormattedMessage id="MailUs" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary">
                  support@flirtbate.com
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
          <FAQConatainer sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <FAQMainContainer>
                <FAQTitle>
                  <FormattedMessage id="FAQs" />
                </FAQTitle>
              </FAQMainContainer>

              <FAQConatainer>
                <StyledAccordion defaultExpanded>
                  <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                    <FirstTextContainer sx={{ color: 'secondary.100' }}>
                      <FormattedMessage id="IsThereAMinimumNumber" />
                    </FirstTextContainer>
                  </StyledAccordionSummary>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ThereIsNoMinimumRequirement" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowDoIWithdraw" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanWithdrawEarnings" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhatShouldIDo" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="IfYouEncounterATechnical" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowCanIOptimize" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ToOptimizeYourProfile" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowCanIContactCustomer" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanContactOurCustomer" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowCanIChange" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ToChangeYourPaymentPreferences" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="CanISeeUser" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YesUsersCanLeave" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="IsThereAMaximumDuration" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ThereIsNoMaximum" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer>
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowOftenAreEarnings" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="EarningsAreUpdated" />
                    </StyledAccordionDetails>
                  </UINewTypography>
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
