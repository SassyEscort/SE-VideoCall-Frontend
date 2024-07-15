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
  FourBoxContent,
  SecondBoxContent,
  ThirdBoxContent
} from './Another.styled';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';
import { useRouter } from 'next/navigation';

const AnotherCallModel = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const router = useRouter();

  const { modelName } = useCallFeatureContext();

  const handleExploreModel = () => {
    onClose();
    router.push('/');
  };

  return (
    <DialogContentMain open={open} onClose={onClose} fullWidth>
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
          <ThirdBoxContent>
            <SecondBoxContent>
              <VideoCalling showHeart={false} showAnother={true} />
              <UINewTypography variant="bodyLight" color="text.secondary">
                <FormattedMessage id="Sorry" />
                {modelName} <FormattedMessage id="AnotherCall" />
              </UINewTypography>
            </SecondBoxContent>
            <FourBoxContent>
              <UIThemeShadowButton variant="contained" sx={{ width: '100%' }} onClick={handleExploreModel}>
                <UINewTypography variant="bodySemiBold" color="white.main">
                  <FormattedMessage id="ExploreOtherModels" />
                </UINewTypography>
              </UIThemeShadowButton>
            </FourBoxContent>
          </ThirdBoxContent>
        </DialogContentFristBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default AnotherCallModel;
