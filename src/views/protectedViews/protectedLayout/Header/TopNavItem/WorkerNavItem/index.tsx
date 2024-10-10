'use client';
import Link from 'next/link';
import HeaderAuthComponent from './HeaderAuthComponent';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { WorkerNavItemContainer } from './ProfileMenu.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import MoreFilters from 'views/guestViews/searchPage/moreFilters';
import { useCallback, useEffect, useState } from 'react';
import { SearchTitalBox } from './HeaderAuthComponent.styled';
import { FormattedMessage } from 'react-intl';
import { WorkerMainBox } from './WorkerNavItem.styled';
import { MultipleOptionString } from 'views/protectedModelViews/verification/stepOne/VerificationStepOne';
import { CommonServices } from 'services/commonApi/commonApi.services';
import ClaimCreditSignUp from 'views/guestViews/homePage/ClaimCreditSignUp';
import { usePathname } from 'next/navigation';
import { CustomerDetails } from 'services/customerDetails/customerDetails.services';
import { getCookie, setCookie } from './CookieData';

const WorkerNavItem = () => {
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [isApiCalled, setIsApiCalled] = useState(false);
  const [languages, setLanguages] = useState<MultipleOptionString[]>([]);
  const [openFreeCredit, setOpenFreeCredit] = useState(false);
  const [isCreditsClaimed, setIsCreditsClaimed] = useState(true);
  const [userName, setUserName] = useState('');
  const path = usePathname();

  const handleCloseFilterModal = () => {
    setOpenFilterModal(false);
  };

  const handleOpenFilterModal = () => {
    setOpenFilterModal(true);
    if (!isApiCalled) {
      setIsApiCalled(true);
    }
  };

  const handleFreeCreditClose = () => {
    setOpenFreeCredit(false);
  };

  const handleProfileRedirect = () => {
    window.location.href = '/profile';
  };

  const handleLanguageApiChange = useCallback(() => {
    const languagesData = async () => {
      const data = await CommonServices.getLanguages();
      setLanguages(data.data);
    };
    languagesData();
  }, []);

  const handelCustomerDetails = (Data: CustomerDetails) => {
    if (Data) {
      setUserName(Data.customer_user_name);
      if (Data.free_credits_claimed === 0) setIsCreditsClaimed(false);
    }
  };

  useEffect(() => {
    if (userName !== '') {
      const getFreeCreditsCookie = getCookie(`${userName}`);
      if (!getFreeCreditsCookie) {
        setCookie(`${userName}`, 'true', 1, '/');
        const timer = setTimeout(() => {
          if (path === '/' && !isCreditsClaimed) {
            setOpenFreeCredit(true);
          }
        }, 2000);

        if (openFreeCredit) {
          clearTimeout(timer);
        }
        return () => clearTimeout(timer);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreditsClaimed]);

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
          zIndex: 98
        }}
      >
        <WorkerNavItemContainer disableGutters>
          <WorkerMainBox>
            <Box
              component={Link}
              prefetch={true}
              shallow={true}
              href="/"
              height={{ xs: '26px', md: '36px', sm: '36px' }}
              width={{ xs: '120px', md: '182px', sm: '182px' }}
              display={'flex'}
            >
              <Image
                src="/images/header/headerlogo.png"
                width={182}
                height={36}
                alt="header_logo"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                priority
              />
            </Box>
            {!isMdUp && (
              <SearchTitalBox onClick={handleOpenFilterModal}>
                <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
              </SearchTitalBox>
            )}
            {isMdUp && (
              <SearchTitalBox onClick={handleOpenFilterModal}>
                <Image src="/images/header/searchLine.svg" width={20} height={20} alt="search" loading="lazy" />
                <Typography variant="buttonLargeMenu">
                  <FormattedMessage id="Search" />
                </Typography>
              </SearchTitalBox>
            )}
          </WorkerMainBox>
          <Box display="flex" gap={2}>
            <HeaderAuthComponent customerDataProps={handelCustomerDetails} />
          </Box>
        </WorkerNavItemContainer>
      </AppBar>
      <MoreFilters open={openFilterModal} handleClose={handleCloseFilterModal} languages={languages} />
      <ClaimCreditSignUp open={openFreeCredit} onClose={handleFreeCreditClose} onSignupOpen={handleProfileRedirect} />
    </>
  );
};

export default WorkerNavItem;
