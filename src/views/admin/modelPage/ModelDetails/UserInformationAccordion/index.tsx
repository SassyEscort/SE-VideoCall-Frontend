import { AccordionDetails } from '@mui/material';
import React from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import ModelPhotos from './ModelPhotos';
import ModelInformation from './ModelInformation';
import ModelDocument from './ModelDocument';
import { PhotoMainBoxContainer, TitleTextContainer, UserInformationAccordionBox } from './UserInformationAccordion.styled';
import Box from '@mui/system/Box';

const UserInformationAccordion = ({ modelData }: { modelData: ModelDetailsRes }) => {
  return (
    <>
      <UserInformationAccordionBox>
        <Box>
          <AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
            <ModelInformation modelData={modelData} />
          </AccordionDetails>
        </Box>
      </UserInformationAccordionBox>

      <PhotoMainBoxContainer>
        <TitleTextContainer>Photos</TitleTextContainer>
        <ModelPhotos modelData={modelData} />
      </PhotoMainBoxContainer>

      <Box>
        <TitleTextContainer>Documents</TitleTextContainer>
        <ModelDocument modelData={modelData} />
      </Box>
    </>
  );
};

export default UserInformationAccordion;
