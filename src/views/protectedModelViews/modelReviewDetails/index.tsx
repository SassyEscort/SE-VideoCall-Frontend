'use client';

import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { DocumentSecondConatiner, MainContainer, ModelGalleryBox } from './ModelReviewDetails.styled';
import { FormattedMessage } from 'react-intl';
import { ModelDetailsResponse } from '../verification/verificationTypes';
import { VerificationStepService } from 'services/modelAuth/verificationStep.service';
import { TokenIdType } from '../verification';
import ModelGalleryReview from './ModelGalleryReview';
import ModelBasicDetailReview from './ModelBasicDetailReview';

const ModelReviewDetails = ({
  modelDetails,
  handleNext,
  token
}: {
  modelDetails: ModelDetailsResponse;
  handleNext: () => void;
  token: TokenIdType;
}) => {
  const modelReviewSubmit = async () => {
    await VerificationStepService.modelReview(token.token);
    handleNext();
  };

  return (
    <MainContainer>
      <ModelBasicDetailReview modelDetails={modelDetails} />
      <DocumentSecondConatiner>
        <ModelGalleryReview modelDetails={modelDetails} />
        <ModelGalleryBox>
          <UIThemeButton variant="outlined">
            <UINewTypography variant="buttonLargeBold" color="text.primary">
              <FormattedMessage id="Edit" />
            </UINewTypography>
          </UIThemeButton>
          <UIThemeButton variant="contained" onClick={modelReviewSubmit}>
            <UINewTypography variant="buttonLargeBold" color="secondary.main">
              <FormattedMessage id="Submit" />
            </UINewTypography>
          </UIThemeButton>
        </ModelGalleryBox>
      </DocumentSecondConatiner>
    </MainContainer>
  );
};

export default ModelReviewDetails;
