import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FooterSubICon = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));

export const TextContainerMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
}));

export const TextContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(12.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  Width: '100%',
  maxWidth: 1244,
  textAlign: 'center',
  alignItems: 'center',
  top: 64,
  width: '100%',
  [theme.breakpoints.down('md')]: {
    top: 40
  }
}));

export const DividerUILine = styled(Divider)(({ theme }) => ({
  borderColor: '#232027',
  width: '100%',
  maxWidth: '1244px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '363px'
  }
}));

export const ModelFooterHead = styled(UINewTypography)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  textAlign: 'start',
  alignItems: 'flex-start',
  lineHeight: '140%',
  [theme.breakpoints.only('md')]: {
    maxWidth: '297px'
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}));

export const ModelUITextConatinerText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'start',
  marginBottom: 0,
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 3
  }
}));

export const FirstBoxContainerMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(10),
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(5.625)
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(3)
  }
}));

export const FooterStoreBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3.5)
}));

export const GradientTypography = styled(UINewTypography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #FD28A6, #FFFFFF)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent'
}));
