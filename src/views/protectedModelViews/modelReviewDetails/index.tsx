'use client';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { BtnTextContainer, DocumentSecondConatiner, MainContainer, ModelGalleryBox } from './ModelReviewDetails.styled';
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
            <BtnTextContainer color="text.primary">
              <FormattedMessage id="Edit" />
            </BtnTextContainer>
          </UIThemeButton>
          <UIThemeButton id="review-button" variant="contained" onClick={modelReviewSubmit}>
            <BtnTextContainer color="secondary.main">
              <FormattedMessage id="Submit" />
            </BtnTextContainer>
          </UIThemeButton>
        </ModelGalleryBox>
      </DocumentSecondConatiner>
    </MainContainer>
  );
};

export default ModelReviewDetails;
