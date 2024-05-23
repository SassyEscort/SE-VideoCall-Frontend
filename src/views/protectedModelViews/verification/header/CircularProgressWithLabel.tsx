import * as React from 'react';
import CircularProgress, { CircularProgressProps, circularProgressClasses } from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';

interface CircularProgressWithLabelProps extends CircularProgressProps {
  value: number;
  currentStep: number;
  totalSteps: number;
}

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = (props) => {
  const { value, currentStep, totalSteps, ...other } = props;
  const currentStepClamped = Math.min(currentStep, totalSteps);
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 800 : 800]
        }}
        size={74}
        thickness={2}
        {...other}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        value={value}
        thickness={2}
        size={74}
        sx={{
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round'
          }
        }}
      />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <UINewTypography variant="SubtitleLargeBold" color="text.secondary">
          {`${currentStepClamped} of ${totalSteps}`}
        </UINewTypography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
