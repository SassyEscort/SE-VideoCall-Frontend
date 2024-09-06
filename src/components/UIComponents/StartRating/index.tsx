import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

interface IStartRating {
  value: number;
  handleStarClick?: (val: number) => void;
}
const StartRating = ({ value, handleStarClick }: IStartRating) => {
  return (
    <>
      {[...Array(5)]?.map((_, index) => (
        <StarRoundedIcon
          key={index}
          sx={{
            ...(index < value && { color: '#FFB400' }),
            ...(handleStarClick && { cursor: 'pointer' })
          }}
          onClick={() => handleStarClick && handleStarClick(index)}
        />
      ))}
    </>
  );
};

export default StartRating;
