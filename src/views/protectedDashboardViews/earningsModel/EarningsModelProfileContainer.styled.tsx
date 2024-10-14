import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

export const MainConatiner = styled(Box)(() => ({
  display: 'flex',
  width: '100%'
}));

export const SecondBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%'
}));

export const ThirdBox = styled(Box)(() => ({
  display: 'flex'
}));

export const ForBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.5)
}));

export const FiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(7.75)
}));

export const MenuListText = styled(Box)(() => ({
  display: 'flex',
  width: '100%'
}));

export const FristDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.primary[700]
}));

export const SecondDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.primary[700],
  width: '100%'
}));
