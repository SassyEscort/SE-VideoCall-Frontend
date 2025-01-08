import React, { useRef } from 'react';
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
import useMediaQuery from '@mui/material/useMediaQuery';
import { ROLE, VideoAcceptType } from 'constants/workerVerification';
import {
  MainWorkerCard,
  ImgWorkerCard,
  HeartIconWorkerCard,
  HighlyAvailableButtonBox,
  HighlyAvailableBox,
  FavoriteIconContainer,
  FavoriteBorderIconContainer,
  WorkerCardContainer,
  SeconderContainerWorkerCard,
  SubContainertWorkerCard,
  ProfileCardContainer,
  NameCardContainer,
  TextBoxContainer,
  LiveIconWorkerCard,
  LiveIconSecBoxWorkerCard,
  FirstSubContainerImgWorkerCard,
  CreditContainer,
  SecondSubContainerImgWorkerCard,
  SecondMainContainerWorkerCard,
  SecondSubContainerWorkerCard,
  UITypographyBox,
  UITypographyBoxContainer,
  ChristmasInnerBoxContainer,
  ChristmasMainContainer,
  SantaTextTypography,
  GetItNowButton,
  ChristmasContainer,
  ChristmasHeadingText,
  ChristmasInnerText
} from './WorkerCard.styled';
import { useSession } from 'next-auth/react';
import { User } from 'app/(guest)/layout';
import { Raleway } from 'next/font/google';
import useConfig from 'hooks/useConfig';
import { getCookie } from 'cookies-next';

const ralewayFont = Raleway({ subsets: ['latin'], display: 'swap' });

