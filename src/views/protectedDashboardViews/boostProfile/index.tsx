'use client';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  BoxImageBackgroundBoost,
  BoxImageBackgroundChildBoost,
  BoxMainBoost,
  FirstBoxContainer,
  FirstTextBoostTyporaphy,
  MainBoostButtonBox,
  MainChildContainerBoost,
  SeconBoxContainerBoost,
  SecondBoostButtonBox,
  SecondBoxContainer
} from './boostProfile.styled';
import { Box, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import Image from 'next/image';
import StyleBoostButton from 'components/UIComponents/StyleBoostButton';

const BoostProfile = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <DashboardProfile>
        <FirstBoxContainer>
          <UINewTypography variant="h2" color="text.secondary">
            <FormattedMessage id="BoostYourProfile" />
          </UINewTypography>
        </FirstBoxContainer>

        <Box sx={{ display: 'flex', flexDirection: isSmDown ? 'column-reverse' : 'column' }}>
          <Box>
            <SecondBoxContainer>
              <UINewTypography variant="h5" color="text.primary" lineHeight="160%">
                <FormattedMessage id="HowDoesThisWork" />
              </UINewTypography>
            </SecondBoxContainer>

            <MainChildContainerBoost
              sx={{
                mt: isSmDown ? 7 : 7,
                flexDirection: isSmDown ? 'column' : 'row',
                gap: isSmDown ? 5 : 18.5
              }}
            >
              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="home_model"
                      width={24}
                      height={24}
                      src="/images/boostProfile/Instant.png"
                      style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                    />
                  </BoxImageBackgroundChildBoost>
                </BoxImageBackgroundBoost>
                <FirstTextBoostTyporaphy variant={isSmDown ? 'body' : 'body'} color={'#E9E8EB'}>
                  <FormattedMessage id="InstantVisibility" />
                </FirstTextBoostTyporaphy>
                <SeconBoxContainerBoost sx={{ mt: isSmDown ? 1.75 : 2 }}>
                  <UINewTypography
                    variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                    sx={{
                      width: '100%',
                      maxWidth: '215px'
                    }}
                  >
                    <FormattedMessage id="ActivateTheBoost" />
                  </UINewTypography>
                </SeconBoxContainerBoost>
              </BoxMainBoost>

              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="home_model"
                      width={24}
                      height={24}
                      src="/images/boostProfile/duration.png"
                      style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                    />
                  </BoxImageBackgroundChildBoost>
                </BoxImageBackgroundBoost>
                <FirstTextBoostTyporaphy variant={isSmDown ? 'body' : 'body'} color={'#E9E8EB'}>
                  <FormattedMessage id="Duration2" />
                </FirstTextBoostTyporaphy>
                <SeconBoxContainerBoost sx={{ mt: isSmDown ? 1.75 : 2 }}>
                  <UINewTypography
                    variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                    sx={{
                      width: '100%'
                    }}
                  >
                    <FormattedMessage id="EachBoostlLsts" />
                  </UINewTypography>
                </SeconBoxContainerBoost>
              </BoxMainBoost>

              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="home_model"
                      width={24}
                      height={24}
                      src="/images/boostProfile/cost.png"
                      style={{ width: isSmDown ? 15 : 15, height: isSmDown ? 20 : 20 }}
                    />
                  </BoxImageBackgroundChildBoost>
                </BoxImageBackgroundBoost>
                <FirstTextBoostTyporaphy variant={isSmDown ? 'body' : 'body'} color={'#E9E8EB'}>
                  <FormattedMessage id="CostEffective" />
                </FirstTextBoostTyporaphy>
                <SeconBoxContainerBoost sx={{ mt: isSmDown ? 1.75 : 2 }}>
                  <UINewTypography
                    variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                    sx={{
                      width: '100%'
                    }}
                  >
                    <FormattedMessage id="ItsAnAffordable" />
                  </UINewTypography>
                </SeconBoxContainerBoost>
              </BoxMainBoost>
            </MainChildContainerBoost>
          </Box>

          <Box>
            <SecondBoxContainer>
              <UINewTypography variant="h5" color="text.primary" lineHeight="160%">
                <FormattedMessage id="WhyUseProfileBoost" />
              </UINewTypography>
            </SecondBoxContainer>

            <MainChildContainerBoost
              sx={{
                mt: isSmDown ? 7 : 7,
                flexDirection: isSmDown ? 'column' : 'row',
                gap: isSmDown ? 5 : 18.5
              }}
            >
              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="home_model"
                      width={24}
                      height={24}
                      src="/images/boostProfile/instant.png"
                      style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                    />
                  </BoxImageBackgroundChildBoost>
                </BoxImageBackgroundBoost>
                <FirstTextBoostTyporaphy variant={isSmDown ? 'body' : 'body'} color={'#E9E8EB'}>
                  <FormattedMessage id="IncreasedExposure" />
                </FirstTextBoostTyporaphy>
                <SeconBoxContainerBoost sx={{ mt: isSmDown ? 1.75 : 2 }}>
                  <UINewTypography
                    variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                    sx={{
                      width: '100%',
                      maxWidth: '215px'
                    }}
                  >
                    <FormattedMessage id="BeTheFirstProfile" />
                  </UINewTypography>
                </SeconBoxContainerBoost>
              </BoxMainBoost>

              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="home_model"
                      width={24}
                      height={24}
                      src="/images/boostProfile/more.png"
                      style={{ width: isSmDown ? 20 : 24, height: isSmDown ? 20 : 24 }}
                    />
                  </BoxImageBackgroundChildBoost>
                </BoxImageBackgroundBoost>
                <FirstTextBoostTyporaphy variant={isSmDown ? 'body' : 'body'} color={'#E9E8EB'}>
                  <FormattedMessage id="MoreEngagements" />
                </FirstTextBoostTyporaphy>
                <SeconBoxContainerBoost sx={{ mt: isSmDown ? 1.75 : 2 }}>
                  <UINewTypography
                    variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                    sx={{
                      width: '100%'
                    }}
                  >
                    <FormattedMessage id="HigherVisibility" />
                  </UINewTypography>
                </SeconBoxContainerBoost>
              </BoxMainBoost>

              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="home_model"
                      width={24}
                      height={24}
                      src="/images/boostProfile/flex.png"
                      style={{ width: isSmDown ? 25 : 25, height: isSmDown ? 25 : 25 }}
                    />
                  </BoxImageBackgroundChildBoost>
                </BoxImageBackgroundBoost>
                <FirstTextBoostTyporaphy variant={isSmDown ? 'body' : 'body'} color={'#E9E8EB'}>
                  <FormattedMessage id="Flexibility" />
                </FirstTextBoostTyporaphy>
                <SeconBoxContainerBoost sx={{ mt: isSmDown ? 1.75 : 2 }}>
                  <UINewTypography
                    variant={isSmDown ? 'bodySmall' : 'bodyRegular'}
                    sx={{
                      width: '100%'
                    }}
                  >
                    <FormattedMessage id="UseWhenIt" />
                  </UINewTypography>
                </SeconBoxContainerBoost>
              </BoxMainBoost>
            </MainChildContainerBoost>
          </Box>

          <Box>
            <SecondBoxContainer>
              <UINewTypography variant="h5" color="text.secondary" lineHeight="160%">
                <FormattedMessage id="1FreeBoostAvailable" />
              </UINewTypography>
            </SecondBoxContainer>
            <MainBoostButtonBox>
              <SecondBoostButtonBox>
                <Image
                  src="/images/boostProfile/fire.png"
                  height={110}
                  width={100}
                  alt="fire_icon"
                  style={{ zIndex: 10, left: '-50px', position: 'absolute', top: '-24px' }}
                />
                <StyleBoostButton>
                  <UINewTypography variant="buttonLargeMenu">
                    <FormattedMessage id="BoostYourProfile" />
                  </UINewTypography>
                </StyleBoostButton>
              </SecondBoostButtonBox>
            </MainBoostButtonBox>
          </Box>
        </Box>
      </DashboardProfile>
    </>
  );
};

export default BoostProfile;
