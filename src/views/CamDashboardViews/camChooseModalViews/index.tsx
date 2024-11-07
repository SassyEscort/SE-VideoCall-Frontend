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
        <CamConnectionTitleTypography>
          <FormattedMessage id="ChooseYourModelAnd" />
        </CamConnectionTitleTypography>

        <CamChooseModalTitleStyledBox>
          <CamConnectionTitleTypography>
            <FormattedMessage id="Start" />
          </CamConnectionTitleTypography>
          <CamRotateChipContainer>
            <CamConnectionTitleTypography>
              <FormattedMessage id="Cam2Cam" />
            </CamConnectionTitleTypography>
          </CamRotateChipContainer>
        </CamChooseModalTitleStyledBox>
      </CamChooseModalInnerContainer>
      <CamChooseModalSubTextStyledBox>
        <CamConnectionSubTitleTypography>
          <FormattedMessage id="SimplySelectYourFavoriteModel" />
        </CamConnectionSubTitleTypography>
        <CamConnectionSubTitleTypography>
          <FormattedMessage id="UnlikeOtherPlatforms" />
        </CamConnectionSubTitleTypography>
      </CamChooseModalSubTextStyledBox>
    </CamChooseModalContainer>
  </CamChooseModalMainContainer>
);

export default CamToCamChooseModal;
