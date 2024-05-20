import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import {
  DetailSubTypographyBox,
  DetailsChildBox,
  DetailsChildTypographyBox,
  DetailsChipBox,
  DetailsMainBox,
  DetailsTypographyBox,
  NameMainBox,
  NewTypography
} from './Escort.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UINewChip from 'components/UIComponents/UINewChip';
import theme from 'themes/theme';
import { UINewTooltip } from 'components/UIComponents/UINewTooltip/UINewTooltip.styled';
import { FormattedMessage } from 'react-intl';

const EscortPersonalDetail = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mt: 3,
          flexDirection: isSmDown ? 'column' : 'row'
        }}
      >
        <DetailsMainBox sx={{ marginTop: isSmDown ? '8px' : undefined }}>
          <DetailsChildBox>
            <NameMainBox>
              <DetailsChildBox>
                <UINewTypography
                  variant="MediumSemiBold"
                  color="#E9E8EB"
                  sx={{ fontSize: { xs: '32px', sm: '40px' }, lineHeight: { xs: '43.2px', sm: '54px' } }}
                >
                  <FormattedMessage id="LexiLane" />
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium" sx={{ fontSize: '14px', lineHeight: '19.6px' }}>
                  <FormattedMessage id="LastActive" />
                </UINewTypography>
              </DetailsChildBox>
              <Box>
                <NewTypography variant="subtitle">
                  <FormattedMessage id="LifeIsShort" />
                </NewTypography>
              </Box>
            </NameMainBox>
          </DetailsChildBox>
        </DetailsMainBox>

        <DetailsTypographyBox>
          <DetailSubTypographyBox>
            <DetailsChildTypographyBox>
              <Box>
                <UINewTypography variant="captionBold">
                  <FormattedMessage id="MyAppearance" />
                </UINewTypography>
              </Box>
              <DetailsChipBox>
                <UINewTooltip title={'Hello'} placement="top">
                  <UINewChip
                    icon={<Box height={20} width={20} component="img" src={`/images/details-icon/age-icon.svg`} alt={'language'} />}
                    label="24"
                  />
                </UINewTooltip>
                <UINewChip
                  icon={<Box height={20} width={20} component="img" src={`/images/details-icon/gender-icon.svg`} alt={'language'} />}
                  label="Female"
                />
                <UINewChip
                  icon={<Box height={20} width={20} component="img" src={`/images/details-icon/language-icon.svg`} alt={'language'} />}
                  label="English, Spanish"
                />
              </DetailsChipBox>
            </DetailsChildTypographyBox>

            <DetailsChildTypographyBox>
              <Box>
                <UINewTypography variant="captionBold">
                  <FormattedMessage id="Rates" />
                </UINewTypography>
              </Box>
              <DetailsChipBox>
                <UINewChip
                  icon={<Box height={16} width={16} component="img" src={`/images/details-icon/coin-icon.svg`} alt={'language'} />}
                  label="20 credits/hr"
                />
              </DetailsChipBox>
            </DetailsChildTypographyBox>
          </DetailSubTypographyBox>
        </DetailsTypographyBox>
      </Box>
    </>
  );
};

export default EscortPersonalDetail;
