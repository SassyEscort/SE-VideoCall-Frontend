'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import VideoCalling from '../commonComponent';
import { FormattedMessage } from 'react-intl';
import {
  DialogContentFristBox,
  DialogContentMain,
  DialogTitleBox,
  FirstBoxContent,
  FourBoxContent,
  SecondBoxContent,
  ThirdBoxContent
} from './NotePickedModel.styled';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';

const NotPickedModel = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <DialogContentMain open={true} onClose={onClose} fullWidth>
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">
          <FormattedMessage id="VideoCalling" />
        </UINewTypography>

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.text.secondary
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitleBox>
      <Box>
        <Divider
          sx={{
            px: 1,
            border: '1px solid #232027'
          }}
        />
      </Box>
      <DialogContent sx={{ p: 0 }}>
        <DialogContentFristBox>
          <FirstBoxContent>
            <ThirdBoxContent>
              <SecondBoxContent>
                <VideoCalling showHeart={false} />
                <UINewTypography variant="bodyLight" color="text.secondary">
                  <FormattedMessage id="WeAreSorry" />
                </UINewTypography>
              </SecondBoxContent>
              <FourBoxContent>
                <UIThemeShadowButton variant="contained">
                  {' '}
                  <Box component="img" src="/images/home-connect-instantly-img.png" />
                  <UINewTypography variant="bodySemiBold" color="white.main">
                    <FormattedMessage id="CallAgian" />
                  </UINewTypography>
                </UIThemeShadowButton>
              </FourBoxContent>
            </ThirdBoxContent>
            <UINewTypography variant="SubtitleSmallMedium" color="secondary.700">
              <FormattedMessage id="In" />
            </UINewTypography>
            <UINewTypography variant="bodySemiBold" color="text.secondary">
              00:30
            </UINewTypography>
          </FirstBoxContent>
        </DialogContentFristBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default NotPickedModel;
