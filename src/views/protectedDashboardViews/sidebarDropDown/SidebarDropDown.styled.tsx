import { Select } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const SidebarDropDownMainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '180px',
  borderRadius: '12px',
  padding: '20px 16px',
  backgroundColor: theme.palette.secondary[500],
  flexDirection: 'column'
}));

export const SelectDropdown = styled(Select)(({ theme }) => ({
  display: 'flex',
  borderRadius: '8px',
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
    color: '#FF68C0'
  },
  '& .MuiSvgIcon-root': {
    color: 'rgba(183, 181, 185, 1)'
  }
}));

export const LoadingBoxAdd = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(8)
}));

export const LoadingBoxFullScreen = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}));
