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
  MainBoostButtonBox,
  SecondBoostButtonBox,
  SupBox,
  UINewTypographyCondition,
  UINewTypographyMissedCall,
  UINewTypographyMissedCallBox
} from './boostProfile.styled';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import StyleBoostButton from 'components/UIComponents/StyleBoostButton';
import { useState } from 'react';

const BoostProfileContent = ({ handleBoost }: { handleBoost: () => Promise<void> }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <DividerMainBox />
      <BoostBox>
        <BoostProfileMainContainer>
          <BoostProfileBox>
            <BoostProfileModelBox>
              <BoostProfileTextContainer>
                <UINewTypography variant="bodyRegular" color="text.secondary" textAlign="center">
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
            <Box>
              <Box>
                <Checkbox sx={{ p: 0, pr: 1 }} checked={isChecked} onClick={handleCheck} />
                <UINewTypography variant="buttonLargeMenu" sx={{ textWrap: { xs: 'wrap' }, whiteSpace: { xs: 'nowrap' } }}>
                  <FormattedMessage id="IveRead" />
                </UINewTypography>
              </Box>
              <MainBoostButtonBox>
                <SecondBoostButtonBox>
                  <Image
                    src="/images/boostProfile/fire.png"
                    height={110}
                    width={100}
                    alt="fire_icon"
                    style={{ zIndex: 10, left: '-50px', position: 'absolute', top: '-24px' }}
                  />
                  <StyleBoostButton onClick={handleBoost} disabled={!isChecked}>
                    <UINewTypographyCondition>
                      <FormattedMessage id="StartBoost" />
                    </UINewTypographyCondition>
                  </StyleBoostButton>
                </SecondBoostButtonBox>
              </MainBoostButtonBox>
            </Box>
          </BoostProfileBox>
        </BoostProfileMainContainer>
      </BoostBox>
    </>
  );
};

export default BoostProfileContent;
