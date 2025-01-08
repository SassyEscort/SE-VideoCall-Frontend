import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import countryWithFlagList from 'constants/countryList.json';
import { toast } from 'react-toastify';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { ErrorMessage } from 'constants/common.constants';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ViewDetailsRes } from 'services/guestBilling/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';
import ModelImage from './ModelImage';
import { gaEventTrigger } from 'utils/analytics';

const CreditContainer = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.CreditContainer })), {
  ssr: false
});
const HeartIconWorkerCard = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.HeartIconWorkerCard })), {
  ssr: false
});
// const ImgWorkerCard = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.ImgWorkerCard })), {
//   ssr: false
// });
const LiveIconSecBoxWorkerCard = dynamic(
  () => import('./mobileWorkerCard.styled').then((module) => ({ default: module.LiveIconSecBoxWorkerCard })),
  { ssr: false }
);
const LiveIconWorkerCard = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.LiveIconWorkerCard })), {
  ssr: false
});
const NameCardContainer = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.NameCardContainer })), {
  ssr: false
});
const OfflineIconSecBoxWorkerCard = dynamic(
  () => import('./mobileWorkerCard.styled').then((module) => ({ default: module.OfflineIconSecBoxWorkerCard })),
  { ssr: false }
);
const OfflineIconWorkerCard = dynamic(
  () => import('./mobileWorkerCard.styled').then((module) => ({ default: module.OfflineIconWorkerCard })),
  { ssr: false }
);
const SecondSubContainerImgWorkerCard = dynamic(
  () => import('./mobileWorkerCard.styled').then((module) => ({ default: module.SecondSubContainerImgWorkerCard })),
  { ssr: false }
);
const SecondSubContainerWorkerCard = dynamic(
  () => import('./mobileWorkerCard.styled').then((module) => ({ default: module.SecondSubContainerWorkerCard })),
  { ssr: false }
);
const FirstSubContainerWithoutImg = dynamic(
  () => import('./mobileWorkerCard.styled').then((module) => ({ default: module.FirstSubContainerWithoutImg })),
  { ssr: false }
);

const MainWorkerCard = dynamic(() => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.MainWorkerCard })), {
  ssr: false
});
const FavoriteIconContainer = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.FavoriteIconContainer })),
  { ssr: false }
);
const WorkerCardContainer = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.WorkerCardContainer })),
  { ssr: false }
);
const SeconderContainerWorkerCard = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.SeconderContainerWorkerCard })),
  { ssr: false }
);
const SubContainertWorkerCard = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.SubContainertWorkerCard })),
  { ssr: false }
);
const ProfileCardContainer = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.ProfileCardContainer })),
  { ssr: false }
);
const FirstSubContainerImgWorkerCard = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.FirstSubContainerImgWorkerCard })),
  { ssr: false }
);
const SecondMainContainerWorkerCard = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.SecondMainContainerWorkerCard })),
  { ssr: false }
);
const UITypographyBox = dynamic(() => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.UITypographyBox })), {
  ssr: false
});
const UITypographyBoxContainer = dynamic(
  () => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.UITypographyBoxContainer })),
  { ssr: false }
);

