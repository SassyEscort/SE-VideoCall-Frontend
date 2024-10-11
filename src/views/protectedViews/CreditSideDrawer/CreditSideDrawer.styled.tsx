import { Box, Drawer, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const CreditSideMainDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1E0815',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: 'none',
    scrollbarWidth: 'none'
  }
}));

export const CreditsHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#1E0815',
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(3),
  alignItems: 'center',
  gap: theme.spacing(1.5),
  width: 352
}));

export const CreditsContent = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: theme.spacing(5),
  overflowY: 'auto'
}));

export const TitleSerachBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  alignItems: 'center'
}));

export const CurrentBalanceBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'Transparent',
  zIndex: '1',
  height: '154px',
  width: '100%'
}));

export const CurrentBalanceInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'Center',
  gap: theme.spacing(1.5)
}));

export const CurrentBalanceTypography = styled(UINewTypography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '28.8px',
  color: theme.palette.text.secondary
}));

export const MainImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  height: '268px',
  backgroundImage: `
  linear-gradient(
    180deg, 
    rgba(0, 0, 0, 0.7) 0%, 
    rgba(0, 0, 0, 0) 100%   
  ),
  url(/images/credits/CreditsMainimg.png)
`,
  repeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}));

export const CreditListMainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#07030E',
  zIndex: '1',
  height: '100%'
}));
