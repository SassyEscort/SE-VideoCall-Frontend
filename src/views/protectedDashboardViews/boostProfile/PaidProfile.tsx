'use client';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { PaidFireImageBox, PaidProfileInnerBoxContainer, UINewTypographySuccessBoost } from './boostProfile.styled';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { ActivePlan } from './BoostSuccess';

export const PaidProfile = ({ activePlanHours, activePlanMins }: ActivePlan) => {
  return (
    <>
      <PaidFireImageBox>
        <PaidProfileInnerBoxContainer>
          <Image src="/images/boostProfile/fire-ani.gif" height={150} width={109} alt="fire_icon" />
          <UINewTypography variant="buttonLargeMenu" color="common.white">
            <FormattedMessage id="ProfileBoostedFor" /> {activePlanHours ? activePlanHours : ''} <FormattedMessage id="Hours" />{' '}
            <FormattedMessage id="And" /> {activePlanMins && activePlanMins} {activePlanMins && <FormattedMessage id="Mins" />}
          </UINewTypography>
        </PaidProfileInnerBoxContainer>
        <UINewTypographySuccessBoost>
          {activePlanHours}:{activePlanMins}
        </UINewTypographySuccessBoost>
      </PaidFireImageBox>
    </>
  );
};
