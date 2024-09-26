import { Grid } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import { ModelPhotosImgBox, ModelPhotosStyledStar } from './ModelPhotos.styled';
import { VideoAcceptType } from 'constants/workerVerification';

const ModelPhotos = ({ modelData }: { modelData: ModelDetailsRes }) => {
  return (
    <Grid container spacing={3}>
      {modelData?.data?.photos && modelData?.data?.photos.length > 0 ? (
        modelData.data.photos.map((photo, index) => {
          const fileExtension = photo?.link.split('.').pop()?.toLowerCase() ?? '';

          return (
            <>
              <Grid item xs={12} sm={6} lg={1.75} key={index}>
                {VideoAcceptType.includes(fileExtension) ? (
                  <video
                    width="100%"
                    height="193"
                    controls
                    style={{
                      maxWidth: '146.2px',
                      borderTopLeftRadius: '32px',
                      borderBottomRightRadius: '32px',
                      objectFit: 'cover'
                    }}
                  >
                    <source src={photo?.link} type={`video/${fileExtension}`} />
                  </video>
                ) : (
                  <ModelPhotosImgBox sx={{ backgroundImage: `url(${photo?.link})` }}>
                    {photo?.favourite === 1 && <ModelPhotosStyledStar />}
                  </ModelPhotosImgBox>
                )}
              </Grid>
            </>
          );
        })
      ) : (
        <UINewTypography px={4} pt={3}>
          No Photos Available
        </UINewTypography>
      )}
    </Grid>
  );
};

export default ModelPhotos;
