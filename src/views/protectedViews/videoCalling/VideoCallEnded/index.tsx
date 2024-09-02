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
  DiagloMainBoxContent,
  DialogContentFristBox,
  DialogContentMain,
  DialogTitleBox,
  FirstBoxContent,
  FiveBoxContent,
  FourBoxContent,
  ModelDetailsAndButtonContent,
  PostButtonContent,
  ReviewBoxAndButtonContent,
  SecondBoxContent,
  SixBoxContent,
  SkipButtonContent,
  ThirdBoxContent
} from './VideoCallEnded.styled';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';
import { useState } from 'react';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';

const VideoCallEnded = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { isModelAvailable } = useCallFeatureContext();
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setRating((prevRating) => {
      if (prevRating === index + 1) {
        return index === 0 ? 0 : prevRating - 1;
      } else {
        return index + 1;
      }
    });
  };

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
          <DiagloMainBoxContent>
            <ModelDetailsAndButtonContent>
              <SixBoxContent>
                <FirstBoxContent>
                  <ThirdBoxContent>
                    <SecondBoxContent>
                      <VideoCalling showHeart={true} showAnother={false} isModelAvailable={isModelAvailable} />
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
              </SixBoxContent>
              <FiveBoxContent>
                <UINewTypography variant="bodyLight" color="text.primary">
                  <FormattedMessage id="RateYourVideoCall" />
                </UINewTypography>
                <Box>
                  {[...Array(5)]?.map((_, index) => (
                    <StarRoundedIcon
                      key={index}
                      sx={{
                        color: index < rating ? '#FFB400' : 'inherit',
                        cursor: 'pointer'
                      }}
                      onClick={() => handleStarClick(index)}
                    />
                  ))}
                </Box>
              </FiveBoxContent>
            </ModelDetailsAndButtonContent>
            {rating > 0 && (
              <ReviewBoxAndButtonContent>
                <UIStyledInputText
                  name="bio"
                  rows={6.4}
                  fullWidth
                  multiline
                  placeholder="Share your review..."
                  // value={values.bio}
                  // onChange={handleDescriptionChange}
                  // onBlur={handleBlur}
                  // error={touched.bio && Boolean(errors.bio)}
                  // helperText={touched.bio && errors.bio ? <FormattedMessage id={errors.bio} /> : ''}
                  sx={{
                    '& .MuiInputBase-input': { color: 'secondary.700', margin: '12px 16px' },
                    maxWidth: '792px',
                    '& .MuiOutlinedInput-root': {
                      padding: '0px !important'
                    }
                  }}
                />
                <Box>
                  <SkipButtonContent variant="text">
                    <FormattedMessage id="Skip" />
                  </SkipButtonContent>
                  <PostButtonContent variant="text">
                    <FormattedMessage id="Post" />
                  </PostButtonContent>
                </Box>
              </ReviewBoxAndButtonContent>
            )}
          </DiagloMainBoxContent>
        </DialogContentFristBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default VideoCallEnded;
