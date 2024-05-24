import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const CallHistoryMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7),
  width: '100%',
  height: '100%'
}));

export const CallHistoryText = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '233px',
  height: '100%',
  maxHeight: '48px'
}));

export const SecondContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '929px',
  height: '100%',
  maxHeight: '492px',
  gap: theme.spacing(3)
}));

export const SecondSubContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '929px',
  height: '100%',
  maxHeight: '153px',
  flexDirection: 'column'
}));

export const SecondSubTextMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '929px',
  height: '100%',
  maxHeight: '80px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    maxHeight: '153px'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    maxWidth: '929px',
    maxHeight: '80px'
  }
}));

export const SecondSubFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '574px',
  height: '100%',
  maxHeight: '80px',
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(20.625)
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2.375)
  }
}));

export const SecondSubFirstPartBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '253px',
  height: '100%',
  maxHeight: '80px',
  gap: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5)
  }
}));

export const WorkerImg = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '80px',
  height: '100%',
  maxHeight: '80px',
  borderRadius: '12px'
}));

export const SecondSubFirstPartSecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '141px',
  height: '100%',
  maxHeight: '80px',
  gap: theme.spacing(1.875)
}));

export const SecondSubFirstPartSecondBoxFirstText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '141px',
  height: '100%',
  maxHeight: '48px',
  gap: theme.spacing(0.75)
}));

export const SecondSubFirstPartSecondBoxSecText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  width: '100%',
  maxWidth: '141px',
  height: '100%',
  maxHeight: '17px',
  [theme.breakpoints.up('sm')]: {
    whiteSpace: 'nowrap'
  }
}));

export const SecondSubFirstPartThiredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '156px',
  height: '100%',
  maxHeight: '50px',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(1.875)
}));

export const SecondSubFirstPartThiredBoxText = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '43px',
  height: '100%',
  maxHeight: '19px',
  gap: theme.spacing(1)
}));

export const ImgBoxContainer = styled('img')(() => ({
  width: '100%',
  maxWidth: '16px',
  height: '100%',
  maxHeight: '16px'
}));

export const SecImgBoxContainer = styled('img')(() => ({
  width: '100%',
  maxWidth: '24px',
  height: '100%',
  maxHeight: '24px'
}));

export const CallHistoryName = styled(UINewTypography)(({ theme }) => ({
  fontSize: '20px',
  lineHeight: '25px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
    lineHeight: '20px !important'
  }
}));
