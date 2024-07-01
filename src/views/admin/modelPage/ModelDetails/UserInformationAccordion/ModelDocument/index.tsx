import React, { Fragment } from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import PersonalDetailsBox from '../ModelInformation/PersonalDetailsBox';
import { ModelDocumentBox, ModelDocumentContentBox, ModelDocumentImgBox } from './ModelDocument.styled';

const defaultPdfImage = '/images/icons/pdf-icon.svg';

const ModelDocument = ({ modelData }: { modelData: ModelDetailsRes }) => {
  const handleOpenPdf = (link: string) => {
    window.open(link, '_blank');
  };
  return (
    <ModelDocumentBox gap={modelData?.data ? 3 : 0}>
      {modelData?.data?.documents && (
        <ModelDocumentContentBox>
          {modelData?.data?.documents?.map((item, index) => (
            <Fragment key={index}>
              <PersonalDetailsBox label="Document Type" value={item?.document_type ? item?.document_type : ''} />
              {item.file_type === 'Non_Image' ? (
                <ModelDocumentImgBox src={defaultPdfImage} onClick={() => handleOpenPdf(item.link)} style={{ cursor: 'pointer' }} />
              ) : (
                <ModelDocumentImgBox src={item.link} />
              )}
            </Fragment>
          ))}
        </ModelDocumentContentBox>
      )}
    </ModelDocumentBox>
  );
};

export default ModelDocument;
