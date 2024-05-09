import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { DetailsChildBox, DetailsChipBox, DetailsMainBox, DetailsTypographyBox, NewTypography } from './Escort.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UINewChip from 'components/UIComponents/UINewChip';
import theme from 'themes/theme';

const EscortPersonalDetail = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 6,
          mt: 3,
          flexDirection: isSmDown ? 'column' : 'row'
        }}
      >
        <DetailsMainBox>
          <DetailsChildBox>
            <DetailsChildBox>
              <UINewTypography variant="MediumSemiBold" color="#E9E8EB">
                Lexi Lane
              </UINewTypography>
              <UINewTypography variant="SubtitleSmallMedium">Last active 2hrs ago</UINewTypography>
            </DetailsChildBox>
            <Box>
              <NewTypography>Life is short. Take the trip, buy the shoes, eat the cake, and LOVE ❤️.</NewTypography>
            </Box>
          </DetailsChildBox>
        </DetailsMainBox>

        <DetailsTypographyBox>
          <Box>
            <UINewTypography variant="captionBold">My Appearance</UINewTypography>
          </Box>
          <DetailsChipBox>
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
          </DetailsChipBox>

          <Box mt={3}>
            <UINewTypography variant="captionBold">Rates</UINewTypography>
          </Box>
          <DetailsChipBox>
            <UINewChip
              icon={<Box height={20} width={20} component="img" src={`/images/details-icon/coin-icon.svg`} alt={'language'} />}
              label="20 credits/hr"
            />
          </DetailsChipBox>
        </DetailsTypographyBox>
      </Box>
    </>
  );
};

export default EscortPersonalDetail;
