import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { Typography } from '@mui/material';

export const FAQMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2)
  }
}));

export const FAQConatainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    gap: theme.spacing(3)
  },
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    gap: theme.spacing(2)
  }
}));

export const FAQTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '40px',
    lineHeight: '52px'
  }
}));

export const ModelFAQTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '38px',
    lineHeight: '47.5px'
  }
}));

export const FAQSubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary[100],
  textAlign: 'center',
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '21px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
    lineHeight: '32px'
  }
}));

export const StyledAccordion = styled((props: AccordionProps) => <Accordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    padding: '0px',
    width: '100%',
    borderBottom: '1px solid',
    borderColor: theme.palette.primary[700],
    [theme.breakpoints.down('sm')]: {
      paddingTop: '12px 0px !important'
    },
    ':before': {
      height: 0
    },
    '& .MuiPaper-root .MuiPaper-elevation .MuiPaper-elevation0 .MuiAccordion-root .mui-style-1xh3qms-MuiPaper-root-MuiAccordion-root': {
      borderTop: '1px solid #265962'
    }
  })
);

export const StyledAccordionSummary = styled((props: AccordionSummaryProps) => <AccordionSummary {...props} />)(({ theme }) => ({
  color: theme.palette.text.primary,
  paddingRight: 0,
  paddingLeft: 0,
  '&.MuiAccordionSummary-root': {
    minHeight: '0px !important '
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.primary
  }
}));

export const StyledAccordionDetails = styled((props: AccordionDetailsProps) => <AccordionDetails {...props} />)(({ theme }) => ({
  padding: '0px',
  color: theme.palette.secondary[300],
  marginBottom: 24
}));

export const FirstTextContainer = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '25.6px'
}));
