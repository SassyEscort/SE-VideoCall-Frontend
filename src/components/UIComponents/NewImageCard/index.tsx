import {
  HighlyAvailableBoxNew,
  HighlyAvailableButtonBoxNew,
  UIStyledCard,
  UIStyledContent,
  UIStyledFlag,
  UIStyledHoverText,
  UIStyledImage,
  UIStyledPark,
  UIStyledStar,
  UIStyledTitle
} from './ImageCard.styled';
import Box from '@mui/material/Box';
import UINewTypography from '../UINewTypography';
import UINewStyledShadowButton from '../UIStyledShadowButton';
import StyleBoostNewUserButton from '../StyleBoostNewUserButton';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

const ImageCard = () => {
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <UIStyledCard>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%'
          }}
        >
          <UIStyledImage className="styled-image" />
        </Box>
        <UIStyledContent>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'top',
              justifyContent: 'flex-start'
            }}
            className="styled-title"
          >
            <HighlyAvailableButtonBoxNew>
              <HighlyAvailableBoxNew>
                <Image
                  loading="lazy"
                  src="/images/boostProfile/fire-ani.gif"
                  alt="fire-gif"
                  height={42}
                  width={33}
                  style={{ zIndex: 10, left: isTablet ? '-15px' : isMdDown ? '-10px' : '-15px', position: 'absolute', top: '-14px' }}
                />

                <StyleBoostNewUserButton>
                  <UINewTypography variant="bodyUltraLarge" color="#ffff" style={{ fontSize: isSmDown ? '10px' : '12px' }}>
                    <FormattedMessage id="HighlyAvailable" />
                  </UINewTypography>
                </StyleBoostNewUserButton>
              </HighlyAvailableBoxNew>
            </HighlyAvailableButtonBoxNew>
            <UIStyledStar>
              <Box component="img" src="images/home/star-icon.png" alt="park-icon" />
              <UINewTypography variant="ExtraSmallerText">4.3</UINewTypography>
            </UIStyledStar>
          </Box>
          <UIStyledTitle className="styled-title">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                gap: '8px'
              }}
            >
              <UINewTypography variant="bodySemiBold">Wade Warren</UINewTypography>
              <UINewTypography variant="ExtraSmallerText" color="#F1F5F9">
                Red-flag bed cause tiger no model
              </UINewTypography>
              <Box
                sx={{
                  display: 'flex',
                  gap: '8px'
                }}
              >
                <UIStyledPark>
                  <Box component="img" src="images/home/park-icon.png" alt="park-icon" />
                  <UINewTypography variant="ExtraSmallerText">28</UINewTypography>
                </UIStyledPark>
                <UIStyledFlag>
                  <Box component="img" src="images/home/flag-icon.png" alt="flag-icon" />
                  <UINewTypography variant="ExtraSmallerText">Spanish</UINewTypography>
                </UIStyledFlag>
              </Box>
            </Box>
          </UIStyledTitle>
          <UIStyledHoverText className="hover-text">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                gap: '4px',
                alignItems: 'center'
              }}
            >
              <UINewTypography variant="bodySemiBold">Wade Warren</UINewTypography>
              <UINewTypography variant="ExtraSmallerText" color="#F1F5F9">
                Red-flag bed cause tiger no model
              </UINewTypography>
              <UINewStyledShadowButton sx={{ width: '200px', height: '48px', mt: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Box>
                    <Box component={'img'} src="images/home/video-icon.png" alt="video-call-icon" />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px'
                    }}
                  >
                    <UINewTypography variant="captionLargeSemiBold">Video Call</UINewTypography>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '4px',
                        alignItems: 'center'
                      }}
                    >
                      <Box component={'img'} src="images/home/coin-icon.png" alt="video-call-icon" width={16} height={16} />
                      <UINewTypography variant="captionLargeSemiBold">20/min</UINewTypography>
                    </Box>
                  </Box>
                </Box>
              </UINewStyledShadowButton>
            </Box>
          </UIStyledHoverText>
        </UIStyledContent>
      </UIStyledCard>
    </>
  );
};

export default ImageCard;