const WorkerCardMobile = ({ modelDetails, token }: { modelDetails: ViewDetailsRes; token?: string }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(425));
  const [liked, setLiked] = useState(false);
  const languages = modelDetails?.languages
    ?.map((language) => language?.language_name)
    .sort()
    .join(', ');
  const modelFlag = countryWithFlagList.filter((country) => country.name === modelDetails?.country_name).map((data) => data.flag)[0];
  const modelAltName = countryWithFlagList.filter((country) => country.name === modelDetails?.country_name).map((data) => data.name)[0];
  // const [modelPhoto, setmodelPhoto] = useState(false);

  // useImageOptimize(imageUrlRef, modelDetails?.link ?? '', 'BG', false, false, modelDetails?.cords);

  const handleFavorite = () => {
    gaEventTrigger('favorite-click', { action: 'favorite-click', category: 'Button', label: 'Favorite icon click' });
  };

  const handleLikeClick = async (modelId: number) => {
    try {
      if (token) {
        const data = await CustomerDetailsService.favouritePutId(modelId, token);
        handleFavorite();
        if (data?.code === 200) {
          if (data.data.is_active === 1) {
            setLiked(true);
          } else {
            setLiked(false);
          }
        } else {
          toast.error(ErrorMessage);
        }
      }
    } catch (err) {
      toast.error(ErrorMessage);
    }
  };

  return (
    <MainWorkerCard>
      {/* {modelDetails?.link && <ImgWorkerCard sx={{ backgroundImage: `url(${modelDetails?.link})` }} />} */}
      <ModelImage modelDetails={modelDetails} />
      <HeartIconWorkerCard>
        <FavoriteIconContainer onClick={() => handleLikeClick(modelDetails?.model_id)}>
          {liked ? <FavoriteIcon sx={{ color: 'error.main' }} /> : <FavoriteBorderIcon />}
        </FavoriteIconContainer>
      </HeartIconWorkerCard>
      <WorkerCardContainer>
        <SeconderContainerWorkerCard>
          <SubContainertWorkerCard>
            <ProfileCardContainer>
              <NameCardContainer>
                <UINewTypography variant="newTitle" color="#ffff">
                  {modelDetails?.model_name}
                </UINewTypography>
                {modelDetails?.is_online === 1 ? (
                  <>
                    <LiveIconWorkerCard>
                      <LiveIconSecBoxWorkerCard sx={{ backgroundColor: 'success.100' }} />
                    </LiveIconWorkerCard>
                  </>
                ) : (
                  <>
                    <OfflineIconWorkerCard>
                      <OfflineIconSecBoxWorkerCard />
                    </OfflineIconWorkerCard>
                  </>
                )}
                {modelFlag ? (
                  <FirstSubContainerImgWorkerCard src={modelFlag} alt={modelAltName} width={16} height={8} />
                ) : (
                  <FirstSubContainerWithoutImg />
                )}
              </NameCardContainer>
              {!isMobile && (
                <CreditContainer>
                  <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.avif" alt="dollar-img" />
                  <UINewTypography variant="captionLargeBold" color="text.secondary">
                    {!modelDetails?.credits_per_minute ? (
                      <FormattedMessage id="NoPrice" />
                    ) : (
                      <>
                        {modelDetails?.credits_per_minute} <FormattedMessage id="CreditsMin" />
                      </>
                    )}
                  </UINewTypography>
                </CreditContainer>
              )}
            </ProfileCardContainer>
            <SecondMainContainerWorkerCard>
              <SecondSubContainerWorkerCard>
                <UITypographyBox variant="SubtitleSmallMedium" color="text.primary">
                  {moment().diff(modelDetails?.model_dob, 'years')}
                </UITypographyBox>
                <Divider orientation="vertical" flexItem sx={{ borderColor: 'text.primary' }} />
                <UITypographyBoxContainer variant="SubtitleSmallMedium">{languages}</UITypographyBoxContainer>
              </SecondSubContainerWorkerCard>
            </SecondMainContainerWorkerCard>
            {isMobile && (
              <CreditContainer sx={{ marginTop: isSmallScreen ? 1.5 : 1 }}>
                <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.avif" alt="dollar-img" />
                <UINewTypography variant="captionLargeBold" color="text.secondary">
                  {!modelDetails?.credits_per_minute ? (
                    <FormattedMessage id="NoPrice" />
                  ) : (
                    <>
                      {modelDetails?.credits_per_minute} <FormattedMessage id="CreditsMin" />
                    </>
                  )}
                </UINewTypography>
              </CreditContainer>
            )}
          </SubContainertWorkerCard>
        </SeconderContainerWorkerCard>
      </WorkerCardContainer>
    </MainWorkerCard>
  );
};

export default WorkerCardMobile;
