import React, { useState } from 'react';
import {
  NoRatingTextBoxContainer,
  PaginationBoxContainer,
  RatingDescriptionDetailsBoxContainer,
  RatingDescriptionInnerBoxContainer,
  RatingDescriptionMainBoxContainer,
  RatingDescriptionStarBoxContainer,
  UIStyledSelectRatingFilter
} from './RatingAndReview.styled';
import FormControl from '@mui/material/FormControl';
import { StyledSelectInputLabelRating } from 'components/UIComponents/UIStyledSelect';
import { FormattedMessage, useIntl } from 'react-intl';
import UINewTypography from 'components/UIComponents/UINewTypography';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';
import { RATING } from 'constants/searchConstants';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { RatingAndReviewDetailsRes } from 'services/ratingAndReview/ratingAndReview.service';
import moment from 'moment';
import { CallHistoryPaginationContainer } from 'views/protectedViews/CallHistory/CallHistory.styled';
import { BillingPaginationBox } from 'views/protectedViews/BillingHistory/BillingHistory.styled';
import { UITheme2Pagination } from 'components/UIComponents/PaginationV2/Pagination.styled';
import PaginationInWords from 'components/UIComponents/PaginationINWords';
import { StyledClearIcon } from 'views/guestViews/searchPage/Search.styled';
import StartRating from 'components/UIComponents/StartRating';

const RatingTable = ({
  ratingAndReview,
  total_rows,
  filters,
  handleChangePage,
  selectedRating,
  handleRatingSelect
}: {
  ratingAndReview: RatingAndReviewDetailsRes;
  total_rows: number;
  filters: { page: number; limit: number; offset: number };
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  selectedRating: string;
  handleRatingSelect: (rating: string) => void;
}) => {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prevOpen) => !prevOpen);
  return (
    <RatingDescriptionMainBoxContainer>
      <FormControl id="rating" sx={{ width: '100%', maxWidth: '140px' }}>
        <StyledSelectInputLabelRating>
          <FormattedMessage id="Rating" />
        </StyledSelectInputLabelRating>
        <UIStyledSelectRatingFilter
          value={selectedRating}
          onChange={(e) => handleRatingSelect(e.target.value as string)}
          MenuProps={{ disableScrollLock: true }}
          label="rating"
          name="rating"
          labelId="rating"
          IconComponent={ExpandMore}
          endAdornment={selectedRating && <StyledClearIcon onClick={() => handleRatingSelect('')} />}
          open={open}
          onClick={handleOpen}
          sx={{ cursor: 'pointer' }}
        >
          {RATING.map((rating, index) => (
            <MenuItem key={rating?.id + index} value={rating?.id}>
              <UINewTypography color="text.secondary">{intl.formatMessage({ id: rating?.title })}</UINewTypography>
            </MenuItem>
          ))}
        </UIStyledSelectRatingFilter>
      </FormControl>
      {ratingAndReview?.data?.model_rating_list?.[0]?.rating ? (
        <>
          {ratingAndReview?.data?.model_rating_list?.map((list) => (
            <RatingDescriptionInnerBoxContainer key={list.customer_name}>
              <RatingDescriptionDetailsBoxContainer>
                <RatingDescriptionStarBoxContainer>
                  <UINewTypography variant="captionLargeBold">{list.customer_name}</UINewTypography>
                  <Box>
                    <StartRating value={list.rating || 0} isReadOnly={true} resize={true} />
                  </Box>
                </RatingDescriptionStarBoxContainer>
                <UINewTypography variant="bodySmall" color="text.secondary">
                  {list.review}
                </UINewTypography>
                <UINewTypography variant="captionLargeBold" color="secondary.700">
                  {moment(list.created_at).format('MMM D, YYYY')}
                </UINewTypography>
              </RatingDescriptionDetailsBoxContainer>
            </RatingDescriptionInnerBoxContainer>
          ))}
        </>
      ) : (
        <NoRatingTextBoxContainer>
          <UINewTypography variant="bodyLarge" color="secondary.700">
            No {selectedRating}-<FormattedMessage id="starReviewsYet" />
          </UINewTypography>
        </NoRatingTextBoxContainer>
      )}
      <PaginationBoxContainer>
        {total_rows > 0 && (
          <CallHistoryPaginationContainer>
            {total_rows > 0 && (
              <BillingPaginationBox>
                <UITheme2Pagination
                  page={filters.page}
                  count={total_rows ? Math.ceil(total_rows / filters.limit) : 1}
                  onChange={handleChangePage}
                />
                <PaginationInWords
                  page={filters.page}
                  limit={filters.limit}
                  total_rows={total_rows}
                  offset={filters.offset}
                  ratingAndReview={true}
                />
              </BillingPaginationBox>
            )}
          </CallHistoryPaginationContainer>
        )}
      </PaginationBoxContainer>
    </RatingDescriptionMainBoxContainer>
  );
};

export default RatingTable;
