'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import { Banner, BannerImg, TextContainer, TextContainerMain } from './footer.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import MainFooter from './MainFooter';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

const Footer = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Banner>
      <TextContainerMain>
        <TextContainer>
          <Box>
            <Box display="flex" flexDirection="column" gap={'16px'} width={'100%'} alignItems={'center'}>
              <UINewTypography variant={isSmDown ? 'h1' : 'h2'} sx={{ color: 'text.secondary', width: '100%', maxWidth: 500 }}>
                Ready to explore uncharted pleasures?
              </UINewTypography>
              <UINewTypography sx={{ fontSize: '20px', fontWeight: 400, lineHeight: '32px' }}>
                Have the best experience on the best platform out there!
              </UINewTypography>
            </Box>
            <Box
              width={195}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                mt: '40px'
              }}
            >
              <Link prefetch={false} href="/">
                <UIThemeShadowButton fullWidth variant="contained">
                  <UINewTypography variant="buttonLargeBold">Join for FREE</UINewTypography>
                </UIThemeShadowButton>
              </Link>
            </Box>
          </Box>
          <MainFooter />
        </TextContainer>
      </TextContainerMain>
      <BannerImg
        sx={{
          backgroundImage: `url(${'/images/Footer-min.webp'})`
        }}
      />
    </Banner>
  );
};

export default Footer;
