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
                    <StyledAccordionDetails></StyledAccordionDetails>
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
                    <StyledAccordionDetails></StyledAccordionDetails>
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
                    <StyledAccordionDetails></StyledAccordionDetails>
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
                    <StyledAccordionDetails></StyledAccordionDetails>
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
                    <StyledAccordionDetails></StyledAccordionDetails>
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
                    <StyledAccordionDetails></StyledAccordionDetails>
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
                    <StyledAccordionDetails></StyledAccordionDetails>
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
