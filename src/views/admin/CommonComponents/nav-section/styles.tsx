import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { SxProps, Theme, styled } from '@mui/material/styles';

type StyledNavIteType = {
  children?: React.ReactNode;
  component?: React.ElementType;
  onClick?: () => void;
  to?: string;
  theme?: Theme;
  as?: React.ElementType;
  sx?: SxProps<Theme>;
};

export const StyledNavItem = styled((props: StyledNavIteType) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});
