'use client';

import React, { useState, useEffect } from 'react';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { FirstBoxContainer, PaidFireImageBox } from './boostProfile.styled';
import Image from 'next/image';

export const PaidProfile = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <DashboardProfile>
        <FirstBoxContainer>
          <UINewTypography variant="h2" color="text.secondary">
            <FormattedMessage id="BoostYourProfile" />
          </UINewTypography>
        </FirstBoxContainer>
        <PaidFireImageBox>
          <Image src="/images/boostProfile/fire-ani.gif" height={150} width={109} alt="fire_icon" />
          <UINewTypography variant="buttonLargeMenu">Profile boosted for 2 hours</UINewTypography>
          <UINewTypography variant="MediumSemiBoldText">{formatTime(timeLeft)}</UINewTypography>
        </PaidFireImageBox>
      </DashboardProfile>
    </>
  );
};
