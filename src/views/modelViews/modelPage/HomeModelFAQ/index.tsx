import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import {
  FAQConatainer,
  FAQMainContainer,
  FAQSubTitle,
  ModelFAQTitle,
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary
} from './HomeModelFAQ.styled';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { FormattedMessage } from 'react-intl';
import { ModelUITextConatiner } from 'views/auth/AuthCommon.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';

const HomeModelFAQ = () => {
  return (
    <>
      <HomeMainContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            mt: { xs: '72px', sm: '120px' }
          }}
        >
          <FAQConatainer sx={{ width: '100%', maxWidth: '824px' }}>
            <ModelUITextConatiner sx={{ gap: 7 }}>
              <FAQMainContainer>
                <ModelFAQTitle>
                  <FormattedMessage id="QuestionsAnswer" />
                </ModelFAQTitle>
                <FAQSubTitle>
                  <FormattedMessage id="YourQueriesResolved" />
                </FAQSubTitle>
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
            </ModelUITextConatiner>
          </FAQConatainer>
        </Box>
      </HomeMainContainer>
    </>
  );
};

export default HomeModelFAQ;
