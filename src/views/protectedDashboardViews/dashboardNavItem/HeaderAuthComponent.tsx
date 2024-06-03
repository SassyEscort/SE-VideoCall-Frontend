'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LanguageDropdown from 'components/common/LanguageDropdown';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { useEffect, useState } from 'react';
import ProfileMenu from 'views/protectedViews/protectedLayout/Header/TopNavItem/WorkerNavItem/ProfileMenu';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { getUserDataClient } from 'utils/getSessionData';
import { SiderBarCircaleBoxHeader, SiderBarCircaleTextBoxHeader, SiderBarSecondBox, SiderBarThiredBox } from '../SideMenu/SideMenu.styled';

export type NotificationFilters = {
  page: number;
  isRead?: number;
};

const DashboadrHeaderAuthComponent = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();

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
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    if (token.token) {
      modelDetails();
    }
  }, [token.id, token.token]);
  const firstChar = modelDetails?.name ? modelDetails.name.charAt(0).toUpperCase() : '';

  return (
    <>
      <Box display="flex" alignItems="center" gap={{ xs: 2.5, sm: 4.5 }}>
        <Box display="flex">
          <LanguageDropdown />
        </Box>

        <IconButton sx={{ height: 24, width: 24 }}>
          <>
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
          </>
        </IconButton>
        <Box display="flex" alignItems="center" gap={1}>
          <Box display="flex" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
            <IconButton
              id="profile-menu"
              aria-controls={openProfileMenu ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfileMenu}
              disableFocusRipple
              disableRipple
              sx={{ p: 0 }}
            >
              <SiderBarSecondBox>
                <SiderBarThiredBox>
                  <SiderBarCircaleBoxHeader></SiderBarCircaleBoxHeader>
                  <SiderBarCircaleTextBoxHeader>{firstChar}</SiderBarCircaleTextBoxHeader>
                </SiderBarThiredBox>
              </SiderBarSecondBox>
            </IconButton>
            {isMdUp && (
              <Typography variant="buttonLargeMenu" color="text.secondary">
                {modelDetails?.name}
              </Typography>
            )}
          </Box>
          <ProfileMenu profilePic={firstChar} open={openProfileMenu} handleClose={handleCloseMenu} anchorEl={anchorEl} />
        </Box>
      </Box>
    </>
  );
};

export default DashboadrHeaderAuthComponent;
