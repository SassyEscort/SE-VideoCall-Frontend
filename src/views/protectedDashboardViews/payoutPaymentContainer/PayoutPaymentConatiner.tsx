import { Box, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const MainConatinerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(1.375)
  }
}));

export const MainSecondBox = styled(Box)(({ theme }) => ({
  gap: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3)
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3)
  }
}));

export const MainThreeBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    borderRadius: '8px'
  }
}));

export const MainForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  backgroundColor: theme.palette.primary[700],
  padding: '24px 0px 24px 24px',

  borderRadius: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    height: '175px'
  }
}));

export const SiliconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '600px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(6),
    width: '100%',
    maxWidth: '356px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
}));

export const SiliconFristBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5)
}));

export const DeleteEditBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const ButtonConatinerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const SmallAndBigScreen = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(6)
}));

export const IamgeBigScreenNone = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex'
  }
}));

export const SmallScreenImg = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3)
}));

export const ImgHome = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48
}));

export const MapBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4)
  }
}));

export const UINewTypographyTitle = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '38px',
  lineHeight: '47.5px',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
    lineHeight: '30px'
  }
}));

export const UINewTypographyBankName = styled(UINewTypography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '24px',
  color: theme.palette.text.secondary
}));

export const ConfirmBox = styled(Box)(({ theme }) => ({
  background: 'none',
  border: 'none',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.2px',
  color: theme.palette.error[300],
  cursor: 'pointer'
}));

export const CancelBox = styled(Box)(({ theme }) => ({
  background: 'none',
  border: 'none',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.2px',
  color: theme.palette.secondary[200],
  cursor: 'pointer'
}));
