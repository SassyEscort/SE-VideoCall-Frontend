import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import {
  FAQConatainer,
  FAQMainContainer,
  FAQSubTitle,
  FirstTextContainer,
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
                    <FirstTextContainer sx={{ color: 'secondary.100' }}>
                      <FormattedMessage id="HowDoISignUp" />
                    </FirstTextContainer>
                  </StyledAccordionSummary>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanSignUpByClicking" />
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
                      <FormattedMessage id="WhatAreTheRequirements" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouMustBeAtLeast" />
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
                      <FormattedMessage id="HowDoISetMyRates" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanSetYourRates" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowAreMyEarnings" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YourEarningsAreCalculated" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhenAndHowDoI" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="PaymentsAreProcessed" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="CanIChangeMyRates" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YesYouCanUpdate" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhatIfIHaveTechnical" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ForAnyTechnicalIssues" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowCanIIncrease" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ToIncreaseVisibility" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="HowDoIViewMy" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="YouCanViewYourCallHistory" />
                    </StyledAccordionDetails>
                  </UINewTypography>
                </StyledAccordion>

                <StyledAccordion>
                  <FirstTextContainer variant="bodySemiBold">
                    <StyledAccordionSummary
                      sx={{ color: 'secondary.100' }}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <FormattedMessage id="WhoDoIContactIf" />
                    </StyledAccordionSummary>
                  </FirstTextContainer>
                  <UINewTypography variant="bodyRegular">
                    <StyledAccordionDetails>
                      <FormattedMessage id="ForAnyQuestionsOrAssistance" />
                    </StyledAccordionDetails>
                  </UINewTypography>
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
