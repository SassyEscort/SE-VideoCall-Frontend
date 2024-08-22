import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { Divider } from '@mui/material';

export const TimeMainBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  gap: theme.spacing(2.5)
}));

export const TimeDetails = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexDirection: 'column',
  width: '64px',
  position: 'relative'
}));

export const RemianingTime = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '59.4px',
  width: '100%',
  backgroundColor: '#FF68C0',
  color: theme.palette.common.white,
  textShadow: '0px 10px 6px rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 0px 20px 4px rgba(255, 104, 192, 0.5)'
}));

export const TimeTypo = styled(UINewTypography)(({ theme }) => ({
  fontSize: '29.09px',
  fontWeight: 800,
  lineHeight: '39.73px',
  zIndex: 1
}));
export const TimerDivider = styled(Divider)(({ theme }) => ({
  borderColor: 'red',
  width: '100%',
  position: 'absolute',
  border: '2px solid',
  top: '35%',
  color: '#FFCFC5'
}));

export const TimeTitle = styled(UINewTypography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 300,
  lineHeight: '16.39px',
  color: '#611441'
}));

export const Dotes = styled(Box)(({}) => ({
  width: '8px',
  height: '8px',
  color: '#FFFFFF',
  position: 'absolute',
  left: '169px',
  top: '503px',
  borderRadius: '50px',
  border: '1px solid',
  backgroundColor: '#FFFFFF',
  '@media (max-width: 425px)': {
    left: '173px',
    top: '503px'
  },
  '@media (max-width: 375px)': {
    left: '148px ',
    top: '503px'
  },
  '@media (max-width: 320px)': {
    left: '120px',
    top: '487px'
  }
}));

export const DotesSecond = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  color: '#FFFFFF',
  borderRadius: '50px',
  border: '1px solid',
  backgroundColor: '#FFFFFF'
}));
