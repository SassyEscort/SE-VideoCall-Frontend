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
  ReviewSubmitBoxContent,
  SecondBoxContent,
  SixBoxContent,
  SkipButtonContent,
  ThirdBoxContent
} from './VideoCallEnded.styled';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { useCallFeatureContext } from '../../../../../context/CallFeatureContext';
import { useEffect, useState } from 'react';
import { UIStyledInputText } from 'components/UIComponents/UIStyledInputText';
import { RatingAndReviewService } from 'services/ratingAndReview/ratingAndReview.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import Link from 'next/link';

const VideoCallEnded = ({ open, onClose, callLogId }: { open: boolean; onClose: () => void; callLogId: number }) => {
  const { isModelAvailable } = useCallFeatureContext();
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);

  const handleStarClick = (index: number) => {
    setRating((prevRating) => {
      if (prevRating === index + 1) {
        return index === 0 ? 0 : prevRating - 1;
      } else {
        return index + 1;
      }
    });
  };

  const handleReviewChange = (value: string) => {
    setReview(value);
  };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };

    userToken();
  }, []);

  const handleCallRating = async () => {
    try {
      if (token.token) {
        const params = {
          call_log_id: callLogId,
          rating: rating,
          review: review
        };
        const data = await RatingAndReviewService.callRating(params, token.token);
        if (data.code === 200) {
          setIsRatingSubmitted(true);
        } else {
          onClose();
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  return (
    <DialogContentMain open={open} onClose={onClose} fullWidth scroll="body">
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">
          <FormattedMessage id="VideoCallEnded" />
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
                        <Box component="img" src="/images/home-connect-instantly-img.png" />
                        <UINewTypography variant="bodySemiBold" color="white.main">
                          <FormattedMessage id="CallAgain" />
                        </UINewTypography>
                      </UIThemeShadowButton>
                    </FourBoxContent>
                  </ThirdBoxContent>
                  <Link href="/model">
                    <UINewTypography variant="body" color="white.main">
                      <FormattedMessage id="ExploreOtherModels" />
                    </UINewTypography>
                  </Link>
                </FirstBoxContent>
              </SixBoxContent>
              {!isRatingSubmitted && (
                <>
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
                  {rating > 0 && (
                    <ReviewBoxAndButtonContent>
                      <UIStyledInputText
                        name="bio"
                        rows={6.4}
                        fullWidth
                        multiline
                        placeholder="Share your review..."
                        value={review}
                        onChange={(e) => handleReviewChange(e.target.value)}
                        sx={{
                          '& .MuiInputBase-input': { color: 'secondary.700', margin: '12px 16px' },
                          minWidth: '358px',
                          '& .MuiOutlinedInput-root': {
                            padding: '0px !important'
                          }
                        }}
                      />
                      <Box sx={{ cursor: 'pointer' }}>
                        <SkipButtonContent variant="text" onClick={() => onClose()}>
                          <FormattedMessage id="Skip" />
                        </SkipButtonContent>
                        <PostButtonContent variant="text" onClick={() => handleCallRating()}>
                          <FormattedMessage id="Post" />
                        </PostButtonContent>
                      </Box>
                    </ReviewBoxAndButtonContent>
                  )}
                </>
              )}
              {isRatingSubmitted && (
                <ReviewSubmitBoxContent>
                  <Box component="img" src="/images/icons/rating-success-img.png" width={69.12} height={64.32} />
                  <UINewTypography variant="body1">
                    <FormattedMessage id="YourReviewHasBeenSubmitted" />
                  </UINewTypography>
                </ReviewSubmitBoxContent>
              )}
            </ModelDetailsAndButtonContent>
          </DiagloMainBoxContent>
        </DialogContentFristBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default VideoCallEnded;
