import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import UINewTypography from 'components/UIComponents/UINewTypography';

export const Step7MainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  marginTop: '32px'
}));

export const Step7InnerBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '824px',
  gap: theme.spacing(2.25),
  backgroundColor: theme.palette.secondary[500],
  borderRadius: '12px',
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'column'
}));

export const Step7UploadImagBox = styled(Box)(({ theme }) => ({
  padding: '24px 16px 0px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.25),
  alignItems: 'flex-start',
  borderRadius: '12px',
  width: '100%',
  maxWidth: '824px'
}));

export const Step7UploadImageInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  alignItems: 'center',
  border: '1px dashed #86838A',
  padding: theme.spacing(3),
  borderRadius: 1.5,
  width: '100%'
}));

export const StepButtonNext = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '824px',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(11.75),
    justifyContent: 'center'
  }
}));

export const MainMakeSure = styled(Box)(({ theme }) => ({
  maxWidth: '390px',
  backgroundColor: '#232027',
  borderRadius: '8px',
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '363px'
  }
}));

export const UIRulesHeader = styled(UINewTypography)(({ theme }) => ({
  fontSize: '16px !important',
  lineHeight: '25.6px !important'
}));

export const LastMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(9),
  marginBottom: theme.spacing(12.75),
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  },
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(1.875),
    paddingRight: theme.spacing(1.875)
  }
}));
