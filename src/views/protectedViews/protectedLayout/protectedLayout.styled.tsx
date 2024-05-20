import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const ProtectedLayoutMainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 72, 179, 0.3)',
  height: '412px',
  width: '584px',
  borderRadius: '50%',
  filter: 'blur(100px)',
  position: 'absolute',
  zIndex: '-1',
  right: theme.spacing(9),
  top: '-232px'
}));
