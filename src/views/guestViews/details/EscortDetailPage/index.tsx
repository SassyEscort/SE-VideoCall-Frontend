'use client';
import HomeMainContainer from 'views/guestViews/guestLayout/homeContainer';
import { EscortSlider } from './EscortSlider';
import { useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import EscortSliderMobile from './EscortSliderMobile';
import EscortPersonalDetail from './EscortPersonalDetail';
import EscortExplore from './EscortExplore';
import { useCallback, useEffect, useState } from 'react';
import { ModelDetailsResponse } from 'views/protectedModelViews/verification/verificationTypes';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import { usePathname } from 'next/navigation';
import Box from '@mui/system/Box';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';
import { CallingService } from 'services/calling/calling.services';
import moment from 'moment';
import { ModelDetailsParams, ModelDetailsService } from 'services/modelDetails/modelDetails.services';
import { gaEventTrigger } from 'utils/analytics';
import { CustomerFreeCreditsService } from 'services/customerFreeCredits/customerFreeCredits.services';
import RatingTable from 'views/protectedDashboardViews/ratingAndReview/RatingTable';
import RatingPoints from 'views/protectedDashboardViews/ratingAndReview/RatingPoints';
import UINewTypography from 'components/UIComponents/UINewTypography';
import {
  RatingReviewInnerBoxContainer,
  RatingReviewMainBoxContainer,
  RatingReviewText,
  RatingReviewTextBoxContainer
} from './Escort.styled';
import { FormattedMessage } from 'react-intl';
import {
  RatingAndReviewDetailsAllDetails,
  RatingAndReviewDetailsInfo,
  RatingAndReviewDetailsRes,
  ratingAndReviewParams
} from 'services/ratingAndReview/ratingAndReview.service';

const EscortDetailPage = () => {
  const path = usePathname();
  const userName = path.split('/')[2];

  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));

  const [guestData, setGuestData] = useState<ModelDetailsResponse>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isCreditAvailable, setIsCreditAvailable] = useState(false);
  const [callTime, setCallTime] = useState(0);
  const [isFreeCreditAvailable, setIsFreeCreditAvailable] = useState(1);

  const modelPhoto = guestData?.photos?.filter((x) => x.favourite)?.map((item) => item.link)[0];

  const { handleCallInitiate, call, isLoading, isCallEnded, isCustomer, handleCallEnd, isUnanswered } = useCallFeatureContext();

  const [ratingAndReview, setRatingAndReview] = useState<RatingAndReviewDetailsRes>();
  const [total_rows, setTotalRows] = useState(0);

  const [filters, setFilters] = useState<ratingAndReviewParams>({
    rating: '',
    page: 1,
    limit: 5,
    offset: 0
  });

  const handleRatingSelect = (id: string) => {
    const value = filters.rating !== id ? id : '';
    setFilters({ ...filters, rating: value });
  };

  const scrollToTable = () => {
    const tableElement = document.getElementById('tableSection');
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChangeFilter = useCallback((value: ratingAndReviewParams) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.limit;
      handleChangeFilter({ ...filters, offset: offset });
      scrollToTable();
    },
    [filters, handleChangeFilter]
  );

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
  }, [userName, isCustomer]);

  useEffect(() => {
    gaEventTrigger('model_page_view', {
      action: 'model_page_view',
      category: 'page_view',
      value: userName
    });
  }, [userName]);

  useEffect(() => {
    const fetchGuestData = async () => {
      try {
        if (userName) {
          let params: ModelDetailsParams = {
            limit: filters.limit,
            offset: filters.offset
          };
          if (userName) params.user_name = userName;
          if (filters.rating) params.rating = filters.rating;
          const data = await ModelDetailsService.getModelDetails(token.token, isCustomer, params);
          const ratingData: RatingAndReviewDetailsAllDetails = data?.data?.model_ratings || {};
          setRatingAndReview({ data: ratingData } as RatingAndReviewDetailsRes);
          setTotalRows(ratingData?.aggregate.total_rows);
          if (data.code === 200) {
            setGuestData(data.data);
          } else {
            toast.error(data?.response?.data?.message);
          }
        }
      } catch (error) {
        toast.error(ErrorMessage);
      }
    };

    fetchGuestData();
  }, [isCustomer, token.token, userName, filters]);

  const getCometChatInfo = async () => {
    if (guestData && token.token) {
      const getInfo = await CallingService.getCometChatInfo(guestData.id, token.token);
      if (getInfo?.data?.time_unit === 'minutes' && getInfo?.data?.available_call_duration >= 1) {
        const durationInSeconds = moment.duration(getInfo?.data?.available_call_duration, 'minutes').asMilliseconds();
        setCallTime(durationInSeconds);
        setIsCreditAvailable(true);
      } else {
        setIsCreditAvailable(false);
      }
    }
  };

  useEffect(() => {
    if (isCallEnded) {
      handleCallEnd();
    } else {
      getCometChatInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guestData, token, userName, call, isCallEnded]);

  useEffect(() => {
    if (isUnanswered) {
      getCometChatInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUnanswered]);

  useEffect(() => {
    const handleIsFreeCreditAvailable = async () => {
      const res = await CustomerFreeCreditsService.getCustomerFreeCredits();
      setIsFreeCreditAvailable(res.data.free_credits_available);
    };
    handleIsFreeCreditAvailable();
  }, []);

  return (
    <>
      <HomeMainContainer>
        <Box sx={{ px: { xs: '15px', lg: '0' } }}>
          {isLgDown && guestData ? (
            <EscortSliderMobile
              workerPhotos={guestData?.photos ?? ([] as WorkerPhotos[])}
              modelId={guestData?.id ?? 0}
              token={token}
              handleCallInitiate={() =>
                handleCallInitiate(
                  guestData?.id,
                  isCreditAvailable,
                  callTime,
                  guestData?.name,
                  modelPhoto ?? '',
                  guestData.user_name,
                  guestData.video_call_prices[0].credits_per_minute
                )
              }
              isCustomer={isCustomer}
              isLoading={isLoading}
              guestData={guestData}
              isFreeCreditAvailable={isFreeCreditAvailable}
            />
          ) : (
            guestData && (
              <EscortSlider
                workerPhotos={guestData?.photos ?? ([] as WorkerPhotos[])}
                modelId={guestData?.id ?? 0}
                token={token}
                handleCallInitiate={() =>
                  handleCallInitiate(
                    guestData?.id,
                    isCreditAvailable,
                    callTime,
                    guestData?.name,
                    modelPhoto ?? '',
                    guestData.user_name,
                    guestData.video_call_prices[0].credits_per_minute
                  )
                }
                isCustomer={isCustomer}
                isLoading={isLoading}
                guestData={guestData}
                isFreeCreditAvailable={isFreeCreditAvailable}
              />
            )
          )}

          <EscortPersonalDetail guestData={guestData ?? ({} as ModelDetailsResponse)} />
          <RatingReviewMainBoxContainer>
            <RatingReviewInnerBoxContainer>
              <RatingReviewTextBoxContainer>
                <RatingReviewText>
                  <FormattedMessage id="RatingAndReviews" />
                </RatingReviewText>
                <UINewTypography variant="bodyLight">
                  ({ratingAndReview?.data?.model_rating_info?.[0].total_reviews} <FormattedMessage id="Reviews" />)
                </UINewTypography>
              </RatingReviewTextBoxContainer>
              <RatingPoints
                ratingAndReview={ratingAndReview?.data?.model_rating_info?.[0] ?? ({} as RatingAndReviewDetailsInfo)}
                onSelectRating={handleRatingSelect}
                isShowPercentage={true}
              />
            </RatingReviewInnerBoxContainer>
            <RatingTable
              ratingAndReview={ratingAndReview ?? ({} as RatingAndReviewDetailsRes)}
              total_rows={total_rows}
              filters={filters}
              handleChangePage={handleChangePage}
              selectedRating={filters.rating}
              handleRatingSelect={handleRatingSelect}
            />
          </RatingReviewMainBoxContainer>
          <EscortExplore />
        </Box>
      </HomeMainContainer>
    </>
  );
};

export default EscortDetailPage;
