import Close from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {
  CropContainer,
  RepositionPhotoContent,
  RepositionPhotoDialog,
  RepositionPhotoHeader,
  SliderControls
} from './RepositionPhoto.styled';
import Cropper, { Area, Point } from 'react-easy-crop';
import Slider from '@mui/material/Slider';
import { forwardRef, useState } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import { RiZoomInLine, RiZoomOutFill } from 'components/common/customRemixIcons';
import UINewTypography from 'components/UIComponents/UINewTypography';
import UIThemeButton from 'components/UIComponents/UIStyledLoadingButton';
import { FormattedMessage } from 'react-intl';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RepositionPhoto = ({
  image,
  croppedCords,
  open,
  handleClose,
  handleSave
}: {
  image: string;
  croppedCords?: string;
  open: boolean;
  handleClose: () => void;
  handleSave: (cords: string) => void;
}) => {
  const existingCords = croppedCords && JSON.parse(croppedCords.replace(/^,/, ''));

  const [crop, setCrop] = useState<Point>({
    x: existingCords?.state?.x || 0,
    y: existingCords?.state?.y || 0
  });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({
    x: existingCords?.cords?.x || 0,
    y: existingCords?.cords?.y || 0,
    height: existingCords?.cords?.height || 0,
    width: existingCords?.cords?.width || 0
  });
  const [zoom, setZoom] = useState(existingCords?.zoom || 1);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleClickSave = () => {
    handleSave(JSON.stringify({ state: crop, cords: croppedAreaPixels, zoom: zoom }));
    handleClose();
  };

  const handleCloseWithOutSave = () => {
    if (existingCords) {
      setCrop(crop);
      setCroppedAreaPixels(croppedAreaPixels);
      setZoom(zoom);
    } else {
      setCrop({ x: 0, y: 0 });
      setCroppedAreaPixels({ x: 0, y: 0, height: 0, width: 0 });
      setZoom(1);
    }
    handleClose();
  };

  return (
    <RepositionPhotoDialog fullWidth maxWidth="sm" open={open} onClose={handleCloseWithOutSave} TransitionComponent={Transition}>
      <RepositionPhotoHeader>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <IconButton onClick={handleCloseWithOutSave} sx={{ p: 0 }}>
            <Close sx={{ color: 'text.secondary' }} />
          </IconButton>
          <UINewTypography variant="h6" color="text.secondary">
            <FormattedMessage id="CropPhoto" />
          </UINewTypography>
        </Box>
        <UIThemeButton variant="contained" size="small" onClick={handleClickSave}>
          <FormattedMessage id="Save" />
        </UIThemeButton>
      </RepositionPhotoHeader>
      <DialogContent dividers sx={{ borderTopColor: 'primary.700' }}>
        <RepositionPhotoContent>
          <CropContainer>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              showGrid={false}
              aspect={2 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <SliderControls>
              <RiZoomInLine />
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e, zoom) => setZoom(Number(zoom))}
                classes={{ root: 'slider' }}
              />
              <RiZoomOutFill />
            </SliderControls>
          </CropContainer>
        </RepositionPhotoContent>
      </DialogContent>
    </RepositionPhotoDialog>
  );
};

export default RepositionPhoto;
