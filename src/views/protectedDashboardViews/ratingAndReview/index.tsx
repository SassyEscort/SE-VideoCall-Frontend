'use client';
import DashboardProfile from '..';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  HeadingTextAndTotalClientMainBoxContainer,
  HeadingTextBoxContainer,
  TotalClientInnerBoxContainer,
  TotalClientMainBoxContainer
} from './RatingAndReview.styled';

const RatingAndReview = () => {
  return (
    <>
      <DashboardProfile>
        <HeadingTextAndTotalClientMainBoxContainer>
          <HeadingTextBoxContainer>
            <UINewTypography variant="h2" color="text.secondary">
              <FormattedMessage id="YourRatingAndReviews" />
            </UINewTypography>
          </HeadingTextBoxContainer>
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
        </HeadingTextAndTotalClientMainBoxContainer>
      </DashboardProfile>
    </>
  );
};

export default RatingAndReview;
