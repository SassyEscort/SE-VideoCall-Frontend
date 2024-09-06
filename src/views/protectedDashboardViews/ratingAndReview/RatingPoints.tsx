import React from 'react';
import {
  BorderLinearProgress,
  RatingChartInnerBoxContainer,
  RatingChartMainBoxContainer,
  RatingDetalisFirstPartBoxContainer,
  RatingDetalisStarBoxContainer,
  RatingPercentageContainer,
  TextAndStarBoxContainer
} from './RatingAndReview.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { Box } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { RatingAndReviewDetailsInfo } from 'services/ratingAndReview/ratingAndReview.service';
import { RATING } from 'constants/searchConstants';

const RatingPoints = ({
  ratingAndReview,
  onSelectRating,
  isShowPercentage
}: {
  ratingAndReview: RatingAndReviewDetailsInfo;
  onSelectRating: (ratingId: string) => void;
  isShowPercentage?: boolean;
}) => {
  const handleChartClick = (id: string) => {
    onSelectRating(id);
  };

  const printPercentageRating = (val: number) => ('0' + val).slice(-2);
  return (
    <RatingDetalisFirstPartBoxContainer>
      <RatingDetalisStarBoxContainer>
        <RatingPercentageContainer>{ratingAndReview?.average_rating || 0}</RatingPercentageContainer>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {[...Array(5)]?.map((_, index) => (
            <StarRoundedIcon
              key={index}
              sx={{
                color: index < (ratingAndReview?.average_rating || 0) ? '#FFB400' : 'inherit',
                cursor: 'pointer'
              }}
            />
          ))}
        </Box>
      </RatingDetalisStarBoxContainer>

      <RatingChartMainBoxContainer>
        {RATING.map((item) => (
          <RatingChartInnerBoxContainer key={item.id} onClick={() => handleChartClick(item.id)}>
            <TextAndStarBoxContainer>
              <UINewTypography variant="bodyLight">{item.id}</UINewTypography>
              <StarRoundedIcon sx={{ color: '#FFB400', width: '20px', height: '20px' }} />
            </TextAndStarBoxContainer>
            <BorderLinearProgress variant="determinate" value={ratingAndReview?.[item.label as keyof RatingAndReviewDetailsInfo] || 0} />
            {isShowPercentage && (
              <UINewTypography variant="bodyLight">
                {printPercentageRating(ratingAndReview?.[item.label as keyof RatingAndReviewDetailsInfo] || 0)}%
              </UINewTypography>
            )}
          </RatingChartInnerBoxContainer>
        ))}
      </RatingChartMainBoxContainer>
    </RatingDetalisFirstPartBoxContainer>
  );
};

export default RatingPoints;
