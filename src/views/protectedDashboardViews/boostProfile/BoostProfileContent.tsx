import Box from '@mui/material/Box';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  BoostBox,
  BoostProfileBox,
  BoostProfileMainContainer,
  BoostProfileMissCallBox,
  BoostProfileMissedCallTextContainer,
  BoostProfileModelBox,
  BoostProfileTextContainer,
  DividerMainBox,
  SupBox,
  UINewTypographyMissedCall,
  UINewTypographyMissedCallBox
} from './boostProfile.styled';
import Checkbox from '@mui/material/Checkbox';
import UIStyledShadowButtonLike from 'components/UIComponents/UIStyledShadowButtonLike';

const BoostProfileContent = () => {
  return (
    <>
      <DividerMainBox />
      <BoostBox>
        <BoostProfileMainContainer>
          <BoostProfileBox>
            <BoostProfileModelBox>
              <BoostProfileTextContainer>
                <UINewTypography variant="bodyRegular" color="text.secondary">
                  <FormattedMessage id="IfYouMissCalls" />
                </UINewTypography>
              </BoostProfileTextContainer>
              <BoostProfileMissedCallTextContainer>
                <BoostProfileMissCallBox>
                  <UINewTypographyMissedCall>
                    1
                    <SupBox>
                      <FormattedMessage id="st" />
                    </SupBox>
                    <UINewTypographyMissedCallBox>
                      <FormattedMessage id="MissedCall" />
                    </UINewTypographyMissedCallBox>
                  </UINewTypographyMissedCall>
                  <UINewTypography variant="bodySmall" color="text.secondary" textAlign="center">
                    <FormattedMessage id="RemovedFrom" />{' '}
                    <UINewTypography variant="bodySmall" color="error.300">
                      <FormattedMessage id="5Mins" />
                    </UINewTypography>
                  </UINewTypography>
                </BoostProfileMissCallBox>
                <BoostProfileMissCallBox>
                  <UINewTypographyMissedCall>
                    2
                    <SupBox>
                      <FormattedMessage id="Nd" />
                    </SupBox>
                    <UINewTypographyMissedCallBox>
                      <FormattedMessage id="MissedCall" />
                    </UINewTypographyMissedCallBox>
                  </UINewTypographyMissedCall>
                  <UINewTypography variant="bodySmall" color="text.secondary" textAlign="center">
                    <FormattedMessage id="RemovedFrom" />{' '}
                    <UINewTypography variant="bodySmall" color="error.300">
                      <FormattedMessage id="10Mins" />
                    </UINewTypography>
                  </UINewTypography>
                </BoostProfileMissCallBox>
                <BoostProfileMissCallBox>
                  <UINewTypographyMissedCall>
                    3
                    <SupBox>
                      <FormattedMessage id="Rd" />
                    </SupBox>
                    <UINewTypographyMissedCallBox>
                      <FormattedMessage id="MissedCall" />
                    </UINewTypographyMissedCallBox>
                  </UINewTypographyMissedCall>
                  <UINewTypography variant="bodySmall" color="text.secondary" textAlign="center">
                    <FormattedMessage id="ProfileGets" />{' '}
                    <UINewTypography variant="bodySmall" color="error.300">
                      <FormattedMessage id="OfflineModel" />
                    </UINewTypography>
                  </UINewTypography>
                </BoostProfileMissCallBox>
              </BoostProfileMissedCallTextContainer>
            </BoostProfileModelBox>
            <BoostProfileModelBox>
              <Box>
                <Checkbox sx={{ p: 0, pr: 1 }} />
                <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}>
                  <FormattedMessage id="IveRead" />
                </UINewTypography>
              </Box>
              <UIStyledShadowButtonLike>Boost</UIStyledShadowButtonLike>
            </BoostProfileModelBox>
          </BoostProfileBox>
        </BoostProfileMainContainer>
      </BoostBox>
    </>
  );
};

export default BoostProfileContent;
