import MenuItem from '@mui/material/MenuItem';
import UIStyledPopover from 'components/UIComponents/UIStyledPopover';
import { FormattedMessage } from 'react-intl';

const ImageShotByMenu = ({
  anchorEl,
  isFeaturePhoto,
  videoTypeCondition,
  handleClose,
  handleOpenRepositionModal,
  handleClickThumbnailPhoto
}: {
  anchorEl: null | HTMLElement;
  isFeaturePhoto: boolean;
  videoTypeCondition: boolean;
  handleClose: () => void;
  handleOpenRepositionModal: () => void;
  handleClickThumbnailPhoto: () => void;
}) => {
  const open = Boolean(anchorEl);

  return (
    <UIStyledPopover
      id="basic-menu"
      disableScrollLock={true}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      {!videoTypeCondition && (
        <MenuItem onClick={handleOpenRepositionModal}>
          <FormattedMessage id="Reposition" />
        </MenuItem>
      )}
      <MenuItem onClick={handleClickThumbnailPhoto}>
        <FormattedMessage id="MakeThumbnail" />
      </MenuItem>
    </UIStyledPopover>
  );
};

export default ImageShotByMenu;
