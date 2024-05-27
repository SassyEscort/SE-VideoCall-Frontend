'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  FAQConatainer,
  FAQMainContainer,
  FAQSeconndContainer,
  FAQTitle,
  SecondBox,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary
} from './PayoutFAQS.styled';

const PayoutFAQS = () => {
  return (
    <>
      <HomeMainContainer>
        <FAQSeconndContainer>
          <FAQConatainer sx={{ width: '100%', maxWidth: '741px' }}>
            <SecondBox>
              <FAQMainContainer>
                <FAQTitle>Payout FAQs</FAQTitle>
              </FAQMainContainer>

              <FAQConatainer>
                <StyledAccordion defaultExpanded>
                  <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                    <UINewTypography variant="bodySemiBold" sx={{ color: 'secondary.100' }}>
                      <FormattedMessage id="wePrioritizeTheSecurity" />
                      How do I find the right model for me?
                    </UINewTypography>
                  </StyledAccordionSummary>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      With our intuitive search and filter tools, finding your match is simple. You can filter models by interests,
                      languages spoken, location, and more to find someone who meets your preferences.
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
                      Can I communicate with models before booking a video call?
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
                      How do I sign up and start using the platform?
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
                      Who are the escorts?
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
                      Is my personal information safe with you?
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
                      What happens if I’m not satisfied with my experience?
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
                      How does payment work?
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
                      Are there any rules I need to follow when interacting with models?
                    </StyledAccordionSummary>
                  </UINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="InTheEventOfDispute" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>
              </FAQConatainer>
            </SecondBox>
          </FAQConatainer>
        </FAQSeconndContainer>
      </HomeMainContainer>
    </>
  );
};

export default PayoutFAQS;
