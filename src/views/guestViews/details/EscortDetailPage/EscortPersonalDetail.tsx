import { Box, useMediaQuery } from '@mui/material';
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
import { FormattedMessage, useIntl } from 'react-intl';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import moment from 'moment';
import { getLastActive } from 'utils/dateAndTime';

const EscortPersonalDetail = ({ guestData }: { guestData: ModelDetailsResponse }) => {
  const intl = useIntl();

  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const languages = guestData?.languages
    ?.map((language) => language?.language_name)
    .sort()
    .join(', ');

  const videoCallPrice = guestData?.video_call_prices?.length ? guestData?.video_call_prices[0]?.credits_per_minute : 0;

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
                  {guestData?.name}
                </UINewTypography>
                <UINewTypography variant="SubtitleSmallMedium" sx={{ fontSize: '14px', lineHeight: '19.6px' }}>
                  <FormattedMessage id="LastActive" />{' '}
                  {guestData.is_online ? <FormattedMessage id="JustNow" /> : getLastActive(guestData?.updated_at ?? '', intl)}
                </UINewTypography>
              </DetailsChildBox>
              <Box>
                <NewTypography variant="subtitle">{guestData?.bio}</NewTypography>
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
                <UINewTooltip title="Age" placement="top">
                  <UINewChip
                    icon={<Box height={20} width={20} component="img" src={`/images/details-icon/age-icon.svg`} alt={'language'} />}
                    label={moment().diff(guestData?.dob, 'years')}
                  />
                </UINewTooltip>
                <UINewTooltip title="Gender" placement="top">
                  <UINewChip
                    icon={<Box height={20} width={20} component="img" src={`/images/details-icon/gender-icon.svg`} alt={'language'} />}
                    label={guestData?.gender}
                  />
                </UINewTooltip>
                <UINewTooltip title="Languages" placement="top">
                  <UINewChip
                    icon={<Box height={20} width={20} component="img" src={`/images/details-icon/language-icon.svg`} alt={'language'} />}
                    label={languages}
                  />
                </UINewTooltip>
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
                  label={Number(videoCallPrice) === -1 ? 'N/A' : `${videoCallPrice} credits/min`}
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
