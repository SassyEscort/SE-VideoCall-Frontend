export type VideoThumbnailProps = {
  imageUrl: string;
  maxHeight: number;
};

const VideoThumbnail = ({ imageUrl, maxHeight }: VideoThumbnailProps) => (
  <video width="100%" height="100%" style={{ maxHeight: maxHeight }}>
    <source src={`${imageUrl}#t=0.001`} type="video/mp4" />
    <track kind="captions" srcLang="en" label="English captions" src="path/to/captions.vtt" />
  </video>
);

export default VideoThumbnail;
