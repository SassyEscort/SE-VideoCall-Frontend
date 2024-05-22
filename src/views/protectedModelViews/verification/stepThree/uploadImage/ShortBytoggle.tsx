import MenuItem from '@mui/material/MenuItem';
import UIStyledPopover from 'components/UIComponents/UIStyledPopover';

const ImageShotByMenu = ({
  anchorEl,
  isFeaturePhoto,
  videoTypeCondition,
  handleClose,
  handleOpenRepositionModal,
  handleClickThimbnailPhoto
}: {
  anchorEl: null | HTMLElement;
  isFeaturePhoto: boolean;
  videoTypeCondition: boolean;
  handleClose: () => void;
  handleOpenRepositionModal: () => void;
  handleClickThimbnailPhoto: () => void;
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
      {!videoTypeCondition && <MenuItem onClick={handleOpenRepositionModal}>Reposition</MenuItem>}
      {isFeaturePhoto && <MenuItem onClick={handleClickThimbnailPhoto}>Make this thumbnail photo</MenuItem>}
    </UIStyledPopover>
  );
};

export default ImageShotByMenu;
