import { useState, useEffect, ReactChild } from "react";
import { useSpring, animated as a, config } from "react-spring";

import styled from "@emotion/styled";

interface heroSliderProps {
  images: string[];
  children?: ReactChild | ReactChild[];
  interval?: number;
}

/**
 * Loops through list of background images with fade effect
 * Defaults to a 4 second loop, can be overridden
 *
 * @param {string} images - List of images to be rendered
 * @param {string} [children] - Optional children
 * @param {number} [interval] - Time between transitions, in ms
 */
const HeroSlider = ({ images, children, interval }: heroSliderProps) => {
  const [initialRender, setInitialRender] = useState(true);
  const [idx, setIdx] = useState(0);
  const [next, setNext] = useState(1);
  const [flipped, set] = useState(false);

  const { opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    config: config.slow
  });

  useEffect(() => {
    const toggle = setInterval(() => {
      set(state => !state);
    }, interval || 4000);
    return () => clearInterval(toggle);
  }, []);

  useEffect(() => {
    if (initialRender) setInitialRender(false);
    else {
      if (next < images.length - 1) {
        setIdx(next + 1);
      } else setIdx(0);
      if (idx < images.length - 1) {
        setNext(idx + 1);
      } else setNext(0);
    }
  }, [flipped]);

  return (
    <>
      <StyledHeroSlider>
        <StyledAnimationDiv
          style={{
            opacity: opacity.interpolate(o => 1 - (o as number)),
            backgroundImage: `url(${images[next]})`
          }}
        >
          {children}
        </StyledAnimationDiv>
        <StyledAnimationDiv
          style={{
            opacity,
            backgroundImage: `url(${images[idx]})`
          }}
        >
          {children}
        </StyledAnimationDiv>
      </StyledHeroSlider>
    </>
  );
};

const StyledAnimationDiv = styled(a.div)`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  will-change: transform, opacity;
  background-size: cover;
`;

const StyledHeroSlider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default HeroSlider;
