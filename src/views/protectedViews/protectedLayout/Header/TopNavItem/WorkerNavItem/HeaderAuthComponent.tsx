import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Divider, Menu, MenuItem, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import ProfileMenu from './ProfileMenu';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { CustomerDetails, CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { getUserDataClient } from 'utils/getSessionData';
import { CommonMenuBox } from 'views/protectedDashboardViews/dashboardNavbar/nav.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Logout from 'views/protectedViews/logout';
import { FormattedMessage } from 'react-intl';
import LanguageDropdown from 'components/common/LanguageDropdown';
import { WorkerHeaderMainContainer } from './ProfileMenu.styled';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';

export type NotificationFilters = {
  page: number;
  isRead?: number;
};

const HeaderAuthComponent = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElLogout, setAnchorElLogout] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElLogout);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>();
  const [balance, setBalance] = useState(0);

  const uploadedImageURL = '/images/headerv2/profilePic.png';
  const firstChar = customerDetails?.customer_name ? customerDetails.customer_name.charAt(0).toUpperCase() : '';

  const handleClickLogout = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLogout(event.currentTarget);
  };
  const handleCloseLogout = () => {
    setAnchorElLogout(null);
  };

  const handleCloseMenu = () => {
    setOpenProfileMenu(false);
    setAnchorEl(null);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const customerDetails = async () => {
      const customerData = await CustomerDetailsService.customerModelDetails(token.token);
      setCustomerDetails(customerData.data);
    };
    if (token.token) {
      customerDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.id, token.token]);

  useEffect(() => {
    const getCustomerCredit = async () => {
      if (token.token) {
        const getModel = await ModelDetailsService.getModelWithDraw(token.token);
        setBalance(getModel?.data?.credits);
      }
    };
    if (token.token) {
      getCustomerCredit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token.id, token.token]);

  const handleOpenLogout = () => {
    setIsLogoutOpen(true);
  };

  const handleCloseLogoutt = () => {
    setIsLogoutOpen(false);
  };

  return (
    <>
      <Box display="flex" alignItems="center" gap={{ xs: 2.5, sm: 4.5 }}>
        <Box display="flex">
          <LanguageDropdown />
        </Box>
        {isMdUp && (
          <Box alignItems="center" gap={1} display="flex">
            <Box component="img" src="/images/header/coin.png" />
            <Typography variant="buttonLargeMenu" color="text.secondary">
              {balance}
            </Typography>
          </Box>
        )}

        {isMdUp && (
          <Link href="/profile/favourites" style={{ textDecoration: 'none' }}>
            <IconButton sx={{ height: 24, width: 24 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  position: 'relative'
                }}
              >
                <Box component="img" src="/images/header/heart.png" />
              </Box>
            </IconButton>
          </Link>
        )}
        <IconButton sx={{ height: 24, width: 24 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              position: 'relative'
            }}
          >
            <Box component="img" src="/images/header/dot.png" position="absolute" />
            <Box component="img" src="/images/header/noti.png" />
          </Box>
        </IconButton>
        <Box display="flex" alignItems="center" gap={1}>
          <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }} onClick={handleClickLogout}>
            <IconButton
              id="profile-menu"
              aria-controls={openProfileMenu ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfileMenu}
              disableFocusRipple
              disableRipple
              sx={{ p: 1 }}
            >
              <Avatar
                alt="User Photo"
                sx={{
                  height: 24,
                  width: 24
                }}
              >
                {firstChar}
              </Avatar>
            </IconButton>
            {isMdUp && (
              <Typography variant="buttonLargeMenu" color="text.secondary">
                {customerDetails?.customer_name || ''}
              </Typography>
            )}
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorElLogout}
            open={open}
            onClose={handleCloseLogout}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            sx={{ '& .MuiMenu-paper > ul': { backgroundColor: '#1E0815 !important' } }}
          >
            <MenuItem>
              <CommonMenuBox sx={{ color: 'text.primary' }}>
                <WorkerHeaderMainContainer>
                  <Box component="img" src="/images/icons/userLine.png" width={24} height={24} mr={1} />
                  <Link href="/profile" onClick={handleCloseLogout}>
                    <UINewTypography variant="buttonLargeMenu">
                      <FormattedMessage id="MyProfile" />
                    </UINewTypography>
                  </Link>
                </WorkerHeaderMainContainer>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: 'primary.700' }} />
                <WorkerHeaderMainContainer onClick={handleOpenLogout}>
                  <Box component="img" src="/images/profile-vector/Vector-6.png" height={16} mr={1} />
                  <UINewTypography variant="buttonLargeMenu">
                    <FormattedMessage id="LogOut" />
                  </UINewTypography>
                </WorkerHeaderMainContainer>
              </CommonMenuBox>
              <Logout open={isLogoutOpen} onClose={handleCloseLogoutt} />
            </MenuItem>
          </Menu>
          <ProfileMenu profilePic={uploadedImageURL} open={openProfileMenu} handleClose={handleCloseMenu} anchorEl={anchorEl} />
        </Box>
      </Box>
    </>
  );
};

export default HeaderAuthComponent;
