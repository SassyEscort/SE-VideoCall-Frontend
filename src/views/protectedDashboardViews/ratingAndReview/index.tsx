'use client';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  BorderLinearProgress,
  HeadingTextAndTotalClientMainBoxContainer,
  HeadingTextBoxContainer,
  RatingChartInnerBoxContainer,
  RatingChartMainBoxContainer,
  RatingDescriptionDetailsBoxContainer,
  RatingDescriptionInnerBoxContainer,
  RatingDescriptionMainBoxContainer,
  RatingDescriptionStarBoxContainer,
  RatingDetalisBoxContainer,
  RatingDetalisFirstPartBoxContainer,
  RatingDetalisStarBoxContainer,
  RatingPercentageContainer,
  TextAndStarBoxContainer,
  TotalClientAndRatingDetaiBoxContainer,
  TotalClientInnerBoxContainer,
  TotalClientMainBoxContainer
} from './RatingAndReview.styled';
import Box from '@mui/material/Box';
import { useState } from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { FormControl, MenuItem, useMediaQuery } from '@mui/material';
import theme from 'themes/theme';
import { StyledSelectInputLabelAge, UIStyledSelectAgeFilter } from 'components/UIComponents/UIStyledSelect';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { RATING } from 'constants/searchConstants';

const RatingAndReview = () => {
  const [rating, setRating] = useState<number>(0);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleStarClick = (index: number) => {
    setRating((prevRating) => {
      if (prevRating === index + 1) {
        return index === 0 ? 0 : prevRating - 1;
      } else {
        return index + 1;
      }
    });
  };

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
            <TotalClientMainBoxContainer>
              <TotalClientInnerBoxContainer>
                <UINewTypography variant="body" color="text.orimary">
                  <FormattedMessage id="TotalClients" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary">
                  182
                </UINewTypography>
              </TotalClientInnerBoxContainer>

              <TotalClientInnerBoxContainer>
                <UINewTypography variant="body" color="text.orimary">
                  <FormattedMessage id="TotalRatingsReceived" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary">
                  148
                </UINewTypography>
              </TotalClientInnerBoxContainer>

              <TotalClientInnerBoxContainer>
                <UINewTypography variant="body" color="text.orimary">
                  <FormattedMessage id="TotalReviewsReceived" />
                </UINewTypography>
                <UINewTypography variant="h3" color="text.secondary">
                  102
                </UINewTypography>
              </TotalClientInnerBoxContainer>
            </TotalClientMainBoxContainer>
            {isSmUp && (
              <RatingDetalisBoxContainer>
                <RatingDetalisFirstPartBoxContainer>
                  <RatingDetalisStarBoxContainer>
                    <RatingPercentageContainer>4.8</RatingPercentageContainer>
                    <Box>
                      {[...Array(5)]?.map((_, index) => (
                        <StarRoundedIcon
                          key={index}
                          sx={{
                            color: index < rating ? '#FFB400' : 'inherit',
                            cursor: 'pointer'
                          }}
                          onClick={() => handleStarClick(index)}
                        />
                      ))}
                    </Box>
                  </RatingDetalisStarBoxContainer>
                  <RatingChartMainBoxContainer>
                    {[...Array(5).keys()].reverse().map((item) => {
                      return (
                        <RatingChartInnerBoxContainer>
                          <TextAndStarBoxContainer>
                            <UINewTypography variant="bodyLight">{item + 1}</UINewTypography>
                            <StarRoundedIcon sx={{ color: '#FFB400', width: '20px', height: '20px' }} />
                          </TextAndStarBoxContainer>
                          <BorderLinearProgress variant="determinate" value={85} />
                          <UINewTypography variant="bodyLight">85%</UINewTypography>
                        </RatingChartInnerBoxContainer>
                      );
                    })}
                  </RatingChartMainBoxContainer>
                </RatingDetalisFirstPartBoxContainer>
                <RatingDescriptionMainBoxContainer>
                  <FormControl id="rating" sx={{ width: '100%', maxWidth: '140px' }}>
                    <StyledSelectInputLabelAge>
                      <FormattedMessage id="Rating" />
                    </StyledSelectInputLabelAge>
                    <UIStyledSelectAgeFilter
                      // value={renderValue}
                      // onChange={handleChange}
                      MenuProps={{ disableScrollLock: true }}
                      label="rating"
                      name="rating"
                      labelId="rating"
                      IconComponent={ExpandMore}
                      // endAdornment={renderValue && <StyledClearIcon onClick={handleClear} />}
                      sx={{ cursor: 'pointer' }}
                      // open={open}
                      // onClick={handleOpen}
                    >
                      {RATING.map((rating, key: number) => (
                        <MenuItem key={key} value={rating?.title}>
                          <UINewTypography>{rating?.title}</UINewTypography>
                        </MenuItem>
                      ))}
                    </UIStyledSelectAgeFilter>
                  </FormControl>
                  {[...Array(5).keys()].map((item) => {
                    return (
                      <RatingDescriptionInnerBoxContainer>
                        <RatingDescriptionDetailsBoxContainer>
                          <RatingDescriptionStarBoxContainer>
                            <UINewTypography variant="captionLargeBold">Kristin Watson</UINewTypography>
                            <Box>
                              {[...Array(5)]?.map((_, index) => (
                                <StarRoundedIcon
                                  key={index}
                                  sx={{
                                    color: index < rating ? '#FFB400' : 'inherit',
                                    cursor: 'pointer',
                                    width: '16px',
                                    height: 'auto'
                                  }}
                                  onClick={() => handleStarClick(index)}
                                />
                              ))}
                            </Box>
                          </RatingDescriptionStarBoxContainer>
                          <UINewTypography variant="bodySmall" color="text.secondary">
                            Really enjoyed the call. Thanks Aesha!
                          </UINewTypography>
                          <UINewTypography variant="captionLargeBold" color="secondary.700">
                            Aug 22, 2024
                          </UINewTypography>
                        </RatingDescriptionDetailsBoxContainer>
                      </RatingDescriptionInnerBoxContainer>
                    );
                  })}
                </RatingDescriptionMainBoxContainer>
              </RatingDetalisBoxContainer>
            )}
          </TotalClientAndRatingDetaiBoxContainer>
        </HeadingTextAndTotalClientMainBoxContainer>
      </DashboardProfile>
    </>
  );
};

export default RatingAndReview;
