'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import VideoCalling from '../commonComponent';
import { FormattedMessage } from 'react-intl';
import UIThemeShadowButton from 'components/UIComponents/UIStyledShadowButton';
import {
  DialogContentFristBox,
  DialogContentMain,
  DialogTitleBox,
  FirstBoxContent,
  FourBoxContent,
  SecondBoxContent,
  ThirdBoxContent
} from './VideoCallEnded.styled';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

const VideoCallEnded = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <DialogContentMain open={true} onClose={onClose} fullWidth scroll="body">
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5, textAlign: 'center' }}>
            <FirstBoxContent>
              <ThirdBoxContent>
                <SecondBoxContent>
                  <VideoCalling showHeart={true} />
                  <UINewTypography variant="bodyLight" color="text.primary">
                    <FormattedMessage id="ThankYouForTheCall" />
                  </UINewTypography>
                </SecondBoxContent>
                <FourBoxContent>
                  <UIThemeShadowButton variant="contained" sx={{ width: '100%' }}>
                    {' '}
                    <Box component="img" src="/images/home-connect-instantly-img.png" />
                    <UINewTypography variant="bodySemiBold" color="white.main">
                      <FormattedMessage id="CallAgian" />
                    </UINewTypography>
                  </UIThemeShadowButton>
                </FourBoxContent>
              </ThirdBoxContent>
              <UINewTypography variant="body" color="white.main">
                <FormattedMessage id="ExploreOtherModels" />
              </UINewTypography>
            </FirstBoxContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <UINewTypography variant="bodyLight" color="text.primary">
                <FormattedMessage id="RateYourVideoCall" />
              </UINewTypography>
              <Box>
                {[...Array(5)].map((_, index) => (
                  <StarBorderRoundedIcon key={index} />
                ))}
              </Box>
            </Box>
          </Box>
        </DialogContentFristBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default VideoCallEnded;
