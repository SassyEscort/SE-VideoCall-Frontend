import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import Image from 'next/image';
import Box from '@mui/material/Box';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { BannerContainer, InlineBox, InlineBoxRelative, TypographyBox, HomeExploreBox } from './HomeBanner.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';

const HomeTopBanner = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));

  return (
    <>
      <BannerContainer>
        <Box display="flex" flexDirection="column" gap={{ xs: 4, sm: 6 }} width="100%" maxWidth="652px" pt={{ xs: '94px', md: '108px' }}>
          <Box display="flex" flexDirection="column" width="100%" gap={3} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <InlineBox>
              Unlock the Gateway {(!isSmDown || isSm) && 'to'} &nbsp;
              <Box component="span" position="relative">
                <InlineBoxRelative>
                  {isSmDown && !isSm && (
                    <UINewTypography variant="MediumSemiBoldText" color="common.white" textAlign="center">
                      to &nbsp;
                    </UINewTypography>
                  )}
                  <Box component="span" sx={{ zIndex: 1, position: 'relative', textWrap: isSm ? 'wrap' : 'nowrap' }}>
                    Unforgettable &nbsp;
                  </Box>
                  <Image
                    alt="word_underline"
                    src="/images/home/line-vector.svg"
                    width={100}
                    height={32}
                    style={{
                      position: 'absolute',
                      top: isSmDown ? 30 : 44,
                      left: isSmDown && !isSm ? 80 : isSm ? 16 : 0,
                      maxWidth: isSmDown ? '239.52px' : '354.18px',
                      width: '100%'
                    }}
                    priority
                  />
                  {!isSmDown && !isMd && !isTablet && (
                    <UINewTypography variant="h1" color="common.white">
                      Encounters
                    </UINewTypography>
                  )}
                </InlineBoxRelative>
                {(isSmDown || isMd || isTablet) && <InlineBox>Encounters</InlineBox>}
              </Box>
            </InlineBox>
            <TypographyBox>
              Discover the thrill of intimate connections—where desire knows no distance. Join Sassy Escorts for unparalleled encounters,
              all from the comfort of your home.
            </TypographyBox>
          </Box>
          <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems={{ xs: 'center', sm: 'flex-start' }}>
            <UIThemeShadowButton variant="contained">
              <UINewTypography variant="body">Join for FREE</UINewTypography>
            </UIThemeShadowButton>
            <UIThemeButton>
              <UINewTypography variant="bodySemiBold">Explore Models</UINewTypography>
            </UIThemeButton>
          </Box>
        </Box>
        <Box
          pr={{ xs: 3, sm: 0 }}
          pl={{ xs: 3, sm: 0 }}
          display="flex"
          alignItems="flex-end"
          justifyContent={{ xs: 'center', sm: 'flex-start', lg: 'flex-end' }}
          pt={{ xs: 0, lg: 9 }}
        >
          <Image
            alt="home_model"
            width={isSm && isSmDown ? 300 : isSmDown ? 347 : 495}
            height={isSmDown ? 339 : 452}
            src="/images/home/home-banner-model.webp"
            style={{ height: 'auto', borderRadius: '12px', right: 0 }}
            priority
          />
        </Box>
      </BannerContainer>
      <Box width="100%" pt={{ xs: '58px', lg: '207px' }} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <HomeExploreBox>
          <UINewTypography variant="h5" textAlign="center" color="text.secondary">
            Explore your choices from the world of diverse beauty and charm
          </UINewTypography>
          <UINewTypography color="text.secondary" textAlign="center" variant="bodySmall" sx={{ textWrap: isSm ? 'wrap' : 'nowrap' }}>
            Select the companion who aligns with your desires.
          </UINewTypography>
        </HomeExploreBox>
      </Box>
    </>
  );
};

export default HomeTopBanner;
