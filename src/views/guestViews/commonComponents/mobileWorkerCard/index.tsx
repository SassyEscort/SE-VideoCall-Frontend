import React, { useRef, useState } from 'react';
import Divider from '@mui/material/Divider';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { BillingDetails } from 'services/modelListing/modelListing.services';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import useImageOptimize from 'hooks/useImageOptimize';
import { countryWithFlag } from 'constants/country';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { toast } from 'react-toastify';
import { CustomerDetailsService } from 'services/customerDetails/customerDetails.services';
import { ErrorMessage } from 'constants/common.constants';
import {
  CreditContainer,
  FavoriteBorderIconContainer,
  FavoriteIconContainer,
  FirstSubContainerImgWorkerCard,
  FirstSubContainerWithoutImg,
  HeartIconWorkerCard,
  ImgWorkerCard,
  LiveIconSecBoxWorkerCard,
  LiveIconWorkerCard,
  MainWorkerCard,
  NameCardContainer,
  OfflineIconSecBoxWorkerCard,
  OfflineIconWorkerCard,
  ProfileCardContainer,
  SeconderContainerWorkerCard,
  SecondMainContainerWorkerCard,
  SecondSubContainerImgWorkerCard,
  SecondSubContainerWorkerCard,
  SubContainertWorkerCard,
  UITypographyBox,
  UITypographyBoxContainer,
  WorkerCardContainer
} from './mobileWorkerCard.styled';

const WorkerCardMobile = ({
  modelDetails,

  token
}: {
  modelDetails: BillingDetails;
  token?: TokenIdType;
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(425));
  const [liked, setLiked] = useState(false);
  const languages = modelDetails?.languages
    ?.map((language) => language?.language_name)
    .sort()
    .join(', ');
  const modelFlag = countryWithFlag.filter((country) => country.name === modelDetails?.country_name).map((data) => data.flag)[0];
  const imageUrlRef = useRef<HTMLElement>();

  useImageOptimize(imageUrlRef, modelDetails?.link ?? '', 'BG', false, false, modelDetails?.cords);

  const handleLikeClick = async (modelId: number) => {
    try {
      if (token && token.token) {
        const data = await CustomerDetailsService.favouritePutId(modelId, token?.token);
        if (data?.code === 200) {
          setLiked(!liked);
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
        {liked ? (
          <FavoriteIconContainer sx={{ color: 'error.main' }} onClick={() => handleLikeClick(modelDetails?.model_id)} />
        ) : (
          <FavoriteBorderIconContainer sx={{ color: 'error.main' }} onClick={() => handleLikeClick(modelDetails?.model_id)} />
        )}
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
                {modelFlag ? <FirstSubContainerImgWorkerCard src={modelFlag} /> : <FirstSubContainerWithoutImg />}
              </NameCardContainer>
              {!isMobile && (
                <CreditContainer>
                  <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
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
                <SecondSubContainerImgWorkerCard src="/images/workercards/dollar-img.png" />
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
