import React, { lazy, Suspense, useRef } from 'react';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';
import theme from 'themes/theme';
import { ModelHomeListing } from 'services/modelListing/modelListing.services';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import useImageOptimize from 'hooks/useImageOptimize';
import countryWithFlagList from 'constants/countryList.json';
import { ModelFavRes } from 'services/customerFavorite/customerFavorite.service';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { ErrorMessage } from 'constants/common.constants';
import { gaEventTrigger } from 'utils/analytics';
import StyleBoostUserButton from 'components/UIComponents/StyleBoostUserButton';
import Image from 'next/image';
import { useAuthContext } from '../../../../../context/AuthContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { VideoAcceptType } from 'constants/workerVerification';

const CreditContainer = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.CreditContainer })));
const FavoriteBorderIconContainer = lazy(() =>
  import('./WorkerCard.styled').then((module) => ({ default: module.FavoriteBorderIconContainer }))
);
const FavoriteIconContainer = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.FavoriteIconContainer })));
const FirstSubContainerImgWorkerCard = lazy(() =>
  import('./WorkerCard.styled').then((module) => ({ default: module.FirstSubContainerImgWorkerCard }))
);
const HeartIconWorkerCard = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.HeartIconWorkerCard })));
const HighlyAvailableBox = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.HighlyAvailableBox })));
const HighlyAvailableButtonBox = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.HighlyAvailableButtonBox })));
const ImgWorkerCard = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.ImgWorkerCard })));
const LiveIconSecBoxWorkerCard = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.LiveIconSecBoxWorkerCard })));
const LiveIconWorkerCard = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.LiveIconWorkerCard })));
const MainWorkerCard = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.MainWorkerCard })));
const NameCardContainer = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.NameCardContainer })));
const ProfileCardContainer = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.ProfileCardContainer })));
const SecondMainContainerWorkerCard = lazy(() =>
  import('./WorkerCard.styled').then((module) => ({ default: module.SecondMainContainerWorkerCard }))
);
const SecondSubContainerImgWorkerCard = lazy(() =>
  import('./WorkerCard.styled').then((module) => ({ default: module.SecondSubContainerImgWorkerCard }))
);
const SecondSubContainerWorkerCard = lazy(() =>
  import('./WorkerCard.styled').then((module) => ({ default: module.SecondSubContainerWorkerCard }))
);
const SeconderContainerWorkerCard = lazy(() =>
  import('./WorkerCard.styled').then((module) => ({ default: module.SeconderContainerWorkerCard }))
);
const SubContainertWorkerCard = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.SubContainertWorkerCard })));
const TextBoxContainer = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.TextBoxContainer })));
const UITypographyBox = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.UITypographyBox })));
const UITypographyBoxContainer = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.UITypographyBoxContainer })));
const WorkerCardContainer = lazy(() => import('./WorkerCard.styled').then((module) => ({ default: module.WorkerCardContainer })));

