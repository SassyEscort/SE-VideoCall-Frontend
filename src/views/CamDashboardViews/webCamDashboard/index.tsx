import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import theme from 'themes/theme';
import { WebBannerContainer, WebBannerImageCard, WebFirstBoxContainer, WebInlineBox, WebSecBoxContainer } from './webCamDashboard.styled';
import { TypographyBox } from 'views/guestViews/homePage/homeBanner/HomeBanner.styled';

export const WebcamDashboard = () => {
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  let imageWidth, imageHeight;

  if (isSmDown) {
    imageWidth = 300;
    imageHeight = 339;
  } else if (isMdDown) {
    imageWidth = 500;
    imageHeight = 500;
  } else if (isLgDown) {
    imageWidth = 600;
    imageHeight = 540;
  } else {
    imageWidth = 780;
    imageHeight = 540;
  }

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
            width={imageWidth}
            height={imageHeight}
            src="/images/web-cam.webp"
            priority={true}
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 600px) 300px, (max-width: 768px) 347px, (max-width: 1024px) 500px, 780px"
          />
        </WebBannerImageCard>
      </WebBannerContainer>
    </>
  );
};
