import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

const UIStyledVerticalStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    fontWeight: 500,
    color: theme.palette.text.disabled,
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '140%',
    letterSpacing: '0.3px'
  },
  '& .mui-15shpc-MuiStepLabel-root': {
    padding: '0px'
  },
  '& .MuiStepIcon-text': {
    display: 'none'
  },
  '& .MuiStepLabel-alternativeLabel': {
    color: theme.palette.text.secondary
  },
  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
    marginTop: '8px'
  },

  '& .MuiStepContent-root': {
    borderLeft: '0',
    fontWeight: 500,
    fontSize: '12px',
    fontStyle: 'normal',
    lineHeight: '140%',
    letterSpacing: '0.3px',
    paddingLeft: '13px',
    minHeight: '16px'
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: theme.palette.text.secondary
  },
  '& .mui-style-1fu8gtm-MuiSvgIcon-root-MuiStepIcon-root': {
    color: theme.palette.text.disabled
  },
  '& .mui-15shpc-MuiStepLabel-root .MuiSvgIcon-root': {
    width: '16px',
    height: '16px'
  },
  '& .mui-style-1fu8gtm-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
    color: theme.palette.text.secondary
  },
  '& .mui-1pe7n21-MuiStepConnector-root': {
    marginLeft: '4px',
    marginTop: '-17px'
  },
  '& .MuiStepConnector-line': {
    height: '40px',
    borderColor: theme.palette.text.disabled,
    borderLeft: '2px dashed',
    margin: '-2px 3px'
  },
  '& .mui-style-1fu8gtm-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ': {
    color: theme.palette.primary[400]
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    borderLeft: '2px inset',
    borderColor: theme.palette.primary[400]
  },
  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    borderLeft: '2px inset',
    borderColor: theme.palette.primary[400]
  }
}));

export default UIStyledVerticalStepper;
