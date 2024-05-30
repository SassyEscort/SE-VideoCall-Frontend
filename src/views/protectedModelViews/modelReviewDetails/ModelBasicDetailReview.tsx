import { Box } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { ModelDetailsResponse } from '../verification/verificationTypes';
import {
  DocumentSecondConatiner,
  UpConatiner,
  SecondMainContainer,
  ThreeMainContainer,
  ForMainContainer,
  BasicDetailsConatiner,
  FirstColumnContainer,
  SecondColumnContainer,
  CloumnContainer,
  LeftCloumnConatinerGap,
  RightSideConatiner,
  RightSideConatinerGap,
  ButtonContainer,
  DocumentsConatiner,
  DocumentLeftContainer,
  IDtype,
  Passport,
  IDnumber,
  FontIdRight,
  EditButton
} from './ModelReviewDetails.styled';

const ModelBasicDetailReview = ({ modelDetails }: { modelDetails: ModelDetailsResponse }) => {
  const documentType =
    modelDetails?.documents?.length && modelDetails?.documents[0]?.document_type ? modelDetails?.documents[0]?.document_type : '';

  const documentNumber =
    modelDetails?.documents?.length && modelDetails?.documents[0]?.document_number ? modelDetails?.documents[0]?.document_number : '';

  const documentLink = modelDetails?.documents?.length && modelDetails?.documents[0]?.link ? modelDetails?.documents[0]?.link : '';

  return (
    <DocumentSecondConatiner>
      <UpConatiner>
        <SecondMainContainer>
          <UINewTypography variant="h2" color={'text.primary'}>
            <FormattedMessage id="ReviewYourDetails" />
          </UINewTypography>
          <UINewTypography variant="bodyRegular" color={'text.secondary'}>
            <FormattedMessage id="MakesureYouFilled" />
          </UINewTypography>
        </SecondMainContainer>

        <ThreeMainContainer>
          <ForMainContainer>
            <BasicDetailsConatiner>
              <UINewTypography variant="h6" color={'text.primary'}>
                <FormattedMessage id="BasicDetails" />
              </UINewTypography>
            </BasicDetailsConatiner>
            <FirstColumnContainer>
              <SecondColumnContainer>
                <CloumnContainer>
                  <LeftCloumnConatinerGap>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="YourGender" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      {modelDetails?.gender}
                    </UINewTypography>
                  </LeftCloumnConatinerGap>
                  <LeftCloumnConatinerGap>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="Country" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      {modelDetails?.country?.name}
                    </UINewTypography>
                  </LeftCloumnConatinerGap>
                  <LeftCloumnConatinerGap>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="DOB" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      {moment(modelDetails?.dob).format('l')}
                    </UINewTypography>
                  </LeftCloumnConatinerGap>
                  <LeftCloumnConatinerGap>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="Nationality" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      {modelDetails?.nationality?.name}
                    </UINewTypography>
                  </LeftCloumnConatinerGap>
                </CloumnContainer>
                <RightSideConatiner>
                  <RightSideConatinerGap>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="Name" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      {modelDetails?.name}
                    </UINewTypography>
                  </RightSideConatinerGap>
                  <RightSideConatinerGap>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="Bio" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      {modelDetails?.bio}
                    </UINewTypography>
                  </RightSideConatinerGap>
                  <RightSideConatinerGap>
                    <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                      <FormattedMessage id="Language" />
                    </UINewTypography>
                    <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                      <FormattedMessage id="English" />
                    </UINewTypography>
                  </RightSideConatinerGap>
                </RightSideConatiner>
              </SecondColumnContainer>
            </FirstColumnContainer>
          </ForMainContainer>
          <ButtonContainer>
            <UIThemeButton variant="outlined">
              <UINewTypography variant="buttonLargeBold" color={'text.primary'}>
                <FormattedMessage id="Edit" />
              </UINewTypography>
            </UIThemeButton>
          </ButtonContainer>
        </ThreeMainContainer>
      </UpConatiner>

      <DocumentsConatiner>
        <Box sx={{ display: 'flex', flexDirection: 'cloumn', gap: 6, width: '100%' }}>
          <DocumentLeftContainer>
            <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
              <FormattedMessage id="Documents" />
            </UINewTypography>
            <IDtype>
              <Passport>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                    <FormattedMessage id="IdType" />
                  </UINewTypography>
                  <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                    {documentType}
                  </UINewTypography>
                </Box>
                <IDnumber>
                  <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                    <FormattedMessage id="IdNumber" />
                  </UINewTypography>
                  <UINewTypography variant="buttonLargeBold" color={'text.secondary'}>
                    {documentNumber}
                  </UINewTypography>
                </IDnumber>
              </Passport>
              <FontIdRight>
                <Box>
                  <UINewTypography variant="buttonLargeMenu" color={'text.primary'}>
                    <FormattedMessage id="IdFront" />
                  </UINewTypography>
                </Box>
                <Box component={'img'} src={documentLink} width={'265.39px'}></Box>
              </FontIdRight>
            </IDtype>
          </DocumentLeftContainer>
        </Box>
        <EditButton>
          <UIThemeButton variant="outlined">
            <UINewTypography variant="buttonLargeBold" color={'text.primary'}>
              <FormattedMessage id="Edit" />
            </UINewTypography>
          </UIThemeButton>
        </EditButton>
      </DocumentsConatiner>
    </DocumentSecondConatiner>
  );
};

export default ModelBasicDetailReview;
