'use client';

import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import React, { useEffect, useState } from 'react';
import {
  BasicDetailsConatiner,
  ButtonContainer,
  CloumnContainer,
  DocumentLeftContainer,
  DocumentSecondConatiner,
  DocumentsConatiner,
  EditButton,
  FirstColumnContainer,
  FontIdRight,
  ForMainContainer,
  IDnumber,
  IDtype,
  LeftCloumnConatinerGap,
  MainContainer,
  ModelGalleryBox,
  ModelGalleryTitleBox,
  Passport,
  RightSideConatiner,
  RightSideConatinerGap,
  SecondColumnContainer,
  SecondMainContainer,
  ThreeMainContainer,
  UpConatiner
} from './ModelReviewDetails.styled';
import { Box, useMediaQuery } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { ModelDetailsResponse } from '../verification/verificationTypes';
import theme from 'themes/theme';
import { UploadPhotos } from '../verification/stepThree/uploadImage/ModelMultiplePhoto';
import PreviewGallery from '../verification/stepThree/uploadImage/PreviewGallery';

const ModelReviewDetails = ({ modelDetails, handleNext }: { modelDetails: ModelDetailsResponse; handleNext: () => void }) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const height = isSmUp ? 193 : 210;
  const width = isSmUp ? 145 : 159;
  const documentType =
    modelDetails?.documents?.length && modelDetails?.documents[0]?.document_type ? modelDetails?.documents[0]?.document_type : '';

  const documentNumber =
    modelDetails?.documents?.length && modelDetails?.documents[0]?.document_number ? modelDetails?.documents[0]?.document_number : '';

  const documentLink = modelDetails?.documents?.length && modelDetails?.documents[0]?.link ? modelDetails?.documents[0]?.link : '';

  const [existingPhotos, setExistingPhotos] = useState<UploadPhotos[]>([]);

  useEffect(() => {
    const existedPhoto = modelDetails?.photos
      ?.filter((photo) => !photo.is_document)
      ?.map((photo, index) => {
        if (photo.type === 'file_5')
          return {
            id: photo.id,
            name: `file5Existing[${index - 4}]`,
            photoURL: photo.link,
            cords: photo.cords
          };
        else {
          return {
            id: photo.id,
            name: `file${photo?.type?.split('_')[1]}`,
            photoURL: photo.link,
            cords: photo.cords,
            isFavorite: photo.favourite === 1
          };
        }
      });
    setExistingPhotos(existedPhoto);
  }, [modelDetails?.photos]);

  return (
    <MainContainer>
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
      <DocumentSecondConatiner>
        <ModelGalleryTitleBox>
          <UINewTypography variant="h6">
            <FormattedMessage id="GalleryTitle" />
          </UINewTypography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {modelDetails?.photos?.length &&
              existingPhotos?.map((photo, index) => {
                return <PreviewGallery key={index} image={photo} isEdit={false} height={height} width={width} />;
              })}
          </Box>
        </ModelGalleryTitleBox>
        <ModelGalleryBox>
          <UIThemeButton variant="outlined">
            <UINewTypography variant="buttonLargeBold" color="text.primary">
              <FormattedMessage id="Edit" />
            </UINewTypography>
          </UIThemeButton>
          <UIThemeButton variant="contained">
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
