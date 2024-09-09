'use client';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { Box, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import Image from 'next/image';
import StyleBoostButton from 'components/UIComponents/StyleBoostButton';
import {
  BoxImageBackgroundBoost,
  BoxImageBackgroundChildBoost,
  BoxMainBoost,
  FirstBoxContainer,
  FirstTextBoostTyporaphy,
  MainBoostButtonBox,
  MainBoxBorder,
  MainChildContainerBoost,
  SeconBoxContainerBoost,
  SecondBoostButtonBox,
  SecondBoxContainer
} from './boostProfile.styled';
import { useCallback, useEffect, useState } from 'react';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { BoostFeatureService, ProfilePlanData } from 'services/boostFeature/boostFeature.services';
import { CommonServices, ProfilePlanResData } from 'services/commonApi/commonApi.services';
import BoostProfileDialog from './BoostProfileDialog';
import { CustomerCredit } from 'services/customerCredit/customerCredit.service';
import { PaidProfile } from './PaidProfile';
import moment from 'moment';
import BoostMultiplePackage from './BoostMultiplePackage';

const FreeProfile = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [openBoost, setOpenBoost] = useState(false);
  const [isFreeBoostUsed, setIsFreeBoostUsed] = useState(0);
  const [freePlan, setFreePlan] = useState<ProfilePlanResData>();
  const [allPlans, setAllPlans] = useState<ProfilePlanResData[]>([]);
  const [activePlanHours, setActivePlanHours] = useState(0);
  const [activePlanMins, setActivePlanMins] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [planDetails, setPlanDetails] = useState<ProfilePlanResData>();
  const [modelActivePlan, setModelActivePlan] = useState<ProfilePlanData>();

  const handleBoostOpen = (planDetails: ProfilePlanResData) => {
    setPlanDetails(planDetails);
    setOpenBoost(true);
  };

  const handleBoostClose = () => {
    setOpenBoost(false);
  };

  const fetchModelProfilePlan = useCallback(async () => {
    try {
      if (token.token) {
        const response = await BoostFeatureService.getModelProfilePlan(token.token);
        const activePlan = response.data.plans.length && response.data.plans.filter((x) => x.is_active)[0];

        if (activePlan) {
          setModelActivePlan(activePlan);
        }
        const activePlanTimeInMinutes = activePlan ? moment.utc(activePlan.end_time).diff(moment.utc(), 'minutes') : 0;

        const hours = Math.floor(activePlanTimeInMinutes / 60);
        const minutes = activePlanTimeInMinutes % 60;
        setActivePlanHours(hours);
        setActivePlanMins(minutes);
        setIsFreeBoostUsed(response.data.free_plan_used);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  }, [token.token]);

  const handleBoost = async (planId: number) => {
    try {
      const res = await CustomerCredit.modelCreditAmount(token.token, planId, 0, true);
      if (res) {
        setActiveStep(1);
        fetchModelProfilePlan();
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data.id, token: data.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    fetchModelProfilePlan();
  }, [fetchModelProfilePlan]);

  useEffect(() => {
    const getProfilePlans = async () => {
      try {
        const response = await CommonServices.getProfilePlans(token.token);
        const freePlan = response.data.filter((x) => x.is_free)[0];
        setFreePlan(freePlan);
        setAllPlans(response.data);
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };
    if (token.token) {
      getProfilePlans();
    }
  }, [isFreeBoostUsed, token.token]);

  return (
    <>
      <DashboardProfile>
        <FirstBoxContainer>
          <UINewTypography variant="h2" color="text.secondary">
            <FormattedMessage id="BoostYourProfile" />
          </UINewTypography>
        </FirstBoxContainer>
        {!modelActivePlan && (
          <Box marginTop={7}>
            <BoostMultiplePackage allPlans={allPlans} handleBoostOpen={handleBoostOpen} />
          </Box>
        )}
        {!isFreeBoostUsed ? (
          <>
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
                    gap: 1.5
                  }}
                >
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
                    gap: 1.5
                  }}
                >
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

              <Box>
                <SecondBoxContainer>
                  <Box>
                    {isFreeBoostUsed ? (
                      <UINewTypography variant="h5" color="text.secondary" lineHeight="160%">
                        <FormattedMessage id="BoostPaidText" /> <span style={{ color: '#FF68C0' }}>$0.1/2hours</span>
                      </UINewTypography>
                    ) : (
                      <UINewTypography variant="h5" color="text.secondary" lineHeight="160%">
                        <FormattedMessage id="1FreeBoostAvailable" />
                      </UINewTypography>
                    )}
                  </Box>
                </SecondBoxContainer>

                <MainBoostButtonBox onClick={() => freePlan && handleBoostOpen(freePlan)}>
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
          </>
        ) : (
          modelActivePlan && <PaidProfile activePlanHours={activePlanHours} activePlanMins={activePlanMins} />
        )}
        <BoostProfileDialog
          openBoost={openBoost}
          handleBoostClose={handleBoostClose}
          handleBoost={handleBoost}
          isFreeBoostUsed={isFreeBoostUsed}
          activeStep={activeStep}
          activePlanHours={activePlanHours}
          activePlanMins={activePlanMins}
          planDetails={planDetails ?? ({} as ProfilePlanResData)}
        />
      </DashboardProfile>
    </>
  );
};

export default FreeProfile;
