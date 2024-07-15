import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

export const UIThemeGroupTabs = styled(Tabs)(({ theme }) => ({
  width: '100%',
  '& .MuiTabs-flexContainer': {
    display: 'flex',
    gap: '2px',
    justifyContent: 'end',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .MuiTab-root': {
    padding: '14px 20px 14px 20px',
    fontWeight: 400,
    lineHeight: '160%',
    fontSize: '16px',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    '&.Mui-selected': {
      fontWeight: 700,
      lineHeight: '150%',
      fontSize: '16px',
      outline: 'none',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      ':hover': {
        color: theme.palette.common.black,
        backgroundColor: theme.palette.primary[800]
      }
    },
    ':hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent'
    }
  }
}));
