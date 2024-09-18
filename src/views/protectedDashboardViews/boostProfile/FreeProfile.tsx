'use client';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { BoostMultipleBox, DividerBox, FirstBoxContainer, FreeBoostModelHeaderTextContainer } from './boostProfile.styled';
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
import BoostProfileContent from './BoostProfileContent';
import BoostSuccess from './BoostSuccess';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { DialogTitleBox } from '../payoutWithDraw/PayoutWidthDraw';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const backgroundImages = [
  'https://staging.flirtbate.com/images/boostFeature/freePackbg.png',
  'https://staging.flirtbate.com/images/boostFeature/boostPackOne.png',
  'https://staging.flirtbate.com/images/boostFeature/boostPackTwo.png',
  'https://staging.flirtbate.com/images/boostFeature/boostPackThree.png',
  'https://staging.flirtbate.com/images/boostFeature/boostPackFour.png',
  'https://staging.flirtbate.com/images/boostFeature/boostPackFive.png',
  'https://staging.flirtbate.com/images/boostFeature/boostPackSix.png'
];

const FreeProfile = () => {
  const router = useRouter();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [openBoost, setOpenBoost] = useState(false);
  const [isFreeBoostUsed, setIsFreeBoostUsed] = useState(0);
  const [allPlans, setAllPlans] = useState<ProfilePlanResData[]>([]);
  const [activePlanHours, setActivePlanHours] = useState('0');
  const [activePlanMins, setActivePlanMins] = useState('0');
  const [activeStep, setActiveStep] = useState(0);
  const [planDetails, setPlanDetails] = useState<ProfilePlanResData>();
  const [modelActivePlan, setModelActivePlan] = useState<ProfilePlanData>();
  const [freePlan, setFreePlan] = useState<ProfilePlanResData>();

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
        const hours = ('0' + Math.floor(activePlanTimeInMinutes / 60)).slice(-2);
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
      if (res?.data?.url) {
        router.push(res?.data?.url);
      } else {
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
        const sortedPlans = response.data.sort((a, b) => b.is_free - a.is_free);
        const freePlanDetails = sortedPlans.find((x) => x.is_free);
        setFreePlan(freePlanDetails);
        const plansWithImages = sortedPlans.map((plan, index) => ({
          ...plan,
          link: backgroundImages[index % backgroundImages.length]
        }));

        if (isFreeBoostUsed) {
          const paidPlans = plansWithImages.filter((x) => !x.is_free);
          setAllPlans(paidPlans);
        } else {
          const boostFreePlans = plansWithImages?.filter((x) => x.is_free);
          setAllPlans(boostFreePlans);
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };
    if (token.token) {
      getProfilePlans();
    }
  }, [isFreeBoostUsed, token.token]);

  useEffect(() => {
    const updateTime = () => {
      setActivePlanMins((prevMins) => {
        let newMins = moment(prevMins, 'mm').subtract(1, 'minute').format('mm');

        if (newMins === '59') {
          setActivePlanHours((prevHours) => {
            return moment(prevHours, 'HH').subtract(1, 'hour').format('HH');
          });
        }

        return newMins;
      });
    };

    const timer = setTimeout(updateTime, 60000);
    if (activePlanHours === '00' && activePlanMins === '00') {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [activePlanHours, activePlanMins]);

  return (
    <>
      <DashboardProfile>
        {!isSmDown && (
          <FirstBoxContainer>
            <UINewTypography variant="h2" color="text.secondary">
              <FormattedMessage id="BoostYourProfile" />
            </UINewTypography>
          </FirstBoxContainer>
        )}

        {modelActivePlan ? (
          <PaidProfile activePlanHours={activePlanHours} activePlanMins={activePlanMins} />
        ) : !openBoost ? (
          <>
            <BoostMultipleBox>
              <BoostMultiplePackage allPlans={allPlans} handleBoostOpen={handleBoostOpen} />
            </BoostMultipleBox>
            <BoostProfileWorks
              handleBoostOpen={handleBoostOpen}
              freePlan={freePlan ?? ({} as ProfilePlanResData)}
              isFreeBoostUsed={isFreeBoostUsed}
            />
          </>
        ) : activeStep === 0 && openBoost ? (
          <>
            <DialogTitleBox id="responsive-modal-title">
              <FreeBoostModelHeaderTextContainer color={'text.primary'}>
                <FormattedMessage id="BoostProfile" />
              </FreeBoostModelHeaderTextContainer>

              <IconButton aria-label="close" onClick={handleBoostClose} sx={{ color: 'text.secondary' }}>
                <CloseIcon />
              </IconButton>
            </DialogTitleBox>
            <DividerBox />

            <BoostProfileContent planDetails={planDetails ?? ({} as ProfilePlanResData)} handleBoost={handleBoost} />
          </>
        ) : (
          <BoostSuccess activePlanHours={activePlanHours} activePlanMins={activePlanMins} />
        )}
        <BoostProfileDialog
          openBoost={openBoost && !isSmDown}
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
