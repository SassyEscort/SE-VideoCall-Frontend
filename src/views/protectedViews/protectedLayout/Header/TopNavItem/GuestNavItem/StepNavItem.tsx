import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import HeaderStepComponent from './HeaderStepComponent';
import { StepNavItemBoxContainer, StepNavItemContainer } from './GuestNavCommon.styled';

const StepNavItem = () => (
  <>
    <StepNavItemContainer>
      <Toolbar
        disableGutters
        sx={{
          py: { xs: 1, sm: 2 },
          justifyContent: 'space-between'
        }}
      >
        <StepNavItemBoxContainer prefetch={false} shallow={true} href="/">
          <Box component="img" src="/images/LogoLight.svg" height={{ xs: 40, sm: 60 }} />
        </StepNavItemBoxContainer>
        <Box display="flex" gap={2}>
          <HeaderStepComponent />
        </Box>
      </Toolbar>
    </StepNavItemContainer>
    <Box sx={{ height: { xs: 56, sm: 92 } }}></Box>
  </>
);

export default StepNavItem;
