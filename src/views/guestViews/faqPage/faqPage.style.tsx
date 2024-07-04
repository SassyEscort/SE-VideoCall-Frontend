'use client';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import { Typography } from '@mui/material';

export const ContactContainer = styled(Box)(() => ({
  position: 'relative',
  backgroundImage: 'url(/images/home/blur_bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  justifyContent: 'center',
  width: '100%'
}));

export const FaqPageMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7)
}));

export const FaqPageSubBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));

export const UINewTypographyMainText = styled(Box)(({ theme }) => ({
  fontSize: '48px',
  lineHeight: '64.8px',
  fontWeight: 700,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '16px',
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));

export const ContactUs = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  [theme.breakpoints.up('sm')]: {
    paddingTop: '49px',
    paddingBottom: '50px'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '68.5px',
    paddingBottom: '67.5px',
    gap: theme.spacing(1)
  }
}));

export const FAQConatainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3)
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2)
  }
}));

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
  padding: '0px',
  '&.MuiAccordionSummary-root': {
    minHeight: '0px !important '
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.primary
  },
  '& .mui-1betqn-MuiAccordionSummary-content': {
    marginTop: 8
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
