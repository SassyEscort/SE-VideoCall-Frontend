'use client';

import {
  CamChooseModalContainer,
  CamChooseModalInnerContainer,
  CamChooseModalTitleStyledBox,
  CamChooseModalMainContainer,
  CamRotateChipContainer,
  CamChooseModalSubTextStyledBox
} from './chooseModal.styled';
import { FormattedMessage } from 'react-intl';
import { CamConnectionSubTitleTypography, CamConnectionTitleTypography } from '../camConnectinonLevelViews/camConnectinonLevel.styled';

const CamToCamChooseModal = () => (
  <CamChooseModalMainContainer>
    <CamChooseModalContainer>
      <CamChooseModalInnerContainer>
        <CamConnectionTitleTypography variant="h2">
          <FormattedMessage id="ChooseYourModelAnd" />
        </CamConnectionTitleTypography>

        <CamChooseModalTitleStyledBox>
          <CamConnectionTitleTypography variant="h2">
            <FormattedMessage id="Start" />
          </CamConnectionTitleTypography>
          <CamRotateChipContainer>
            <CamConnectionTitleTypography variant="h2">
              <FormattedMessage id="Cam2Cam" />
            </CamConnectionTitleTypography>
          </CamRotateChipContainer>
        </CamChooseModalTitleStyledBox>
      </CamChooseModalInnerContainer>
      <CamChooseModalSubTextStyledBox>
        <CamConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="SimplySelectYourFavoriteModel" />
        </CamConnectionSubTitleTypography>
        <CamConnectionSubTitleTypography variant="h6">
          <FormattedMessage id="UnlikeOtherPlatforms" />
        </CamConnectionSubTitleTypography>
      </CamChooseModalSubTextStyledBox>
    </CamChooseModalContainer>
  </CamChooseModalMainContainer>
);

export default CamToCamChooseModal;
