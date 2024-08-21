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
  MainUINewTypography,
  PayoutFAQTitle,
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
          <FAQConatainer sx={{ width: '100%' }}>
            <SecondBox>
              <FAQMainContainer>
                <PayoutFAQTitle>
                  <FormattedMessage id="PayoutFAQs" />
                </PayoutFAQTitle>
              </FAQMainContainer>

              <FAQConatainer>
                <StyledAccordion defaultExpanded>
                  <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                    <MainUINewTypography>
                      <FormattedMessage id="HowDoIRequestAPayout" />
                    </MainUINewTypography>
                  </StyledAccordionSummary>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanRequestAPayout" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="IsThereAMinimumPayout" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YesThereIsA" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowLongDoesItTake" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="PayoutProcessingTimes" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="IsThereALimitOn" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ThereIsTypically" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhatShouldIDoIf" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="IfYouEncounter" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="CanIChangeMy" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="InMostCases" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="CanIScheduleRecurringPayouts" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="CurrentlyWe" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>

                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhatHappensIfMy" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="IfYourPayout" />
                    </StyledAccordionDetails>
                  </Box>
                </StyledAccordion>
                <StyledAccordion>
                  <MainUINewTypography>
                    <StyledAccordionSummary
                      color="secondary.100"
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="IsThereACustomer" />
                    </StyledAccordionSummary>
                  </MainUINewTypography>
                  <Box component="ul">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YesOurCustomer" />
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
