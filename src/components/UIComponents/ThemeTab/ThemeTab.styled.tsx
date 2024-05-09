import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

export const UIThemeTab = styled(Tab)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'none !important'
  },
  borderRadius: '4px 0px 0px 4px',
  height: '54px',
  [theme.breakpoints.down('sm')]: {
    height: '50px'
  }
}));
