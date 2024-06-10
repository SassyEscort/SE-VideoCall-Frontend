'use client';
import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ForBox, ImageBox, ImageSecondBox, MainConatiner, SecondBox, ThreeBox } from './DownloadApp.styled';
const DownloadApp = () => {
  return (
    <>
      <MainConatiner>
        <UINewTypography variant="h2" color={'text.secondary'} sx={{ paddingLeft: 3 }}>
          <FormattedMessage id="DownloadApp" />
        </UINewTypography>

        <SecondBox>
          <UINewTypography variant="buttonLargeMenu" color={'secondary.200'} sx={{ textWrap: 'nowrap' }}>
            <FormattedMessage id="DownloadTheApp" />
          </UINewTypography>

          <ThreeBox>
            <ImageBox src="/images/app-logo/video.webp" />
            <ImageSecondBox src="/images/app-logo/fb-messenger.webp" />
          </ThreeBox>
        </SecondBox>
      </MainConatiner>
      <ForBox>
        <Box>
          <Box component={'img'} src="/images/app-logo/google-pay.webp" />
        </Box>
        <Box>
          <Box component={'img'} src="/images/app-logo/app-store-badge.webp" />
        </Box>
      </ForBox>
    </>
  );
};

export default DownloadApp;
