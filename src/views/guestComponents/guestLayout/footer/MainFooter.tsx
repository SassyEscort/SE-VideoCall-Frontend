import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSubICon } from './MainFooter.styled';
import { FooterCityList } from './footer.constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'themes/theme';
import UINewTypography from 'components/UIComponents/UINewTypography';

const MainFooter = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ width: '100%', mt: isSmDown ? '25px' : '115px' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              borderColor: '#232027',
              width: '100%',
              maxWidth: isSmDown ? '363px' : '1244px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
        </Box>
        <Box mt={'32px'}>
          <Box sx={{ display: 'flex', flexDirection: isSmDown ? 'column' : 'row', justifyContent: 'space-between', px: 1.5 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isSmDown ? 'center' : 'flex-start',
                textAlign: isSmDown ? 'center' : 'start',
                marginBottom: isSmDown ? 3 : 0,
                gap: 1
              }}
            >
              <Link prefetch={false} href="/">
                <Image
                  src="/images/logo-footer.png"
                  width={146}
                  height={56}
                  alt="sassy_logo"
                  style={{
                    width: 'auto',
                    height: isSmDown ? '56px' : '64px'
                  }}
                  loading="lazy"
                />
              </Link>
              <Box>
                <UINewTypography
                  variant="bodySmall"
                  sx={{
                    width: '100%',
                    maxWidth: { md: '297px' },
                    display: 'flex',
                    textAlign: isSmDown ? 'center' : 'start',
                    alignItems: 'flex-start'
                  }}
                >
                  Our platform is loved by more than 1000 customers.
                </UINewTypography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <FooterSubICon sx={{ flexDirection: 'column', display: 'flex', textAlign: 'left' }}>
                <UINewTypography sx={{ mb: '6px' }} variant="captionBold">
                  Menu
                </UINewTypography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <UINewTypography variant="SubtitleSmallRegular">
                    <Link prefetch={false} href="/affiliate/program">
                      Home
                    </Link>
                  </UINewTypography>
                  <UINewTypography variant="SubtitleSmallRegular">
                    <Link prefetch={false} href="https://blog.sassyescort.com/" target="_blank">
                      How it works
                    </Link>
                  </UINewTypography>

                  <UINewTypography variant="SubtitleSmallRegular">
                    <Link prefetch={false} href="/privacy-statement">
                      FAQs
                    </Link>
                  </UINewTypography>
                  <UINewTypography variant="SubtitleSmallRegular">
                    <Link prefetch={false} href="/cookie-statement">
                      Sign up
                    </Link>
                  </UINewTypography>
                  <UINewTypography variant="SubtitleSmallRegular">
                    <Link prefetch={false} href="/terms-and-conditions">
                      Log in
                    </Link>
                  </UINewTypography>
                  <UINewTypography variant="SubtitleSmallRegular">
                    <Link prefetch={false} href="/terms-and-conditions">
                      Register as a Model
                    </Link>
                  </UINewTypography>
                </Box>
              </FooterSubICon>

              <FooterSubICon sx={{ flexDirection: 'column', display: 'flex', textAlign: 'left' }}>
                <UINewTypography sx={{ mb: '6px' }} variant="captionBold">
                  Resources
                </UINewTypography>
                {FooterCityList.map((val, index) => (
                  <UINewTypography variant="SubtitleSmallRegular" key={index}>
                    <Box
                      sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                      component={Link}
                      prefetch={false}
                      shallow={true}
                      href={`/escorts/city${val.link}`}
                    >
                      {val.name}
                    </Box>
                  </UINewTypography>
                ))}
              </FooterSubICon>
            </Box>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', mt: isSmDown ? '25px' : '32px' }}>
          <UINewTypography variant="SubtitleSmallRegular">© 2024 Sassy Escort, All Rights Reserved</UINewTypography>
        </Box>
      </Box>
    </>
  );
};

export default MainFooter;
