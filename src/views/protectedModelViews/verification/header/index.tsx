'use client';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { RiArrowLeftLine, RiArrowRightLine } from 'components/common/customRemixIcons';
import Image from 'next/image';
import Link from 'next/link';
import theme from 'themes/theme';
import { VerificationHeaderBox } from './Header.styled';
import { FormattedMessage } from 'react-intl';

const VerificationHeader = ({ activeStep }: { activeStep: number }) => {
  const isMdDown = useMediaQuery(theme.breakpoints.up('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.dark',
        width: '100%',
        px: isMdDown ? 0 : 16.75
      }}
    >
      <>
        <VerificationHeaderBox>
          <Box display="flex" alignItems="center" justifyContent="center">
            <UIThemeButton
              sx={{
                gap: 1.5,
                pr: 1,
                pl: '15px'
              }}
            >
              <RiArrowLeftLine style={{ color: activeStep > 0 ? 'white' : '#58535E' }} />
              <UINewTypography color={activeStep > 0 ? 'text.secondary' : 'text.disabled'} variant="buttonLargeMenu">
                <FormattedMessage id="Back" />
              </UINewTypography>
            </UIThemeButton>
          </Box>
          <Box component={Link} prefetch={false} shallow={true} href="/" sx={{ height: { xs: 40, md: 40 } }}>
            <Image
              src="/images/header/headerlogo.png"
              alt="sassy_logo"
              width={146}
              height={56}
              style={{
                width: 'auto',
                height: isSmDown ? 30 : 40
              }}
              loading="lazy"
            />
          </Box>
          <Box display="flex" gap={1.5} alignItems="center">
            <UIThemeButton
              sx={{
                gap: 1.5,
                pl: 1,
                pr: 1.75,
                '&.Mui-disabled': {
                  backgroundColor: 'transparent'
                }
              }}
            >
              <UINewTypography color="text.secondary" variant="buttonLargeMenu">
                <FormattedMessage id="Next" />
              </UINewTypography>
              <RiArrowRightLine style={{ color: 'white' }} />
            </UIThemeButton>
          </Box>
        </VerificationHeaderBox>
      </>
    </Box>
  );
};

export default VerificationHeader;
