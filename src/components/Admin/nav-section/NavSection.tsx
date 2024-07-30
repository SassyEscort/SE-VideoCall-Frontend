import PropTypes from 'prop-types';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { StyledNavItem, StyledNavItemIcon } from './styles';
import { navRoleConfigIdType, navRoleConfigSubmenuIdType, navRoleConfigSubmenuInfoType } from './type';

interface NavItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  info?: React.ReactNode;
  submenu?: NavItem[];
}

NavSection.propTypes = {
  data: PropTypes.array
};

interface NavSectionProps {
  data: (navRoleConfigIdType | navRoleConfigSubmenuIdType)[];
}

export default function NavSection({ data = [], ...other }: NavSectionProps) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data?.map((item) => (
          <NavItem key={item?.title} item={(item as unknown as navRoleConfigSubmenuInfoType) ?? ({} as navRoleConfigSubmenuInfoType)} />
        ))}
      </List>
    </Box>
  );
}

NavItem.propTypes = {
  item: PropTypes.object
};

function NavItem({ item }: { item: NavItem }) {
  const { title, path, icon, info, submenu } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (submenu) {
    return (
      <>
        <StyledNavItem
          onClick={handleClick}
          sx={{
            '&.active': {
              bgcolor: 'action.selected',
              fontWeight: 'fontWeightBold'
            }
          }}
        >
          {icon && <StyledNavItemIcon>{icon}</StyledNavItemIcon>}
          <ListItemText disableTypography primary={title} />
          {info && info}
          {open ? <ExpandLess /> : <ExpandMore />}
        </StyledNavItem>
        <Box sx={{ pl: 2, overflow: 'auto', pt: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" sx={{ overflowY: 'auto', p: 0 }}>
              {submenu?.map((subitem) => <NavItem key={subitem?.title} item={subitem} />)}
            </List>
          </Collapse>
        </Box>
      </>
    );
  }

  return (
    <StyledNavItem
      component={NextLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold'
        }
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </StyledNavItem>
  );
}
