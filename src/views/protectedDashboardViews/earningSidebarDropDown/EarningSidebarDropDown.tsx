import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const SidebarDropDownMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '180px',
  borderRadius: theme.spacing(1.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.75),
  paddingBottom: theme.spacing(1.75),
  backgroundColor: theme.palette.secondary[500],
  flexDirection: 'column'
}));

export const SelectDropdown = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1),
  width: '100%',
  height: '64px',
  backgroundColor: theme.palette.secondary[500],

  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(2.5, 2),
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.primary[400]
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));
