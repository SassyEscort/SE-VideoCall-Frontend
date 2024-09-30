'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import { useEffect, useState } from 'react';
import { RatingAndReviewService } from 'services/ratingAndReview/ratingAndReview.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import {
  DiagloMainBoxContent,
  DialogContentFristBox,
  DialogContentMain,
  DialogTitleBox,
  FiveBoxContent,
  ModelDetailsAndButtonContent,
  PostButtonContent,
  ReviewBoxAndButtonContent,
  ReviewSubmitBoxContent,
  SkipButtonContent,
  TextBoxContent
} from '../videoCalling/VideoCallEnded/VideoCallEnded.styled';
import StartRating from 'components/UIComponents/StartRating';

const CallHistoryRatingModel = ({ open, onClose, callLogId }: { open: boolean; onClose: () => void; callLogId: number }) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);

  const handleStarClick = (value: number) => {
    setRating(value);
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
          handleCloseModal();
        }
      }
    } catch (error) {
      toast.error(ErrorMessage);
    }
  };

  const handleCloseModal = () => {
    setIsRatingSubmitted(false);
    setRating(0);
    setReview('');
    onClose();
  };

  useEffect(() => {
    if (isRatingSubmitted) {
      const timer = setTimeout(() => {
        handleCloseModal();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isRatingSubmitted]);

  return (
    <DialogContentMain open={open} onClose={handleCloseModal} fullWidth scroll="body">
      <DialogTitleBox id="responsive-modal-title">
        <UINewTypography variant="h6">
          <FormattedMessage id="RateAndReview" />
        </UINewTypography>

        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
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
              {!isRatingSubmitted && (
                <>
                  <FiveBoxContent>
                    <UINewTypography variant="bodyLight" color="text.secondary">
                      <FormattedMessage id="RateYourVideoCall" />
                    </UINewTypography>
                    <StartRating value={rating || 0} handleStarClick={handleStarClick} isFromPopup={true} />
                  </FiveBoxContent>
                  {rating > 0 && (
                    <ReviewBoxAndButtonContent>
                      <TextBoxContent
                        name="bio"
                        rows={8.35}
                        fullWidth
                        multiline
                        placeholder="Share your review..."
                        value={review}
                        onChange={(e) => handleReviewChange(e.target.value)}
                      />
                      <Box sx={{ cursor: 'pointer' }}>
                        <SkipButtonContent variant="text" onClick={() => handleCloseModal()}>
                          <FormattedMessage id="Skip" />
                        </SkipButtonContent>
                        <PostButtonContent type="submit" variant="text" onClick={() => handleCallRating()}>
                          <FormattedMessage id="Post" />
                        </PostButtonContent>
                      </Box>
                    </ReviewBoxAndButtonContent>
                  )}
                </>
              )}
              {isRatingSubmitted && (
                <ReviewSubmitBoxContent>
                  <Box component="img" src="/images/icons/rating-success-img.png" width={69.12} height={64.32} alt="rating_success" />
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

export default CallHistoryRatingModel;