const WorkerCard = ({
  modelDetails,
  isFavPage,
  token,
  handleLoginLiked,
  handleLoginOpen,
  handleLike,
  liked,
  handleOpenCreditDrawer
}: {
  modelDetails: ModelHomeListing | ModelFavRes;
  isFavPage: boolean;
  token: TokenIdType;
  handleLoginLiked: (modelId: number) => void;
  handleLoginOpen: () => void;
  handleLike: (modelId: number) => void;
  handleOpenCreditDrawer: () => void;
  liked: boolean;
}) => {
  const { i18n } = useConfig();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(425));

  const { data } = useSession();
  const user = (data?.user as User)?.picture;

  const languages = modelDetails?.languages
    ?.map((language) => language?.language_name)
    .sort()
    .join(', ');
  const modelFlag = countryWithFlagList.filter((country) => country.name === modelDetails?.country).map((data) => data.flag)[0];
  const modelAltName = countryWithFlagList.filter((country) => country.name === modelDetails?.country).map((data) => data.name)[0];

  const imageUrlRef = useRef<HTMLElement | null>(null);
  const videoTypeCondition = VideoAcceptType?.includes(modelDetails?.link?.substring(modelDetails?.link?.lastIndexOf('.') + 1));
  const customerData = JSON.parse(user || '{}');
  const isCustomer = customerData?.role === ROLE.CUSTOMER;

  useImageOptimize(
    imageUrlRef,
    modelDetails?.link
      ? modelDetails?.link
      : isCustomer
        ? '/images/christmas/christmas_model_login.webp'
        : '/images/christmas/christmas_model.webp',
    videoTypeCondition ? 'IMG' : 'BG',
    videoTypeCondition ? true : false,
    false,
    modelDetails?.cords
  );

  // useImageOptimize(imageUrlRef, modelDetails?.link ?? '', 'BG', false, false, modelDetails?.cords);

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

  const handleGAEventTrigger = () => {
    const group = getCookie('ab-group');
    const versionDetails = (group && JSON.parse(JSON.stringify(group))?.variation) || {};
    let data: any = {
      modelName: modelDetails.user_name,
      modelCredits: modelDetails.price_per_minute,
      userLoginStatus: customerData?.token ? 'yes' : 'no'
    };
    if (customerData?.customer_id) data['userid'] = customerData?.customer_id;
    if (versionDetails?.experiment) data['version'] = `${versionDetails?.experiment}_${versionDetails?.variation}`;
    gaEventTrigger('favorite-icon-click', {
      action: 'favorite-click',
      category: 'Button',
      label: 'Favorite icon click',
      value: JSON.stringify(data)
    });
  };

  const handleIconClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    handleGAEventTrigger();
    handleLikeClick(modelDetails);
  };

  const handleChristmasOffer = () => {
    if (modelDetails.name === 'Christmas Offer') {
      if (isCustomer) {
        handleOpenCreditDrawer();
      } else {
        handleLoginOpen();
      }
    }
  };

  return (
    <MainWorkerCard onClick={handleChristmasOffer}>
      {/* {imageUrlRef?.current?.style?.backgroundImage && <ImgWorkerCard ref={imageUrlRef} component="div" />} */}

      <ImgWorkerCard
        ref={imageUrlRef}
        component="div"
        sx={{
          ...(!imageUrlRef?.current?.style?.backgroundImage && {
            backgroundImage: `url(/images/workercards/workercard-blur.avif)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            // transition: 'background-image 5s ease-in-out'
          })
        }}
      />
      {modelDetails.name === 'Christmas Offer' &&
        (isCustomer ? (
          <ChristmasMainContainer>
            <ChristmasContainer i18n={i18n}>
              <ChristmasInnerBoxContainer>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: '#fff' }} />
                <ChristmasHeadingText>
                  <FormattedMessage id="HolidayOffer" />
                </ChristmasHeadingText>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: '#fff' }} />
                <SantaTextTypography fontFamily={ralewayFont.style.fontFamily} color="#fff">
                  <FormattedMessage id="SantasDeal250" />
                </SantaTextTypography>
                <ChristmasInnerText>
                  <FormattedMessage id="UnwrapIt" />
                </ChristmasInnerText>
                <SantaTextTypography color="#79E028" fontFamily={ralewayFont.style.fontFamily}>
                  <FormattedMessage id="$25" />
                </SantaTextTypography>
                <GetItNowButton variant="contained" onClick={handleOpenCreditDrawer}>
                  <FormattedMessage id="ChristmasBonus" />
                </GetItNowButton>
              </ChristmasInnerBoxContainer>
            </ChristmasContainer>
          </ChristmasMainContainer>
        ) : (
          <ChristmasMainContainer>
            <ChristmasContainer i18n={i18n}>
              <ChristmasInnerBoxContainer>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: '#fff' }} />
                <ChristmasHeadingText>
                  <FormattedMessage id="HolidayOffer" />
                </ChristmasHeadingText>
                <Divider orientation="horizontal" flexItem sx={{ borderColor: '#fff' }} />
                <SantaTextTypography fontFamily={ralewayFont.style.fontFamily} color="#fff">
                  <FormattedMessage id="NaughtiestGift" />
                </SantaTextTypography>
                <SantaTextTypography color="#79E028" fontFamily={ralewayFont.style.fontFamily}>
                  <FormattedMessage id="FREECALL" />
                </SantaTextTypography>
                <ChristmasInnerText>
                  <FormattedMessage id="JustFor" />
                </ChristmasInnerText>
                <GetItNowButton variant="contained" onClick={handleLoginOpen}>
                  <FormattedMessage id="GETIT" />
                </GetItNowButton>
              </ChristmasInnerBoxContainer>
            </ChristmasContainer>
          </ChristmasMainContainer>
        ))}
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
        {modelDetails.name !== 'Christmas Offer' &&
          (isFavPage || liked || modelDetails?.favourite === 1 ? (
            <FavoriteIconContainer sx={{ color: 'error.main' }} />
          ) : (
            <FavoriteBorderIconContainer onClick={handleIconClick} />
          ))}
      </HeartIconWorkerCard>

      <WorkerCardContainer>
        <SeconderContainerWorkerCard>
          <SubContainertWorkerCard>
            <ProfileCardContainer>
              <NameCardContainer>
                <TextBoxContainer>
                  <UINewTypography variant="newTitle" color="#ffff">
                    {modelDetails?.name ? modelDetails?.name?.charAt(0)?.toUpperCase() + modelDetails?.name?.slice(1) : ''}
                  </UINewTypography>
                </TextBoxContainer>
                {modelDetails?.is_online === 1 && (
                  <>
                    <LiveIconWorkerCard>
                      <LiveIconSecBoxWorkerCard />
                    </LiveIconWorkerCard>
                    {modelFlag && (
                      <FirstSubContainerImgWorkerCard src={modelFlag} alt={modelAltName} width={16} height={8} layout="intrinsic" />
                    )}
                  </>
                )}
              </NameCardContainer>
              {!isMobile && (
                <CreditContainer>
                  <SecondSubContainerImgWorkerCard
                    src="/images/workercards/dollar-img.avif"
                    alt="dollar-img"
                    width={22}
                    height={22}
                    layout="intrinsic"
                  />
                  <UINewTypography variant="captionLargeBold" color="text.secondary">
                    {modelDetails.name !== 'Christmas Offer' ? (
                      !modelDetails?.price_per_minute ? (
                        <FormattedMessage id="NoPrice" />
                      ) : (
                        <>
                          {modelDetails?.credits_per_minute} <FormattedMessage id="CreditsMin" />
                        </>
                      )
                    ) : (
                      <FormattedMessage id="Free" />
                    )}
                  </UINewTypography>
                </CreditContainer>
              )}
            </ProfileCardContainer>
            <SecondMainContainerWorkerCard>
              <SecondSubContainerWorkerCard>
                {modelDetails?.dob && (
                  <>
                    <UITypographyBox variant="SubtitleSmallMedium" color="text.primary">
                      {moment().diff(modelDetails?.dob, 'years')}
                    </UITypographyBox>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: 'text.primary' }} />
                  </>
                )}
                <UITypographyBoxContainer variant="SubtitleSmallMedium">
                  {languages ? languages : <FormattedMessage id="AllUsers" />}
                </UITypographyBoxContainer>
              </SecondSubContainerWorkerCard>
            </SecondMainContainerWorkerCard>
            {isMobile && (
              <CreditContainer sx={{ marginTop: isSmallScreen ? 1.5 : 1 }}>
                <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.avif" alt="dollar-img" width={22} height={22} />
                <UINewTypography variant="captionLargeBold" color="text.secondary">
                  {modelDetails.name !== 'Christmas Offer' ? (
                    !modelDetails?.price_per_minute ? (
                      <FormattedMessage id="NoPrice" />
                    ) : (
                      <>
                        {modelDetails?.credits_per_minute} <FormattedMessage id="CreditsMin" />
                      </>
                    )
                  ) : (
                    <FormattedMessage id="Free" />
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

export default WorkerCard;
