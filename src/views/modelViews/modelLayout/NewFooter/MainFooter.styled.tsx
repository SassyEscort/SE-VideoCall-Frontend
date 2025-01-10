import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const FooterSubICon = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  textAlign: 'left',
  width: '100%',
  maxWidth: '234px'
}));

export const TextContainerMain = styled(Box)(() => ({
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
  fontWeight: 500,
  fontSize: '10px',
  alignItems: 'flex-start',
  lineHeight: '140%',
  [theme.breakpoints.only('md')]: {
    maxWidth: '297px'
  },
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}));

export const ModelFooterHeadSecond = styled(UINewTypography)(({ theme }) => ({
  color: '#FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontWeight: 400,
    fontSize: '32px',
    lineHeight: '140%',
    textAlign: 'start'
  },
  [theme.breakpoints.up('sm')]: {
    fontWeight: 400,
    fontSize: '40px',
    lineHeight: '140%'
  }
}));

export const ModelUITextConatinerText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'start',
  marginBottom: 0,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 3
  }
}));

export const FirstBoxContainerMain = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  justifyContent: 'center',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2)
  },
  [theme.breakpoints.only('sm')]: {
    marginTop: theme.spacing(15.25),
    maxWidth: '342px'
  },
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(15.25),
    maxWidth: '484px'
  }
}));

export const FooterStoreBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(7.5)
}));

export const HeadingMainBoxContiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '484px',
  marginTop: theme.spacing(8)
}));

export const NewFooterMainBoxContiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(1.5),
  paddingLeft: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row'
  }
}));

export const MenuTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '10px',
  fontWeight: 500,
  lineHeight: '14px',
  color: theme.palette.common.white,
  opacity: 0.4,
  textTransform: 'uppercase'
}));

export const ResourcesInnerBoxContiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.75)
}));

export const FlirtbateTextTypography = styled(Typography)(({ theme }) => ({
  fontSize: '10px',
  fontWeight: 500,
  lineHeight: '14px',
  color: theme.palette.common.white,
  opacity: 0.4
}));

export const FooterTextMainBoxContiner = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  paddingBottom: theme.spacing(2.5)
}));

export const LogoAndTextMainBoxVontainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5)
}));
