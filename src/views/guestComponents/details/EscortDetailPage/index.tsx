'use client';

import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import HomeMainContainer from 'views/guestComponents/guestLayout/homeContainer';
import { DetailsMainBox } from './Escort.styled';
import UINewChip from 'components/UIComponents/UINewChip';
import { EscortSlider } from './EscortSlider';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import EscortSliderMobile from './EscortSliderMobile';
import EscortGalleryContainer from './EscortGalleryContainer';

const EscortDetailPage = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <HomeMainContainer>
        {!isLgDown && <EscortSlider />}
        {isLgDown && <EscortSliderMobile />}
        <Box
          sx={{
            display: 'flex',
            gap: 6,
            mt: 3,
            flexDirection: isSmDown ? 'column' : 'row'
          }}
        >
          <DetailsMainBox>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1
                }}
              >
                <UINewTypography variant="MediumSemiBold" color="#E9E8EB">
                  Lexi Lane
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium">Last active 2hrs ago</UINewTypography>
              </Box>
              <Box>
                <UINewTypography variant="faqSubTitle">
                  Life is short. Take the trip, buy the shoes, eat the cake, and LOVE ❤️.
                </UINewTypography>
              </Box>
            </Box>
          </DetailsMainBox>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5
            }}
          >
            <Box>
              <UINewTypography variant="captionBold">My Appearance</UINewTypography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1
              }}
            >
              <UINewChip
                icon={<Box height={20} width={20} component="img" src={`/images/details-icon/age-icon.svg`} alt={'language'} />}
                label="24"
              />
              <UINewChip
                icon={<Box height={20} width={20} component="img" src={`/images/details-icon/gender-icon.svg`} alt={'language'} />}
                label="Female"
              />
              <UINewChip
                icon={<Box height={20} width={20} component="img" src={`/images/details-icon/language-icon.svg`} alt={'language'} />}
                label="English, Spanish"
              />
            </Box>

            <Box mt={3}>
              <UINewTypography variant="captionBold">Rates</UINewTypography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 1
              }}
            >
              <UINewChip
                icon={<Box height={20} width={20} component="img" src={`/images/details-icon/coin-icon.svg`} alt={'language'} />}
                label="20 credits/hr"
              />
            </Box>
          </Box>
        </Box>
        <EscortGalleryContainer />
      </HomeMainContainer>
    </>
  );
};

export default EscortDetailPage;
