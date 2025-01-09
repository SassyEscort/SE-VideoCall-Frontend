import { Box } from '@mui/material';
import React, { useRef, cloneElement, useEffect, ReactNode } from 'react';
import { SlideWrapper } from './HorizontalSlider.styled';

type SliderContainerProps = {
  children: ReactNode[];
  speed: number;
  playing: boolean;
};

const SliderContainer: React.FC<SliderContainerProps> = ({ children, speed, playing }) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const clonedScrollerRef = useRef<HTMLDivElement | null>(null);
  const hoverRef = useRef(false);
  const playingRef = useRef(playing);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  const clonedChildren = children.map((child, index) => cloneElement(child as React.ReactElement, { key: `cloned-${index}` }));

  useEffect(() => {
    const pixelsPerFrame = speed / 60;
    let animating = true;
    let scrollerXPos = 0;
    let clonedScrollerXPos = 0;

    function animate() {
      if (playingRef.current) {
        const scroller = scrollerRef.current;
        const clonedScroller = clonedScrollerRef.current;

        if (scroller && clonedScroller) {
          if (hoverRef.current) {
            scrollerXPos -= pixelsPerFrame / 2;
            clonedScrollerXPos -= pixelsPerFrame / 2;
          } else {
            scrollerXPos -= pixelsPerFrame;
            clonedScrollerXPos -= pixelsPerFrame;
          }

          if (scrollerXPos <= -scroller.offsetWidth) {
            scrollerXPos = scroller.offsetWidth;
          }

          if (clonedScrollerXPos <= -clonedScroller.offsetWidth * 2) {
            clonedScrollerXPos = 0;
          }

          scroller.style.transform = `translateX(${scrollerXPos}px)`;
          clonedScroller.style.transform = `translateX(${clonedScrollerXPos}px)`;
        }
      }

      if (animating) {
        window.requestAnimationFrame(animate);
      }
    }

    window.requestAnimationFrame(animate);

    // Cleanup function to stop animation
    return () => {
      animating = false;
    };
  }, [speed]);

  return (
    <SlideWrapper onMouseOver={() => (hoverRef.current = true)} onMouseOut={() => (hoverRef.current = false)}>
      <Box ref={scrollerRef}>{children}</Box>
      <Box ref={clonedScrollerRef}>{clonedChildren}</Box>
    </SlideWrapper>
  );
};

export default SliderContainer;
