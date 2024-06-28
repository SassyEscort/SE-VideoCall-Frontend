import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

const UIStyledVerticalStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    fontWeight: 500,
    color: theme.palette.text.secondary,
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '140%',
    letterSpacing: '0.3px'
  },
  '& .MuiStepLabel-root': {
    padding: '0'
  },
  '& .MuiStepIcon-text': {
    display: 'none'
  },
  '& .MuiStepLabel-alternativeLabel': {
    color: theme.palette.text.secondary
  },
  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
    marginTop: theme.spacing(1)
  },
  '& .MuiStepContent-root': {
    borderLeft: '0',
    fontWeight: 500,
    fontSize: '12px',
    fontStyle: 'normal',
    lineHeight: '140%',
    letterSpacing: '0.3px',
    paddingLeft: theme.spacing(1.625),
    minHeight: '16px',
    color: theme.palette.secondary[700],
    marginTop: theme.spacing(0.25)
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: theme.palette.text.secondary
  },
  '& .MuiSvgIcon-root-MuiStepIcon-root': {
    color: theme.palette.text.secondary
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: theme.palette.text.secondary
  },
  '& .MuiStepLabel-root .MuiSvgIcon-root': {
    width: '16px',
    height: '16px'
  },
  '& .MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
    color: theme.palette.text.secondary
  },
  '& .MuiStepConnector-root': {
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(-2.375)
  },
  '& .MuiStepConnector-line': {
    height: '40px',
    borderColor: theme.palette.text.secondary,
    borderLeft: '2px dashed',
    margin: '-2px 3px'
  },
  '& .MuiSvgIcon-root-MuiStepIcon-root.Mui-active ': {
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
