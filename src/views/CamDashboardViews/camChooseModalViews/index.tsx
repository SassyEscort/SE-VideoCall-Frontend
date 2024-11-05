import Typography from '@mui/material/Typography';
import React from 'react';
import {
  CamChooseModalContainer,
  CamChooseModalInnerContainer,
  CamChooseModalTitleStyledBox,
  CamChooseModalMainContainer,
  CamRotateChipContainer,
  CamChooseModalSubTextStyledBox
} from './chooseModal.styled';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';

const CamToCamChooseModal = () => (
  <CamChooseModalMainContainer>
    <CamChooseModalContainer>
      <CamChooseModalInnerContainer>
        <Typography variant="h1">
          <FormattedMessage id="ChooseYourModelAnd" />
        </Typography>

        <CamChooseModalTitleStyledBox>
          <Typography variant="h1">
            <FormattedMessage id="Start" />
          </Typography>
          <CamRotateChipContainer>
            <Typography variant="h1">
              <FormattedMessage id="Cam2Cam" />
            </Typography>
          </CamRotateChipContainer>
        </CamChooseModalTitleStyledBox>
      </CamChooseModalInnerContainer>
      <CamChooseModalSubTextStyledBox>
        <UINewTypography variant="subtitle">
          <FormattedMessage id="SimplySelectYourFavoriteModel" />
        </UINewTypography>
        <UINewTypography variant="subtitle">
          <FormattedMessage id="UnlikeOtherPlatforms" />
        </UINewTypography>
      </CamChooseModalSubTextStyledBox>
    </CamChooseModalContainer>
  </CamChooseModalMainContainer>
);

export default CamToCamChooseModal;
