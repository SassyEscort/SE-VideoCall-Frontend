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
  ButtonContainer,
  FAQTitle,
  HeaderTextContainer,
  HelpAndSupportMainContainer,
  HelpAndSupportSubContainer,
  MobileBoxContainer,
  TextFirstBoxContainer,
  TextSecondBoxContainer
} from './helpAndSupport.styled';
import BasicRules from './basicRules';

const HelpAndSupportContainer = ({ open, openDailog, closeDailog }: { open: boolean; openDailog: () => void; closeDailog: () => void }) => {
  return (
    <HelpAndSupportMainContainer>
      <HelpAndSupportSubContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6.75 }}>
            <HeaderTextContainer>
              <UINewTypography variant="h2" color="text.secondary">
                <FormattedMessage id="HowHelp" />
              </UINewTypography>
            </HeaderTextContainer>
          </Box>

          <MobileBoxContainer>
            <TextFirstBoxContainer>
              <TextSecondBoxContainer>
                <UINewTypography variant="body" color="text.primary">
                  <FormattedMessage id="CallOn" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary">
                  +91 9876543210
                </UINewTypography>
              </TextSecondBoxContainer>
            </TextFirstBoxContainer>
            <TextFirstBoxContainer>
              <TextSecondBoxContainer>
                <UINewTypography variant="body" color="text.primary">
                  <FormattedMessage id="CallOn" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary">
                  +91 9876543210
                </UINewTypography>
              </TextSecondBoxContainer>
            </TextFirstBoxContainer>
          </MobileBoxContainer>
        </Box>

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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
                      sx={{ color: 'secondary.100' }}
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
            </Box>
          </FAQConatainer>
        </Box>
      </HelpAndSupportSubContainer>

      <ButtonContainer variant="contained">
        <UINewTypography variant="body" color="primary.200" onClick={openDailog}>
          <FormattedMessage id="BasicRules" />
        </UINewTypography>
      </ButtonContainer>
      <BasicRules open={open} onClose={closeDailog} />
    </HelpAndSupportMainContainer>
  );
};

export default HelpAndSupportContainer;
