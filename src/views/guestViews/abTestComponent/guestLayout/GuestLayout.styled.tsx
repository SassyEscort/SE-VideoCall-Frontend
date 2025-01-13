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
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  background: '#FFFFFF0D',
  borderRadius: theme.spacing(1.5),
  padding: '12px',
  height: '100%',
  maxHeight: '43px'
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
  justifyContent: 'space-between',
  paddingBlock: '10px',
  paddingInline: theme.spacing(4),
  border: '1px solid',
  [theme.breakpoints.down('sm')]: {
    paddingInline: '12px'
  }
}));

export const SearchTitalBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    paddingRight: theme.spacing(1.25)
  }
}));

export const SearchTitalBoxSm = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  width: '300px',
  borderRadius: '12px',
  padding: '12px 16px',
  background: '#FFFFFF0D',
  [theme.breakpoints.down('sm')]: {
    paddingRight: theme.spacing(1.25)
  },
  '@media (max-width: 1024px)': {
    width: 'auto'
  }
}));

export const IconBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1.5),
  background: '#FFFFFF0D'
}));

export const BalanceBoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.spacing(1.5),
  paddingInline: theme.spacing(0.5),
  gap: theme.spacing(0.5),
  background: '#FFFFFF0D'
}));
