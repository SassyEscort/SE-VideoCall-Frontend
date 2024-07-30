'use client';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import UIStyledStepper from 'components/UIComponents/UIStyledStepper/UIStyledStepper.styled';

const UIStepper = ({ steps, activeStep }: { steps: string[]; activeStep: number }) => (
  <Box
    sx={{
      width: '100%'
    }}
  >
    <UIStyledStepper activeStep={activeStep} alternativeLabel>
      {steps?.map((label, index) => {
        const stepProps: { completed?: boolean } = {};
        if (index < activeStep) {
          stepProps.completed = true;
        }
        return (
          <Step key={index} {...stepProps}>
            <StepLabel
              sx={{
                '& .MuiSvgIcon-root': { width: '20px', height: '20px' }
              }}
            >
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </UIStyledStepper>
  </Box>
);

export default UIStepper;
