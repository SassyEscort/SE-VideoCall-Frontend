'use client';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { BoostMultipleBox, FirstBoxContainer } from './boostProfile.styled';
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
import BoostProfileWorks from './BoostProfileWorks';

const FreeProfile = () => {
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [openBoost, setOpenBoost] = useState(false);
  const [isFreeBoostUsed, setIsFreeBoostUsed] = useState(0);
  const [allPlans, setAllPlans] = useState<ProfilePlanResData[]>([]);
  const [activePlanHours, setActivePlanHours] = useState(0);
  const [activePlanMins, setActivePlanMins] = useState('0');
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
        const minutes = ('0' + (activePlanTimeInMinutes % 60)).slice(-2);
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
        if (isFreeBoostUsed) {
          const paidPlans = response.data.filter((x) => !x.is_free);
          setAllPlans(paidPlans);
        } else {
          setAllPlans(response.data);
        }
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
        {modelActivePlan ? (
          <PaidProfile activePlanHours={activePlanHours} activePlanMins={activePlanMins} />
        ) : (
          <>
            <BoostMultipleBox>
              <BoostMultiplePackage allPlans={allPlans} handleBoostOpen={handleBoostOpen} />
            </BoostMultipleBox>
            <BoostProfileWorks />
          </>
        )}
        <BoostProfileDialog
          openBoost={openBoost}
          handleBoostClose={handleBoostClose}
          handleBoost={handleBoost}
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
