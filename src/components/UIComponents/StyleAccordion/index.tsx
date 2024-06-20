import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

export const MuiAccordion = styled((props: AccordionProps) => <Accordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    width: '100%',
    '&:not(:first-of-type)': {
      borderTop: `1px solid ${theme.palette.secondary.light}`
    },
    '& .MuiAccordionDetails-root': {
      padding: 0,
      paddingBottom: 32
    },
    '& .MuiCollapse-entered': {
      marginTop: '-8px'
    }
  })
);

export const MuiAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary expandIcon={<KeyboardArrowDownRounded />} {...props} />
))(({ theme }) => ({
  padding: '32px 0px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-180deg)',
    color: theme.palette.primary.main
  },
  '& .MuiAccordionSummary-content': {
    margin: 0
  }
}));
