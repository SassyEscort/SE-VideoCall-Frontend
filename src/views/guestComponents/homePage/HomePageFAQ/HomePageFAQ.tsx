import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FAQConatainer, FAQMainContainer, StyledAccordion, StyledAccordionDetails, StyledAccordionSummary } from './HomePageFAQ.styled';

const HomePageFAQ = () => {
  return (
    <>
      <FAQConatainer sx={{ width: '100%', maxWidth: '824px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <FAQMainContainer>
            <Typography
              variant="faqTitle"
              sx={{
                color: 'text.secondary',
                textAlign: 'center'
              }}
            >
              FAQs
            </Typography>
            <Typography
              variant="faqSubTitle"
              sx={{
                color: 'secondary.100',
                textAlign: 'center'
              }}
            >
              Your queries resolved, so you can dive in with confidence.
            </Typography>
          </FAQMainContainer>

          <FAQConatainer>
            <StyledAccordion defaultExpanded>
              <StyledAccordionSummary aria-controls="panel1-content" id="panel1-header" expandIcon={<ExpandMoreIcon />}>
                <Typography variant="bodySemiBold" sx={{ color: 'white.100' }}>
                  How do I find the right model for me?
                </Typography>
              </StyledAccordionSummary>
              <Typography variant="bodyRegular">
                <StyledAccordionDetails>
                  With our intuitive search and filter tools, finding your match is simple. You can filter models by interests, languages
                  spoken, location, and more to find someone who meets your preferences.
                </StyledAccordionDetails>
              </Typography>
            </StyledAccordion>

            <StyledAccordion>
              <Typography variant="bodySemiBold">
                <StyledAccordionSummary
                  sx={{ color: 'white.100' }}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  Can I communicate with models before booking a video call?
                </StyledAccordionSummary>
              </Typography>
              <Box component="ul">
                <StyledAccordionDetails></StyledAccordionDetails>
              </Box>
            </StyledAccordion>

            <StyledAccordion>
              <Typography variant="bodySemiBold">
                <StyledAccordionSummary
                  sx={{ color: 'white.100' }}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  How do I sign up and start using the platform?
                </StyledAccordionSummary>
              </Typography>
              <Typography variant="bodyRegular">
                <StyledAccordionDetails></StyledAccordionDetails>
              </Typography>
            </StyledAccordion>

            <StyledAccordion>
              <Typography variant="bodySemiBold">
                <StyledAccordionSummary
                  sx={{ color: 'white.100' }}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  Who are the escorts?
                </StyledAccordionSummary>
              </Typography>
              <Box component="ul">
                <StyledAccordionDetails></StyledAccordionDetails>
              </Box>
            </StyledAccordion>

            <StyledAccordion>
              <Typography variant="bodySemiBold">
                <StyledAccordionSummary
                  sx={{ color: 'white.100' }}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  Is my personal information safe with you?
                </StyledAccordionSummary>
              </Typography>
              <Typography variant="bodyRegular">
                <StyledAccordionDetails></StyledAccordionDetails>
              </Typography>
            </StyledAccordion>

            <StyledAccordion>
              <Typography variant="bodySemiBold">
                <StyledAccordionSummary
                  sx={{ color: 'white.100' }}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  What happens if I’m not satisfied with my experience?
                </StyledAccordionSummary>
              </Typography>
              <Typography variant="bodyRegular">
                <StyledAccordionDetails></StyledAccordionDetails>
              </Typography>
            </StyledAccordion>

            <StyledAccordion>
              <Typography variant="bodySemiBold">
                <StyledAccordionSummary
                  sx={{ color: 'white.100' }}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  How does payment work?
                </StyledAccordionSummary>
              </Typography>
              <Box component="ul">
                <StyledAccordionDetails></StyledAccordionDetails>
              </Box>
            </StyledAccordion>

            <StyledAccordion>
              <Typography variant="bodySemiBold">
                <StyledAccordionSummary
                  sx={{ color: 'white.100' }}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  Are there any rules I need to follow when interacting with models?
                </StyledAccordionSummary>
              </Typography>
              <Box component="ul">
                <StyledAccordionDetails></StyledAccordionDetails>
              </Box>
            </StyledAccordion>
          </FAQConatainer>
        </Box>
      </FAQConatainer>
    </>
  );
};

export default HomePageFAQ;
