import { AccordionDetails } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { ModelDetailsRes } from 'services/adminModel/types';
import ModelPhotos from './ModelPhotos';
import ModelInformation from './ModelInformation';
import ModelDocument from './ModelDocument';
import { PhotoMainBoxContainer, TitleTextContainer, UserInformationAccordionBox } from './UserInformationAccordion.styled';
import Box from '@mui/system/Box';
import SEOData from './SEOData';
import { MuiAccordion, MuiAccordionSummary } from 'components/UIComponents/StyleAccordion';
import UINewTypography from 'components/UIComponents/UINewTypography';

const UserInformationAccordion = ({ modelData }: { modelData: ModelDetailsRes }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
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
      <UserInformationAccordionBox>
        <MuiAccordion
          expanded={expanded === 'User-Information'}
          onChange={handleChange('User-Information')}
          disableGutters
          elevation={0}
          square
        >
          <MuiAccordionSummary>
            <UINewTypography variant="h5">Model Information</UINewTypography>
          </MuiAccordionSummary>
          <AccordionDetails>
            <ModelInformation modelData={modelData} />
          </AccordionDetails>
        </MuiAccordion>
        <MuiAccordion expanded={expanded === 'Photos'} onChange={handleChange('Photos')} disableGutters elevation={0} square>
          <MuiAccordionSummary>
            <UINewTypography variant="h5">Photos</UINewTypography>
          </MuiAccordionSummary>
          <AccordionDetails>
            <ModelPhotos modelData={modelData} />
          </AccordionDetails>
        </MuiAccordion>
        <MuiAccordion expanded={expanded === 'Documents'} onChange={handleChange('Documents')} disableGutters elevation={0} square>
          <MuiAccordionSummary>
            <UINewTypography variant="h5">Documents</UINewTypography>
          </MuiAccordionSummary>
          <AccordionDetails>
            <ModelDocument modelData={modelData} />
          </AccordionDetails>
        </MuiAccordion>
        <MuiAccordion expanded={expanded === 'SEO'} onChange={handleChange('SEO')} disableGutters elevation={0} square>
          <MuiAccordionSummary>
            <UINewTypography variant="h5">SEO</UINewTypography>
          </MuiAccordionSummary>
          <AccordionDetails>
            <SEOData modelData={modelData} />
          </AccordionDetails>
        </MuiAccordion>
      </UserInformationAccordionBox>
    </>
  );
};

export default UserInformationAccordion;
