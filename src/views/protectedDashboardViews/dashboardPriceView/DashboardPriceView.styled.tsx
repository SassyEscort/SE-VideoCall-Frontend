import { Box, Typography, styled } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const MainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(4),
  gap: theme.spacing(8),
  paddingLeft: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));

export const SecondConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(20.5),
  width: '100%',
  alignItems: 'center'
}));

export const VideoCall = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0)
  }
}));

export const PriceMinute = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(1.5),
    backgroundColor: theme.palette.secondary['500'],
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export const Minute = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.5)
}));

export const InputBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));

export const MainBoxRightSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(1.5)
}));
export const RightSideBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '390px',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  }
}));
export const RightSideFirstBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  width: '100%',
  maxWidth: '266px',
  height: '100%',
  maxHeight: '50px',
  border: '1px solid',
  borderColor: '#D4D3D61F',
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: theme.spacing(1)
}));

export const RightFirstText = styled(UINewTypography)(({ theme }) => ({
  textWrap: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5)
}));
export const RightSecondText = styled(UINewTypography)(({ theme }) => ({
  textWrap: 'nowrap',
  paddingRight: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  textAlign: 'center'
}));
export const SelectMenucontainer = styled(Box)(({ theme }) => ({
  maxWidth: '390px',
  borderRadius: theme.spacing(1.875)
}));

export const ButtonConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '725px',
  marginBottom: theme.spacing(8)
}));

export const TextConatiner = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
    fontWeight: 600,
    lineHeight: '36.4px',
    textAlign: 'center'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '38px',
    fontWeight: 700,
    lineHeight: '47.5px'
  }
}));
