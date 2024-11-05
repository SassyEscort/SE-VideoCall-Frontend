import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';
import { TypographyBox } from 'views/guestViews/homePage/homeBanner/HomeBanner.styled';
import { WebBannerContainer, WebBannerImageCard, WebFirstBoxContainer, WebInlineBox, WebSecBoxContainer } from './webCamDashboard.styled';

export const WebcamDashboard = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down(330));
  return (
    <>
      <WebBannerContainer>
        <WebFirstBoxContainer>
          <WebSecBoxContainer>
            <WebInlineBox>
              <FormattedMessage id="FlirtBateCamToCam" />
            </WebInlineBox>
            <TypographyBox>
              <FormattedMessage id="DiveText" />
            </TypographyBox>
          </WebSecBoxContainer>
        </WebFirstBoxContainer>
        <WebBannerImageCard>
          <Image
            alt="home_model"
            decoding="async"
            width={isSm && isSmDown ? 300 : isSmDown ? 347 : 780}
            height={isSmDown ? 339 : 540}
            src="/images/web-cam.webp"
            priority={true}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, 462px"
          />
        </WebBannerImageCard>
      </WebBannerContainer>
    </>
  );
};
