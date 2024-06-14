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
  token,
  handleEdit
}: {
  modelDetails: ModelDetailsResponse;
  handleNext: () => void;
  token: TokenIdType;
  handleEdit: (step: number) => void;
}) => {
  const modelReviewSubmit = async () => {
    await VerificationStepService.modelReview(token.token);
    handleNext();
  };

  return (
    <MainContainer>
      <ModelBasicDetailReview modelDetails={modelDetails} handleEdit={handleEdit} />
      <DocumentSecondConatiner>
        <ModelGalleryReview modelDetails={modelDetails} />
        <ModelGalleryBox>
          <UIThemeButton variant="outlined" onClick={() => handleEdit(2)}>
            <UINewTypography variant="buttonLargeBold" color="text.primary">
              <FormattedMessage id="Edit" />
            </UINewTypography>
          </UIThemeButton>
          <UIThemeButton id="review-button" variant="contained" onClick={modelReviewSubmit}>
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
