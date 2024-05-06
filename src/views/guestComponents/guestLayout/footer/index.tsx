'use client';

import Box from '@mui/material/Box';
import Link from 'next/link';
import { Banner, BannerImg, TextContainer, TextContainerMain } from './footer.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import Typography from '@mui/material/Typography';
import MainFooter from './MainFooter';

const Footer = () => {
  return (
    <Banner>
      <TextContainerMain>
        <TextContainer>
          <Box>
            <Box display="flex" flexDirection="column" gap={'16px'} width={'100%'} alignItems={'center'}>
              <Typography variant="h2" sx={{ color: 'text.secondary', width: '100%', maxWidth: 500 }}>
                Ready to explore uncharted pleasures?
              </Typography>
              <Typography>Have the best experience on the best platform out there!</Typography>
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
                  Join for FREE
                </UIThemeShadowButton>
              </Link>
            </Box>
          </Box>
          <MainFooter />
        </TextContainer>
      </TextContainerMain>
      <BannerImg
        sx={{
          backgroundImage: `url(${'/images/image-new-min.webp'})`
        }}
      />
    </Banner>
  );
};

export default Footer;
