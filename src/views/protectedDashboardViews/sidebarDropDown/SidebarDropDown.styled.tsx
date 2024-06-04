import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const SidebarDropDownMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '180px',
  borderRadius: '12px',
  padding: '14px 16px',
  backgroundColor: theme.palette.secondary[500],
  flexDirection: 'column'
}));

export const SelectDropdown = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: '8px',
  width: '100%',
  height: '48px',
  backgroundColor: theme.palette.secondary[500],

  '&:hover': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary[700]
    }
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1, 2),
    display: 'flex',
    gap: theme.spacing(1),
    color: '#FF68C0'
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));
