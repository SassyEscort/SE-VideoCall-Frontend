import Box from '@mui/material/Box';
import { WorkerImageCardBox, WorkerImageCardMainBox } from './WorkerImageCardV2.styled';
import VideoThumbnail from 'components/UIComponents/ImageCard/VideoThumbnail';
import { VideoAcceptType } from 'constants/workerVerification';
import useImageOptimize from 'hooks/useImageOptimize';
import { useRef } from 'react';

const WorkerImageCardV2 = ({
  image,
  index,
  coordinates,
  handleOpenImage
}: {
  image: string;
  index: number;
  coordinates?: string;
  handleOpenImage: (index: number) => void;
}) => {
  const imageUrlRef = useRef<HTMLElement>();

  const videoTypeCondition = VideoAcceptType?.includes(image?.substring(image?.lastIndexOf('.') + 1));

  useImageOptimize(imageUrlRef, image ?? '', videoTypeCondition ? 'IMG' : 'BG', videoTypeCondition ? true : false, false, coordinates);

  return (
    <WorkerImageCardMainBox ref={imageUrlRef} onClick={() => handleOpenImage(index)}>
      {videoTypeCondition && (
        <>
          <WorkerImageCardBox onClick={() => handleOpenImage(index)}>
            <VideoThumbnail imageUrl={image} maxHeight={900} />
          </WorkerImageCardBox>
          <Box
            component="img"
            src="/images/dashboard/play_icon.svg"
            alt="play_icon"
            sx={{
              position: 'absolute',
              top: 'calc(50% - 16px)',
              left: 'calc(50% - 16px)'
            }}
          />
        </>
      )}
    </WorkerImageCardMainBox>
  );
};

export default WorkerImageCardV2;
