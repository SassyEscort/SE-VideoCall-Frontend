import {
  UIStyledCard,
  UIStyledContent,
  UIStyledFlag,
  UIStyledHoverText,
  UIStyledImage,
  UIStyledPark,
  UIStyledTitle
} from './ImageCard.styled';
import Box from '@mui/material/Box';
import UINewTypography from '../UINewTypography';
import UINewStyledShadowButton from '../UIStyledShadowButton';

const ImageCard = () => {
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
              <UINewStyledShadowButton sx={{ width: '200px', height: '48px' }}>
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
