import { Accordion, Box, styled } from '@mui/material';

export const FilterAction = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '16px 20px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1),
  borderTop: '1px solid',
  borderColor: theme.palette.secondary[800]
}));

export const FilterHeader = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  zIndex: 1,
  backgroundColor: theme.palette.secondary.dark,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2.5),
  alignItems: 'center',
  gap: theme.spacing(1.5),
  borderBottom: '1px solid',
  borderColor: theme.palette.secondary[800],
  maxWidth: 528,
  width: '100%'
}));

export const FilterContent = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(12),
  padding: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: theme.spacing(2.5)
}));

export const FilterAccordian = styled(Accordion)(({ theme }) => ({
  border: 'none',
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: theme.palette.secondary[800],
  paddingBottom: theme.spacing(2.5),
  '&.Mui-expanded': {
    margin: 0
  },
  '& .MuiAccordionSummary-root, & .Mui-expanded': {
    minHeight: '0 !important'
  },
  '& .MuiAccordionSummary-content, & .Mui-expanded': {
    margin: '0 !important'
  },
  '& .MuiAccordionDetails-root': {
    paddingBottom: 0
  }
}));
