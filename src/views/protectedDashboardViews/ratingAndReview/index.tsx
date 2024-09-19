'use client';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  HeadingTextAndTotalClientMainBoxContainer,
  HeadingTextBoxContainer,
  NoRatingBoxContainer,
  NoRatingTextContainer,
  RatingDetalisBoxContainer,
  TotalClientAndRatingDetaiBoxContainer,
  TotalClientDescriptionText,
  TotalClientInnerBoxContainer,
  TotalClientMainBoxContainer
} from './RatingAndReview.styled';

import RatingTable from './RatingTable';
import RatingPoints from './RatingPoints';
import React, { useCallback, useEffect, useState } from 'react';
import {
  RatingAndReviewDetailsInfo,
  RatingAndReviewDetailsRes,
  RatingAndReviewService
} from 'services/ratingAndReview/ratingAndReview.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { getUserDataClient } from 'utils/getSessionData';
import { TokenIdType } from 'views/protectedModelViews/verification';

export type ratingAndReviewParams = {
  rating: string;
  page: number;
  limit: number;
  offset: number;
};

const RatingAndReview = () => {
  const [ratingAndReview, setRatingAndReview] = useState<RatingAndReviewDetailsRes>();
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [total_rows, setTotalRows] = useState(0);

  const [filters, setFilters] = useState<ratingAndReviewParams>({
    page: 1,
    rating: '',
    limit: 5,
    offset: 0
  });

  const handleRatingSelect = (id: string) => {
    const value = filters.rating !== id ? id : '';
    setFilters({ ...filters, rating: value });
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };

    userToken();
  }, []);

  const ratingAndReviewDetails = useCallback(async () => {
    try {
      if (token.token) {
        const params = {
          rating: filters.rating,
          page: filters.page,
          limit: filters.limit,
          offset: filters.offset
        };
        const data = await RatingAndReviewService.getRatingAndReviewDetails(params, token.token);
        setRatingAndReview(data);
        setTotalRows(data?.data?.aggregate.total_rows || 0);
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  }, [token.token, filters]);

  useEffect(() => {
    ratingAndReviewDetails();
  }, [ratingAndReviewDetails]);

  const handleChangeFilter = useCallback((value: ratingAndReviewParams) => {
    setFilters(value);
  }, []);

  const handleChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      const offset = (value - 1) * filters.limit;
      handleChangeFilter({ ...filters, page: value, offset: offset });
    },
    [filters, handleChangeFilter]
  );
  return (
    <>
      <DashboardProfile>
        <HeadingTextAndTotalClientMainBoxContainer>
          <HeadingTextBoxContainer>
            <UINewTypography variant="h2" color="text.secondary">
              <FormattedMessage id="YourRatingAndReviews" />
            </UINewTypography>
          </HeadingTextBoxContainer>
          <TotalClientAndRatingDetaiBoxContainer>
            <NoRatingBoxContainer>
              {!ratingAndReview?.data?.model_rating_info?.[0]?.total_ratings && (
                <NoRatingTextContainer>
                  <FormattedMessage id="YouHaven’tReceivedAnyRatin" />
                </NoRatingTextContainer>
              )}
              <TotalClientMainBoxContainer>
                <TotalClientInnerBoxContainer>
                  <UINewTypography variant="body" color="text.orimary">
                    <FormattedMessage id="TotalClients" />
                  </UINewTypography>
                  <TotalClientDescriptionText color="text.secondary">
                    {ratingAndReview?.data?.model_rating_info?.[0]?.total_clients}
                  </TotalClientDescriptionText>
                </TotalClientInnerBoxContainer>

                <TotalClientInnerBoxContainer>
                  <UINewTypography variant="body" color="text.orimary">
                    <FormattedMessage id="TotalRatingsReceived" />
                  </UINewTypography>
                  <TotalClientDescriptionText color="text.secondary">
                    {ratingAndReview?.data?.model_rating_info?.[0]?.total_ratings}
                  </TotalClientDescriptionText>
                </TotalClientInnerBoxContainer>

                <TotalClientInnerBoxContainer>
                  <UINewTypography variant="body" color="text.orimary">
                    <FormattedMessage id="TotalReviewsReceived" />
                  </UINewTypography>
                  <TotalClientDescriptionText color="text.secondary">
                    {ratingAndReview?.data?.model_rating_info?.[0]?.total_reviews}
                  </TotalClientDescriptionText>
                </TotalClientInnerBoxContainer>
              </TotalClientMainBoxContainer>
            </NoRatingBoxContainer>
            {(ratingAndReview?.data?.model_rating_info?.[0]?.total_ratings as number) > 0 && (
              <RatingDetalisBoxContainer>
                <RatingPoints
                  ratingAndReview={ratingAndReview?.data?.model_rating_info?.[0] ?? ({} as RatingAndReviewDetailsInfo)}
                  onSelectRating={handleRatingSelect}
                  isShowPercentage={true}
                />

                <RatingTable
                  ratingAndReview={ratingAndReview ?? ({} as RatingAndReviewDetailsRes)}
                  total_rows={total_rows}
                  filters={filters}
                  handleChangePage={handleChangePage}
                  selectedRating={filters.rating}
                  handleRatingSelect={handleRatingSelect}
                />
              </RatingDetalisBoxContainer>
            )}
          </TotalClientAndRatingDetaiBoxContainer>
        </HeadingTextAndTotalClientMainBoxContainer>
      </DashboardProfile>
    </>
  );
};

export default RatingAndReview;
