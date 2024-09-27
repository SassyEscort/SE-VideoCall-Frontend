import { AccordionDetails } from '@mui/material';
import React from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import ModelPhotos from './ModelPhotos';
import ModelInformation from './ModelInformation';
import ModelDocument from './ModelDocument';
import {
  PhotoMainBoxContainer,
  TitleTextContainer,
  UserInformationAccordionBox,
  UserInformationAccordionMainBoxContainer
} from './UserInformationAccordion.styled';
import Box from '@mui/system/Box';
import SEOData from './SEOData';
import UINewTypography from 'components/UIComponents/UINewTypography';

const UserInformationAccordion = ({ modelData }: { modelData: ModelDetailsRes }) => {
  return (
    <>
      <UserInformationAccordionMainBoxContainer>
        <UserInformationAccordionBox>
          <Box>
            <AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
              <ModelInformation modelData={modelData} />
            </AccordionDetails>
          </Box>
        </UserInformationAccordionBox>

        <PhotoMainBoxContainer>
          <UINewTypography variant="h5">SEO</UINewTypography>
          <UserInformationAccordionBox>
            <AccordionDetails>
              <SEOData modelData={modelData} />
            </AccordionDetails>
          </UserInformationAccordionBox>
        </PhotoMainBoxContainer>

        <PhotoMainBoxContainer>
          <TitleTextContainer>Photos</TitleTextContainer>
          <ModelPhotos modelData={modelData} />
        </PhotoMainBoxContainer>

        <PhotoMainBoxContainer>
          <TitleTextContainer>Documents</TitleTextContainer>
          <ModelDocument modelData={modelData} />
        </PhotoMainBoxContainer>
      </UserInformationAccordionMainBoxContainer>
    </>
  );
};

export default UserInformationAccordion;
