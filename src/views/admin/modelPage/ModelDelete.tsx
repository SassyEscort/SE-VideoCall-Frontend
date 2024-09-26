'use client';
import { DialogContent } from '@mui/material';
import React from 'react';
import {
  ButtonText,
  DialogContentMain,
  DialogTitleBox,
  ModelDeleteMainBoxContainer,
  TextBoxContainer,
  TextContainer
} from './ModelDelete.style';
import Box from '@mui/system/Box';

const ModelDelete = ({
  open,
  onClose,
  handleModelDetailsDelete,
  deletedID
}: {
  open: boolean;
  onClose: () => void;
  handleModelDetailsDelete: (id: number) => void;
  deletedID: number;
}) => {
  const handleDeleteModel = () => {
    handleModelDetailsDelete(deletedID);
    onClose();
  };

  return (
    <DialogContentMain open={open} onClose={onClose}>
      <DialogTitleBox
        sx={{
          '&.MuiTypography-root': {
            padding: '0px 0px'
          }
        }}
      ></DialogTitleBox>

      <DialogContent sx={{ p: 0 }}>
        <ModelDeleteMainBoxContainer>
          <TextBoxContainer>
            <TextContainer>
              Are you sure you want to delete this profile? After this you won’t able to access this model’s data.
            </TextContainer>
          </TextBoxContainer>
          <Box>
            <ButtonText sx={{ color: 'black.main' }} onClick={onClose}>
              Cancle
            </ButtonText>
            <ButtonText variant="contained" sx={{ marginLeft: 4, backgroundColor: '#FF5959' }} onClick={handleDeleteModel}>
              Delete
            </ButtonText>
          </Box>
        </ModelDeleteMainBoxContainer>
      </DialogContent>
    </DialogContentMain>
  );
};

export default ModelDelete;
