import React from 'react';
import { RatingStartBox } from 'views/protectedDashboardViews/ratingAndReview/RatingAndReview.styled';

interface IStartRating {
  value: number;
  isReadOnly?: boolean;
  max?: number;
  handleStarClick?: (val: number) => void;
  resize?: boolean;
}
const StartRating = ({ value, isReadOnly, max, resize, handleStarClick }: IStartRating) => {
  return (
    <RatingStartBox
      name="customized-rating"
      value={value || 0}
      max={max || 5}
      readOnly={!!isReadOnly}
      onChange={(event, newValue) => {
        event.preventDefault();
        handleStarClick && handleStarClick(newValue as number);
      }}
      {...(resize && {
        sx: {
          '& svg': {
            width: '16px',
            height: '16px'
          }
        }
      })}
    />
  );
};

export default StartRating;
