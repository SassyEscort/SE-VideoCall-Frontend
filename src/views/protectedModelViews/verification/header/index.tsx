'use client';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { RiArrowLeftLine, RiArrowRightLine } from 'components/common/customRemixIcons';
import Image from 'next/image';
import theme from 'themes/theme';
import { ImageBox, VerificationHeaderBox } from './Header.styled';
import { FormattedMessage } from 'react-intl';
import StyleButtonV2 from 'components/UIComponents/StyleLoadingButton';

const VerificationHeader = ({
  activeStep,
  handleNextHeaderStep,
  handlePrev,
  isLoading
}: {
  activeStep: number;
  handleNextHeaderStep: () => void;
  handlePrev: () => void;
  isLoading: boolean;
}) => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.dark',
        width: '100%'
      }}
    >
      <>
        <VerificationHeaderBox>
          <Box display="flex" alignItems="center" justifyContent="center">
            <UIThemeButton
              onClick={handlePrev}
              sx={{
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
          <ImageBox prefetch={false} shallow={true} href="/model">
            <Image
              src="/images/header/headerlogo.png"
              alt="header_logo"
              width={182}
              height={36}
              style={{
                width: isSmDown ? 136 : 182,
                height: isSmDown ? 27 : 36
              }}
              loading="lazy"
            />
          </ImageBox>
          <Box display="flex" gap={1.5} alignItems="center">
            <StyleButtonV2
              onClick={handleNextHeaderStep}
              loading={isLoading}
              sx={{
                pl: 1,
                pr: 1.75,
                '&.Mui-disabled': {
                  backgroundColor: 'transparent'
                }
              }}
              disabled={activeStep >= 5}
            >
              <UINewTypography color={activeStep >= 5 ? 'text.disabled' : 'text.secondary'} variant="buttonLargeMenu">
                <FormattedMessage id="Next" />
              </UINewTypography>
              <RiArrowRightLine color={activeStep >= 5 ? 'text.disabled' : 'white'} />
            </StyleButtonV2>
          </Box>
        </VerificationHeaderBox>
      </>
    </Box>
  );
};

export default VerificationHeader;
