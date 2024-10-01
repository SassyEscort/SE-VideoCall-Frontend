'use client';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Divider } from '@mui/material';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { FormattedMessage } from 'react-intl';
import {
  DiagloMainBoxContent,
  DialogContentFristBox,
  DialogContentMain,
  DialogTitleBox,
  FiveBoxContent,
  ModelDetailsAndButtonContent,
  PostButtonContent,
  RatingReviewBoxContainer,
  ReviewBoxAndButtonContent,
  ReviewButtonBox,
  ReviewSubmitBoxContent,
  SkipButtonContent,
  TextBoxContainer,
  TextBoxContent,
  VideoCallEndedTextContainer
} from './VideoCallEnded.styled';
import { useEffect, useState } from 'react';
import { RatingAndReviewService } from 'services/ratingAndReview/ratingAndReview.service';
import { toast } from 'react-toastify';
import { ErrorMessage } from 'constants/common.constants';
import { TokenIdType } from 'views/protectedModelViews/verification';
import { getUserDataClient } from 'utils/getSessionData';
import StartRating from 'components/UIComponents/StartRating';
import { useRouter } from 'next/navigation';

export type ModelObj = {
  modelId: number;
  modelName: string;
  modelPhoto: string;
  isCreditAvailable: boolean;
  callTime: number;
  modelCreditPrice: string;
  modelUsername: string;
  isFavouriteModel: number;
};

const VideoCallEnded = ({
  open,
  onClose,
  callLogId,
  modelObj
}: {
  open: boolean;
  onClose: (isPrevent?: boolean) => void;
  callLogId: number;
  modelObj: ModelObj;
}) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const [token, setToken] = useState<TokenIdType>({ id: 0, token: '' });
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);
  const router = useRouter();
  // const handleCallAgainClick = () => {
  //   onClose(true);
  //   handleResetReviewRating();
  //   handleCallInitiate(
  //     modelObj.modelId,
  //     modelObj.isCreditAvailable,
  //     modelObj.callTime,
  //     modelObj.modelName,
  //     modelObj.modelPhoto,
  //     modelObj.modelUsername,
  //     modelObj.modelCreditPrice,
  //     modelObj.isFavouriteModel
  //   );
  // };

  // const handleCallAgainClick = () => {
  //   onClose(true);
  //   handleResetReviewRating();
  //   handleCallInitiate(
  //     modelObj.modelId,
  //     modelObj.isCreditAvailable,
  //     modelObj.callTime,
  //     modelObj.modelName,
  //     modelObj.modelPhoto,
  //     modelObj.modelUsername,
  //     modelObj.modelCreditPrice,
  //     modelObj.isFavouriteModel
  //   );
  // };

  useEffect(() => {
    const userToken = async () => {
      const data = await getUserDataClient();
      setToken({ id: data?.id, token: data?.token });
    };

    userToken();
  }, []);

  useEffect(() => {
    if (isRatingSubmitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isRatingSubmitted, onClose]);

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  const handleReviewChange = (value: string) => {
    setReview(value);
  };

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

  const handleExploreModel = () => {
    onClose();
    router.push('/');
  };

  return (
    <DialogContentMain open={open} onClose={() => onClose()} fullWidth scroll="body">
      <DialogTitleBox id="responsive-modal-title">
        <VideoCallEndedTextContainer>
          <FormattedMessage id="VideoCallEnded" />
        </VideoCallEndedTextContainer>

        <IconButton
          aria-label="close"
          onClick={() => onClose()}
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
              {/* <SixBoxContent>
                <FirstBoxContent>
                  <ThirdBoxContent>
                    <SecondBoxContent>
                      <VideoCalling showHeart={true} showAnother={false} isModelAvailable={isModelAvailable} />
                      <UINewTypography variant="bodyLight" color="text.primary">
                        <FormattedMessage id="ThankYouForTheCall" />
                        {modelObj?.modelName}.
                      </UINewTypography>
                    </SecondBoxContent>
                    <FourBoxContent>
                      <UIThemeShadowButton variant="contained" sx={{ width: '100%' }} onClick={handleCallAgainClick}>
                        <Box component="img" src="/images/home-connect-instantly-img.png" />
                        <UINewTypography variant="bodySemiBold" color="white.main">
                          <FormattedMessage id="CallAgain" />
                        </UINewTypography>
                      </UIThemeShadowButton>
                    </FourBoxContent>
                  </ThirdBoxContent>
                </FirstBoxContent>
              </SixBoxContent> */}
              <RatingReviewBoxContainer>
                {!isRatingSubmitted && (
                  <>
                    <FiveBoxContent>
                      <UINewTypography variant="bodyLight" color="text.secondary">
                        <FormattedMessage id="RateYourVideoCall" />
                      </UINewTypography>
                      <Box>
                        <StartRating value={rating || 0} handleStarClick={handleStarClick} isFromPopup={true} />
                      </Box>
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
                        <ReviewButtonBox>
                          <SkipButtonContent variant="text" onClick={() => onClose()}>
                            <FormattedMessage id="Skip" />
                          </SkipButtonContent>
                          <PostButtonContent type="submit" variant="text" onClick={() => handleCallRating()}>
                            <FormattedMessage id="Post" />
                          </PostButtonContent>
                        </ReviewButtonBox>
                      </ReviewBoxAndButtonContent>
                    )}
                  </>
                )}

                {isRatingSubmitted && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
                    <ReviewSubmitBoxContent>
                      <Box component="img" src="/images/icons/rating-success-img.png" alt="rating_success" width={69.12} height={64.32} />
                      <UINewTypography variant="body1">
                        <FormattedMessage id="YourReviewHasBeenSubmitted" />
                      </UINewTypography>
                    </ReviewSubmitBoxContent>

                    <UINewTypography variant="body" color="primary.400" sx={{ cursor: 'pointer' }} onClick={handleExploreModel}>
                      <FormattedMessage id="ExploreOtherModels" />
                    </UINewTypography>
                  </Box>
                )}

                {!isRatingSubmitted && rating === 0 && (
                  <TextBoxContainer>
                    <UINewTypography variant="bodyLight" color="text.primary">
                      <FormattedMessage id="ThankYouForTheCall" />
                      {modelObj?.modelName}.
                    </UINewTypography>
                  </TextBoxContainer>
                )}
              </RatingReviewBoxContainer>
              {rating === 0 && (
                <UINewTypography variant="body" color="primary.400" sx={{ cursor: 'pointer' }} onClick={handleExploreModel}>
                  <FormattedMessage id="ExploreOtherModels" />
                </UINewTypography>
              )}
            </ModelDetailsAndButtonContent>
          </DiagloMainBoxContent>
        </DialogContentFristBox>
      </DialogContent>
    </DialogContentMain>
  );
};

export default VideoCallEnded;
