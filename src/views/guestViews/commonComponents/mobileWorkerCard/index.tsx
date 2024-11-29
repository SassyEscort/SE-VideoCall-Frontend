import React, { useRef, useState } from 'react';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import useImageOptimize from 'hooks/useImageOptimize';
import countryWithFlagList from 'constants/countryList.json';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { ErrorMessage } from 'constants/common.constants';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ViewDetailsRes } from 'services/guestBilling/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';

const CreditContainer = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.CreditContainer })));
const HeartIconWorkerCard = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.HeartIconWorkerCard })));
const ImgWorkerCard = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.ImgWorkerCard })));
const LiveIconSecBoxWorkerCard = dynamic(() =>
  import('./mobileWorkerCard.styled').then((module) => ({ default: module.LiveIconSecBoxWorkerCard }))
);
const LiveIconWorkerCard = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.LiveIconWorkerCard })));
const NameCardContainer = dynamic(() => import('./mobileWorkerCard.styled').then((module) => ({ default: module.NameCardContainer })));
const OfflineIconSecBoxWorkerCard = dynamic(() =>
  import('./mobileWorkerCard.styled').then((module) => ({ default: module.OfflineIconSecBoxWorkerCard }))
);
const OfflineIconWorkerCard = dynamic(() =>
  import('./mobileWorkerCard.styled').then((module) => ({ default: module.OfflineIconWorkerCard }))
);
const SecondSubContainerImgWorkerCard = dynamic(() =>
  import('./mobileWorkerCard.styled').then((module) => ({ default: module.SecondSubContainerImgWorkerCard }))
);
const SecondSubContainerWorkerCard = dynamic(() =>
  import('./mobileWorkerCard.styled').then((module) => ({ default: module.SecondSubContainerWorkerCard }))
);
const FirstSubContainerWithoutImg = dynamic(() =>
  import('./mobileWorkerCard.styled').then((module) => ({ default: module.FirstSubContainerWithoutImg }))
);

const MainWorkerCard = dynamic(() => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.MainWorkerCard })));
const FavoriteIconContainer = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.FavoriteIconContainer }))
);
const WorkerCardContainer = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.WorkerCardContainer }))
);
const SeconderContainerWorkerCard = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.SeconderContainerWorkerCard }))
);
const SubContainertWorkerCard = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.SubContainertWorkerCard }))
);
const ProfileCardContainer = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.ProfileCardContainer }))
);
const FirstSubContainerImgWorkerCard = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.FirstSubContainerImgWorkerCard }))
);
const SecondMainContainerWorkerCard = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.SecondMainContainerWorkerCard }))
);
const UITypographyBox = dynamic(() => import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.UITypographyBox })));
const UITypographyBoxContainer = dynamic(() =>
  import('../WorkerCard/WorkerCard.styled').then((module) => ({ default: module.UITypographyBoxContainer }))
);

const WorkerCardMobile = ({ modelDetails, token }: { modelDetails: ViewDetailsRes; token?: TokenIdType }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(425));
  const [liked, setLiked] = useState(false);
  const languages = modelDetails?.languages
    ?.map((language) => language?.language_name)
    .sort()
    .join(', ');
  const modelFlag = countryWithFlagList.filter((country) => country.name === modelDetails?.country_name).map((data) => data.flag)[0];
  const modelAltName = countryWithFlagList.filter((country) => country.name === modelDetails?.country_name).map((data) => data.name)[0];

  const imageUrlRef = useRef<HTMLElement>();

  useImageOptimize(imageUrlRef, modelDetails?.link ?? '', 'BG', false, false, modelDetails?.cords);

  const handleLikeClick = async (modelId: number) => {
    try {
      if (token && token.token) {
        const data = await CustomerDetailsService.favouritePutId(modelId, token?.token);
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
      <ImgWorkerCard ref={imageUrlRef} />
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
                {modelFlag ? <FirstSubContainerImgWorkerCard src={modelFlag} alt={modelAltName} /> : <FirstSubContainerWithoutImg />}
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
