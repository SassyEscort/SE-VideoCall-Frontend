'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import LanguageDropdown from 'components/common/LanguageDropdown';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Link from 'next/link';

export type NotificationFilters = {
  page: number;
  isRead?: number;
};

const ModelHeaderAuthComponent = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const uploadedImageURL = '/images/headerv2/profilePic.png';

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
            <IconButton id="profile-menu" aria-haspopup="true" disableFocusRipple disableRipple sx={{ p: 0 }}>
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
        </Box>
        <Link href="/model/profile">
          <UIThemeButton variant="contained" sx={{ width: '195px', height: '48px', borderRadius: '8px' }}>
            <UINewTypography variant="body" color="primary.200" whiteSpace="nowrap">
              Complete your Profile
            </UINewTypography>
          </UIThemeButton>
        </Link>
      </Box>
    </>
  );
};

export default ModelHeaderAuthComponent;
