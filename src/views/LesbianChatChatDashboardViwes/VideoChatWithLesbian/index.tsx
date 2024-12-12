'use client';

import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import Box from '@mui/system/Box';
import { FormattedMessage } from 'react-intl';
import {
  LesbianWithStrangerBannerBeyondImageCard,
  LesbianWithStrangerBannerTypographySubtitleBox,
  LesbianWithStrangerContainer,
  LesbianWithStrangerFirstBeyondBoxContainer,
  LesbianWithStrangerInlineBeyondBox,
  LesbianWithStrangerSecBoxBeyondContainer
} from './VideoChatWithLesbian.Styled';

const VideoChatWithLesbian = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <HomeMainContainer>
      <LesbianWithStrangerContainer>
        <LesbianWithStrangerBannerBeyondImageCard>
          <Box
            component="img"
            alt="home_model"
            decoding="async"
            width={isSm && isSmDown ? 300 : isSmDown ? 347 : 580}
            height={isSmDown ? 339 : 540}
            src="/images/beyond.webp"
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
          />
        </LesbianWithStrangerBannerBeyondImageCard>
        <LesbianWithStrangerFirstBeyondBoxContainer>
          <LesbianWithStrangerSecBoxBeyondContainer>
            <LesbianWithStrangerInlineBeyondBox component="h3">
              <FormattedMessage id="LesbianPhoneSex" />
            </LesbianWithStrangerInlineBeyondBox>
            <LesbianWithStrangerBannerTypographySubtitleBox>
              <FormattedMessage id="LookingForMoreThanJust" />
            </LesbianWithStrangerBannerTypographySubtitleBox>
          </LesbianWithStrangerSecBoxBeyondContainer>
        </LesbianWithStrangerFirstBeyondBoxContainer>
      </LesbianWithStrangerContainer>
    </HomeMainContainer>
  );
};

export default VideoChatWithLesbian;
