import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

const UIStyledStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    fontWeight: 500,
    color: theme.palette.text.secondary,
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '140%',
    letterSpacing: '0.3px'
  },
  '& .MuiStepIcon-text': {
    display: 'none'
  },

  '& .mui-style-1fu8gtm-MuiSvgIcon-root-MuiStepIcon-root': {
    color: theme.palette.text.disabled
  },
  '& .mui-style-1fu8gtm-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
    color: theme.palette.primary[400]
  },
  '& .MuiStep-root': {
    paddingLeft: '6.5px',
    paddingRight: '6.5px'
  },
  '& .MuiStepConnector-line': {
    borderTopWidth: '3px',
    borderColor: theme.palette.text.disabled,
    border: '2px dashed',
    marginTop: '-3px',
    borderRadius: '10px',
    boxSizing: 'border-box'
  },
  '& .mui-style-1fu8gtm-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ': {
    color: theme.palette.primary[400]
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    border: '2px inset',
    borderColor: theme.palette.primary[400]
  },
  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    borderColor: theme.palette.primary[400]
  }
}));

export default UIStyledStepper;
