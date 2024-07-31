import { useMemo, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import WorkerImageCardV2 from './WorkerGallery/WorkerImageCardV2';
import UINewTypography from 'components/UIComponents/UINewTypography';
import { VideoAcceptType } from 'constants/workerVerification';
import { WorkerBlurBox, WorkerImageCardContainerBox, WorkerImageCardGridBox } from './WorkerGallery/WorkerImageCardV2.styled';
import { UIThemeGroupTabs } from 'components/UIComponents/ThemeGroupTabs/ThemeGroupTabs.styled';
import { UIThemeTab } from 'components/UIComponents/ThemeTab/ThemeTab.styled';
import { FormattedMessage } from 'react-intl';
import { WorkerPhotos } from 'views/protectedModelViews/verification/stepThree/uploadImage';

const ImageTypes = ['.gif', '.jpg', '.jpeg', '.png', '.bmp', '.webp', '.avif', '.svg'];

const enum FILE_TYPES {
  IMAGE = 'image',
  VIDEO = 'video'
}

const EscortGalleryContainer = ({ workerPhotos }: { workerPhotos: WorkerPhotos[] }) => {
  const [show, setShow] = useState(false);
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = () => {
    setShow(!show);
  };

  const photos = useMemo(() => workerPhotos.filter((data) => ImageTypes.some((file) => data?.photo?.endsWith(file))), [workerPhotos]);

  const videos = useMemo(() => workerPhotos.filter((data) => VideoAcceptType.some((file) => data?.photo?.endsWith(file))), [workerPhotos]);

  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (value: number) => {
    setActiveTab(value);
  };

  const handleOpenImage = (index: number) => {
    setCurrentIndex(index);
    setAdvancedExampleOpen(true);
  };

  const workerImagesSlides =
    activeTab === 0
      ? workerPhotos?.map((data) => {
          if (VideoAcceptType.some((file) => data?.photo?.endsWith(file))) {
            return {
              type: FILE_TYPES.VIDEO as const,
              width: 1280,
              height: 720,
              sources: [
                {
                  src: (data.photo, FILE_TYPES.VIDEO),
                  type: 'video/mp4'
                }
              ]
            };
          }
          return {
            src: (data.photo, FILE_TYPES.IMAGE)
          };
        })
      : activeTab === 1
        ? photos.map((data) => {
            if (VideoAcceptType?.some((file) => data?.photo?.endsWith(file))) {
              return {
                type: FILE_TYPES.VIDEO as const,
                width: 1280,
                height: 720,
                sources: [
                  {
                    src: (data.photo, FILE_TYPES.VIDEO),
                    type: 'video/mp4'
                  }
                ]
              };
            }
            return {
              src: (data.photo, FILE_TYPES.IMAGE)
            };
          })
        : videos?.map((data) => {
            if (VideoAcceptType?.some((file) => data?.photo?.endsWith(file))) {
              return {
                type: FILE_TYPES.VIDEO as const,
                width: 1280,
                height: 720,
                sources: [
                  {
                    src: (data?.photo, FILE_TYPES.VIDEO),
                    type: 'video/mp4'
                  }
                ]
              };
            }
            return {
              src: (data.photo, FILE_TYPES.IMAGE)
            };
          });

  return (
    <>
      <WorkerImageCardContainerBox>
        <UIThemeGroupTabs
          id="dhruv"
          value={activeTab}
          sx={{
            display: 'flex',
            justifyContent: 'end',
            width: '100%'
          }}
        >
          <UIThemeTab
            sx={{ width: '60px' }}
            label={`${'All'} (${photos.length + videos.length})`}
            onClick={() => {
              handleTab(0);
              handleShow;
            }}
          />
          <UIThemeTab
            sx={{ width: '130px' }}
            label={`${'Photos'} (${photos.length})`}
            onClick={() => {
              handleTab(1);
              handleShow;
            }}
          />
          <UIThemeTab
            label={`${'Videos'} (${videos.length})`}
            onClick={() => {
              handleTab(2);
              handleShow;
            }}
          />
        </UIThemeGroupTabs>
        {activeTab === 0 && (
          <>
            <WorkerImageCardGridBox>
              {workerPhotos?.map(
                (photo, index) =>
                  (index < 18 || show) && (
                    <WorkerImageCardV2
                      key={index}
                      index={index}
                      image={photo?.link}
                      coordinates={photo?.cords ?? ''}
                      handleOpenImage={handleOpenImage}
                    />
                  )
              )}
            </WorkerImageCardGridBox>
            {!show && workerPhotos?.length > 18 && <WorkerBlurBox onClick={handleShow} />}
          </>
        )}
        {activeTab === 1 && (
          <>
            <WorkerImageCardGridBox>
              {photos?.map(
                (photo, index) =>
                  (index < 18 || show) && (
                    <WorkerImageCardV2
                      key={index}
                      image={photo?.link}
                      index={index}
                      coordinates={photo?.cords ?? ''}
                      handleOpenImage={handleOpenImage}
                    />
                  )
              )}
            </WorkerImageCardGridBox>
            {!show && workerPhotos?.length > 18 && <WorkerBlurBox onClick={handleShow} />}
          </>
        )}
        {activeTab === 2 && (
          <>
            <WorkerImageCardGridBox>
              {videos?.length > 0 ? (
                videos?.map(
                  (video, index) =>
                    (index < 18 || show) && (
                      <WorkerImageCardV2 key={index} image={video?.link} index={index} handleOpenImage={handleOpenImage} />
                    )
                )
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2,
                    width: '100%'
                  }}
                >
                  <UINewTypography variant="body1">
                    <FormattedMessage id="NoVideosAvailable" />
                  </UINewTypography>
                </Box>
              )}
            </WorkerImageCardGridBox>
            {videos.length > 18 ?? (!show && <WorkerBlurBox />)}
          </>
        )}
      </WorkerImageCardContainerBox>
      <Box display="flex" alignItems="center" justifyContent="center" gap={1} width="100%">
        {!show && activeTab === 0 && workerPhotos?.length > 18 ? (
          <IconButton
            onClick={handleShow}
            sx={{
              color: 'common.white'
            }}
          >
            <UINewTypography variant="buttonLargeBold">
              <FormattedMessage id="ShowMore" />
            </UINewTypography>
            <ExpandMoreIcon />
          </IconButton>
        ) : (
          show &&
          activeTab === 0 &&
          workerPhotos?.length > 18 && (
            <IconButton
              onClick={handleShow}
              sx={{
                color: 'common.white'
              }}
            >
              <UINewTypography variant="buttonLargeBold">ShowLess</UINewTypography>
              <ExpandLessIcon />
            </IconButton>
          )
        )}

        {!show && activeTab === 1 && photos?.length > 18 ? (
          <IconButton
            onClick={handleShow}
            sx={{
              color: 'common.white'
            }}
          >
            <UINewTypography variant="buttonLargeBold">ShowMore</UINewTypography>
            <ExpandMoreIcon />
          </IconButton>
        ) : (
          show &&
          activeTab === 1 &&
          photos?.length > 18 && (
            <IconButton
              onClick={handleShow}
              sx={{
                color: 'common.white'
              }}
            >
              <UINewTypography variant="buttonLargeBold">ShowLess</UINewTypography>
              <ExpandLessIcon />
            </IconButton>
          )
        )}

        {!show && activeTab === 2 && videos?.length > 18 && (
          <IconButton
            onClick={handleShow}
            sx={{
              color: 'common.white'
            }}
          >
            <UINewTypography variant="buttonLargeBold">ShowMore</UINewTypography>
            <ExpandMoreIcon />
          </IconButton>
        )}

        {show && activeTab === 2 && videos?.length > 18 && (
          <IconButton
            onClick={handleShow}
            sx={{
              color: 'common.white'
            }}
          >
            <UINewTypography variant="buttonLargeBold">ShowLess</UINewTypography>
            <ExpandLessIcon />
          </IconButton>
        )}
      </Box>
      <Lightbox
        open={advancedExampleOpen}
        close={() => setAdvancedExampleOpen(false)}
        index={currentIndex}
        slides={workerImagesSlides}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </>
  );
};

export default EscortGalleryContainer;
