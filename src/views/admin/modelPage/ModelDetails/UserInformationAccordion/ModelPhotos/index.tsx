import { Box, Grid, MenuItem } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import React, { useEffect, useState } from 'react';
import { ModelDetailsRes, Photo } from 'services/adminModel/types';
import {
  ModelActionPopover,
  ModelPhotosImgBox,
  ModelPhotosStyledIconButton,
  ModelPhotosStyledStar,
  ModelPhotosStyledStarBorder
} from './ModelPhotos.styled';
import { VideoAcceptType } from 'constants/workerVerification';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { adminModelServices } from 'services/adminModel/adminModel.services';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import DeleteModal from 'components/UIComponents/DeleteModal';

const ModelPhotos = ({ modelData }: { modelData: ModelDetailsRes }) => {
  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [modalPhoto, setModalPhoto] = useState<Photo[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handelLiked = async (id: number) => {
    try {
      const isfav = await adminModelServices.modelMarkThumbnail(token.token, id);
      if (isfav.code === 200) {
        const newModalPhoto = modalPhoto.map((photo) => {
          if (photo.id === id) {
            return { ...photo, favourite: 1 };
          }
          return { ...photo, favourite: 0 };
        });

        newModalPhoto.sort((a, b) => b.favourite - a.favourite);

        setModalPhoto(newModalPhoto);
      }
    } catch (error) {}
  };

  const handelDeletePhoto = async () => {
    try {
      if (selectedPhoto) {
        const isDelete = await adminModelServices.modelDeleteThumbnail(token.token, selectedPhoto?.file_id as string);
        if (isDelete.code === 200) {
          const newModalPhoto = modalPhoto.filter((photo) => photo.file_id !== selectedPhoto?.file_id);
          newModalPhoto.sort((a, b) => b.favourite - a.favourite);

          setModalPhoto(newModalPhoto);
          setSelectedPhoto(null);
        }
        handleCloseModal();
      }
    } catch (error) {}
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      if (data && token) {
        setToken({ id: data.id, token: data.token });
      }
    };

    userToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (modelData) setModalPhoto(modelData?.data?.photos.sort((a, b) => b.favourite - a.favourite));
  }, [modelData]);
  return (
    <>
      <Grid container spacing={3}>
        {modelData?.data?.photos && modalPhoto && modelData?.data?.photos.length > 0 ? (
          modalPhoto?.map((photo, index) => {
            const fileExtension = photo?.link.split('.').pop()?.toLowerCase() ?? '';

            return (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                {VideoAcceptType.includes(fileExtension) ? (
                  <Box position="relative" width="100%" maxWidth="346px" height="366px">
                    <video
                      width="100%"
                      height="366"
                      controls
                      style={{
                        // maxWidth: '346px',
                        borderTopLeftRadius: '32px',
                        borderBottomRightRadius: '32px',
                        objectFit: 'cover'
                      }}
                    >
                      <source src={photo?.link} type={`video/${fileExtension}`} />
                    </video>
                    <ModelPhotosStyledIconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? 'long-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      onClick={(e) => {
                        handleClick(e);
                        setSelectedPhoto(photo);
                      }}
                    >
                      <MoreVertIcon sx={{ color: '#fff' }} />
                    </ModelPhotosStyledIconButton>
                  </Box>
                ) : (
                  <ModelPhotosImgBox sx={{ backgroundImage: `url(${photo?.link})` }}>
                    {photo?.favourite === 1 ? (
                      <ModelPhotosStyledStar />
                    ) : (
                      <ModelPhotosStyledStarBorder onClick={() => handelLiked(photo?.id)} />
                    )}

                    {photo?.favourite === 1 ? (
                      ''
                    ) : (
                      <ModelPhotosStyledIconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={(e) => {
                          handleClick(e);
                          setSelectedPhoto(photo);
                        }}
                      >
                        <MoreVertIcon sx={{ color: '#fff' }} />
                      </ModelPhotosStyledIconButton>
                    )}
                  </ModelPhotosImgBox>
                )}
              </Grid>
            );
          })
        ) : (
          <UINewTypography px={4} pt={3}>
            No Photos Available
          </UINewTypography>
        )}
      </Grid>
      <ModelActionPopover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem
          onClick={() => {
            setOpenDeleteModal(true);
            handleCloseMenu();
          }}
        >
          <DeleteIcon sx={{ mr: 0.5, color: 'error.main' }} />
          Delete
        </MenuItem>
      </ModelActionPopover>
      <DeleteModal open={openDeleteModal} handleClose={handleCloseModal} handleDeleteClick={handelDeletePhoto} />
    </>
  );
};

export default ModelPhotos;
