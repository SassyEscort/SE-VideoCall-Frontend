'use client';
import { useEffect, useState } from 'react';
import { TimeDetails, TimeMainBox, TimeTitle, RemianingTime, TimeTypo, TimerDivider, Dotes, DotesSecond } from './Timer.Styled';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';

const Timer = () => {
  const [contdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  function calculateCountdown() {
    const countdownDate = new Date(process.env.NEXT_PUBLIC_COMINGSOON_DATE as string).getTime();

    const updateCount = setInterval(function () {
      const todayDate = new Date().getTime();

      const distance = countdownDate - todayDate;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(updateCount);
      }
    }, 1000);
  }

  useEffect(() => {
    calculateCountdown();
  }, []);

  return (
    <TimeMainBox>
      <TimeDetails>
        <RemianingTime>
          <TimeTypo>{contdown.minutes}</TimeTypo>
          <TimerDivider orientation="horizontal" flexItem />
        </RemianingTime>
        <TimeTitle>
          <FormattedMessage id="Minutes" />
        </TimeTitle>
      </TimeDetails>
      {isSmDown && (
        <>
          <Dotes></Dotes>
          <DotesSecond></DotesSecond>
        </>
      )}
      <TimeDetails>
        <RemianingTime>
          <TimeTypo>{contdown.seconds}</TimeTypo>
          <TimerDivider orientation="horizontal" flexItem />
        </RemianingTime>
        <TimeTitle>
          <FormattedMessage id="Seconds" />
        </TimeTitle>
      </TimeDetails>
    </TimeMainBox>
  );
};

export default Timer;
