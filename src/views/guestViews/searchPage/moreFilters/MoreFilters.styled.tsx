import {
  Accordion,
  AccordionDetails,
  AccordionDetailsProps,
  AccordionSummary,
  AccordionSummaryProps,
  Box,
  Drawer,
  Slider,
  styled
} from '@mui/material';

export const FilterAction = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '16px 20px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1),
  borderTop: '1px solid',
  borderColor: theme.palette.primary[700],
  bottom: 0,
  zIndex: 1
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
  borderColor: theme.palette.primary[700],
  maxWidth: 528,
  width: '100%'
}));

export const FilterContent = styled(Box)(({ theme }) => ({
  flex: '1',
  width: '100%',
  marginTop: theme.spacing(12),
  padding: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: theme.spacing(2.5),
  overflowY: 'auto'
}));

export const FilterAccordian = styled(Accordion)(({ theme }) => ({
  border: 'none',
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: theme.palette.primary[700],
  paddingBottom: theme.spacing(2.5),
  backgroundColor: 'transparent',
  width: '100%',
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

export const StyledAccordionSummary = styled((props: AccordionSummaryProps) => <AccordionSummary {...props} />)(() => ({
  padding: '0px'
}));
export const StyledAccordionDetails = styled((props: AccordionDetailsProps) => <AccordionDetails {...props} />)(() => ({
  '&.MuiAccordionDetails-root': {
    padding: '16px 0 0px 0'
  }
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: 528,
    backgroundColor: theme.palette.secondary.dark,
    borderRight: 'none',
    scrollbarWidth: 'none'
  }
}));

export const TitleSerachBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const StyledSliderBar = styled(Slider)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '& .MuiSlider-valueLabel': {
    transform: 'translateY(100%) scale(1) !important',
    backgroundColor: 'transparent',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '160%',
    color: theme.palette.text.primary
  }
}));
