import { Grid } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import { ModelPhotosImgBox, ModelPhotosStyledStar } from './ModelPhotos.styled';

const ModelPhotos = ({ modelData }: { modelData: ModelDetailsRes }) => {
  return (
    <Grid container spacing={3}>
      {modelData?.data?.photos && modelData?.data?.photos.length > 0 ? (
        modelData?.data?.photos.map((photo, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4}>
            <ModelPhotosImgBox sx={{ backgroundImage: `url(${photo.link})` }}>
              {photo.favourite === 1 && <ModelPhotosStyledStar />}
            </ModelPhotosImgBox>
          </Grid>
        ))
      ) : (
        <UINewTypography px={4} pt={3}>
          No Photos Available
        </UINewTypography>
      )}
    </Grid>
  );
};

export default ModelPhotos;