const WorkerCard = ({
  modelDetails,
  isFavPage,
  token,
  handleLoginLiked,
  handleLoginOpen,
  handleLike,
  liked
}: {
  modelDetails: ModelHomeListing | ModelFavRes;
  isFavPage: boolean;
  token: TokenIdType;
  handleLoginLiked: (modelId: number) => void;
  handleLoginOpen: () => void;
  handleLike: (modelId: number) => void;
  liked: boolean;
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(425));

  const { isCustomer, user } = useAuthContext();

  const languages = modelDetails?.languages
    ?.map((language) => language?.language_name)
    .sort()
    .join(', ');
  const modelFlag = countryWithFlagList.filter((country) => country.name === modelDetails?.country).map((data) => data.flag)[0];
  const modelAltName = countryWithFlagList.filter((country) => country.name === modelDetails?.country).map((data) => data.name)[0];

  const imageUrlRef = useRef<HTMLElement>();
  const videoTypeCondition = VideoAcceptType?.includes(modelDetails?.link?.substring(modelDetails?.link?.lastIndexOf('.') + 1));

  useImageOptimize(
    imageUrlRef,
    modelDetails?.link ?? '',
    videoTypeCondition ? 'IMG' : 'BG',
    videoTypeCondition ? true : false,
    false,
    modelDetails?.cords
  );

  // useImageOptimize(imageUrlRef, modelDetails?.link ?? '', 'BG', false, false, modelDetails?.cords);

  const customerData = JSON.parse(user || '{}');

  const handleLikeClick = async (modelDetails: ModelHomeListing | ModelFavRes) => {
    try {
      if (!isCustomer) {
        handleLoginOpen();
        gaEventTrigger('Login_Button_clicked', { source: 'fav_button', category: 'Button' });
      } else if (token.token) {
        const data = await CustomerDetailsService.favouritePutId(modelDetails.id, token?.token);
        if (data?.code === 200) {
          handleLoginLiked(modelDetails.id);
          handleLike(modelDetails.id);
          const customerInfo = {
            email: customerData?.customer_email,
            name: customerData?.customer_name,
            username: customerData?.customer_user_name,
            model_username: modelDetails.user_name
          };
          const customerInfoString = JSON.stringify(customerInfo);
          gaEventTrigger('Model_Favorite_Clicked', {
            category: 'Button',
            label: 'Model_Favorite_Clicked',
            value: customerInfoString
          });
        } else {
          toast.error(ErrorMessage);
        }
      } else {
        handleLoginOpen();
      }
    } catch (erro) {
      toast.error(ErrorMessage);
    }
  };

  const handleIconClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    handleLikeClick(modelDetails);
  };
  return (
    <Suspense>
      <MainWorkerCard>
        <ImgWorkerCard ref={imageUrlRef} />
        <HeartIconWorkerCard>
          {Boolean(modelDetails?.profile_plan_purchased) && (
            <HighlyAvailableButtonBox>
              <HighlyAvailableBox>
                <Image
                  loading="lazy"
                  src="/images/boostProfile/fire-ani.gif"
                  alt="fire-gif"
                  height={57}
                  width={42}
                  style={{ zIndex: 10, left: isTablet ? '-20px' : isMdDown ? '-30px' : '-22px', position: 'absolute', top: '-14px' }}
                />

                <StyleBoostUserButton>
                  <UINewTypography variant="bodyUltraLarge" color="#ffff">
                    <FormattedMessage id="HighlyAvailable" />
                  </UINewTypography>
                </StyleBoostUserButton>
              </HighlyAvailableBox>
            </HighlyAvailableButtonBox>
          )}
          {isFavPage || liked || modelDetails?.favourite === 1 ? (
            <FavoriteIconContainer sx={{ color: 'error.main' }} />
          ) : (
            <FavoriteBorderIconContainer onClick={handleIconClick} />
          )}
        </HeartIconWorkerCard>
        <WorkerCardContainer>
          <SeconderContainerWorkerCard>
            <SubContainertWorkerCard>
              <ProfileCardContainer>
                <NameCardContainer>
                  <TextBoxContainer>
                    <UINewTypography variant="newTitle" color="#ffff">
                      {modelDetails?.name?.charAt(0)?.toUpperCase() + modelDetails?.name?.slice(1)}
                    </UINewTypography>
                  </TextBoxContainer>
                  {modelDetails?.is_online === 1 && (
                    <>
                      <LiveIconWorkerCard>
                        <LiveIconSecBoxWorkerCard />
                      </LiveIconWorkerCard>
                      {modelFlag && <FirstSubContainerImgWorkerCard src={modelFlag} alt={modelAltName} width={16} height={8} />}
                    </>
                  )}
                </NameCardContainer>
                {!isMobile && (
                  <CreditContainer>
                    <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.avif" alt="dollar-img" width={22} height={22} />
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
                    {moment().diff(modelDetails?.dob, 'years')}
                  </UITypographyBox>
                  <Divider orientation="vertical" flexItem sx={{ borderColor: 'text.primary' }} />
                  <UITypographyBoxContainer variant="SubtitleSmallMedium">{languages}</UITypographyBoxContainer>
                </SecondSubContainerWorkerCard>
              </SecondMainContainerWorkerCard>
              {isMobile && (
                <CreditContainer sx={{ marginTop: isSmallScreen ? 1.5 : 1 }}>
                  <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.avif" alt="dollar-img" width={22} height={22} />
                  <UINewTypography variant="captionLargeBold" color="text.secondary">
                    {!modelDetails?.price_per_minute ? (
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
    </Suspense>
  );
};

export default WorkerCard;
