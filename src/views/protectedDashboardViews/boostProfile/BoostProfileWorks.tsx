import { Box, useMediaQuery } from '@mui/material';
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
  MainBoostButtonBoxContainer,
  UINewTypographyPackage,
  BoostInnerTextContainer,
  ProfileBoostTextContainer
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
            <UINewTypographyPackage>
              <FormattedMessage id="HowDoesThisWork" />
            </UINewTypographyPackage>
          </SecondBoxContainer>

          <MainChildContainerBoost>
            <MainBoxBorder>
              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="instant_boost"
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

                <SeconBoxContainerBoost>
                  <BoostInnerTextContainer>
                    <FormattedMessage id="ActivateTheBoost" />
                  </BoostInnerTextContainer>
                </SeconBoxContainerBoost>
              </BoxMainBoost>
            </MainBoxBorder>

            <MainBoxBorder>
              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="duration_logo"
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
                <SeconBoxContainerBoost>
                  <BoostInnerTextContainer>
                    <FormattedMessage id="EachBoostlLsts" />
                  </BoostInnerTextContainer>
                </SeconBoxContainerBoost>
              </BoxMainBoost>
            </MainBoxBorder>

            <MainBoxBorder>
              <BoxMainBoost>
                <BoxImageBackgroundBoost>
                  <BoxImageBackgroundChildBoost>
                    <Image
                      alt="cost_icon"
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
                <SeconBoxContainerBoost>
                  <BoostInnerTextContainer>
                    <FormattedMessage id="ItsAnAffordable" />
                  </BoostInnerTextContainer>
                </SeconBoxContainerBoost>
              </BoxMainBoost>
            </MainBoxBorder>
          </MainChildContainerBoost>

          <Box>
            <SecondBoxContainer>
              <ProfileBoostTextContainer color="text.primary">
                <FormattedMessage id="WhyUseProfileBoost" />
              </ProfileBoostTextContainer>
            </SecondBoxContainer>

            <MainChildContainerBoost>
              <MainBoxBorder>
                <BoxMainBoost>
                  <BoxImageBackgroundBoost>
                    <BoxImageBackgroundChildBoost>
                      <Image
                        alt="instant_boost"
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
                  <SeconBoxContainerBoost>
                    <BoostInnerTextContainer>
                      <FormattedMessage id="BeTheFirstProfile" />
                    </BoostInnerTextContainer>
                  </SeconBoxContainerBoost>
                </BoxMainBoost>
              </MainBoxBorder>

              <MainBoxBorder>
                <BoxMainBoost>
                  <BoxImageBackgroundBoost>
                    <BoxImageBackgroundChildBoost>
                      <Image
                        alt="more_icon"
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
                  <SeconBoxContainerBoost>
                    <BoostInnerTextContainer>
                      <FormattedMessage id="HigherVisibility" />
                    </BoostInnerTextContainer>
                  </SeconBoxContainerBoost>
                </BoxMainBoost>
              </MainBoxBorder>

              <MainBoxBorder>
                <BoxMainBoost>
                  <BoxImageBackgroundBoost>
                    <BoxImageBackgroundChildBoost>
                      <Image
                        alt="flex.png"
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
                  <SeconBoxContainerBoost>
                    <BoostInnerTextContainer>
                      <FormattedMessage id="UseWhenIt" />
                    </BoostInnerTextContainer>
                  </SeconBoxContainerBoost>
                </BoxMainBoost>
              </MainBoxBorder>
            </MainChildContainerBoost>
          </Box>
          {isSmDown && !Boolean(isFreeBoostUsed) && (
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
