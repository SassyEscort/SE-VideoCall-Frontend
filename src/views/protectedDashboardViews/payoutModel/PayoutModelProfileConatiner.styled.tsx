import { Box, Divider, styled } from '@mui/material';

export const MainConatiner = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%'
}));

export const SecondBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%'
}));

export const ThirdBox = styled(Box)(({ theme }) => ({
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

export const MenuListText = styled(Box)(({ theme }) => ({
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
