import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Box from '@mui/material/Box';

interface IStartRating {
  value: number;
  handleStarClick?: (val: number) => void;
}
const StartRating = ({ value, handleStarClick }: IStartRating) => {
  return (
    <Box>
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
    </Box>
  );
};

export default StartRating;
