'use client';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import UIStyledVerticalStepper from 'components/UIComponents/UIVerticalStepper/UIStyledVerticalStepper.styled';

const UIVerticalStepper = ({
  steps,
  activeStep,
  withDate,
  tarnsferDate
}: {
  steps: string[];
  activeStep: number;
  withDate: string;
  tarnsferDate?: string;
}) => (
  <Box
    sx={{
      width: '100%'
    }}
  >
    <UIStyledVerticalStepper activeStep={activeStep} orientation="vertical">
      {steps.map((label, index) => {
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
            <StepContent TransitionProps={{ in: true }}>
              <Box>{label === 'Withdrawals requested' ? withDate : tarnsferDate}</Box>
            </StepContent>
          </Step>
        );
      })}
    </UIStyledVerticalStepper>
  </Box>
);

export default UIVerticalStepper;
