import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';

export const MainConatiner = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(10),
  width: '100%',
  maxWidth: '757px',
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(0)
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
  gap: theme.spacing(6.125),
  width: '100%',
  maxWidth: '741px'
}));

export const FirstUsdBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '741px',
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
  paddingBottom: theme.spacing(2),
  gap: theme.spacing(3.125)
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
  maxWidth: 740,
  width: '100%'
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
  alignItems: 'center'
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
  gap: theme.spacing(1.25)
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
