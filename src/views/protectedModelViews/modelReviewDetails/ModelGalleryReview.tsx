import { Box, useMediaQuery } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import PreviewGallery from '../verification/stepThree/uploadImage/PreviewGallery';
import { ModelDetailsResponse } from '../verification/verificationTypes';
import { ModelGalleryTitleBox } from './ModelReviewDetails.styled';
import { useMemo } from 'react';
import theme from 'themes/theme';

const ModelGalleryReview = ({ modelDetails }: { modelDetails: ModelDetailsResponse }) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const height = isSmUp ? 193 : 210;
  const width = isSmUp ? 145 : 159;

  const existedPhoto = useMemo(() => {
    return modelDetails?.photos
      ?.filter((photo) => !photo.is_document)
      ?.map((photo, index) => {
        return {
          id: photo.id,
          name: `file5Existing[${index - 4}]`,
          photoURL: photo.link,
          cords: photo.cords,
          isFavorite: photo.favourite === 1
        };
      });
  }, [modelDetails]);

  return (
    <ModelGalleryTitleBox>
      <UINewTypography variant="h6">
        <FormattedMessage id="GalleryTitle" />
      </UINewTypography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        {modelDetails?.photos?.length &&
          existedPhoto?.map((photo, index) => {
            return <PreviewGallery key={index} image={photo} isEdit={false} height={height} width={width} />;
          })}
      </Box>
    </ModelGalleryTitleBox>
  );
};

export default ModelGalleryReview;
