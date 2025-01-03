'use client';
import Link from 'next/link';
import HeaderAuthComponent from './HeaderAuthComponent';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import MoreFilters from 'views/guestViews/searchPage/moreFilters';
import { useCallback, useEffect, useState } from 'react';
import { SearchTitalBox, SearchTitalBoxSm } from './HeaderAuthComponent.styled';
import { FormattedMessage } from 'react-intl';
import { MultipleOptionString } from 'views/protectedModelViews/verification/stepOne/VerificationStepOne';
import { CommonServices } from 'services/commonApi/commonApi.services';

const WorkerNavItem = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [languages, setLanguages] = useState<MultipleOptionString[]>([]);
  const isSmDown = useMediaQuery('(max-width: 320px)');

  const handleCloseFilterModal = () => {
    setOpenFilterModal(false);
  };

  const handleOpenFilterModal = () => {
    setOpenFilterModal(true);
    if (!isApiCalled) {
      setIsApiCalled(true);
    }
  };

  const handleLanguageApiChange = useCallback(() => {
    const languagesData = async () => {
      const data = await CommonServices.getLanguages();
      setLanguages(data.data);
    };
    languagesData();
  }, []);

  useEffect(() => {
    if (isApiCalled) {
      handleLanguageApiChange();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isApiCalled]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'secondary.dark',
          pr: '0 !important',
          boxShadow: 'none',
          zIndex: 98,
          top: 36
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 4.5,
            justifyContent: 'center',
            padding: '12px 10px 12px 10px'
          }}
        >
          <Box
            component={Link}
            prefetch={true}
            shallow={true}
            href="/"
            height="100%"
            width={{ xs: '120px', md: '182px', sm: '182px' }}
            gap={1}
            display={'flex'}
          >
            <Image
              src="/images/header/new-logo.png"
              width={182}
              height={36}
              alt="header_logo"
              priority
              style={{
                width: '100%',
                height: isSmDown ? '26px' : 'auto'
              }}
            />
          </Box>
          {!isMdUp && (
            <SearchTitalBox onClick={handleOpenFilterModal}>
              <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
            </SearchTitalBox>
          )}
          {isMdUp && (
            <SearchTitalBoxSm onClick={handleOpenFilterModal}>
              <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
              <Typography variant="buttonLargeMenu">
                <FormattedMessage id="Search" />
              </Typography>
            </SearchTitalBoxSm>
          )}

          <HeaderAuthComponent />
        </Box>
      </AppBar>
      <MoreFilters open={openFilterModal} handleClose={handleCloseFilterModal} languages={languages} />
    </>
  );
};

export default WorkerNavItem;
