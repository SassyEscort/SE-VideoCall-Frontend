import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';

export const SideBarBox = styled(Box)(() => ({
  width: '100%',
  minWidth: '130px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '& .MuiMenuItem-root ': { width: '100%' }
}));

export const IconSideBar = styled(IconButton)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
  justifyContent: 'flex-end'
}));

export const GuestStyleComponent = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: '#07030E',
    borderRadius: '12px'
  },
  '& .MuiDialog-container': {
    backgroundColor: 'linear-gradient(rgba(19, 6, 23, 1)), rgba(7, 3, 14, 1))',
    backdropFilter: 'blur(12px)'
  },
  maxWidth: 920,
  borderRadius: '12px'
}));

export const MenuContainer = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper > ul': {
    backgroundColor: 'secondary.dark !important',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      minWidth: '363px'
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '285px'
    }
  }
}));

export const HeaderDropdownStyledBox = styled(Box)(({ theme }) => ({
  border: '1px solid #E9E8EB33',
  borderRadius: theme.spacing(1),
  padding: '12px 16px 12px 16px',
  height: '100%',
  maxHeight: '46px',
  alignItems: 'center',
  textAlign: 'center',
  display: 'flex'
}));

export const GuestLoginButton = styled(HeaderDropdownStyledBox)(({ theme }) => ({
  cursor: 'pointer',
  gap: theme.spacing(1)
}));

export const CreditAvailableButton = styled(Button)(({ theme }) => ({
  width: '318px',
  background: 'linear-gradient(90deg, #FECD3D, #FFF1C6, #FF68C0)',
  boxShadow: '0px 4px 10px #FF68C07A',
  borderRadius: '8px',
  gap: theme.spacing(1)
}));

export const AppBarBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4.5),
  justifyContent: 'center',
  padding: '12px 10px 12px 10px'
}));
