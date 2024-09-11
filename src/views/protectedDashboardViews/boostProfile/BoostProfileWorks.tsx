import { Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';
import {
  SecondBoxContainer,
  MainChildContainerBoost,
  MainBoxBorder,
  BoxMainBoost,
  BoxImageBackgroundBoost,
  BoxImageBackgroundChildBoost,
  FirstTextBoostTyporaphy,
  SeconBoxContainerBoost,
  BoostMultipleFreeBox,
  SecondBoostButtonBox,
  UINewTypographyCondition,
  PackageFreeTypography,
  MainBoostButtonBoxContainer
} from './boostProfile.styled';
import Image from 'next/image';
import { BoostProfileWorksBox } from './BoostMultiplePackage.styled';
import StyleBoostButton from 'components/UIComponents/StyleBoostButton';
import { ProfilePlanResData } from 'services/commonApi/commonApi.services';

const BoostProfileWorks = ({
  handleBoostOpen,
  freePlan,
  isFreeBoostUsed
}: {
  handleBoostOpen: (planDetails: ProfilePlanResData) => void;
  freePlan: ProfilePlanResData;
  isFreeBoostUsed: number;
}) => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <BoostProfileWorksBox>
        <Box>
          <SecondBoxContainer>
            <UINewTypography variant="h5" color="text.primary" lineHeight="160%">
              <FormattedMessage id="HowDoesThisWork" />
            </UINewTypography>
          </SecondBoxContainer>

          <MainChildContainerBoost>
            <MainBoxBorder>
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
            </MainBoxBorder>

            <MainBoxBorder>
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
            </MainBoxBorder>

            <MainBoxBorder>
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
            </MainBoxBorder>
          </MainChildContainerBoost>
          {!Boolean(isFreeBoostUsed) && isSmDown && (
            <BoostMultipleFreeBox>
              <PackageFreeTypography>
                <FormattedMessage id="1FreeBoostAvailable" />
              </PackageFreeTypography>
              <MainBoostButtonBoxContainer>
                <SecondBoostButtonBox>
                  <Image
                    src="/images/boostProfile/fire.png"
                    height={110}
                    width={100}
                    alt="fire_icon"
                    style={{ zIndex: 10, left: '-50px', position: 'absolute', top: '-24px' }}
                  />
                  <StyleBoostButton onClick={() => handleBoostOpen(freePlan)}>
                    <UINewTypographyCondition>
                      <FormattedMessage id="BoostYourProfile" />
                    </UINewTypographyCondition>
                  </StyleBoostButton>
                </SecondBoostButtonBox>
              </MainBoostButtonBoxContainer>
            </BoostMultipleFreeBox>
          )}
        </Box>

        <Box>
          <SecondBoxContainer>
            <UINewTypography variant="h5" color="text.primary" lineHeight="160%">
              <FormattedMessage id="WhyUseProfileBoost" />
            </UINewTypography>
          </SecondBoxContainer>

          <MainChildContainerBoost>
            <MainBoxBorder>
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
            </MainBoxBorder>

            <MainBoxBorder>
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
            </MainBoxBorder>

            <MainBoxBorder>
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
            </MainBoxBorder>
          </MainChildContainerBoost>
        </Box>
        {!isSmDown && !Boolean(isFreeBoostUsed) && (
          <BoostMultipleFreeBox>
            <PackageFreeTypography>
              <FormattedMessage id="1FreeBoostAvailable" />
            </PackageFreeTypography>
            <MainBoostButtonBoxContainer>
              <SecondBoostButtonBox>
                <Image
                  src="/images/boostProfile/fire.png"
                  height={110}
                  width={100}
                  alt="fire_icon"
                  style={{ zIndex: 10, left: '-50px', position: 'absolute', top: '-24px' }}
                />
                <StyleBoostButton onClick={() => handleBoostOpen(freePlan)}>
                  <UINewTypographyCondition>
                    <FormattedMessage id="BoostYourProfile" />
                  </UINewTypographyCondition>
                </StyleBoostButton>
              </SecondBoostButtonBox>
            </MainBoostButtonBoxContainer>
          </BoostMultipleFreeBox>
        )}
      </BoostProfileWorksBox>
    </>
  );
};

export default BoostProfileWorks;
