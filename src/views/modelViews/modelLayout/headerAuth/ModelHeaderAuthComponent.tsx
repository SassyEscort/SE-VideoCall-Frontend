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
import { FormattedMessage } from 'react-intl';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { useEffect, useState } from 'react';
import { ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { getUserDataClientNew } from 'utils/getSessionData';

export type NotificationFilters = {
  page: number;
  isRead?: number;
};

const ModelHeaderAuthComponent = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [modelDetails, setModelDetails] = useState<ModelDetailsResponse>();

  useEffect(() => {
    const userToken = async () => {
      const data: any = await getUserDataClientNew();

      const pictureData = JSON.parse(data.picture);
      const token = pictureData.token;

      setToken({ id: data.id, token: token });
    };

    userToken();
  }, []);

  useEffect(() => {
    const modelDetails = async () => {
      const modelData = await ModelDetailsService.getModelDetails(token.token);
      setModelDetails(modelData.data);
    };
    modelDetails();
  }, [token.id, token.token]);

  const isSmUP = useMediaQuery(theme.breakpoints.up('sm'));

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
                {modelDetails?.name}
              </Typography>
            )}
          </Box>
        </Box>
        {isSmUP && (
          <Link href="/model/profile">
            <UIThemeButton variant="contained" sx={{ width: '195px', height: '48px', borderRadius: '8px' }}>
              <UINewTypography variant="body" color="primary.200" whiteSpace="nowrap">
                <FormattedMessage id="CompleteYourProfile" />
              </UINewTypography>
            </UIThemeButton>
          </Link>
        )}
      </Box>
    </>
  );
};

export default ModelHeaderAuthComponent;
