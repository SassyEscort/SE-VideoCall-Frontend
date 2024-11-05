import Box from '@mui/material/Box';
import styled from '@mui/system/styled';

export const CamConnectinonLevelMainContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 823,
  width: '100%',
  gap: '72px'
}));

export const LightCirclesBox = styled(Box)(() => ({
  background: 'rgba(255, 255, 255, 1)',
  width: '87px',
  height: '87px',
  borderRadius: '50%',
  filter: 'blur(30px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-20px',
  left: '-15px'
}));

export const PinkLightCirclesBox = styled(Box)(() => ({
  background: 'rgba(255, 104, 192, 1)',
  width: '87px',
  height: '87px',
  borderRadius: '50%',
  filter: 'blur(30px)',
  position: 'absolute',
  zIndex: '-1',
  top: '-20px',
  right: '-15px'
}));

export const CamConnectinonLevelRotateChipContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.primary[400],
  borderRadius: theme.spacing(1.5),
  rotate: '356deg',
  width: 'fit-content',
  paddingBlock: theme.spacing(0.5),
  paddingInline: theme.spacing(1.25)
}));
