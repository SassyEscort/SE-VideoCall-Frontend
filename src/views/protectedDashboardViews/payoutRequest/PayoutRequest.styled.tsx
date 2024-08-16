import Accordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails';
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';

export const MainContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(10),
  width: '100%',
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(0),
    paddingTop: theme.spacing(1.375)
  }
}));

export const BoxMessage = styled(Box)(({ theme }) => ({
  display: 'flex'
}));

export const TextDetail = styled(UINewTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px !important'
  }
}));

export const SecondMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(6.125),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(7)
  }
}));

export const FirstUsdBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: '109px',
  backgroundColor: '#232027',
  paddingRight: theme.spacing(2),
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}));

export const SecondUsdBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(3.125),
  gap: theme.spacing(3.125),
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(4)
  }
}));

export const UsdBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'start'
}));

export const DollerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5)
}));

export const RecentWithdrawlsMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}));
export const PaginationMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const SecondRecentWithdrawlsMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const Withdrawls = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const ToSiliconValleyBankMainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3)
}));

export const FirstToSiliconValleyBankMainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const FirstToSiliconValleyBank = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2)
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxHeight: '54px'
}));

export const Showtracking = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const ShowtrackingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5),
  alignItems: 'center'
}));

export const Pendingconatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.25),
  alignItems: 'flex-end',
  position: 'relative'
}));

export const Pending = styled(UINewTypography)(({ theme }) => ({
  color: theme.palette.primary['600'],
  borderRadius: '48px',
  border: '1px solid',
  textAlign: 'center',
  padding: '4px 12px',
  borderColor: theme.palette.primary['600']
}));

export const PendingSecond = styled(UINewTypography)(({ theme }) => ({
  color: theme.palette.success['100'],
  borderRadius: '48px',
  border: '1px solid',
  textAlign: 'center',
  padding: '4px 12px',
  borderColor: theme.palette.success['100']
}));

export const ButtonBox = styled(UIThemeButton)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    marginBottom: theme.spacing(0)
  }
}));

export const StyledAccordion = styled((props: AccordionProps) => <Accordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    padding: '0px',
    width: '100%',
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
  maxWidth: '106px',
  padding: '0px',
  '&.MuiAccordionSummary-root': {
    minHeight: '0px !important '
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.text.primary
  },
  '& .MuiAccordionSummary-content': {
    marginTop: 0,
    marginBottom: 0
  }
}));

export const StyledAccordionDetails = styled((props: AccordionDetailsProps) => <AccordionDetails {...props} />)(({ theme }) => ({
  padding: '0px',
  color: theme.palette.secondary[300],
  marginBottom: 0,
  marginTop: theme.spacing(1.5)
}));

export const LoaderBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}));

export const FirstBoxConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  flexDirection: 'column'
}));

export const SecBoxConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(1)
  }
}));
