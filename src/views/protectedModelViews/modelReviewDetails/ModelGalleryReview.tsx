import { useMediaQuery } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import PreviewGallery from '../verification/stepThree/uploadImage/PreviewGallery';
import { ModelDetailsResponse } from '../verification/verificationTypes';
import { GalleryTextContainer, GellaryTextContainer, ModelGalleryTitleBox } from './ModelReviewDetails.styled';
import { useMemo } from 'react';
import theme from 'themes/theme';
import { sortExistingPhotos } from 'utils/photoUtils';

const ModelGalleryReview = ({ modelDetails }: { modelDetails: ModelDetailsResponse }) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const height = isSmUp ? 193 : 210;
  const width = isSmUp ? 145 : 159;

  const sortedPhotos = modelDetails?.photos?.sort(sortExistingPhotos);

  const existedPhoto = useMemo(() => {
    return sortedPhotos
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
  }, [sortedPhotos]);

  return (
    <ModelGalleryTitleBox>
      <GalleryTextContainer color="text.secondary">
        <FormattedMessage id="GalleryTitle" />
      </GalleryTextContainer>
      <GellaryTextContainer>
        {modelDetails?.photos?.length &&
          existedPhoto?.map((photo, index) => {
            return <PreviewGallery key={index} image={photo} isEdit={false} height={height} width={width} />;
          })}
      </GellaryTextContainer>
    </ModelGalleryTitleBox>
  );
};

export default ModelGalleryReview;
