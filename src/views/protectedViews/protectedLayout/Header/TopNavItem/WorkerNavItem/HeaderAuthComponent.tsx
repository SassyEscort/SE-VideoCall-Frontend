import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import LanguageDropdown from 'components/common/LanguageDropdown';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import ProfileMenu from './ProfileMenu';
import { MouseEvent, useState } from 'react';

export type NotificationFilters = {
  page: number;
  isRead?: number;
};

const HeaderAuthComponent = ({ toggleDrawer }: { toggleDrawer: (open: boolean) => void }) => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const uploadedImageURL = '/images/headerv2/profilePic.png';

  const handleCloseMenu = () => {
    setOpenProfileMenu(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Box display="flex" alignItems="center" gap={{ xs: 2.5, sm: 4.5 }}>
        {!isMdUp && (
          <Box display="flex" alignItems="center" gap={1} component={Link} prefetch={false} href="/search">
            <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
            hello
          </Box>
        )}
        <Box display="flex">
          <LanguageDropdown />
        </Box>
        {isMdUp && (
          <Box alignItems="center" gap={1} display="flex">
            <Box component="img" src="/images/header/coin.png" />
            <Typography variant="buttonLargeMenu" color="text.secondary">
              40
            </Typography>
          </Box>
        )}

        <IconButton sx={{ height: 24, width: 24 }}>
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                position: 'relative'
              }}
            >
              <Box component="img" src="/images/header/heart.png" />
            </Box>
          </>
        </IconButton>
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
          {/* <Box component="img" src="/images/header/noti.png" /> */}
        </IconButton>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ cursor: 'pointer' }}
            onClick={(event: MouseEvent<HTMLElement>) => {
              !isMdUp ? toggleDrawer(true) : setOpenProfileMenu(true);
              setAnchorEl(event.currentTarget);
            }}
          >
            <IconButton
              id="profile-menu"
              aria-controls={openProfileMenu ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openProfileMenu}
              disableFocusRipple
              disableRipple
              sx={{ p: 0 }}
            >
              <Avatar
                alt="User Photo"
                src={uploadedImageURL}
                sx={{
                  height: 24,
                  width: 24
                }}
              />
            </IconButton>
            {isMdUp && (
              <Typography variant="buttonLargeMenu" color="text.secondary">
                Fana
              </Typography>
            )}
          </Box>
          <ProfileMenu profilePic={uploadedImageURL} open={openProfileMenu} handleClose={handleCloseMenu} anchorEl={anchorEl} />
        </Box>
      </Box>
    </>
  );
};

export default HeaderAuthComponent;
