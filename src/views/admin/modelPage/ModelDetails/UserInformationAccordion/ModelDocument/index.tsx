import React, { Fragment } from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import PersonalDetailsBox from '../ModelInformation/PersonalDetailsBox';
import {
  ModelDocumentBox,
  ModelDocumentContentBox,
  ModelDocumentImgBox,
  StyledModelDocumentImgBox,
  TitleBackgroundBoxContainer
} from './ModelDocument.styled';

const defaultPdfImage = '/images/icons/pdf-icon.svg';

const ModelDocument = ({ modelData }: { modelData: ModelDetailsRes }) => {
  const handleOpenPdf = (link: string) => {
    window.open(link, '_blank');
  };
  return (
    <ModelDocumentBox gap={modelData?.data ? 3 : 0}>
      <TitleBackgroundBoxContainer>
        {modelData?.data?.documents.length > 0 && (
          <PersonalDetailsBox label="Document Type" value={modelData?.data?.documents[0]?.document_type || ''} />
        )}
      </TitleBackgroundBoxContainer>
      {modelData?.data?.documents && (
        <ModelDocumentContentBox>
          {modelData?.data?.documents?.map((item, index) => (
            <Fragment key={index}>
              {item?.file_type === 'Non_Image' ? (
                <StyledModelDocumentImgBox src={defaultPdfImage} onClick={() => handleOpenPdf(item?.link)} />
              ) : (
                <ModelDocumentImgBox src={item?.link} />
              )}
            </Fragment>
          ))}
        </ModelDocumentContentBox>
      )}
    </ModelDocumentBox>
  );
};

export default ModelDocument;
