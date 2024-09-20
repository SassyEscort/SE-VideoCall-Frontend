'use client';
import { useEffect, useState } from 'react';
import { TimeDetails, TimeMainBox, TimeTitle, RemianingTime, TimeTypo, TimerDivider, Dotes, DotesSecond } from './Timer.Styled';
import { FormattedMessage } from 'react-intl';
import useConfig from 'hooks/useConfig';

const Timer = () => {
  const [countdown, setCountdown] = useState({ minutes: 15, seconds: 0 });
  const { i18n } = useConfig();

  const handleCalculateCountdown = () => {
    const startTime = localStorage.getItem('timerStartTime');
    const currentTime = new Date().getTime();

    if (!startTime) {
      const newStartTime = currentTime;
      localStorage.setItem('timerStartTime', newStartTime.toString());
    }

    const start = startTime ? parseInt(startTime, 10) : currentTime;
    const elapsed = currentTime - start;
    const remaining = 15 * 60 * 1000 - (elapsed % (15 * 60 * 1000));

    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    setCountdown({ minutes, seconds });

    const updateCount = setInterval(function () {
      const now = new Date().getTime();
      const elapsed = now - start;
      const remaining = 15 * 60 * 1000 - (elapsed % (15 * 60 * 1000));

      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setCountdown({ minutes, seconds });

      if (remaining <= 0) {
        const newStartTime = new Date().getTime();
        localStorage.setItem('timerStartTime', newStartTime.toString());
        clearInterval(updateCount);
        handleCalculateCountdown();
      }
    }, 1000);
  };

  useEffect(() => {
    handleCalculateCountdown();
  }, []);

  return (
    <TimeMainBox>
      <TimeDetails>
        <RemianingTime>
          <TimeTypo>{countdown.minutes}</TimeTypo>
          <TimerDivider orientation="horizontal" flexItem />
        </RemianingTime>
        <TimeTitle>
          <FormattedMessage id="Minutes" />
        </TimeTitle>
      </TimeDetails>

      <Dotes language={i18n} />
      <DotesSecond />

      <TimeDetails>
        <RemianingTime>
          <TimeTypo>{countdown.seconds}</TimeTypo>
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
