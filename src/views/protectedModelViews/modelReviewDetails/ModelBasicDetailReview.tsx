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
  EditButton,
  FirstBoxContainer,
  FirstTextContainer,
  SecTextContainer,
  ThirdTextContainer,
  BtnTextContainer,
  FourTextContainer
} from './ModelReviewDetails.styled';
import { useEffect, useState } from 'react';
import { DOCUMENT_UPLOAD_TYPE } from 'constants/workerVerification';

const ModelBasicDetailReview = ({
  modelDetails,
  handleEdit
}: {
  modelDetails: ModelDetailsResponse;
  handleEdit: (step: number) => void;
}) => {
  const [languageNames, setLanguageNames] = useState('');
  const documentType =
    modelDetails?.documents?.length && modelDetails?.documents[0]?.document_type ? modelDetails?.documents[0]?.document_type : '';

  const documentNumber =
    modelDetails?.documents?.length && modelDetails?.documents[0]?.document_number ? modelDetails?.documents[0]?.document_number : '';

  const documentLink = modelDetails?.documents?.length && modelDetails?.documents[0]?.link ? modelDetails?.documents[0]?.link : '';
  const documentBack = modelDetails?.documents?.length && modelDetails?.documents[1]?.link ? modelDetails?.documents[1]?.link : '';

  const documentLinkPdf = documentLink.includes('.pdf') || modelDetails?.documents[0]?.file_type === 'Non_Image';
  const documentBackLinkPdf = modelDetails?.documents[1]?.file_type === 'Non_Image';

  useEffect(() => {
    const names = modelDetails?.languages
      ?.map((language) => language?.language_name)
      .sort()
      .join(', ');

    setLanguageNames(names);
  }, [modelDetails]);

  return (
    <DocumentSecondConatiner>
      <UpConatiner>
        <SecondMainContainer>
          <UINewTypography variant="h2" color={'text.secondary'}>
            <FormattedMessage id="ReviewYourDetails" />
          </UINewTypography>
          <UINewTypography variant="bodyRegular" color={'text.secondary'}>
            <FormattedMessage id="MakesureYouFilled" />
          </UINewTypography>
        </SecondMainContainer>

        <ThreeMainContainer>
          <ForMainContainer>
            <BasicDetailsConatiner>
              <FirstTextContainer color={'text.secondary'}>
                <FormattedMessage id="BasicDetails" />
              </FirstTextContainer>
            </BasicDetailsConatiner>
            <FirstColumnContainer>
              <SecondColumnContainer>
                <CloumnContainer>
                  <LeftCloumnConatinerGap>
                    <SecTextContainer color={'text.primary'} whiteSpace="nowrap">
                      <FormattedMessage id="YourGender" />
                    </SecTextContainer>
                    <ThirdTextContainer color={'text.secondary'}>{modelDetails?.gender}</ThirdTextContainer>
                  </LeftCloumnConatinerGap>
                  <LeftCloumnConatinerGap>
                    <SecTextContainer color={'text.primary'}>
                      <FormattedMessage id="Country" />
                    </SecTextContainer>
                    <ThirdTextContainer color={'text.secondary'}>{modelDetails?.country?.name}</ThirdTextContainer>
                  </LeftCloumnConatinerGap>
                  <LeftCloumnConatinerGap>
                    <SecTextContainer color={'text.primary'}>
                      <FormattedMessage id="DOB" />
                    </SecTextContainer>
                    <ThirdTextContainer color={'text.secondary'}>{moment(modelDetails?.dob).format('l')}</ThirdTextContainer>
                  </LeftCloumnConatinerGap>
                  <LeftCloumnConatinerGap>
                    <SecTextContainer color={'text.primary'}>
                      <FormattedMessage id="Nationality" />
                    </SecTextContainer>
                    <ThirdTextContainer color={'text.secondary'}>{modelDetails?.nationality?.name}</ThirdTextContainer>
                  </LeftCloumnConatinerGap>
                </CloumnContainer>
                <RightSideConatiner>
                  <RightSideConatinerGap>
                    <SecTextContainer color={'text.primary'}>
                      <FormattedMessage id="Name" />
                    </SecTextContainer>
                    <ThirdTextContainer color={'text.secondary'}>{modelDetails?.name}</ThirdTextContainer>
                  </RightSideConatinerGap>
                  <RightSideConatinerGap>
                    <SecTextContainer color={'text.primary'}>
                      <FormattedMessage id="Bio" />
                    </SecTextContainer>
                    <ThirdTextContainer color={'text.secondary'}>{modelDetails?.bio}</ThirdTextContainer>
                  </RightSideConatinerGap>
                  <RightSideConatinerGap>
                    <SecTextContainer color={'text.primary'}>
                      <FormattedMessage id="Language" />
                    </SecTextContainer>
                    <ThirdTextContainer color={'text.secondary'}>{languageNames}</ThirdTextContainer>
                  </RightSideConatinerGap>
                </RightSideConatiner>
              </SecondColumnContainer>
            </FirstColumnContainer>
          </ForMainContainer>
          <ButtonContainer>
            <UIThemeButton variant="outlined" onClick={() => handleEdit(0)}>
              <BtnTextContainer color={'text.primary'}>
                <FormattedMessage id="Edit" />
              </BtnTextContainer>
            </UIThemeButton>
          </ButtonContainer>
        </ThreeMainContainer>
      </UpConatiner>

      <DocumentsConatiner>
        <FirstBoxContainer>
          <DocumentLeftContainer>
            <FourTextContainer color={'text.secondary'}>
              <FormattedMessage id="Documents" />
            </FourTextContainer>
            <IDtype>
              <Passport>
                <IDnumber>
                  <SecTextContainer color={'text.primary'}>
                    <FormattedMessage id="IdType" />
                  </SecTextContainer>
                  <ThirdTextContainer color={'text.secondary'}>{documentType}</ThirdTextContainer>
                </IDnumber>
                <IDnumber>
                  <SecTextContainer color={'text.primary'}>
                    <FormattedMessage id="IdNumber" />
                  </SecTextContainer>
                  <ThirdTextContainer color={'text.secondary'}>{documentNumber}</ThirdTextContainer>
                </IDnumber>
              </Passport>

              {documentType === DOCUMENT_UPLOAD_TYPE.PASSPORT ? (
                <FontIdRight>
                  <Box>
                    <SecTextContainer color={'text.primary'}>
                      <FormattedMessage id="IdFront" />
                    </SecTextContainer>
                  </Box>
                  {documentLinkPdf ? (
                    <Box component={'img'} src={'/images/icons/pdf-icon.svg'} width={'100px'} height={'100px'}></Box>
                  ) : (
                    <Box component={'img'} src={documentLink} width={'265.39px'}></Box>
                  )}
                </FontIdRight>
              ) : (
                <FontIdRight>
                  <Box>
                    <Passport>
                      <FormattedMessage id="IDFront" />
                      <SecTextContainer color={'text.primary'}>
                        {documentLinkPdf ? (
                          <Box component={'img'} src={'/images/icons/pdf-icon.svg'} width={'100px'} height={'100px'}></Box>
                        ) : (
                          <Box component={'img'} src={documentLink} width={'265.39px'} />
                        )}
                      </SecTextContainer>
                    </Passport>
                    <Passport>
                      <FormattedMessage id="IDBack" />
                      <SecTextContainer color={'text.primary'}>
                        {documentBackLinkPdf ? (
                          <Box component={'img'} src={'/images/icons/pdf-icon.svg'} width={'100px'} height={'100px'}></Box>
                        ) : (
                          <Box component={'img'} src={documentBack} width={'265.39px'} />
                        )}
                      </SecTextContainer>
                    </Passport>
                  </Box>
                </FontIdRight>
              )}
            </IDtype>
          </DocumentLeftContainer>
        </FirstBoxContainer>
        <EditButton>
          <UIThemeButton variant="outlined" onClick={() => handleEdit(1)}>
            <BtnTextContainer color={'text.primary'}>
              <FormattedMessage id="Edit" />
            </BtnTextContainer>
          </UIThemeButton>
        </EditButton>
      </DocumentsConatiner>
    </DocumentSecondConatiner>
  );
};

export default ModelBasicDetailReview;
