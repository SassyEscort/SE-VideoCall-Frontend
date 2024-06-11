import { alpha } from '@mui/material/styles';

interface BackgroundBlurProps {
  color?: string;
  blur?: number;
  opacity?: number;
}

export const bgBlur = (props: BackgroundBlurProps) => {
  const color = props?.color || '#000000';
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity)
  };
};

interface BackgroundGradientProps {
  direction?: string;
  startColor?: string;
  endColor?: string;
  imgUrl?: string;
  color?: string;
}

export const bgGradient = (props: BackgroundGradientProps) => {
  const direction = props?.direction || 'to bottom';
  const startColor = props?.startColor;
  const endColor = props?.endColor;
  const imgUrl = props?.imgUrl;
  const color = props?.color;

  if (imgUrl) {
    return {
      background: `linear-gradient(${direction}, ${startColor || color}, ${endColor || color}), url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    };
  }

  return {
    background: `linear-gradient(${direction}, ${startColor}, ${endColor})`
  };
};

export const textGradient = (value: string) => ({
  background: `-webkit-linear-gradient(${value})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});

export const filterStyles = (value: string) => ({
  filter: value,
  WebkitFilter: value,
  MozFilter: value
});

export const hideScrollbarY = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
};

export const hideScrollbarX = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
};
